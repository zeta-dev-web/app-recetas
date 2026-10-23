/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Recipe } from '../types';

export interface IngredientSource {
  recipeId: string;
  recipeTitle: string;
  dayNumber?: number;
  originalText: string;
  amount: number;
  unit: string;
}

export interface AggregatedItem {
  id: string;
  name: string;
  category: 'carnes' | 'verduras' | 'lacteos' | 'despensa';
  totalQuantity: number;
  unit: string;
  formattedTotal: string;
  hint?: string;
  sources: IngredientSource[];
}

export interface CategoryGroup {
  category: 'carnes' | 'verduras' | 'lacteos' | 'despensa';
  label: string;
  icon: string;
  items: AggregatedItem[];
  totalGrams?: number;
}

interface Rule {
  id: string;
  name: string;
  category: 'carnes' | 'verduras' | 'lacteos' | 'despensa';
  preferredUnit: string;
  test: (text: string) => boolean;
  getHint?: (total: number, unit: string) => string | undefined;
}

// Ordered rules: specific items first (e.g. repollo before pollo!)
const RULES: Rule[] = [
  // 1. REPOLLO MUST BE BEFORE POLLO (prevents "repollo".includes("pollo"))
  {
    id: 'repollo',
    name: 'Repollo (blanco / morado)',
    category: 'verduras',
    preferredUnit: 'g',
    test: text => /\brepollo\b/i.test(text),
    getHint: total => (total >= 250 ? 'Aprox. 1/2 repollo chico' : 'Aprox. 1/4 repollo')
  },

  // 2. AVES & CARNES
  {
    id: 'pechuga_pollo',
    name: 'Pechuga de pollo',
    category: 'carnes',
    preferredUnit: 'g',
    test: text => /\bpechuga\b/i.test(text)
  },
  {
    id: 'pata_muslo_pollo',
    name: 'Pata y muslo de pollo con piel',
    category: 'carnes',
    preferredUnit: 'g',
    test: text => /\b(pata\s+y\s+muslo|muslo)\b/i.test(text)
  },
  {
    id: 'pollo_general',
    name: 'Pollo (trozos / tiras)',
    category: 'carnes',
    preferredUnit: 'g',
    test: text => /\bpollo\b/i.test(text)
  },
  {
    id: 'bife_chorizo',
    name: 'Bife de chorizo vacuno',
    category: 'carnes',
    preferredUnit: 'g',
    test: text => /\bbife\s+de\s+chorizo\b/i.test(text)
  },
  {
    id: 'carne_picada',
    name: 'Carne picada vacuna / Medallones de res',
    category: 'carnes',
    preferredUnit: 'g',
    test: text => /\b(carne\s+picada|hamburguesa|medallon|medallones)\b/i.test(text)
  },
  {
    id: 'carne_vacuna',
    name: 'Carne vacuna (bife / cuadril / lomo / vacío)',
    category: 'carnes',
    preferredUnit: 'g',
    test: text =>
      /\b(cuadril|lomo|bife|vacío|vacio|peceto|nalga|churrasco|matambre|carne\s+vacuna|carne\s+de\s+res)\b/i.test(
        text
      )
  },
  {
    id: 'cerdo',
    name: 'Carne de cerdo (carré / bondiola / chuleta)',
    category: 'carnes',
    preferredUnit: 'g',
    test: text => /\b(carre|carré|bondiola|cerdo|chuleta)\b/i.test(text)
  },
  {
    id: 'merluza',
    name: 'Filet de merluza fresca',
    category: 'carnes',
    preferredUnit: 'g',
    test: text => /\bmerluza\b/i.test(text)
  },
  {
    id: 'salmon',
    name: 'Salmón rosado fresco',
    category: 'carnes',
    preferredUnit: 'g',
    test: text => /\b(salmon|salmón)\b/i.test(text)
  },
  {
    id: 'atun',
    name: 'Atún al natural (lata escurrida)',
    category: 'carnes',
    preferredUnit: 'g',
    test: text => /\b(atun|atún)\b/i.test(text),
    getHint: total => `Aprox. ${Math.ceil(total / 120)} lata(s)`
  },
  {
    id: 'jamon',
    name: 'Jamón cocido natural',
    category: 'carnes',
    preferredUnit: 'g',
    test: text => /\b(jamon|jamón)\b/i.test(text)
  },

  // 3. VERDURAS KETO
  {
    id: 'palta',
    name: 'Palta (Aguacate)',
    category: 'verduras',
    preferredUnit: 'g',
    test: text => /\bpalta\b/i.test(text),
    getHint: total => {
      const units = total / 140;
      if (units <= 0.6) return 'Aprox. 1/2 palta';
      if (units <= 1.2) return 'Aprox. 1 palta entera';
      if (units <= 1.8) return 'Aprox. 1.5 a 2 paltas';
      return `Aprox. ${Math.round(units * 10) / 10} paltas`;
    }
  },
  {
    id: 'brocoli',
    name: 'Brócoli fresco',
    category: 'verduras',
    preferredUnit: 'g',
    test: text => /\b(brocoli|brócoli)\b/i.test(text),
    getHint: total => (total >= 400 ? 'Aprox. 1 planta entera' : 'Aprox. 1/2 planta de brócoli')
  },
  {
    id: 'coliflor',
    name: 'Coliflor fresco',
    category: 'verduras',
    preferredUnit: 'g',
    test: text => /\bcoliflor\b/i.test(text),
    getHint: total => (total >= 400 ? 'Aprox. 1 planta entera' : 'Aprox. 1/2 planta')
  },
  {
    id: 'espinaca',
    name: 'Espinaca fresca',
    category: 'verduras',
    preferredUnit: 'g',
    test: text => /\bespinaca\b/i.test(text),
    getHint: total => (total >= 250 ? 'Aprox. 1 a 2 atados' : 'Aprox. 1 atado')
  },
  {
    id: 'acelga',
    name: 'Acelga fresca',
    category: 'verduras',
    preferredUnit: 'g',
    test: text => /\bacelga\b/i.test(text),
    getHint: total => (total >= 250 ? 'Aprox. 1 atado grande' : 'Aprox. 1/2 atado')
  },
  {
    id: 'tomate',
    name: 'Tomate fresco',
    category: 'verduras',
    preferredUnit: 'g',
    test: text => /\btomate\b/i.test(text),
    getHint: total => `Aprox. ${Math.max(1, Math.round(total / 120))} tomate(s)`
  },
  {
    id: 'zuchini',
    name: 'Zuchini (calabacín verde)',
    category: 'verduras',
    preferredUnit: 'g',
    test: text => /\b(zuchini|zucchini|calabacin|calabacín)\b/i.test(text),
    getHint: total => `Aprox. ${Math.max(1, Math.round(total / 150))} zuchini(s)`
  },
  {
    id: 'lechuga',
    name: 'Lechuga fresca',
    category: 'verduras',
    preferredUnit: 'g',
    test: text => /\blechuga\b/i.test(text),
    getHint: total => (total >= 150 ? 'Aprox. 1 planta' : 'Aprox. 1/2 planta')
  },
  {
    id: 'rucula',
    name: 'Rúcula fresca',
    category: 'verduras',
    preferredUnit: 'g',
    test: text => /\b(rucula|rúcula)\b/i.test(text),
    getHint: total => (total >= 100 ? 'Aprox. 1 paquete o atado' : 'Aprox. 1/2 paquete')
  },
  {
    id: 'radicheta',
    name: 'Radicheta fresca',
    category: 'verduras',
    preferredUnit: 'g',
    test: text => /\bradicheta\b/i.test(text)
  },
  {
    id: 'pepino',
    name: 'Pepino fresco',
    category: 'verduras',
    preferredUnit: 'g',
    test: text => /\bpepino\b/i.test(text),
    getHint: total => `Aprox. ${Math.max(1, Math.round(total / 150))} pepino(s)`
  },
  {
    id: 'ajo',
    name: 'Ajo fresco',
    category: 'verduras',
    preferredUnit: 'dientes',
    test: text => /\bajo\b/i.test(text) && !/en\s+polvo/i.test(text),
    getHint: total => (total >= 5 ? 'Aprox. 1 cabeza chica de ajo' : undefined)
  },
  {
    id: 'limon',
    name: 'Limón',
    category: 'verduras',
    preferredUnit: 'unidad',
    test: text => /\b(limon|limón)\b/i.test(text),
    getHint: total => `Aprox. ${Math.max(1, Math.round(total))} unidad(es)`
  },
  {
    id: 'perejil',
    name: 'Perejil fresco',
    category: 'verduras',
    preferredUnit: 'g',
    test: text => /\bperejil\b/i.test(text)
  },

  // 4. LÁCTEOS, QUESOS & HUEVOS
  {
    id: 'manteca',
    name: 'Manteca (mantequilla)',
    category: 'lacteos',
    preferredUnit: 'g',
    test: text => /\bmanteca\b/i.test(text),
    getHint: total => (total > 100 ? '1 paquete de 200g' : '1 pan chico de manteca')
  },
  {
    id: 'huevos',
    name: 'Huevos de campo',
    category: 'lacteos',
    preferredUnit: 'huevos',
    test: text => /\b(huevo|huevos)\b/i.test(text),
    getHint: total => (total >= 12 ? `1 docena (${total} u)` : total >= 6 ? `1/2 docena (${total} u)` : undefined)
  },
  {
    id: 'mozzarella',
    name: 'Queso mozzarella',
    category: 'lacteos',
    preferredUnit: 'g',
    test: text => /\bmozzarella\b/i.test(text)
  },
  {
    id: 'queso_cremoso',
    name: 'Queso cremoso / cuartirolo',
    category: 'lacteos',
    preferredUnit: 'g',
    test: text => /\bcremoso|cuartirolo\b/i.test(text)
  },
  {
    id: 'queso_parmesano',
    name: 'Queso duro rallado (parmesano / reggianito / sardo)',
    category: 'lacteos',
    preferredUnit: 'g',
    test: text => /\b(parmesano|reggianito|sardo|gouda|rallado)\b/i.test(text)
  },
  {
    id: 'crema_leche',
    name: 'Crema de leche',
    category: 'lacteos',
    preferredUnit: 'ml',
    test: text => /\bcrema\s+de\s+leche\b/i.test(text),
    getHint: total => (total <= 200 ? '1 pote chico (200ml)' : 'Pote grande')
  },

  // 5. ACEITES, FRUTOS SECOS & DESPENSA
  {
    id: 'aceite_oliva',
    name: 'Aceite de oliva extra virgen',
    category: 'despensa',
    preferredUnit: 'ml',
    test: text => /\baceite\s+de\s+oliva\b/i.test(text),
    getHint: total => `Aprox. ${Math.round(total / 15)} cucharadas soperas (${total}ml)`
  },
  {
    id: 'aceite_coco',
    name: 'Aceite de coco',
    category: 'despensa',
    preferredUnit: 'g',
    test: text => /\baceite\s+de\s+coco\b/i.test(text),
    getHint: total => `Aprox. ${Math.round(total / 15)} cda(s)`
  },
  {
    id: 'nueces',
    name: 'Nueces partidas',
    category: 'despensa',
    preferredUnit: 'g',
    test: text => /\b(nuez|nueces)\b/i.test(text)
  },
  {
    id: 'almendras',
    name: 'Almendras',
    category: 'despensa',
    preferredUnit: 'g',
    test: text => /\b(almendra|almendras)\b/i.test(text)
  },
  {
    id: 'semillas',
    name: 'Semillas (chía / sésamo / lino)',
    category: 'despensa',
    preferredUnit: 'g',
    test: text => /\b(chia|chía|sesamo|sésamo|lino|semilla|semillas)\b/i.test(text)
  },
  {
    id: 'condimentos_basicos',
    name: 'Sal, pimienta & condimentos básicos',
    category: 'despensa',
    preferredUnit: '',
    test: text =>
      /\b(sal|pimienta|orégano|oregano|pimentón|pimenton|romero|ajo\s+en\s+polvo|a\s+gusto)\b/i.test(text)
  }
];

