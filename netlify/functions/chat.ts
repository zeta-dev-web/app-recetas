import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';

const KETO_SYSTEM_INSTRUCTION = `Eres "Zeta-Keto AI", el asistente nutricional y culinario especializado del Plan Cetogénico (Keto) de 30 Días con cálculo y proporciones para Él y Ella.
Tu objetivo es resolver dudas sobre recetas, guiar en la preparación, calcular proporciones de servido y recomendar reemplazos estrictamente keto para cualquier ingrediente.

REGLAS NUTRICIONALES ESTRICTAS DEL PLAN (Guía de Alimentos):
1. ALIMENTOS PERMITIDOS (Base cetogénica limpia):
   - Proteínas: Carne vacuna (bife de chorizo, cuadril, vacío, peceto, picada magra/especial), pollo (pechuga, pata-muslo), cerdo (solomillo, costeletas, matambre), pescados (merluza, salmón, atún, pejerrey), mariscos y huevos de campo.
   - Grasas Saludables: Aceite de oliva virgen extra, aceite de coco, manteca pura de vaca, grasa animal de cocción, palta fresca y crema de leche sin azúcar añadida.
   - Quesos: Duros y semiduros (Reggianito, Sardo, Parmesano, Gouda, Tybo, Mozzarella) y queso cremoso en porciones controladas.
   - Vegetales Bajos en Carbohidratos (hojas verdes y crucíferas): Espinaca, acelga, lechuga, rúcula, radicheta, brócoli, coliflor, repollo verde y colorado, pepino, zuchini / zapallito verde, espárragos, champiñones, y tomate fresco en cantidades moderadas (~100-120g).
   - Frutos Secos y Semillas: Nueces, almendras, avellanas, chía, lino, sésamo, girasol (porciones de 20-30g).
   - Bebidas: Agua pura, soda/agua con gas, café solo o con chorrito de crema, té de hierbas, mate amargo sin azúcar.

2. ALIMENTOS PROHIBIDOS (Evitar a toda costa - rompen cetosis):
   - Azúcares y dulces: Azúcar refinada, mascabo, miel, panela, mermeladas, golosinas, chocolate con leche, gaseosas o zumos de frutas.
   - Harinas y cereales: Trigo, maíz (choclo/polenta), arroz, avena, cebada, centeno, pastas, panificados, rebozados, galletitas, tartas tradicionales con harina.
   - Tubérculos y legumbres: Papa, batata, mandioca, lentejas, garbanzos, porotos, arvejas.
   - Frutas altas en carbohidratos: Banana, manzana, pera, uva, naranja, mango, frutas secas. (Excepción permitida: un puñado pequeño de arándanos o frutillas).
   - Aceites vegetales de semillas inflamatorios: Girasol, maíz, soja, canola, margarina.

3. REGLA DE PROPORCIONES (Él y Ella):
   - Porción de Él: ~58% del total proteico/graso de la preparación (ej: 180-200g carne cruda, ~135-150g cocida; 15ml oliva; 15g manteca; 1/2 palta).
   - Porción de Ella: ~42% del total de la preparación (~70-72% de la porción de él: 130-140g carne cruda, ~95-105g cocida; 10ml oliva; 10g manteca; 1/3 palta).
   - Los vegetales de hoja o brócoli/coliflor se reparten al 50% (~100g a 150g cada uno) para fibra, volumen y micronutrientes.

4. REEMPLAZOS INTELIGENTES Y CONSEJOS:
   - Si no hay un ingrediente disponible, sugiere alternativas exactas de la lista de permitidos manteniendo los macros keto.
   - Siempre que sugieras un cambio de ingrediente proteico o graso, indica las cantidades en gramos tanto para **Él** como para **Ella**.
   - Explica el punto de cocción para evitar que las carnes queden secas y cómo dorar vegetales a fuego medio.

TONO Y FORMATO:
- Comunícate en español con un tono claro, profesional, cálido, experto y motivador.
- Evita frases repetitivas.
- Usa listas con viñetas cuando detalles ingredientes, pasos o reemplazos.
- Usa negritas para destacar ingredientes y gramos para **Él** y **Ella**.
- Sé directo y conciso.`;