// Helper to extract numeric quantity and unit from text
function parseAmountAndUnit(text: string): { amount: number; unit: string } {
  const clean = text.trim();

  // Pattern 1: e.g. "180g", "150 g", "15ml", "22 ml"
  const gramMlMatch = clean.match(/^(\d+(?:[.,]\d+)?)\s*(g|gr|gramos|ml|cm3)\b/i);
  if (gramMlMatch) {
    const num = parseFloat(gramMlMatch[1].replace(',', '.'));
    const u = gramMlMatch[2].toLowerCase().startsWith('m') ? 'ml' : 'g';
    return { amount: num, unit: u };
  }

  // Pattern 2: e.g. "3 huevos", "1 huevo"
  const eggMatch = clean.match(/^(\d+)\s+huevo[s]?\b/i);
  if (eggMatch) {
    return { amount: parseInt(eggMatch[1], 10), unit: 'huevos' };
  }

  // Pattern 3: e.g. "1 diente de ajo", "2 dientes"
  const garlicMatch = clean.match(/^(\d+)\s+diente[s]?\b/i);
  if (garlicMatch) {
    return { amount: parseInt(garlicMatch[1], 10), unit: 'dientes' };
  }

  // Pattern 4: e.g. "1 lata de atún (120g escurrido)"
  const tunaCanMatch = clean.match(/\b(\d+)\s*g\b/i);
  if (tunaCanMatch) {
    return { amount: parseFloat(tunaCanMatch[1]), unit: 'g' };
  }

  // Pattern 5: Generic number at start
  const leadingNumMatch = clean.match(/^(\d+(?:[.,]\d+)?)/);
  if (leadingNumMatch) {
    return { amount: parseFloat(leadingNumMatch[1].replace(',', '.')), unit: '' };
  }

  return { amount: 0, unit: '' };
}

/**
 * Aggregates a list of selected recipes into categorized items with summed weights and counts
 * Supports 'both' (Él + Ella with exact combined totals) and 'he' (solo Él)
 */
export function aggregateShoppingList(
  recipes: Recipe[],
  portionMode: 'both' | 'he' = 'both'
): CategoryGroup[] {
  const itemsMap = new Map<string, AggregatedItem>();

  recipes.forEach(recipe => {
    // If 'both' mode and recipe has differentialIngredients, use the exact total amounts
    if (portionMode === 'both' && recipe.differentialIngredients && recipe.differentialIngredients.length > 0) {
      recipe.differentialIngredients.forEach(diff => {
        // e.g. diff.total: "310g", diff.name: "Matambre de cerdo"
        const combinedString = `${diff.total} de ${diff.name}`;
        const { amount, unit } = parseAmountAndUnit(diff.total || combinedString);

        // Find matching rule based on ingredient name or total string
        let matchedRule = RULES.find(r => r.test(diff.name) || r.test(combinedString));

        let itemId: string;
        let itemName: string;
        let itemCategory: 'carnes' | 'verduras' | 'lacteos' | 'despensa';
        let itemUnit: string;

        if (matchedRule) {
          itemId = matchedRule.id;
          itemName = matchedRule.name;
          itemCategory = matchedRule.category;
          itemUnit = matchedRule.preferredUnit || unit;
        } else {
          const cleanName = diff.name
            .replace(/^(\d+(?:[.,]\d+)?)\s*(g|gr|gramos|ml|cm3|huevos|huevo|dientes|diente|unidad|unidades)?\s*(de\s+)?/i, '')
            .replace(/\s*\([^)]*\)/g, '')
            .trim();

          itemId = `custom_${cleanName.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
          itemName = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
          itemCategory = 'despensa';
          itemUnit = unit || 'g';
        }

        const existing = itemsMap.get(itemId);
        const sourceDetailText = `${diff.name}: Él: ${diff.he} | Ella: ${diff.she} (Total: ${diff.total})`;

        const source: IngredientSource = {
          recipeId: recipe.id,
          recipeTitle: recipe.title,
          dayNumber: recipe.dayNumber,
          originalText: sourceDetailText,
          amount,
          unit: itemUnit
        };

        if (existing) {
          existing.totalQuantity += amount;
          existing.sources.push(source);
        } else {
          itemsMap.set(itemId, {
            id: itemId,
            name: itemName,
            category: itemCategory,
            totalQuantity: amount,
            unit: itemUnit,
            formattedTotal: '',
            sources: [source]
          });
        }
      });
      return;
    }

    // Default or 'he' mode: use standard recipe.ingredients
    recipe.ingredients.forEach(rawIng => {
      const trimmed = rawIng.trim();
      const { amount, unit } = parseAmountAndUnit(trimmed);

      // Find matching rule
      let matchedRule = RULES.find(r => r.test(trimmed));

      let itemId: string;
      let itemName: string;
      let itemCategory: 'carnes' | 'verduras' | 'lacteos' | 'despensa';
      let itemUnit: string;

      if (matchedRule) {
        itemId = matchedRule.id;
        itemName = matchedRule.name;
        itemCategory = matchedRule.category;
        itemUnit = matchedRule.preferredUnit || unit;
      } else {
        const cleanName = trimmed
          .replace(/^(\d+(?:[.,]\d+)?)\s*(g|gr|gramos|ml|cm3|huevos|huevo|dientes|diente|unidad|unidades)?\s*(de\s+)?/i, '')
          .replace(/\s*\([^)]*\)/g, '')
          .trim();

        itemId = `custom_${cleanName.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
        itemName = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
        itemCategory = 'despensa';
        itemUnit = unit || 'g';
      }

      const existing = itemsMap.get(itemId);

      const source: IngredientSource = {
        recipeId: recipe.id,
        recipeTitle: recipe.title,
        dayNumber: recipe.dayNumber,
        originalText: trimmed,
        amount,
        unit: itemUnit
      };

      if (existing) {
        existing.totalQuantity += amount;
        existing.sources.push(source);
      } else {
        itemsMap.set(itemId, {
          id: itemId,
          name: itemName,
          category: itemCategory,
          totalQuantity: amount,
          unit: itemUnit,
          formattedTotal: '',
          sources: [source]
        });
      }
    });
  });

  // Format display labels and hints for each item
  const allAggregated = Array.from(itemsMap.values()).map(item => {
    const rule = RULES.find(r => r.id === item.id);
    let formattedTotal = '';

    if (item.unit === 'g') {
      formattedTotal = item.totalQuantity >= 1000
        ? `${(item.totalQuantity / 1000).toFixed(2).replace(/\.00$/, '')} kg (${item.totalQuantity}g)`
        : `${item.totalQuantity}g`;
    } else if (item.unit === 'ml') {
      formattedTotal = item.totalQuantity >= 1000
        ? `${(item.totalQuantity / 1000).toFixed(1)} L (${item.totalQuantity}ml)`
        : `${item.totalQuantity}ml`;
    } else if (item.unit === 'huevos') {
      formattedTotal = `${item.totalQuantity} ${item.totalQuantity === 1 ? 'huevo' : 'huevos'}`;
    } else if (item.unit === 'dientes') {
      formattedTotal = `${item.totalQuantity} ${item.totalQuantity === 1 ? 'diente' : 'dientes'}`;
    } else if (item.totalQuantity > 0) {
      formattedTotal = `${item.totalQuantity} ${item.unit}`.trim();
    } else {
      formattedTotal = 'Al gusto (básico)';
    }

    const hint = rule?.getHint ? rule.getHint(item.totalQuantity, item.unit) : undefined;

    return {
      ...item,
      formattedTotal,
      hint
    };
  });

  // Group into standard 4 supermarket aisles
  const groups: CategoryGroup[] = [
    {
      category: 'carnes',
      label: '🥩 Carnicería & Pescadería',
      icon: '🥩',
      items: allAggregated.filter(i => i.category === 'carnes'),
      totalGrams: allAggregated
        .filter(i => i.category === 'carnes' && i.unit === 'g')
        .reduce((sum, i) => sum + i.totalQuantity, 0)
    },
    {
      category: 'verduras',
      label: '🥬 Verdulería & Vegetales',
      icon: '🥬',
      items: allAggregated.filter(i => i.category === 'verduras')
    },
    {
      category: 'lacteos',
      label: '🧀 Lácteos, Quesos & Huevos',
      icon: '🧀',
      items: allAggregated.filter(i => i.category === 'lacteos')
    },
    {
      category: 'despensa',
      label: '🫒 Aceites, Despensa & Frutos Secos',
      icon: '🫒',
      items: allAggregated.filter(i => i.category === 'despensa')
    }
  ];

  return groups;
}

/**
 * Returns formatted text ready for WhatsApp with summed totals and recipe breakdown
 */
export function formatShoppingListForClipboard(
  groups: CategoryGroup[],
  selectedRecipes: Recipe[],
  checkedMap: Record<string, boolean>,
  portionMode: 'both' | 'he' = 'both'
): string {
  let text = `🛒 LISTA DE COMPRAS - SAVIA KETO\n`;
  text += `Modalidad: ${portionMode === 'both' ? 'Para Ambos (Él + Ella - 2 porciones)' : 'Solo Él (1 porción)'}\n`;
  text += `Recetas a preparar (${selectedRecipes.length}):\n`;
  selectedRecipes.forEach(r => {
    text += `  • ${r.dayNumber ? `[Día ${r.dayNumber}] ` : ''}${r.title} (${r.mealType})\n`;
  });
  text += `\n`;

  // Meat total quick summary
  const meatGroup = groups.find(g => g.category === 'carnes');
  if (meatGroup && meatGroup.totalGrams && meatGroup.totalGrams > 0) {
    text += `⚖️ TOTAL CARNICERÍA & PESCADERÍA: ${meatGroup.totalGrams >= 1000 ? `${(meatGroup.totalGrams / 1000).toFixed(2)} kg` : `${meatGroup.totalGrams}g`}\n\n`;
  }

  groups.forEach(group => {
    if (group.items.length === 0) return;

    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `${group.label}\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;

    group.items.forEach(item => {
      const isChecked = !!checkedMap[item.id];
      const checkMark = isChecked ? '[X]' : '[ ]';
      const hintText = item.hint ? ` (${item.hint})` : '';

      text += `${checkMark} ${item.name}: ${item.formattedTotal}${hintText}\n`;
      // List recipes where it's used
      const recipesText = item.sources
        .map(s => `${s.recipeTitle.split(' ')[0]}... (${s.amount > 0 ? `${s.amount}${s.unit}` : 'al gusto'})`)
        .slice(0, 3)
        .join(', ');
      text += `     Para: ${recipesText}\n`;
    });

    text += `\n`;
  });

  text += `Generado automáticamente en Savia Keto (Plan de 30 Días)`;
  return text;
}