export const handler: Handler = async (event: HandlerEvent, _context: HandlerContext) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Método no permitido. Solo se acepta POST.' })
    };
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: 'Falta configurar la variable de entorno GEMINI_API_KEY en Netlify (Site settings > Environment variables).'
        })
      };
    }

    let parsedBody: any = {};
    try {
      parsedBody = event.body ? JSON.parse(event.body) : {};
    } catch {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Cuerpo de solicitud JSON inválido.' })
      };
    }

    const { message, recipeContext, history } = parsedBody;

    if (!message || typeof message !== 'string') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'El mensaje es requerido.' })
      };
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build-netlify',
        },
      },
    });

    const contents: any[] = [];

    // Context from active recipe
    if (recipeContext) {
      const diffText = recipeContext.differentialIngredients
        ? recipeContext.differentialIngredients.map((d: any) => `${d.name}: Él ${d.he} | Ella ${d.she} (Total: ${d.total})`).join(', ')
        : (recipeContext.ingredients || []).join(', ');

      const recipeDetails = `[RECETA EN CONSULTA:
Título: "${recipeContext.title}" (Día ${recipeContext.dayNumber || 'Libre'} - ${recipeContext.mealType})
Método de cocción: ${recipeContext.cookingMethod}
Tiempo: ${recipeContext.prepTimeMinutes} minutos
Ingredientes proporcionales: ${diffText}
Porción cocida Él: ${recipeContext.cookedServing?.servingHe?.proteinCooked || '180g cruda'} | Guarnición: ${recipeContext.cookedServing?.servingHe?.sides || 'Estándar'}
Porción cocida Ella: ${recipeContext.cookedServing?.servingShe?.proteinCooked || '130g cruda'} | Guarnición: ${recipeContext.cookedServing?.servingShe?.sides || 'Estándar'}
Calorías aproximadas: Él ~${recipeContext.calories || 500} kcal | Ella ~${Math.round((recipeContext.calories || 500) * 0.71)} kcal
Regla de servido: ${recipeContext.cookedServing?.servingRuleSummary || 'Dividir según proporciones'}
]`;

      contents.push({
        role: 'user',
        parts: [{ text: recipeDetails }]
      });
      contents.push({
        role: 'model',
        parts: [{ text: `Entendido. Tengo cargada en memoria la receta de "${recipeContext.title}" con todas las proporciones exactas para Él y para Ella. ¿Qué te gustaría consultar o qué ingrediente necesitas reemplazar?` }]
      });
    }

    // Previous history
    if (Array.isArray(history)) {
      for (const h of history.slice(-6)) {
        if (h && (h.sender === 'user' || h.sender === 'ai' || h.role === 'user' || h.role === 'model') && h.text) {
          const role = h.sender === 'user' || h.role === 'user' ? 'user' : 'model';
          contents.push({
            role,
            parts: [{ text: h.text }]
          });
        }
      }
    }

    // User message
    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    // Model fallback chain
    const candidateModels = [
      'gemini-2.5-flash',
      'gemini-3.1-flash-lite',
      'gemini-flash-latest',
      'gemini-3.8-flash',
    ];

    let response: any = null;
    let lastError: any = null;

    for (const model of candidateModels) {
      try {
        const config: any = {
          systemInstruction: KETO_SYSTEM_INSTRUCTION,
          temperature: 0.65,
        };

        if (model.includes('flash-lite')) {
          config.thinkingConfig = { thinkingLevel: ThinkingLevel.MINIMAL };
        }

        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error(`Timeout en ${model}`)), 10000)
        );

        const apiCallPromise = ai.models.generateContent({
          model,
          contents,
          config,
        });

        const result: any = await Promise.race([apiCallPromise, timeoutPromise]);
        if (result && result.text) {
          response = result;
          break;
        }
      } catch (err: any) {
        lastError = err;
        console.warn(`Netlify function: Model ${model} failed, switching to next fallback:`, err?.message || err);
      }
    }

    if (!response || !response.text) {
      throw lastError || new Error('No se pudo generar respuesta con los modelos disponibles.');
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ reply: response.text })
    };
  } catch (err: any) {
    console.error('Netlify function chat error:', err);
    let cleanErrorMessage = 'Error al procesar la consulta con el asistente de IA.';
    const rawMsg = err?.message || '';

    if (rawMsg.includes('503') || rawMsg.includes('high demand') || rawMsg.includes('UNAVAILABLE')) {
      cleanErrorMessage = 'Los servidores de Google Gemini están experimentando una alta demanda momentánea. Por favor, vuelve a intentar en unos segundos.';
    } else if (rawMsg.includes('429') || rawMsg.includes('RESOURCE_EXHAUSTED')) {
      cleanErrorMessage = 'Se ha superado temporalmente la cuota de consultas. Por favor aguarda un momento y reintenta.';
    } else if (rawMsg.includes('API_KEY') || rawMsg.includes('PERMISSION_DENIED')) {
      cleanErrorMessage = 'Error de autorización en la API Key de Gemini. Verifica GEMINI_API_KEY en Netlify.';
    }

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: cleanErrorMessage })
    };
  }
};
