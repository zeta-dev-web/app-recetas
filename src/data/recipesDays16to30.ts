import { Recipe } from '../types';

export const RECIPES_DAYS_16_TO_30: Recipe[] = [
  // ==================== DÍA 16 ====================
  {
    id: 'keto-d16-almuerzo',
    dayNumber: 16,
    title: 'Churrasquito de Muslo de Pollo al Orégano con Ensalada de Tomate, Rúcula y Palta',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 540,
    proteinGrams: 42,
    carbsGrams: 5,
    fatsGrams: 39,
    imageUrl: '/src/assets/images/recipe_churrasco_coliflor_1792713325916.jpg',
    description: 'Muslo de pollo deshuesado dorado a la plancha con orégano y provenzal, acompañado de ensalada fresca de rúcula, tomate y palta.',
    ingredients: [
      '180g de muslo de pollo deshuesado sin piel',
      '60g de tomate redondo',
      '50g de rúcula fresca',
      '80g de palta (1/2 unidad)',
      '15ml de aceite de oliva extra virgen',
      'Orégano, sal y pimienta a gusto'
    ],
    instructions: [
      'Condimentar los 180g de churrasquitos de muslo de pollo con orégano, sal y pimienta.',
      'Cocinar en plancha caliente a fuego medio-alto durante 5-6 minutos por lado hasta que estén bien dorados y jugosos.',
      'Armar la ensalada con 50g de rúcula, 60g de tomate picado y los 80g de palta en láminas.',
      'Servir el pollo caliente y aderezar la ensalada con los 15ml de aceite de oliva extra virgen.'
    ],
    differentialIngredients: [
      { name: 'Muslo de pollo deshuesado sin piel', he: '180g', she: '130g', total: '310g' },
      { name: 'Tomate redondo', he: '60g', she: '60g', total: '120g' },
      { name: 'Rúcula fresca', he: '50g', she: '50g', total: '100g' },
      { name: 'Palta fresca', he: '80g (1/2 palta)', she: '50g (1/3 palta)', total: '~130g' },
      { name: 'Aceite de oliva extra virgen', he: '15ml', she: '10ml', total: '25ml' },
      { name: 'Orégano, sal y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Condimentar los 310g de churrasquitos de pollo (180g para Él, 130g para Ella) con orégano, sal y pimienta.',
      'Cocinar en plancha caliente a fuego medio-alto durante 5 a 6 minutos por lado hasta que estén bien dorados.',
      'Armar las dos ensaladas en cada plato con la rúcula limpia (50g cada uno), el tomate picado (60g cada uno) y la palta (80g para Él, 50g para Ella).',
      'Servir en el plato de Él su pieza de 180g de pollo crudo (~135g cocido) con 15ml de oliva, y en el de Ella su pieza de 130g cruda (~95g cocida) con 10ml de oliva.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Cocinar las piezas de muslo separadas a la plancha. Servir a Él su pieza de 180g cruda (~135g cocida) y a Ella su pieza de 130g cruda (~95g cocida) con sus respectivas ensaladas.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '~135g muslo de pollo cocido dorado',
        sides: '50g rúcula + 60g tomate + 80g palta fresca',
        fatsAndToppings: '15ml aceite de oliva extra virgen',
        plateTotalApprox: '~340g servido en plato',
        ruleNote: 'Servir su muslo de 180g crudo con media palta y ensalada con 15ml de oliva.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '~95g muslo de pollo cocido dorado',
        sides: '50g rúcula + 60g tomate + 50g palta fresca',
        fatsAndToppings: '10ml aceite de oliva extra virgen',
        plateTotalApprox: '~265g servido en plato',
        ruleNote: 'Servir su muslo de 130g crudo con 1/3 de palta y ensalada con 10ml de oliva.'
      }
    },
    tags: ['Keto', 'Día 16', 'Plancha', 'Pollo', 'Palta'],
    createdAt: '2026-10-16'
  },
  {
    id: 'keto-d16-cena',
    dayNumber: 16,
    title: 'Revuelto de Zuchinis y Huevo con Queso Cremoso',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 15,
    servings: 1,
    calories: 460,
    proteinGrams: 28,
    carbsGrams: 5,
    fatsGrams: 36,
    imageUrl: '/src/assets/images/recipe_omelette_espinaca_1792713324934.jpg',
    description: 'Zuchinis en cubos tiernizados en manteca con huevos revueltos cremosos y queso fundido al momento.',
    ingredients: [
      '3 huevos de campo',
      '150g de zuchini en cubos',
      '40g de queso cremoso',
      '15g de manteca pura',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Cortar 150g de zuchini en cubos medianos.',
      'Derretir los 15g de manteca en una sartén a fuego medio y saltear el zuchini 4-5 minutos hasta que esté tierno.',
      'Batir los 3 huevos con sal y pimienta. Volcar a la sartén revolviendo suavemente a fuego medio-bajo.',
      'Incorporar los 40g de queso cremoso troceado justo antes de apagar el fuego para que se funda con el calor residual.'
    ],
    differentialIngredients: [
      { name: 'Huevos de campo', he: '3 huevos', she: '2 huevos', total: '5 huevos' },
      { name: 'Zuchini en cubos', he: '150g', she: '150g', total: '300g' },
      { name: 'Queso cremoso', he: '40g', she: '25g', total: '65g' },
      { name: 'Manteca pura', he: '15g', she: '10g', total: '25g sartén' },
      { name: 'Sal y pimienta a gusto', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Derretir la manteca (25g) en una sartén grande y saltear los 300g de zuchini durante 4-5 minutos hasta que estén tiernos.',
      'Agregar los 5 huevos batidos con sal y pimienta, revolviendo a fuego medio-bajo.',
      'Incorporar los 65g de queso cremoso troceado justo antes de apagar el fuego para que se derrita.',
      'Servir el 60% de la preparación en el plato de Él (~320g servido) y el 40% en el plato de Ella (~215g servido).'
    ],
    cookedServing: {
      dishType: 'integrado',
      servingRuleSummary: 'Al preparar todo junto en sartén (300g zuchini, 5 huevos, 25g manteca, 65g queso), servir el 60% en el plato de Él y el 40% en el de Ella.',
      servingHe: {
        percentage: '60%',
        proteinCooked: '3 huevos batidos + 40g queso fundido',
        sides: '150g zuchini salteado en manteca',
        fatsAndToppings: '15g manteca integrada en sartén',
        plateTotalApprox: '~320g revuelto en plato',
        ruleNote: 'Servir el 60% de la sartén caliente en su plato.'
      },
      servingShe: {
        percentage: '40%',
        proteinCooked: '2 huevos batidos + 25g queso fundido',
        sides: '150g zuchini salteado en manteca',
        fatsAndToppings: '10g manteca integrada en sartén',
        plateTotalApprox: '~215g revuelto en plato',
        ruleNote: 'Servir el 40% de la sartén caliente en su plato.'
      }
    },
    tags: ['Keto', 'Día 16', 'Sartén', 'Huevos', 'Zuchini'],
    createdAt: '2026-10-16'
  },

  // ==================== DÍA 17 ====================
  {
    id: 'keto-d17-almuerzo',
    dayNumber: 17,
    title: 'Ojo de Bife a la Plancha con Puré de Coliflor a la Manteca',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 25,
    servings: 1,
    calories: 590,
    proteinGrams: 45,
    carbsGrams: 6,
    fatsGrams: 42,
    imageUrl: '/src/assets/images/recipe_bife_chorizo_1792712404795.jpg',
    description: 'Corte tierno de ojo de bife a la plancha a fuego vivo, acompañado de puré suave de coliflor emulsionado con manteca y nuez moscada.',
    ingredients: [
      '200g de ojo de bife',
      '200g de coliflor fresco',
      '20g de manteca pura',
      'Sal gruesa, pimienta y nuez moscada'
    ],
    instructions: [
      'Hervir 200g de coliflor en agua con sal durante 10-12 minutos hasta que esté muy tierno.',
      'Escurrir muy bien y procesar con los 20g de manteca, sal y una pizca de nuez moscada hasta obtener consistencia de puré.',
      'Cocinar el ojo de bife (200g) a la plancha a fuego máximo durante 4-5 minutos por lado. Salar al dar vuelta.',
      'Servir el bife jugoso acompañado del puré de coliflor caliente.'
    ],
    differentialIngredients: [
      { name: 'Ojo de bife', he: '200g', she: '140g', total: '340g' },
      { name: 'Coliflor fresco', he: '200g', she: '200g', total: '400g' },
      { name: 'Manteca (para puré)', he: '20g', she: '15g', total: '35g' },
      { name: 'Sal gruesa, pimienta y nuez moscada', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Hervir los 400g de coliflor por 10-12 minutos hasta que esté muy tierno. Escurrir bien y procesar con los 35g de manteca, sal y nuez moscada.',
      'Cocinar los ojos de bife a la plancha a fuego máximo 4-5 minutos por lado. Salar con sal gruesa al dar vuelta.',
      'Servir 200g de carne cruda (~150g cocida) para Él con el 55% del puré (~230g puré).',
      'Servir 140g de carne cruda (~105g cocida) para Ella con el 45% del puré (~190g puré).'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Cocinar los bifes a la plancha por separado. Distribuir el puré procesado con manteca: 55% en el plato de Él y 45% en el de Ella.',
      servingHe: {
        percentage: '55%',
        proteinCooked: '~150g ojo de bife cocido a la plancha',
        sides: '~230g puré de coliflor a la manteca (55%)',
        fatsAndToppings: '20g manteca integrada en el puré',
        plateTotalApprox: '~380g servido en plato',
        ruleNote: 'Servir su bife de 200g con el 55% del puré de coliflor procesado.'
      },
      servingShe: {
        percentage: '45%',
        proteinCooked: '~105g ojo de bife cocido a la plancha',
        sides: '~190g puré de coliflor a la manteca (45%)',
        fatsAndToppings: '15g manteca integrada en el puré',
        plateTotalApprox: '~295g servido en plato',
        ruleNote: 'Servir su bife de 140g con el 45% del puré de coliflor procesado.'
      }
    },
    tags: ['Keto', 'Día 17', 'Plancha', 'Carne Vacuna', 'Coliflor'],
    createdAt: '2026-10-17'
  },
  {
    id: 'keto-d17-cena',
    dayNumber: 17,
    title: 'Hamburguesas de Cerdo a la Mozzarella con Ensalada de Lechuga y Tomate',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 530,
    proteinGrams: 42,
    carbsGrams: 4,
    fatsGrams: 38,
    imageUrl: '/src/assets/images/recipe_hamburguesa_huevo_1792713324729.jpg',
    description: 'Hamburguesas caseras de cerdo a la plancha cubiertas con mozzarella fundida y ensalada fresca con aceite de oliva.',
    ingredients: [
      '180g de carne picada de cerdo',
      '40g de queso mozzarella',
      '100g de ensalada (lechuga y tomate)',
      '15ml de aceite de oliva extra virgen',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Moldear la hamburguesa de cerdo de 180g condimentada con sal y pimienta.',
      'Cocinar a la plancha a fuego medio durante 5 minutos por lado.',
      'Colocar los 40g de mozzarella sobre la hamburguesa en la sartén los últimos 2 minutos y tapar para fundir.',
      'Servir junto a 100g de ensalada fresca aderezada con los 15ml de aceite de oliva.'
    ],
    differentialIngredients: [
      { name: 'Carne picada de cerdo', he: '180g', she: '130g', total: '310g' },
      { name: 'Queso mozzarella', he: '40g', she: '25g', total: '65g' },
      { name: 'Ensalada (lechuga y tomate)', he: '100g', she: '100g', total: '200g' },
      { name: 'Aceite de oliva', he: '15ml', she: '10ml', total: '25ml' },
      { name: 'Sal y pimienta a gusto', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Formar las hamburguesas de cerdo: una grande de 180g para Él y una de 130g para Ella.',
      'Cocinarlas a la plancha durante 5 minutos por lado.',
      'Colocar la mozzarella sobre las hamburguesas (40g sobre la de Él, 25g sobre la de Ella) los últimos 2 minutos y tapar la sartén para fundir.',
      'Servir junto a la ensalada fresca (100g cada uno) aderezada con aceite de oliva (15ml para Él, 10ml para Ella).'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Formar hamburguesas individuales: 180g para Él y 130g para Ella. Fundir sus porciones exactas de mozzarella en sartén tapada.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '~140g hamburguesa de cerdo + 40g mozzarella fundida',
        sides: '100g ensalada mixta de lechuga y tomate',
        fatsAndToppings: '15ml aceite de oliva extra virgen',
        plateTotalApprox: '~295g servido en plato',
        ruleNote: 'Servir la hamburguesa de 180g con sus 40g de mozzarella y ensalada con 15ml de oliva.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '~100g hamburguesa de cerdo + 25g mozzarella fundida',
        sides: '100g ensalada mixta de lechuga y tomate',
        fatsAndToppings: '10ml aceite de oliva extra virgen',
        plateTotalApprox: '~235g servido en plato',
        ruleNote: 'Servir la hamburguesa de 130g con sus 25g de mozzarella y ensalada con 10ml de oliva.'
      }
    },
    tags: ['Keto', 'Día 17', 'Plancha', 'Cerdo', 'Mozzarella'],
    createdAt: '2026-10-17'
  },

  // ==================== DÍA 18 ====================
  {
    id: 'keto-d18-almuerzo',
    dayNumber: 18,
    title: 'Berenjenas a la Parmesana Keto',
    mealType: 'almuerzo',
    cookingMethod: 'horno',
    prepTimeMinutes: 30,
    servings: 1,
    calories: 470,
    proteinGrams: 24,
    carbsGrams: 9,
    fatsGrams: 37,
    imageUrl: '/src/assets/images/recipe_tarta_keto_espinaca_1792712405870.jpg',
    description: 'Capas de berenjena grillada gratinadas al horno con salsa de tomate natural casera, abundante mozzarella fundida y queso sardo rallado.',
    ingredients: [
      '180g de berenjenas en rodajas',
      '50g de salsa de tomate natural',
      '50g de queso mozzarella',
      '20g de queso sardo rallado',
      '15ml de aceite de oliva extra virgen',
      'Orégano y sal a gusto'
    ],
    instructions: [
      'Cortar 180g de berenjenas en rodajas medianas.',
      'Grillar las rodajas en plancha con un hilo de aceite de oliva durante 3 minutos por lado.',
      'Precalentar el horno a 200°C. En una fuente individual para horno, armar capas alternadas de berenjena grillada, salsa de tomate natural, mozzarella y queso sardo con orégano.',
      'Hornear por 15 minutos hasta que el queso esté burbujeante y gratinado dorado. Servir caliente.'
    ],
    differentialIngredients: [
      { name: 'Berenjenas en rodajas', he: '180g', she: '180g', total: '360g' },
      { name: 'Salsa de tomate natural', he: '50g', she: '40g', total: '90g' },
      { name: 'Queso mozzarella', he: '50g', she: '35g', total: '85g' },
      { name: 'Queso sardo rallado', he: '20g', she: '15g', total: '35g' },
      { name: 'Aceite de oliva extra virgen', he: '15ml', she: '10ml', total: '25ml' },
      { name: 'Orégano y sal', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Grillar las 360g de rodajas de berenjena en plancha con un hilo de aceite de oliva por 3 minutos por lado.',
      'Precalentar horno a 200°C. En una fuente para horno (o dos fuentes proporcionales), armar capas de berenjena, salsa de tomate natural (90g), mozzarella (85g) y queso sardo (35g con orégano).',
      'Hornear por 15 minutos hasta gratinar bien y dorar la superficie.',
      'Servir el 58% de la preparación gratinada para Él (~315g) y el 42% para Ella (~230g).'
    ],
    cookedServing: {
      dishType: 'integrado',
      servingRuleSummary: 'Al armar la parmesana horneada (360g berenjena, 90g salsa, 85g mozzarella, 35g sardo), servir el 58% en el plato de Él y el 42% en el de Ella.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '50g mozzarella + 20g queso sardo gratinado',
        sides: '180g berenjenas grilladas + 50g salsa de tomate natural',
        fatsAndToppings: '15ml aceite de oliva virgen + quesos dorados',
        plateTotalApprox: '~315g porción en plato',
        ruleNote: 'Servir el 58% de la fuente gratinada recién salida del horno.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '35g mozzarella + 15g queso sardo gratinado',
        sides: '180g berenjenas grilladas + 40g salsa de tomate natural',
        fatsAndToppings: '10ml aceite de oliva virgen + quesos dorados',
        plateTotalApprox: '~230g porción en plato',
        ruleNote: 'Servir el 42% de la fuente gratinada recién salida del horno.'
      }
    },
    tags: ['Keto', 'Día 18', 'Horno', 'Berenjenas', 'Parmesana', 'Mozzarella'],
    createdAt: '2026-10-18'
  },
  {
    id: 'keto-d18-cena',
    dayNumber: 18,
    title: 'Filete de Merluza a la Provenzal con Ensalada de Acelga y Huevo Duro',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 450,
    proteinGrams: 45,
    carbsGrams: 4,
    fatsGrams: 27,
    imageUrl: '/src/assets/images/recipe_merluza_acelga_1792713325749.jpg',
    description: 'Filetes de merluza salteados a la sartén en manteca dorada con provenzal aromática, servidos con acelga cocida y huevo duro.',
    ingredients: [
      '220g de filete de merluza fresca',
      '120g de acelga hervida escurrida',
      '1 huevo duro',
      '18g de manteca pura',
      'Ajo y perejil picados (provenzal), sal y pimienta'
    ],
    instructions: [
      'Hervir 1 huevo durante 9 minutos, pelar y cortar al medio.',
      'Cocinar 120g de acelga al vapor o en agua hirviendo y escurrir muy bien para retirar exceso de agua.',
      'En sartén caliente, derretir los 18g de manteca con ajo y perejil picados. Saltear los 220g de merluza durante 3 minutos por lado con cuidado al voltear.',
      'Servir la merluza dorada acompañada de la acelga y el huevo duro cortado al medio.'
    ],
    differentialIngredients: [
      { name: 'Filete de merluza fresca', he: '220g', she: '150g', total: '370g' },
      { name: 'Acelga hervida escurrida', he: '120g', she: '120g', total: '240g' },
      { name: 'Huevo duro', he: '1 huevo', she: '1 huevo', total: '2 huevos' },
      { name: 'Manteca pura', he: '18g', she: '12g', total: '30g sartén' },
      { name: 'Ajo, perejil, sal y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Hervir 2 huevos durante 9 minutos, enfriar en agua con hielo, pelar y cortar al medio.',
      'Saltear los 370g de merluza en sartén grande con los 30g de manteca y la provenzal picada durante 3 minutos por lado.',
      'Servir en el plato de Él su pieza de 220g de merluza cruda (~175g cocida) con 120g de acelga y 1 huevo duro.',
      'Servir en el plato de Ella su pieza de 150g de merluza cruda (~120g cocida) con 120g de acelga y 1 huevo duro.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Cocinar los filetes de merluza con la manteca provenzal. Servir a Él su pieza de 220g cruda y a Ella la de 150g, cada uno con 120g de acelga y 1 huevo duro.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '~175g merluza dorada a la provenzal + 1 huevo duro',
        sides: '120g acelga hervida bien escurrida',
        fatsAndToppings: '18g manteca provenzal de sartén',
        plateTotalApprox: '~360g servido en plato',
        ruleNote: 'Servir su filete de 220g con su huevo duro y acelga con manteca.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '~120g merluza dorada a la provenzal + 1 huevo duro',
        sides: '120g acelga hervida bien escurrida',
        fatsAndToppings: '12g manteca provenzal de sartén',
        plateTotalApprox: '~300g servido en plato',
        ruleNote: 'Servir su filete de 150g con su huevo duro y acelga con manteca.'
      }
    },
    tags: ['Keto', 'Día 18', 'Plancha', 'Pescado', 'Acelga', 'Huevo'],
    createdAt: '2026-10-18'
  },

  // ==================== DÍA 19 ====================
  {
    id: 'keto-d19-almuerzo',
    dayNumber: 19,
    title: 'Peceto Frío Feteado con Vinagreta de Oliva y Ensalada Mixta',
    mealType: 'almuerzo',
    cookingMethod: 'sin_coccion',
    prepTimeMinutes: 15,
    servings: 1,
    calories: 520,
    proteinGrams: 48,
    carbsGrams: 4,
    fatsGrams: 34,
    imageUrl: '/src/assets/images/recipe_bife_chorizo_1792712404795.jpg',
    description: 'Finas lonjas de peceto frío cocido marinadas en vinagreta casera de oliva extra virgen y limón, servidas con ensalada fresca.',
    ingredients: [
      '200g de peceto cocido feteado en frío',
      '100g de ensalada mixta (lechuga, rúcula y tomate)',
      '22ml de aceite de oliva extra virgen',
      'Vinagre de manzana o jugo de limón, sal y pimienta'
    ],
    instructions: [
      'Disponer las 200g de lonjas de peceto cocido frío en el plato.',
      'Preparar la vinagreta emulsionando los 22ml de aceite de oliva con un chorrito de limón o vinagre, sal y pimienta recién molida.',
      'Bañar la carne feteada con la vinagreta emulsionada.',
      'Acompañar con los 100g de ensalada mixta fresca de lechuga, rúcula y tomate.'
    ],
    differentialIngredients: [
      { name: 'Peceto cocido feteado', he: '200g', she: '140g', total: '340g' },
      { name: 'Ensalada mixta (lechuga, rúcula, tomate)', he: '100g', she: '100g', total: '200g' },
      { name: 'Aceite de oliva extra virgen', he: '22ml', she: '15ml', total: '37ml' },
      { name: 'Vinagre o jugo de limón, sal y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Disponer las lonjas de peceto frío en los platos (200g para Él, 140g para Ella).',
      'Preparar una vinagreta emulsionando el total de 37ml de aceite de oliva con vinagre o jugo de limón, sal y pimienta.',
      'Bañar la carne con la vinagreta (repartiendo 22ml para Él y 15ml para Ella).',
      'Acompañar con la ensalada mixta fresca (100g para cada uno).'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Pesar las rodajas de peceto frío feteado: 200g para Él y 140g para Ella. Repartir la vinagreta de oliva y servir con 100g de ensalada cada uno.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '200g peceto cocido feteado fino',
        sides: '100g ensalada mixta fresca',
        fatsAndToppings: '22ml vinagreta de oliva extra virgen',
        plateTotalApprox: '~320g servido en plato',
        ruleNote: 'Pesar 200g de carne feteada en balanza y rociar con 22ml de oliva con limón.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '140g peceto cocido feteado fino',
        sides: '100g ensalada mixta fresca',
        fatsAndToppings: '15ml vinagreta de oliva extra virgen',
        plateTotalApprox: '~255g servido en plato',
        ruleNote: 'Pesar 140g de carne feteada en balanza y rociar con 15ml de oliva con limón.'
      }
    },
    tags: ['Keto', 'Día 19', 'Fresco', 'Carne Vacuna', 'Peceto', 'Oliva'],
    createdAt: '2026-10-19'
  },
  {
    id: 'keto-d19-cena',
    dayNumber: 19,
    title: 'Tortilla de Zuchini y Queso Rallado a la Sartén',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 15,
    servings: 1,
    calories: 450,
    proteinGrams: 26,
    carbsGrams: 5,
    fatsGrams: 36,
    imageUrl: '/src/assets/images/recipe_tarta_keto_espinaca_1792712405870.jpg',
    description: 'Tortilla esponjosa y dorada de zuchini rallado bien escurrido con queso sardo estacionado y huevos de campo.',
    ingredients: [
      '3 huevos de campo',
      '150g de zuchini rallado y escurrido',
      '25g de queso sardo o tybo rallado',
      '18ml de aceite de oliva extra virgen',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Rallar 150g de zuchini y exprimir muy bien con paño o colador para eliminar todo el exceso de agua.',
      'Batir los 3 huevos con sal y pimienta. Añadir el zuchini escurrido y los 25g de queso sardo rallado.',
      'Calentar los 18ml de aceite de oliva en una sartén antiadherente a fuego medio.',
      'Verter la mezcla y cocinar durante 4 minutos de cada lado hasta que esté dorada por fuera y cocida por dentro.'
    ],
    differentialIngredients: [
      { name: 'Huevos de campo', he: '3 huevos', she: '2 huevos', total: '5 huevos' },
      { name: 'Zuchini rallado y escurrido', he: '150g', she: '150g', total: '300g' },
      { name: 'Queso sardo o tybo rallado', he: '25g', she: '15g', total: '40g' },
      { name: 'Aceite de oliva extra virgen', he: '18ml', she: '12ml', total: '30ml sartén' },
      { name: 'Sal y pimienta a gusto', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Exprimir muy bien los 300g de zuchini rallado para eliminar todo el exceso de agua.',
      'Batir los 5 huevos, agregar el zuchini bien seco, los 40g de queso rallado, sal y pimienta.',
      'Calentar los 30ml de oliva en sartén antiadherente amplia, verter la preparación y cocinar 4 minutos por lado dando vuelta con ayuda de un plato.',
      'Servir el 60% de la tortilla caliente en el plato de Él (~300g) y el 40% en el plato de Ella (~200g).'
    ],
    cookedServing: {
      dishType: 'integrado',
      servingRuleSummary: 'Cocinar una tortilla grande compartida en sartén antiadherente con los 5 huevos y 300g de zuchini. Servir el 60% a Él y el 40% a Ella.',
      servingHe: {
        percentage: '60%',
        proteinCooked: '3 huevos + 25g queso sardo',
        sides: '150g zuchini cocido en tortilla',
        fatsAndToppings: '18ml aceite de oliva de cocción',
        plateTotalApprox: '~300g tortilla servida',
        ruleNote: 'Servir el 60% de la tortilla dorada en su plato.'
      },
      servingShe: {
        percentage: '40%',
        proteinCooked: '2 huevos + 15g queso sardo',
        sides: '150g zuchini cocido en tortilla',
        fatsAndToppings: '12ml aceite de oliva de cocción',
        plateTotalApprox: '~200g tortilla servida',
        ruleNote: 'Servir el 40% de la tortilla dorada en su plato.'
      }
    },
    tags: ['Keto', 'Día 19', 'Sartén', 'Huevos', 'Zuchini', 'Queso'],
    createdAt: '2026-10-19'
  },

  // ==================== DÍA 20 ====================
  {
    id: 'keto-d20-almuerzo',
    dayNumber: 20,
    title: 'Carré de Cerdo al Horno con Espinacas a la Crema',
    mealType: 'almuerzo',
    cookingMethod: 'horno',
    prepTimeMinutes: 30,
    servings: 1,
    calories: 560,
    proteinGrams: 44,
    carbsGrams: 5,
    fatsGrams: 40,
    imageUrl: '/src/assets/images/recipe_churrasco_coliflor_1792713325916.jpg',
    description: 'Medallones tiernos de carré de cerdo horneados a punto con guarnición untuosa de espinacas frescas a la crema y nuez moscada.',
    ingredients: [
      '180g de carré de cerdo',
      '120g de espinaca fresca',
      '35ml de crema de leche entera',
      '12g de manteca pura',
      'Sal, pimienta y nuez moscada'
    ],
    instructions: [
      'Sazonar los 180g de carré de cerdo con sal y pimienta. Hornear a 190°C durante 25 minutos.',
      'En una sartén, saltear los 120g de espinacas con los 12g de manteca durante 2 minutos hasta que reduzcan.',
      'Añadir los 35ml de crema de leche, sal, pimienta y nuez moscada. Cocinar 2 minutos más a fuego bajo hasta espesar.',
      'Servir el carré de cerdo caliente acompañado de las espinacas a la crema untuosas.'
    ],
    differentialIngredients: [
      { name: 'Carré de cerdo', he: '180g', she: '130g', total: '310g' },
      { name: 'Espinaca fresca', he: '120g', she: '120g', total: '240g' },
      { name: 'Crema de leche entera', he: '35ml', she: '25ml', total: '60ml sartén' },
      { name: 'Manteca pura', he: '12g', she: '8g', total: '20g sartén' },
      { name: 'Sal, pimienta y nuez moscada', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Sazonar las piezas de carré de cerdo (180g para Él, 130g para Ella) y hornear a 190°C durante 25 minutos.',
      'En una sartén amplia, saltear las espinacas (240g) con los 20g de manteca por 2 minutos.',
      'Añadir los 60ml de crema de leche, sal, pimienta y nuez moscada, cocinando 2 minutos más a fuego suave.',
      'Servir las porciones de cerdo (180g crudo para Él, 130g para Ella) acompañadas de las espinacas a la crema (60% para Él, 40% para Ella).'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Hornear las piezas de carré individuales. Preparar las espinacas a la crema juntas y repartir el 60% en el plato de Él y el 40% en el de Ella.',
      servingHe: {
        percentage: '60%',
        proteinCooked: '~140g carré de cerdo horneado jugoso',
        sides: '~180g espinacas a la crema (60%)',
        fatsAndToppings: '35ml crema de leche + 12g manteca',
        plateTotalApprox: '~320g servido en plato',
        ruleNote: 'Servir su pieza de cerdo con el 60% de las espinacas a la crema recién preparadas.'
      },
      servingShe: {
        percentage: '40%',
        proteinCooked: '~100g carré de cerdo horneado jugoso',
        sides: '~120g espinacas a la crema (40%)',
        fatsAndToppings: '25ml crema de leche + 8g manteca',
        plateTotalApprox: '~220g servido en plato',
        ruleNote: 'Servir su pieza de cerdo con el 40% de las espinacas a la crema recién preparadas.'
      }
    },
    tags: ['Keto', 'Día 20', 'Horno', 'Cerdo', 'Espinaca', 'Crema'],
    createdAt: '2026-10-20'
  },
  {
    id: 'keto-d20-cena',
    dayNumber: 20,
    title: 'Ensalada Grande de Atún, Palta, Huevo Duro y Lechuga',
    mealType: 'cena',
    cookingMethod: 'sin_coccion',
    prepTimeMinutes: 15,
    servings: 1,
    calories: 490,
    proteinGrams: 38,
    carbsGrams: 5,
    fatsGrams: 35,
    imageUrl: '/src/assets/images/recipe_pollo_brocoli_palta_1792712404721.jpg',
    description: 'Ensalada saciante y fresca con lomitos de atún escurridos, huevo duro picado, media palta en rodajas y lechuga con oliva virgen.',
    ingredients: [
      '120g de atún en conserva escurrido',
      '1 huevo duro',
      '80g de palta fresca (1/2 unidad)',
      '80g de lechuga fresca',
      '18ml de aceite de oliva extra virgen',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Hervir 1 huevo durante 9 minutos, enfriar, pelar y cortar en cuartos.',
      'Lavar y trocear los 80g de lechuga fresca en el plato como base.',
      'Disponer por encima los 120g de atún escurrido, la media palta (80g) en rodajas y el huevo duro.',
      'Condimentar con sal, pimienta y los 18ml de aceite de oliva extra virgen.'
    ],
    differentialIngredients: [
      { name: 'Atún en conserva escurrido', he: '120g', she: '90g', total: '210g' },
      { name: 'Huevo duro', he: '1 huevo', she: '1 huevo', total: '2 huevos' },
      { name: 'Palta fresca', he: '80g (1/2 palta)', she: '50g (1/3 palta)', total: '~130g' },
      { name: 'Lechuga fresca', he: '80g', she: '80g', total: '160g' },
      { name: 'Aceite de oliva extra virgen', he: '18ml', she: '12ml', total: '30ml' },
      { name: 'Sal y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Hervir 2 huevos durante 9 minutos en agua caliente, pelar y trocear.',
      'Montar las dos ensaladas sobre colchón de lechuga distribuida equitativamente (80g en cada plato).',
      'Añadir en el plato de Él: 120g de atún escurrido, 80g de palta y 1 huevo duro. Aderezar con 18ml de oliva.',
      'Añadir en el plato de Ella: 90g de atún escurrido, 50g de palta y 1 huevo duro. Aderezar con 12ml de oliva.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Montar ensaladas en platos individuales según los pesos de balanza: 120g atún y 80g palta para Él; 90g atún y 50g palta para Ella.',
      servingHe: {
        percentage: '57%',
        proteinCooked: '120g atún escurrido + 1 huevo duro',
        sides: '80g lechuga fresca + 80g palta (1/2 u)',
        fatsAndToppings: '18ml aceite de oliva extra virgen',
        plateTotalApprox: '~350g ensalada servida',
        ruleNote: 'Servir con 120g de atún, media palta y 18ml de oliva.'
      },
      servingShe: {
        percentage: '43%',
        proteinCooked: '90g atún escurrido + 1 huevo duro',
        sides: '80g lechuga fresca + 50g palta (1/3 u)',
        fatsAndToppings: '12ml aceite de oliva extra virgen',
        plateTotalApprox: '~280g ensalada servida',
        ruleNote: 'Servir con 90g de atún, un tercio de palta y 12ml de oliva.'
      }
    },
    tags: ['Keto', 'Día 20', 'Fresco', 'Atún', 'Palta', 'Huevo'],
    createdAt: '2026-10-20'
  },

  // ==================== DÍA 21 ====================
  {
    id: 'keto-d21-almuerzo',
    dayNumber: 21,
    title: 'Bifes de Cuadril con Pimientos Salteados a la Manteca y Ensalada Verde',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 550,
    proteinGrams: 46,
    carbsGrams: 5,
    fatsGrams: 38,
    imageUrl: '/src/assets/images/recipe_bife_chorizo_1792712404795.jpg',
    description: 'Cuadril sellado jugoso a la plancha cubierto de pimientos verdes salteados en manteca con guarnición de ensalada verde fresca.',
    ingredients: [
      '200g de bife de cuadril',
      '80g de pimiento verde en tiras',
      '15g de manteca pura',
      '60g de ensalada verde (rúcula y lechuga)',
      '15ml de aceite de oliva extra virgen',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Cortar 80g de pimiento verde en juliana fina y saltear en sartén con 15g de manteca por 5 minutos hasta tiernizar.',
      'Cocinar el bife de cuadril (200g) a la plancha a fuego fuerte durante 3-4 minutos por lado.',
      'Montar el bife caliente en el plato cubierto con los pimientos salteados a la manteca.',
      'Acompañar con los 60g de ensalada verde aderezada con 15ml de aceite de oliva.'
    ],
    differentialIngredients: [
      { name: 'Bife de cuadril', he: '200g', she: '140g', total: '340g' },
      { name: 'Pimiento verde en tiras', he: '80g', she: '80g', total: '160g' },
      { name: 'Manteca pura', he: '15g', she: '10g', total: '25g sartén' },
      { name: 'Ensalada verde (rúcula/lechuga)', he: '60g', she: '60g', total: '120g' },
      { name: 'Aceite de oliva extra virgen', he: '15ml', she: '10ml', total: '25ml' }
    ],
    instructionsCombined: [
      'Saltear los 160g de pimiento verde en sartén con los 25g de manteca durante 5 minutos hasta que estén tiernos.',
      'Cocinar los bifes de cuadril a la plancha bien caliente a fuego fuerte por 3-4 minutos por lado.',
      'Servir el bife de 200g para Él (~150g cocido) con la mitad de los pimientos salteados y su ensalada aderezada con 15ml de oliva.',
      'Servir el bife de 140g para Ella (~105g cocido) con la otra mitad de pimientos y su ensalada con 10ml de oliva.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Cocinar bifes separados. Distribuir los pimientos salteados en manteca sobre cada bife y acompañar con ensalada verde.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '~150g bife de cuadril jugoso a la plancha',
        sides: '80g pimientos salteados + 60g ensalada verde',
        fatsAndToppings: '15g manteca salteado + 15ml aceite de oliva',
        plateTotalApprox: '~320g servido en plato',
        ruleNote: 'Servir su bife de 200g con la mitad de pimientos y 15ml de oliva en la ensalada.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '~105g bife de cuadril jugoso a la plancha',
        sides: '80g pimientos salteados + 60g ensalada verde',
        fatsAndToppings: '10g manteca salteado + 10ml aceite de oliva',
        plateTotalApprox: '~260g servido en plato',
        ruleNote: 'Servir su bife de 140g con la mitad de pimientos y 10ml de oliva en la ensalada.'
      }
    },
    tags: ['Keto', 'Día 21', 'Plancha', 'Carne Vacuna', 'Pimientos'],
    createdAt: '2026-10-21'
  },
  {
    id: 'keto-d21-cena',
    dayNumber: 21,
    title: 'Omelette de Jamón, Queso Mozzarella y Orégano con Rodajas de Tomate',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 15,
    servings: 1,
    calories: 470,
    proteinGrams: 32,
    carbsGrams: 4,
    fatsGrams: 36,
    imageUrl: '/src/assets/images/recipe_omelette_espinaca_1792713324934.jpg',
    description: 'Clásico omelette doblado relleno de jamón en tiras y mozzarella fundida aromatizada con orégano, con guarnición de tomate fresco.',
    ingredients: [
      '3 huevos de campo',
      '35g de jamón cocido en tiras',
      '35g de queso mozzarella',
      '80g de tomate en rodajas',
      '15ml de aceite de oliva extra virgen',
      'Orégano y sal a gusto'
    ],
    instructions: [
      'Batir los 3 huevos con una pizca de sal.',
      'Calentar una sartén con un poco de oliva, verter los huevos y cocinar a fuego medio-bajo.',
      'Rellenar sobre una mitad con los 35g de jamón cocido en tiras, 35g de mozzarella y orégano seco. Doblar y tapar 2 minutos para fundir.',
      'Servir acompañado de los 80g de tomate en rodajas sazonados con sal, orégano y los 15ml de aceite de oliva.'
    ],
    differentialIngredients: [
      { name: 'Huevos de campo', he: '3 huevos', she: '2 huevos', total: '5 huevos' },
      { name: 'Jamón cocido en tiras', he: '35g', she: '25g', total: '60g' },
      { name: 'Queso mozzarella', he: '35g', she: '25g', total: '60g' },
      { name: 'Tomate en rodajas', he: '80g', she: '80g', total: '160g' },
      { name: 'Aceite de oliva extra virgen', he: '15ml', she: '10ml', total: '25ml' },
      { name: 'Orégano y sal', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Preparar los dos omelettes individualmente en sartén con un hilo de oliva:',
      'Para Él: Batir 3 huevos, cuajar a fuego suave, rellenar con 35g de jamón, 35g de mozzarella y orégano. Doblar y fundir.',
      'Para Ella: Batir 2 huevos, cuajar, rellenar con 25g de jamón, 25g de mozzarella y orégano. Doblar y fundir.',
      'Servir cada omelette caliente acompañado con 80g de tomate en rodajas sazonado con orégano y su oliva correspondiente (15ml para Él, 10ml para Ella).'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Preparar dos omelettes individuales según sus proporciones exactas. Servir con rodajas de tomate condimentadas.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '3 huevos + 35g jamón cocido + 35g mozzarella fundida',
        sides: '80g tomate fresco en rodajas con orégano',
        fatsAndToppings: '15ml aceite de oliva extra virgen',
        plateTotalApprox: '~300g servido en plato',
        ruleNote: 'Servir su omelette de 3 huevos recién hecho y fundido con sus rodajas de tomate.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '2 huevos + 25g jamón cocido + 25g mozzarella fundida',
        sides: '80g tomate fresco en rodajas con orégano',
        fatsAndToppings: '10ml aceite de oliva extra virgen',
        plateTotalApprox: '~230g servido en plato',
        ruleNote: 'Servir su omelette de 2 huevos recién hecho y fundido con sus rodajas de tomate.'
      }
    },
    tags: ['Keto', 'Día 21', 'Sartén', 'Huevos', 'Jamón', 'Mozzarella'],
    createdAt: '2026-10-21'
  },

  // ==================== DÍA 22 ====================
  {
    id: 'keto-d22-almuerzo',
    dayNumber: 22,
    title: 'Pechuga de Pollo Grillada con Ensalada de Repollo, Tomate y Palta',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 520,
    proteinGrams: 45,
    carbsGrams: 6,
    fatsGrams: 35,
    imageUrl: '/src/assets/images/recipe_pollo_brocoli_palta_1792712404721.jpg',
    description: 'Pechuga de pollo a la plancha bien dorada con crujiente ensalada de repollo fino, tomate y palta aderezada con oliva virgen.',
    ingredients: [
      '180g de pechuga de pollo',
      '70g de repollo blanco o colorado cortado fino',
      '60g de tomate redondo',
      '80g de palta fresca (1/2 unidad)',
      '18ml de aceite de oliva extra virgen',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Salpimentar la pechuga de pollo (180g).',
      'Grillar en plancha bien caliente durante 6 minutos por lado hasta que esté bien dorada y jugosa.',
      'Cortar el repollo bien fino y mezclar con el tomate y la media palta (80g) en rodajas.',
      'Servir la pechuga caliente con la ensalada crujiente aderezada con los 18ml de aceite de oliva.'
    ],
    differentialIngredients: [
      { name: 'Pechuga de pollo', he: '180g', she: '130g', total: '310g' },
      { name: 'Repollo blanco/colorado fino', he: '70g', she: '70g', total: '140g' },
      { name: 'Tomate redondo', he: '60g', she: '60g', total: '120g' },
      { name: 'Palta fresca', he: '80g (1/2 palta)', she: '50g (1/3 palta)', total: '~130g' },
      { name: 'Aceite de oliva extra virgen', he: '18ml', she: '12ml', total: '30ml' },
      { name: 'Sal y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Grillar las dos pechugas de pollo salpimentadas en plancha caliente durante 6 minutos por lado.',
      'Mezclar el repollo cortado fino (70g cada uno) con el tomate picado (60g cada uno).',
      'Servir en el plato de Él su pechuga de 180g cruda (~135g cocida), 80g de palta y la ensalada con 18ml de oliva.',
      'Servir en el plato de Ella su pechuga de 130g cruda (~95g cocida), 50g de palta y la ensalada con 12ml de oliva.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Grillar pechugas individuales. Distribuir la ensalada de repollo y palta según los pesos de balanza de cada plato.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '~135g pechuga dorada jugosa',
        sides: '70g repollo fino + 60g tomate + 80g palta fresca',
        fatsAndToppings: '18ml aceite de oliva extra virgen',
        plateTotalApprox: '~360g servido en plato',
        ruleNote: 'Servir su pechuga de 180g cruda con media palta y ensalada aderezada.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '~95g pechuga dorada jugosa',
        sides: '70g repollo fino + 60g tomate + 50g palta fresca',
        fatsAndToppings: '12ml aceite de oliva extra virgen',
        plateTotalApprox: '~285g servido en plato',
        ruleNote: 'Servir su pechuga de 130g cruda con 1/3 palta y ensalada aderezada.'
      }
    },
    tags: ['Keto', 'Día 22', 'Plancha', 'Pollo', 'Palta', 'Repollo'],
    createdAt: '2026-10-22'
  },
  {
    id: 'keto-d22-cena',
    dayNumber: 22,
    title: 'Hamburguesas Caseras de Res al Plato con Huevo Frito y Queso Cremoso',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 580,
    proteinGrams: 46,
    carbsGrams: 2,
    fatsGrams: 43,
    imageUrl: '/src/assets/images/recipe_hamburguesa_huevo_1792713324729.jpg',
    description: 'Hamburguesas de pura carne vacuna a la plancha fundidas con queso cremoso y coronadas con huevo frito de yema tierna.',
    ingredients: [
      '180g de carne picada de res',
      '35g de queso cremoso',
      '1 huevo frito',
      '15g de manteca pura o grasa animal',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Moldear la hamburguesa de 180g condimentada con sal y pimienta.',
      'Cocinar a la plancha a fuego medio-alto durante 4 minutos por lado.',
      'Colocar los 35g de queso cremoso arriba y tapar la sartén para derretir.',
      'Freír el huevo en la manteca o grasa animal hasta que la clara cuaje y la yema quede tierna.',
      'Servir la hamburguesa al plato coronada con el huevo frito caliente.'
    ],
    differentialIngredients: [
      { name: 'Carne picada de res', he: '180g', she: '130g', total: '310g' },
      { name: 'Queso cremoso', he: '35g', she: '25g', total: '60g' },
      { name: 'Huevo de campo para freír', he: '1 huevo', she: '1 huevo', total: '2 huevos' },
      { name: 'Manteca o grasa animal', he: '15g', she: '10g', total: '25g sartén' },
      { name: 'Sal y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Formar las dos hamburguesas (180g para Él, 130g para Ella). Cocinarlas a la plancha 4 minutos por lado y colocar el queso cremoso arriba (35g y 25g) para derretir tapadas.',
      'Freír los 2 huevos en los 25g de manteca o grasa animal a fuego medio.',
      'Servir cada hamburguesa al plato con su queso fundido coronada con su respectivo huevo frito.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Cocinar hamburguesas y huevos de manera individual. Servir a Él su hamburguesa de 180g con 35g de queso y 1 huevo frito; y a Ella la de 130g con 25g de queso y 1 huevo frito.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '~140g hamburguesa de res + 1 huevo frito + 35g queso cremoso',
        sides: 'Plato principal proteico keto al plato',
        fatsAndToppings: '15g manteca/grasa de fritura del huevo',
        plateTotalApprox: '~240g servido en plato',
        ruleNote: 'Servir su hamburguesa de 180g con queso fundido y huevo frito arriba.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '~100g hamburguesa de res + 1 huevo frito + 25g queso cremoso',
        sides: 'Plato principal proteico keto al plato',
        fatsAndToppings: '10g manteca/grasa de fritura del huevo',
        plateTotalApprox: '~190g servido en plato',
        ruleNote: 'Servir su hamburguesa de 130g con queso fundido y huevo frito arriba.'
      }
    },
    tags: ['Keto', 'Día 22', 'Plancha', 'Carne Vacuna', 'Huevo Frito', 'Queso'],
    createdAt: '2026-10-22'
  },

  // ==================== DÍA 23 ====================
  {
    id: 'keto-d23-almuerzo',
    dayNumber: 23,
    title: 'Matambre a la Plancha con Ensalada de Rúcula y Parmesano',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 550,
    proteinGrams: 44,
    carbsGrams: 3,
    fatsGrams: 41,
    imageUrl: '/src/assets/images/recipe_bife_chorizo_1792712404795.jpg',
    description: 'Matambre a la plancha crocante por fuera y tierno por dentro, servido con ensalada de rúcula y hebras de queso sardo o parmesano.',
    ingredients: [
      '180g de matambre de res o cerdo',
      '80g de rúcula fresca',
      '20g de queso sardo o parmesano en hebras',
      '20ml de aceite de oliva extra virgen',
      'Sal gruesa y pimienta a gusto'
    ],
    instructions: [
      'Cocinar el matambre (180g) a la plancha caliente a fuego medio-alto durante 5 minutos por lado. Salar con sal gruesa al dar vuelta.',
      'Lavar y secar bien los 80g de rúcula fresca.',
      'Mezclar la rúcula con los 20g de queso en hebras y aderezar con los 20ml de aceite de oliva extra virgen.',
      'Servir el matambre bien caliente recién salido de la plancha junto a la ensalada.'
    ],
    differentialIngredients: [
      { name: 'Matambre de res o cerdo', he: '180g', she: '130g', total: '310g' },
      { name: 'Rúcula fresca', he: '80g', she: '80g', total: '160g' },
      { name: 'Queso sardo/parmesano en hebras', he: '20g', she: '15g', total: '35g' },
      { name: 'Aceite de oliva extra virgen', he: '20ml', she: '15ml', total: '35ml' },
      { name: 'Sal gruesa y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Cocinar los matambres a la plancha a fuego medio-alto durante 5 minutos por lado. Salar al dar vuelta con sal gruesa.',
      'Mezclar la rúcula (80g cada uno) con el queso en hebras (20g para Él, 15g para Ella) y aderezar con oliva (20ml para Él, 15ml para Ella).',
      'Servir el matambre caliente (180g crudo para Él, 130g para Ella) con la ensalada al lado.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Cocinar las piezas de matambre por separado. Servir a Él su pieza de 180g cruda (~135g cocida) y a Ella su pieza de 130g cruda (~95g cocida) con su ensalada y queso.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '~135g matambre dorado crocante + 20g queso en hebras',
        sides: '80g rúcula fresca limpia',
        fatsAndToppings: '20ml aceite de oliva extra virgen',
        plateTotalApprox: '~255g servido en plato',
        ruleNote: 'Servir su matambre de 180g con 20g de hebras de queso y 20ml de oliva.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '~95g matambre dorado crocante + 15g queso en hebras',
        sides: '80g rúcula fresca limpia',
        fatsAndToppings: '15ml aceite de oliva extra virgen',
        plateTotalApprox: '~205g servido en plato',
        ruleNote: 'Servir su matambre de 130g con 15g de hebras de queso y 15ml de oliva.'
      }
    },
    tags: ['Keto', 'Día 23', 'Plancha', 'Matambre', 'Parmesano', 'Rúcula'],
    createdAt: '2026-10-23'
  },
  {
    id: 'keto-d23-cena',
    dayNumber: 23,
    title: 'Salteado de Tiras de Pollo y Brócoli a la Manteca con Ajo',
    mealType: 'cena',
    cookingMethod: 'salteado_wok',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 490,
    proteinGrams: 44,
    carbsGrams: 6,
    fatsGrams: 32,
    imageUrl: '/src/assets/images/recipe_wok_pollo_zuchini_1792713326934.jpg',
    description: 'Pollo en tiras tiernizado y salteado al wok en abundante manteca con ajo aromático y floretes de brócoli al dente.',
    ingredients: [
      '180g de pollo en tiras',
      '150g de brócoli cocido al vapor',
      '20g de manteca pura',
      '1 diente de ajo picado, sal y pimienta'
    ],
    instructions: [
      'Cocinar 150g de brócoli al vapor durante 4 minutos hasta que esté al dente.',
      'En un wok o sartén grande, derretir los 20g de manteca con el diente de ajo picado.',
      'Agregar los 180g de pollo en tiras y saltear a fuego fuerte por 5 minutos hasta dorar.',
      'Incorporar el brócoli y saltear 2 minutos más integrando los jugos de cocción. Salpimentar y servir caliente.'
    ],
    differentialIngredients: [
      { name: 'Pollo en tiras', he: '180g', she: '130g', total: '310g' },
      { name: 'Brócoli al vapor', he: '150g', she: '150g', total: '300g' },
      { name: 'Manteca pura', he: '20g', she: '15g', total: '35g sartén' },
      { name: 'Ajo picado, sal y pimienta', he: '1 diente, gusto', she: '1 diente, gusto', total: '1-2 dientes' }
    ],
    instructionsCombined: [
      'Derretir la manteca (35g) en wok o sartén grande con el ajo picado.',
      'Saltear las tiras de pollo (310g) por 5 minutos hasta que estén doradas.',
      'Incorporar los 300g de brócoli al vapor y saltear 2 minutos más revolviendo bien.',
      'Servir el 58% de la preparación en el plato de Él (~340g servido) y el 42% en el plato de Ella (~250g servido).'
    ],
    cookedServing: {
      dishType: 'integrado',
      servingRuleSummary: 'Al preparar todo junto en el wok (310g pollo, 300g brócoli, 35g manteca), servir el 58% en el plato de Él y el 42% en el de Ella.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '~135g pollo salteado en tiras',
        sides: '150g brócoli al vapor integrado en manteca',
        fatsAndToppings: '20g manteca con ajo salteado',
        plateTotalApprox: '~340g salteado en plato',
        ruleNote: 'Servir el 58% del wok caliente en su plato.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '~95g pollo salteado en tiras',
        sides: '150g brócoli al vapor integrado en manteca',
        fatsAndToppings: '15g manteca con ajo salteado',
        plateTotalApprox: '~250g salteado en plato',
        ruleNote: 'Servir el 42% del wok caliente en su plato.'
      }
    },
    tags: ['Keto', 'Día 23', 'Wok', 'Pollo', 'Brócoli', 'Manteca'],
    createdAt: '2026-10-23'
  },

  // ==================== DÍA 24 ====================
  {
    id: 'keto-d24-almuerzo',
    dayNumber: 24,
    title: 'Bife de Chorizo con Ensalada de Radicheta, Tomate y Palta',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 610,
    proteinGrams: 47,
    carbsGrams: 6,
    fatsGrams: 45,
    imageUrl: '/src/assets/images/recipe_bife_chorizo_1792712404795.jpg',
    description: 'Sabroso bife de chorizo a la plancha bien sellado con ensalada fresca de radicheta suave, tomate y palta en láminas con oliva virgen.',
    ingredients: [
      '200g de bife de chorizo',
      '60g de radicheta o lechuga fresca',
      '60g de tomate redondo',
      '80g de palta fresca (1/2 unidad)',
      '20ml de aceite de oliva extra virgen',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Cocinar el bife de chorizo (200g) a la plancha a fuego alto durante 4-5 minutos por lado según el punto deseado. Salar al voltear.',
      'Lavar y secar la radicheta. Cortar el tomate y la media palta (80g) en rodajas finas.',
      'Aderezar la ensalada con los 20ml de aceite de oliva extra virgen.',
      'Servir el bife jugoso recién salido junto a la ensalada.'
    ],
    differentialIngredients: [
      { name: 'Bife de chorizo', he: '200g', she: '140g', total: '340g' },
      { name: 'Radicheta o lechuga fresca', he: '60g', she: '60g', total: '120g' },
      { name: 'Tomate redondo', he: '60g', she: '60g', total: '120g' },
      { name: 'Palta fresca', he: '80g (1/2 palta)', she: '50g (1/3 palta)', total: '~130g' },
      { name: 'Aceite de oliva extra virgen', he: '20ml', she: '15ml', total: '35ml' },
      { name: 'Sal y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Cocinar los bifes de chorizo a la plancha a fuego alto durante 4-5 minutos por lado.',
      'Armar las ensaladas con radicheta (60g cada uno), tomate (60g cada uno) y la palta (80g para Él, 50g para Ella).',
      'Aderezar con oliva (20ml para Él, 15ml para Ella).',
      'Servir el bife de 200g para Él (~150g cocido) y el de 140g para Ella (~105g cocido) con sus respectivas ensaladas.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Cocinar los bifes a la plancha de forma individual. Servir a Él su pieza de 200g cruda con media palta y a Ella la de 140g con 1/3 palta.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '~150g bife de chorizo a punto',
        sides: '60g radicheta + 60g tomate + 80g palta fresca',
        fatsAndToppings: '20ml aceite de oliva extra virgen',
        plateTotalApprox: '~370g servido en plato',
        ruleNote: 'Servir su bife de 200g con media palta y ensalada aderezada con 20ml de oliva.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '~105g bife de chorizo a punto',
        sides: '60g radicheta + 60g tomate + 50g palta fresca',
        fatsAndToppings: '15ml aceite de oliva extra virgen',
        plateTotalApprox: '~280g servido en plato',
        ruleNote: 'Servir su bife de 140g con 1/3 palta y ensalada aderezada con 15ml de oliva.'
      }
    },
    tags: ['Keto', 'Día 24', 'Plancha', 'Carne Vacuna', 'Palta'],
    createdAt: '2026-10-24'
  },
  {
    id: 'keto-d24-cena',
    dayNumber: 24,
    title: 'Tarta Keto de Acelga y Queso sin Masa',
    mealType: 'cena',
    cookingMethod: 'horno',
    prepTimeMinutes: 30,
    servings: 1,
    calories: 460,
    proteinGrams: 26,
    carbsGrams: 5,
    fatsGrams: 37,
    imageUrl: '/src/assets/images/recipe_tarta_keto_espinaca_1792712405870.jpg',
    description: 'Suave flan o tarta salada keto horneada sin masa, con acelga tiernizada, crema de leche y dados fundidos de queso cremoso.',
    ingredients: [
      '150g de acelga cocida bien escurrida',
      '2 huevos de campo',
      '40ml de crema de leche entera',
      '40g de queso cremoso en cubos',
      'Sal, pimienta y nuez moscada'
    ],
    instructions: [
      'Precalentar el horno a 180°C.',
      'Mezclar los 2 huevos batidos con los 40ml de crema de leche, la acelga cocida picada y condimentar con nuez moscada, sal y pimienta.',
      'Verter en molde o fuente apta para horno e intercalar los 40g de cubos de queso cremoso.',
      'Hornear durante 20 a 25 minutos hasta que cuaje firme y dore en la superficie. Servir tibia.'
    ],
    differentialIngredients: [
      { name: 'Acelga cocida bien escurrida', he: '150g', she: '150g', total: '300g' },
      { name: 'Huevos de campo', he: '2 huevos', she: '1.5 huevos', total: '3-4 huevos chicos' },
      { name: 'Crema de leche entera', he: '40ml', she: '30ml', total: '70ml' },
      { name: 'Queso cremoso en cubos', he: '40g', she: '25g', total: '65g' },
      { name: 'Sal, pimienta y nuez moscada', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Precalentar el horno a 180°C. Mezclar los huevos batidos con los 70ml de crema, la acelga picada bien escurrida (300g) y los condimentos.',
      'Verter en una fuente para horno e incorporar los 65g de cubos de queso cremoso distribuidos.',
      'Hornear durante 20 a 25 minutos hasta dorar y cuajar completamente.',
      'Servir el 60% de la tarta para Él (~310g) y el 40% para Ella (~210g).'
    ],
    cookedServing: {
      dishType: 'integrado',
      servingRuleSummary: 'Hornear la tarta sin masa junta en una fuente. Servir el 60% en el plato de Él y el 40% en el plato de Ella.',
      servingHe: {
        percentage: '60%',
        proteinCooked: '2 huevos + 40g queso cremoso fundido',
        sides: '150g acelga en preparación horneada',
        fatsAndToppings: '40ml crema de leche horneada',
        plateTotalApprox: '~310g porción de tarta',
        ruleNote: 'Servir el 60% de la tarta horneada en su plato.'
      },
      servingShe: {
        percentage: '40%',
        proteinCooked: '1.5 huevos + 25g queso cremoso fundido',
        sides: '150g acelga en preparación horneada',
        fatsAndToppings: '30ml crema de leche horneada',
        plateTotalApprox: '~210g porción de tarta',
        ruleNote: 'Servir el 40% de la tarta horneada en su plato.'
      }
    },
    tags: ['Keto', 'Día 24', 'Horno', 'Acelga', 'Queso', 'Sin Harinas'],
    createdAt: '2026-10-24'
  },

  // ==================== DÍA 25 ====================
  {
    id: 'keto-d25-almuerzo',
    dayNumber: 25,
    title: 'Medallones de Cerdo a la Crema de Mostaza con Ensalada de Tomate',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 540,
    proteinGrams: 42,
    carbsGrams: 5,
    fatsGrams: 38,
    imageUrl: '/src/assets/images/recipe_churrasco_coliflor_1792713325916.jpg',
    description: 'Medallones de cerdo jugosos a la plancha salseados con crema tibia a la mostaza, acompañados de ensalada de tomate con oliva.',
    ingredients: [
      '180g de medallones de cerdo',
      '30ml de crema de leche entera',
      '5g de mostaza',
      '120g de tomate en rodajas',
      '15ml de aceite de oliva extra virgen',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Cocinar los medallones de cerdo (180g) a la plancha 5 minutos por lado. Reservar en el plato.',
      'En la misma sartén caliente con los jugos de cocción, agregar los 30ml de crema de leche y 5g de mostaza. Reducir durante 2 minutos a fuego bajo.',
      'Verter la salsa de crema de mostaza sobre los medallones calientes.',
      'Acompañar con los 120g de tomate en rodajas aderezados con los 15ml de aceite de oliva.'
    ],
    differentialIngredients: [
      { name: 'Medallones de cerdo', he: '180g', she: '130g', total: '310g' },
      { name: 'Crema de leche entera', he: '30ml', she: '20ml', total: '50ml sartén' },
      { name: 'Mostaza', he: '5g', she: '5g', total: '10g sartén' },
      { name: 'Tomate en rodajas', he: '120g', she: '120g', total: '240g' },
      { name: 'Aceite de oliva extra virgen', he: '15ml', she: '10ml', total: '25ml' }
    ],
    instructionsCombined: [
      'Cocinar los medallones de cerdo (180g para Él, 130g para Ella) a la plancha 5 minutos por lado. Reservar en los platos.',
      'En la misma sartén, reducir la crema (50ml) con la mostaza (10g) durante 2 minutos a fuego bajo.',
      'Servir el 60% de la salsa sobre los medallones de Él y el 40% sobre los de Ella.',
      'Acompañar con la ensalada de tomate (120g cada uno) con oliva (15ml para Él, 10ml para Ella).'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Cocinar medallones individuales a la plancha. Reducir la salsa en sartén y repartir 60% a Él y 40% a Ella, con ensalada de tomate.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '~140g medallones de cerdo dorados',
        sides: '120g rodajas de tomate fresco',
        fatsAndToppings: '30ml crema de mostaza + 15ml aceite de oliva',
        plateTotalApprox: '~310g servido en plato',
        ruleNote: 'Servir sus medallones de 180g con salsa de mostaza y ensalada con 15ml de oliva.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '~100g medallones de cerdo dorados',
        sides: '120g rodajas de tomate fresco',
        fatsAndToppings: '20ml crema de mostaza + 10ml aceite de oliva',
        plateTotalApprox: '~250g servido en plato',
        ruleNote: 'Servir sus medallones de 130g con salsa de mostaza y ensalada con 10ml de oliva.'
      }
    },
    tags: ['Keto', 'Día 25', 'Plancha', 'Cerdo', 'Crema', 'Mostaza'],
    createdAt: '2026-10-25'
  },
  {
    id: 'keto-d25-cena',
    dayNumber: 25,
    title: 'Salteado de Carne Picada Estilo Fajita Keto con Palta',
    mealType: 'cena',
    cookingMethod: 'salteado_wok',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 530,
    proteinGrams: 42,
    carbsGrams: 6,
    fatsGrams: 37,
    imageUrl: '/src/assets/images/recipe_medallones_res_queso_1792712404767.jpg',
    description: 'Carne picada de res salteada con pimiento verde en juliana y bastones de zuchini aromatizada con comino, servida con palta fresca.',
    ingredients: [
      '180g de carne picada de res',
      '60g de pimiento verde en juliana',
      '80g de zuchini en bastones',
      '80g de palta fresca (1/2 unidad)',
      '15ml de aceite de oliva extra virgen',
      'Sal y comino a gusto'
    ],
    instructions: [
      'Calentar los 15ml de aceite de oliva en una sartén grande.',
      'Saltear la carne picada (180g) con los 60g de pimiento y 80g de zuchini durante 7 minutos hasta cocinar la carne y dorar los vegetales.',
      'Sazonar con sal y una pizca de comino.',
      'Servir el salteado caliente acompañado con la media palta (80g) cortada en cubos.'
    ],
    differentialIngredients: [
      { name: 'Carne picada de res', he: '180g', she: '130g', total: '310g' },
      { name: 'Pimiento verde en juliana', he: '60g', she: '60g', total: '120g' },
      { name: 'Zuchini en bastones', he: '80g', she: '80g', total: '160g' },
      { name: 'Palta fresca', he: '80g (1/2 palta)', she: '50g (1/3 palta)', total: '~130g' },
      { name: 'Aceite de oliva extra virgen', he: '15ml', she: '10ml', total: '25ml sartén' },
      { name: 'Sal y comino a gusto', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Saltear la carne picada (310g) con el pimiento (120g) y el zuchini (160g) en los 25ml de oliva por 7 minutos hasta cocinar la carne.',
      'Sazonar con sal y una pizca de comino.',
      'Servir el salteado caliente: 58% en el plato de Él (~260g salteado) y 42% en el plato de Ella (~190g salteado).',
      'Acompañar con la palta troceada (80g para Él, 50g para Ella).'
    ],
    cookedServing: {
      dishType: 'integrado',
      servingRuleSummary: 'Cocinar el salteado estilo fajita todo junto en la sartén. Servir el 58% a Él con 80g de palta y el 42% a Ella con 50g de palta.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '~140g carne picada cocida salteada',
        sides: '60g pimiento + 80g zuchini salteado + 80g palta fresca',
        fatsAndToppings: '15ml aceite de oliva de cocción',
        plateTotalApprox: '~340g servido en plato',
        ruleNote: 'Servir el 58% del salteado con media palta troceada fresca.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '~100g carne picada cocida salteada',
        sides: '60g pimiento + 80g zuchini salteado + 50g palta fresca',
        fatsAndToppings: '10ml aceite de oliva de cocción',
        plateTotalApprox: '~240g servido en plato',
        ruleNote: 'Servir el 42% del salteado con un tercio de palta troceada fresca.'
      }
    },
    tags: ['Keto', 'Día 25', 'Salteado', 'Carne Vacuna', 'Palta', 'Fajita'],
    createdAt: '2026-10-25'
  },

  // ==================== DÍA 26 ====================
  {
    id: 'keto-d26-almuerzo',
    dayNumber: 26,
    title: 'Filete de Merluza al Limón con Puré de Coliflor',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 25,
    servings: 1,
    calories: 460,
    proteinGrams: 44,
    carbsGrams: 6,
    fatsGrams: 28,
    imageUrl: '/src/assets/images/recipe_merluza_acelga_1792713325749.jpg',
    description: 'Pescado blanco tierno a la plancha aromatizado con manteca y jugo de limón fresco, sobre suave puré de coliflor.',
    ingredients: [
      '220g de filete de merluza fresca',
      '200g de coliflor fresco',
      '22g de manteca pura',
      'Jugo de 1/2 limón, sal y pimienta'
    ],
    instructions: [
      'Hervir los 200g de coliflor durante 10 minutos, escurrir bien y procesar con 12g de manteca, sal y pimienta.',
      'Cocinar la merluza (220g) a la plancha con los 10g restantes de manteca y jugo de limón durante 3 minutos por lado.',
      'Servir la merluza jugosa acompañada del puré cremoso de coliflor.'
    ],
    differentialIngredients: [
      { name: 'Filete de merluza fresca', he: '220g', she: '150g', total: '370g' },
      { name: 'Coliflor fresco', he: '200g', she: '200g', total: '400g' },
      { name: 'Manteca pura', he: '22g', she: '15g', total: '37g (puré y sartén)' },
      { name: 'Jugo de 1/2 limón, sal y pimienta', he: 'A gusto', she: 'A gusto', total: '1/2 limón' }
    ],
    instructionsCombined: [
      'Hervir la coliflor (400g) por 10 minutos, escurrir bien y procesar con 20g de manteca, sal y pimienta.',
      'Cocinar la merluza a la plancha con la manteca restante (17g) y el jugo de limón 3 minutos por lado.',
      'Servir en el plato de Él su pieza de 220g de merluza cruda (~175g cocida) con el 55% del puré (~230g).',
      'Servir en el plato de Ella su pieza de 150g cruda (~120g cocida) con el 45% del puré (~190g).'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Cocinar los filetes de merluza a la plancha con limón. Procesar la coliflor y servir el 55% del puré a Él y el 45% a Ella.',
      servingHe: {
        percentage: '55%',
        proteinCooked: '~175g merluza al limón dorada',
        sides: '~230g puré de coliflor cremoso (55%)',
        fatsAndToppings: '22g manteca pura repartida en cocción',
        plateTotalApprox: '~400g servido en plato',
        ruleNote: 'Servir su filete de 220g con el 55% del puré de coliflor.'
      },
      servingShe: {
        percentage: '45%',
        proteinCooked: '~120g merluza al limón dorada',
        sides: '~190g puré de coliflor cremoso (45%)',
        fatsAndToppings: '15g manteca pura repartida en cocción',
        plateTotalApprox: '~310g servido en plato',
        ruleNote: 'Servir su filete de 150g con el 45% del puré de coliflor.'
      }
    },
    tags: ['Keto', 'Día 26', 'Plancha', 'Pescado', 'Coliflor'],
    createdAt: '2026-10-26'
  },
  {
    id: 'keto-d26-cena',
    dayNumber: 26,
    title: 'Revuelto de Espinaca, Huevos y Queso Fresco a la Sartén',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 15,
    servings: 1,
    calories: 450,
    proteinGrams: 28,
    carbsGrams: 4,
    fatsGrams: 35,
    imageUrl: '/src/assets/images/recipe_omelette_espinaca_1792713324934.jpg',
    description: 'Hojas frescas de espinaca salteadas en oliva con huevos revueltos suaves y queso cremoso derretido.',
    ingredients: [
      '3 huevos de campo',
      '80g de espinaca fresca',
      '35g de queso cremoso',
      '15ml de aceite de oliva extra virgen',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Saltear los 80g de espinaca fresca en sartén con los 15ml de aceite de oliva por 1-2 minutos hasta marchitar.',
      'Agregar los 3 huevos batidos con sal y pimienta, revolviendo a fuego medio-bajo.',
      'Añadir los 35g de queso cremoso en cubos justo antes de retirar del fuego para fundir.',
      'Servir tibio y cremoso.'
    ],
    differentialIngredients: [
      { name: 'Huevos de campo', he: '3 huevos', she: '2 huevos', total: '5 huevos' },
      { name: 'Espinaca fresca', he: '80g', she: '80g', total: '160g' },
      { name: 'Queso cremoso', he: '35g', she: '25g', total: '60g' },
      { name: 'Aceite de oliva extra virgen', he: '15ml', she: '10ml', total: '25ml sartén' },
      { name: 'Sal y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Saltear la espinaca (160g) en sartén con los 25ml de oliva por 1-2 minutos.',
      'Agregar los 5 huevos batidos con sal y pimienta, revolviendo suavemente a fuego bajo.',
      'Añadir los 60g de queso en cubos antes de retirar del fuego.',
      'Servir el 60% de la preparación para Él (~280g) y el 40% para Ella (~185g).'
    ],
    cookedServing: {
      dishType: 'integrado',
      servingRuleSummary: 'Cocinar el revuelto en sartén compartida con los 5 huevos y espinaca. Servir el 60% a Él y el 40% a Ella.',
      servingHe: {
        percentage: '60%',
        proteinCooked: '3 huevos revueltos + 35g queso fundido',
        sides: '80g espinaca salteada',
        fatsAndToppings: '15ml aceite de oliva de cocción',
        plateTotalApprox: '~280g servido en plato',
        ruleNote: 'Servir el 60% del revuelto caliente recién salido.'
      },
      servingShe: {
        percentage: '40%',
        proteinCooked: '2 huevos revueltos + 25g queso fundido',
        sides: '80g espinaca salteada',
        fatsAndToppings: '10ml aceite de oliva de cocción',
        plateTotalApprox: '~185g servido en plato',
        ruleNote: 'Servir el 40% del revuelto caliente recién salido.'
      }
    },
    tags: ['Keto', 'Día 26', 'Sartén', 'Huevos', 'Espinaca', 'Queso'],
    createdAt: '2026-10-26'
  },

  // ==================== DÍA 27 ====================
  {
    id: 'keto-d27-almuerzo',
    dayNumber: 27,
    title: 'Muslos de Pollo al Horno con Provenzal y Ensalada Mixta',
    mealType: 'almuerzo',
    cookingMethod: 'horno',
    prepTimeMinutes: 45,
    servings: 1,
    calories: 550,
    proteinGrams: 42,
    carbsGrams: 4,
    fatsGrams: 40,
    imageUrl: '/src/assets/images/recipe_pollo_brocoli_palta_1792712404721.jpg',
    description: 'Pata y muslo al horno con piel crujiente dorada a la provenzal, servido con refrescante ensalada mixta.',
    ingredients: [
      '250g de muslo de pollo con hueso y piel',
      '100g de ensalada mixta (lechuga, tomate, repollo)',
      '18ml de aceite de oliva extra virgen',
      'Ajo, perejil, sal y pimienta a gusto'
    ],
    instructions: [
      'Condimentar el muslo de pollo con ajo, perejil picado, sal y pimienta.',
      'Hornear a 200°C durante 35-40 minutos hasta que la piel esté dorada y crocante.',
      'Armar la ensalada mixta con 100g de lechuga, tomate y repollo picado.',
      'Servir el pollo caliente y aderezar la ensalada con los 18ml de aceite de oliva extra virgen.'
    ],
    differentialIngredients: [
      { name: 'Muslos de pollo con piel y hueso', he: '250g con hueso', she: '180g con hueso', total: '430g' },
      { name: 'Ensalada mixta (lechuga, tomate, repollo)', he: '100g', she: '100g', total: '200g' },
      { name: 'Aceite de oliva extra virgen', he: '18ml', she: '12ml', total: '30ml' },
      { name: 'Ajo, perejil, sal y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Condimentar las piezas de pollo con la provenzal fresca, sal y pimienta.',
      'Hornear a 200°C durante 35 a 40 minutos en asadera hasta dorar la piel.',
      'Armar la ensalada mixta (100g cada uno) y aderezar con oliva (18ml para Él, 12ml para Ella).',
      'Servir la pieza de 250g cruda para Él (~160g cocida) y la de 180g cruda para Ella (~115g cocida) con sus ensaladas.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Hornear piezas de muslo individuales. Servir a Él su pieza de 250g cruda y a Ella la de 180g cruda con sus respectivas ensaladas.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '~160g muslo horneado piel crocante',
        sides: '100g ensalada mixta de lechuga, tomate y repollo',
        fatsAndToppings: '18ml aceite de oliva extra virgen',
        plateTotalApprox: '~280g servido en plato',
        ruleNote: 'Servir su presa de pollo de 250g con ensalada aderezada con 18ml de oliva.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '~115g muslo horneado piel crocante',
        sides: '100g ensalada mixta de lechuga, tomate y repollo',
        fatsAndToppings: '12ml aceite de oliva extra virgen',
        plateTotalApprox: '~230g servido en plato',
        ruleNote: 'Servir su presa de pollo de 180g con ensalada aderezada con 12ml de oliva.'
      }
    },
    tags: ['Keto', 'Día 27', 'Horno', 'Pollo', 'Piel Crocante'],
    createdAt: '2026-10-27'
  },
  {
    id: 'keto-d27-cena',
    dayNumber: 27,
    title: 'Omelette Relleno de Queso Cremoso, Tomate Picado y Orégano',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 15,
    servings: 1,
    calories: 460,
    proteinGrams: 28,
    carbsGrams: 4,
    fatsGrams: 36,
    imageUrl: '/src/assets/images/recipe_omelette_espinaca_1792713324934.jpg',
    description: 'Omelette tierno y fundente relleno de queso cremoso y cubos de tomate fresco perfumados con orégano.',
    ingredients: [
      '3 huevos de campo',
      '40g de queso cremoso',
      '60g de tomate en concassé (cubos)',
      '15ml de aceite de oliva extra virgen',
      'Orégano y sal a gusto'
    ],
    instructions: [
      'Batir los 3 huevos con sal y verter en sartén caliente con aceite de oliva a fuego medio-bajo.',
      'Cuando la base empiece a cuajar, colocar los 40g de queso cremoso, los 60g de tomate en cubitos y espolvorear con orégano sobre una mitad.',
      'Doblar el omelette a la mitad, tapar por 2 minutos hasta que el queso se derrita por completo.',
      'Servir caliente en el plato.'
    ],
    differentialIngredients: [
      { name: 'Huevos de campo', he: '3 huevos', she: '2 huevos', total: '5 huevos' },
      { name: 'Queso cremoso', he: '40g', she: '25g', total: '65g' },
      { name: 'Tomate en concassé (cubos)', he: '60g', she: '60g', total: '120g' },
      { name: 'Aceite de oliva extra virgen', he: '15ml', she: '10ml', total: '25ml sartén' },
      { name: 'Orégano y sal', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Preparar cada omelette individualmente en sartén con un hilo de oliva:',
      'Para Él: Batir 3 huevos, cuajar en sartén, rellenar con 40g de queso cremoso, 60g de tomate picado y orégano. Doblar y fundir.',
      'Para Ella: Batir 2 huevos, cuajar en sartén, rellenar con 25g de queso cremoso, 60g de tomate picado y orégano. Doblar y fundir.',
      'Servir ambos omelettes calientes con el queso fundido en su interior.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Cocinar dos omelettes individuales. Rellenar el de Él con 40g de queso y el de Ella con 25g de queso.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '3 huevos + 40g queso cremoso fundido',
        sides: '60g tomate concassé dentro del relleno',
        fatsAndToppings: '15ml aceite de oliva de cocción + orégano',
        plateTotalApprox: '~270g servido en plato',
        ruleNote: 'Servir su omelette de 3 huevos recién hecho y fundido.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '2 huevos + 25g queso cremoso fundido',
        sides: '60g tomate concassé dentro del relleno',
        fatsAndToppings: '10ml aceite de oliva de cocción + orégano',
        plateTotalApprox: '~200g servido en plato',
        ruleNote: 'Servir su omelette de 2 huevos recién hecho y fundido.'
      }
    },
    tags: ['Keto', 'Día 27', 'Sartén', 'Huevos', 'Tomate', 'Queso'],
    createdAt: '2026-10-27'
  },

  // ==================== DÍA 28 ====================
  {
    id: 'keto-d28-almuerzo',
    dayNumber: 28,
    title: 'Bife de Nalga con Manteca de Ajo y Ensalada de Repollo y Palta',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 560,
    proteinGrams: 46,
    carbsGrams: 6,
    fatsGrams: 39,
    imageUrl: '/src/assets/images/recipe_bife_chorizo_1792712404795.jpg',
    description: 'Bife magro de nalga sellado rápidamente a la plancha fundido con manteca de ajo casera, con ensalada crujiente de repollo y palta.',
    ingredients: [
      '200g de bife de nalga',
      '20g de manteca de ajo',
      '80g de repollo blanco cortado fino',
      '80g de palta fresca (1/2 unidad)',
      '15ml de aceite de oliva extra virgen',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Cocinar el bife de nalga (200g) a la plancha a fuego alto 3 minutos por lado.',
      'Al retirar del fuego, colocar inmediatamente los 20g de manteca de ajo sobre la carne caliente para que se derrita formando una salsa brillante.',
      'Mezclar los 80g de repollo fino con la media palta (80g) en láminas y aderezar con los 15ml de aceite de oliva.',
      'Servir el bife jugoso junto a la ensalada.'
    ],
    differentialIngredients: [
      { name: 'Bife de nalga', he: '200g', she: '140g', total: '340g' },
      { name: 'Manteca de ajo', he: '20g', she: '15g', total: '35g' },
      { name: 'Repollo blanco fino', he: '80g', she: '80g', total: '160g' },
      { name: 'Palta fresca', he: '80g (1/2 palta)', she: '50g (1/3 palta)', total: '~130g' },
      { name: 'Aceite de oliva extra virgen', he: '15ml', she: '10ml', total: '25ml' }
    ],
    instructionsCombined: [
      'Cocinar los bifes de nalga a la plancha durante 3 minutos por lado. Al retirar, derretir la manteca de ajo sobre la carne caliente (20g sobre el de Él, 15g sobre el de Ella).',
      'Armar las ensaladas de repollo (80g cada uno) y palta (80g para Él, 50g para Ella) aderezadas con aceite de oliva (15ml para Él, 10ml para Ella).',
      'Servir en cada plato su bife recién salseado con la manteca de ajo derretida y su ensalada.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Cocinar bifes por separado. Servir a Él su bife de 200g crudo con 20g manteca de ajo y media palta; y a Ella su bife de 140g con 15g manteca de ajo y 1/3 palta.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '~150g bife de nalga jugoso a la plancha',
        sides: '80g repollo blanco + 80g palta fresca',
        fatsAndToppings: '20g manteca de ajo derretida + 15ml aceite de oliva',
        plateTotalApprox: '~345g servido en plato',
        ruleNote: 'Servir su bife de 200g con 20g de manteca de ajo y media palta.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '~105g bife de nalga jugoso a la plancha',
        sides: '80g repollo blanco + 50g palta fresca',
        fatsAndToppings: '15g manteca de ajo derretida + 10ml aceite de oliva',
        plateTotalApprox: '~260g servido en plato',
        ruleNote: 'Servir su bife de 140g con 15g de manteca de ajo y 1/3 palta.'
      }
    },
    tags: ['Keto', 'Día 28', 'Plancha', 'Carne Vacuna', 'Manteca de Ajo', 'Palta'],
    createdAt: '2026-10-28'
  },
  {
    id: 'keto-d28-cena',
    dayNumber: 28,
    title: 'Wok de Pollo, Zuchini y Pimiento Verde en Manteca',
    mealType: 'cena',
    cookingMethod: 'salteado_wok',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 480,
    proteinGrams: 42,
    carbsGrams: 5,
    fatsGrams: 32,
    imageUrl: '/src/assets/images/recipe_wok_pollo_zuchini_1792713326934.jpg',
    description: 'Tiras de pollo salteadas a fuego vivo en wok con manteca o aceite de coco, bastones de zuchini y tiras de pimiento verde.',
    ingredients: [
      '180g de pollo en tiras',
      '100g de zuchini en bastones',
      '50g de pimiento verde en juliana',
      '18g de manteca pura o aceite de coco',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Calentar un wok a fuego fuerte con los 18g de manteca o aceite de coco.',
      'Saltear los 180g de pollo en tiras por 5 minutos hasta dorar.',
      'Agregar los 100g de zuchini en bastones y 50g de pimiento verde en juliana.',
      'Saltear durante 4 minutos más revolviendo continuamente hasta que los vegetales estén al dente. Salpimentar y servir.'
    ],
    differentialIngredients: [
      { name: 'Pollo en tiras', he: '180g', she: '130g', total: '310g' },
      { name: 'Zuchini en bastones', he: '100g', she: '100g', total: '200g' },
      { name: 'Pimiento verde en juliana', he: '50g', she: '50g', total: '100g' },
      { name: 'Manteca o aceite de coco', he: '18g', she: '12g', total: '30g wok' },
      { name: 'Sal y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Saltear el pollo (310g en tiras) en el wok con la manteca o aceite de coco (30g) durante 5 minutos a fuego alto.',
      'Agregar el zuchini (200g) y el pimiento verde (100g), salteando 4 minutos más revolviendo continuamente.',
      'Servir el 58% en el plato de Él (~330g servido) y el 42% en el plato de Ella (~240g servido).'
    ],
    cookedServing: {
      dishType: 'integrado',
      servingRuleSummary: 'Al saltear todo junto en el wok (310g pollo, 200g zuchini, 100g pimiento, 30g manteca), servir el 58% en el plato de Él y el 42% en el de Ella.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '~135g pollo salteado en tiras',
        sides: '100g zuchini + 50g pimiento verde al dente',
        fatsAndToppings: '18g manteca/coco integrado en wok',
        plateTotalApprox: '~330g wok servido en plato',
        ruleNote: 'Servir el 58% de la preparación del wok en su plato.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '~95g pollo salteado en tiras',
        sides: '100g zuchini + 50g pimiento verde al dente',
        fatsAndToppings: '12g manteca/coco integrado en wok',
        plateTotalApprox: '~240g wok servido en plato',
        ruleNote: 'Servir el 42% de la preparación del wok en su plato.'
      }
    },
    tags: ['Keto', 'Día 28', 'Wok', 'Pollo', 'Zuchini', 'Manteca'],
    createdAt: '2026-10-28'
  },

  // ==================== DÍA 29 ====================
  {
    id: 'keto-d29-almuerzo',
    dayNumber: 29,
    title: 'Colita de Cuadril al Horno con Ensalada de Rúcula, Tomate y Nueces',
    mealType: 'almuerzo',
    cookingMethod: 'horno',
    prepTimeMinutes: 35,
    servings: 1,
    calories: 590,
    proteinGrams: 47,
    carbsGrams: 5,
    fatsGrams: 43,
    imageUrl: '/src/assets/images/recipe_bife_chorizo_1792712404795.jpg',
    description: 'Colita de cuadril sellada y asada al horno en rodajas jugosas, acompañada de rúcula, tomate y nueces crocantes aderezadas con oliva.',
    ingredients: [
      '200g de colita de cuadril',
      '60g de rúcula fresca',
      '60g de tomate redondo',
      '15g de nueces picadas',
      '20ml de aceite de oliva extra virgen',
      'Sal gruesa y pimienta a gusto'
    ],
    instructions: [
      'Sellar la colita de cuadril en plancha caliente 1-2 minutos por lado y luego hornear a 180°C por 25-30 minutos. Dejar reposar 3 minutos y cortar en rodajas.',
      'Armar la ensalada con los 60g de rúcula fresca, 60g de tomate picado y los 15g de nueces picadas.',
      'Aderezar la ensalada con los 20ml de aceite de oliva extra virgen.',
      'Servir las 200g de carne jugosa en rodajas con su ensalada.'
    ],
    differentialIngredients: [
      { name: 'Colita de cuadril', he: '200g', she: '140g', total: '340g' },
      { name: 'Rúcula fresca', he: '60g', she: '60g', total: '120g' },
      { name: 'Tomate redondo', he: '60g', she: '60g', total: '120g' },
      { name: 'Nueces picadas', he: '15g', she: '10g', total: '25g' },
      { name: 'Aceite de oliva extra virgen', he: '20ml', she: '15ml', total: '35ml' }
    ],
    instructionsCombined: [
      'Sellar la pieza entera de colita de cuadril (340g) y hornear a 180°C durante 25 a 30 minutos. Cortar en rodajas.',
      'Armar las ensaladas con rúcula (60g cada uno), tomate (60g cada uno) y las nueces picadas (15g para Él, 10g para Ella).',
      'Servir 200g de carne cruda (~150g cocida) para Él con 20ml de oliva en su ensalada.',
      'Servir 140g de carne cruda (~105g cocida) para Ella con 15ml de oliva en su ensalada.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Asar la colita de cuadril y pesar en balanza las rodajas cocidas: ~150g para Él y ~105g para Ella. Acompañar con ensalada y nueces.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '~150g colita de cuadril horneada en rodajas',
        sides: '60g rúcula + 60g tomate + 15g nueces picadas',
        fatsAndToppings: '20ml aceite de oliva extra virgen',
        plateTotalApprox: '~300g servido en plato',
        ruleNote: 'Servir ~150g de carne cocida con 15g de nueces y 20ml de oliva.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '~105g colita de cuadril horneada en rodajas',
        sides: '60g rúcula + 60g tomate + 10g nueces picadas',
        fatsAndToppings: '15ml aceite de oliva extra virgen',
        plateTotalApprox: '~240g servido en plato',
        ruleNote: 'Servir ~105g de carne cocida con 10g de nueces y 15ml de oliva.'
      }
    },
    tags: ['Keto', 'Día 29', 'Horno', 'Carne Vacuna', 'Nueces', 'Rúcula'],
    createdAt: '2026-10-29'
  },
  {
    id: 'keto-d29-cena',
    dayNumber: 29,
    title: 'Hamburguesas de Res con Mozzarella Derretida y Ensalada Fresca',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 520,
    proteinGrams: 44,
    carbsGrams: 3,
    fatsGrams: 37,
    imageUrl: '/src/assets/images/recipe_hamburguesa_huevo_1792713324729.jpg',
    description: 'Hamburguesas caseras de res doradas a la sartén cubiertas de abundante mozzarella fundida, servidas con ensalada fresca.',
    ingredients: [
      '180g de carne picada de res',
      '40g de queso mozzarella',
      '80g de ensalada fresca (lechuga y tomate)',
      '15ml de aceite de oliva extra virgen',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Moldear la hamburguesa de 180g y sazonar con sal y pimienta.',
      'Cocinar a la plancha por 4 minutos de cada lado a fuego medio-alto.',
      'Cubrir con los 40g de mozzarella y tapar la sartén durante 1-2 minutos hasta derretir el queso por completo.',
      'Servir con 80g de ensalada fresca de lechuga y tomate aderezada con 15ml de aceite de oliva.'
    ],
    differentialIngredients: [
      { name: 'Carne picada de res', he: '180g', she: '130g', total: '310g' },
      { name: 'Queso mozzarella', he: '40g', she: '25g', total: '65g' },
      { name: 'Ensalada (lechuga y tomate)', he: '80g', she: '80g', total: '160g' },
      { name: 'Aceite de oliva extra virgen', he: '15ml', she: '10ml', total: '25ml' },
      { name: 'Sal y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Cocinar las hamburguesas a la plancha (180g para Él, 130g para Ella) durante 4 minutos de cada lado.',
      'Cubrir con mozzarella (40g sobre la de Él, 25g sobre la de Ella) y tapar la sartén para derretir el queso completamente.',
      'Servir con la ensalada fresca (80g cada uno) aderezada con aceite de oliva (15ml para Él, 10ml para Ella).'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Cocinar hamburguesas individuales. Servir a Él su hamburguesa de 180g con 40g de mozzarella y a Ella la de 130g con 25g de mozzarella.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '~140g hamburguesa de res + 40g mozzarella fundida',
        sides: '80g ensalada mixta de lechuga y tomate',
        fatsAndToppings: '15ml aceite de oliva extra virgen',
        plateTotalApprox: '~275g servido en plato',
        ruleNote: 'Servir su hamburguesa de 180g con 40g de mozzarella y ensalada con 15ml de oliva.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '~100g hamburguesa de res + 25g mozzarella fundida',
        sides: '80g ensalada mixta de lechuga y tomate',
        fatsAndToppings: '10ml aceite de oliva extra virgen',
        plateTotalApprox: '~215g servido en plato',
        ruleNote: 'Servir su hamburguesa de 130g con 25g de mozzarella y ensalada con 10ml de oliva.'
      }
    },
    tags: ['Keto', 'Día 29', 'Plancha', 'Carne Vacuna', 'Mozzarella'],
    createdAt: '2026-10-29'
  },

  // ==================== DÍA 30 ====================
  {
    id: 'keto-d30-almuerzo',
    dayNumber: 30,
    title: 'Churrasco de Cerdo a la Plancha con Brócoli Gratinado con Queso Sardo',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 540,
    proteinGrams: 44,
    carbsGrams: 5,
    fatsGrams: 38,
    imageUrl: '/src/assets/images/recipe_churrasco_coliflor_1792713325916.jpg',
    description: 'Churrasco de cerdo dorado a la plancha acompañado de brócoli al vapor gratinado al horno con manteca y queso sardo rallado.',
    ingredients: [
      '180g de churrasco de cerdo',
      '150g de brócoli fresco',
      '25g de queso sardo rallado',
      '15g de manteca pura',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Cocinar los 150g de brócoli al vapor durante 4 minutos.',
      'Disponer el brócoli en una fuente para horno, cubrir con los 15g de manteca y 25g de queso sardo rallado, gratinando a 200°C por 5 minutos.',
      'Cocinar el churrasco de cerdo (180g) a la plancha por 5 minutos por lado hasta que esté bien dorado.',
      'Servir el churrasco caliente junto al brócoli gratinado crocante.'
    ],
    differentialIngredients: [
      { name: 'Churrasco de cerdo', he: '180g', she: '130g', total: '310g' },
      { name: 'Brócoli fresco', he: '150g', she: '150g', total: '300g' },
      { name: 'Queso sardo rallado', he: '25g', she: '15g', total: '40g' },
      { name: 'Manteca pura', he: '15g', she: '10g', total: '25g' }
    ],
    instructionsCombined: [
      'Cocinar los 300g de brócoli al vapor durante 4 minutos. Disponer en fuente de horno con la manteca (25g) y el queso sardo rallado (40g), gratinando a 200°C por 5 minutos.',
      'Cocinar los churrascos a la plancha por 5 minutos por lado.',
      'Servir el churrasco de 180g crudo para Él (~140g cocido) con el 60% del brócoli gratinado (~220g).',
      'Servir el churrasco de 130g crudo para Ella (~100g cocido) con el 40% del brócoli gratinado (~145g).'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Cocinar churrascos individuales a la plancha. Gratinar el brócoli en horno y servir 60% a Él y 40% a Ella.',
      servingHe: {
        percentage: '60%',
        proteinCooked: '~140g churrasco de cerdo dorado + 25g queso sardo',
        sides: '150g brócoli gratinado al horno',
        fatsAndToppings: '15g manteca gratinada con queso',
        plateTotalApprox: '~330g servido en plato',
        ruleNote: 'Servir su churrasco de 180g con el 60% del brócoli gratinado con queso sardo.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '~100g churrasco de cerdo dorado + 15g queso sardo',
        sides: '150g brócoli gratinado al horno',
        fatsAndToppings: '10g manteca gratinada con queso',
        plateTotalApprox: '~240g servido en plato',
        ruleNote: 'Servir su churrasco de 130g con el 40% del brócoli gratinado con queso sardo.'
      }
    },
    tags: ['Keto', 'Día 30', 'Plancha', 'Cerdo', 'Brócoli', 'Queso Sardo'],
    createdAt: '2026-10-30'
  },
  {
    id: 'keto-d30-cena',
    dayNumber: 30,
    title: 'Ensalada Completa de Pollo Desmenuzado, Huevo Duro, Lechuga y Palta',
    mealType: 'cena',
    cookingMethod: 'sin_coccion',
    prepTimeMinutes: 15,
    servings: 1,
    calories: 540,
    proteinGrams: 46,
    carbsGrams: 5,
    fatsGrams: 37,
    imageUrl: '/src/assets/images/recipe_pollo_brocoli_palta_1792712404721.jpg',
    description: 'Ensalada gourmet de cierre del ciclo keto con pollo desmenuzado, huevo duro, palta fresca, lechuga crocante y aceite de oliva virgen.',
    ingredients: [
      '180g de pollo desmenuzado cocido',
      '1 huevo duro',
      '80g de palta fresca (1/2 unidad)',
      '80g de lechuga fresca',
      '20ml de aceite de oliva extra virgen',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Hervir 1 huevo durante 9 minutos, enfriar, pelar y picar.',
      'Lavar y cortar 80g de lechuga fresca en el plato.',
      'Mezclar en el plato la lechuga con los 180g de pollo desmenuzado, la media palta (80g) en rodajas y el huevo picado.',
      'Aderezar con los 20ml de aceite de oliva extra virgen, sal y pimienta a gusto.'
    ],
    differentialIngredients: [
      { name: 'Pollo desmenuzado', he: '180g', she: '130g', total: '310g' },
      { name: 'Huevo duro', he: '1 huevo', she: '1 huevo', total: '2 huevos' },
      { name: 'Palta fresca', he: '80g (1/2 palta)', she: '50g (1/3 palta)', total: '~130g' },
      { name: 'Lechuga fresca', he: '80g', she: '80g', total: '160g' },
      { name: 'Aceite de oliva extra virgen', he: '20ml', she: '15ml', total: '35ml' }
    ],
    instructionsCombined: [
      'Hervir 2 huevos por 9 minutos, enfriar, pelar y picar.',
      'Armar las ensaladas en cada plato mezclando la lechuga (80g cada uno), pollo desmenuzado (180g para Él, 130g para Ella), palta (80g para Él, 50g para Ella) y 1 huevo duro por plato.',
      'Aderezar la ensalada de Él con 20ml de aceite de oliva y la de Ella con 15ml de oliva.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Armar cada ensalada con sus proporciones pesadas: 180g pollo y media palta para Él; 130g pollo y 1/3 palta para Ella.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '180g pollo desmenuzado + 1 huevo duro',
        sides: '80g lechuga fresca + 80g palta en rodajas',
        fatsAndToppings: '20ml aceite de oliva extra virgen',
        plateTotalApprox: '~360g ensalada servida',
        ruleNote: 'Servir su ensalada con 180g de pollo, media palta y 20ml de oliva.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '130g pollo desmenuzado + 1 huevo duro',
        sides: '80g lechuga fresca + 50g palta en rodajas',
        fatsAndToppings: '15ml aceite de oliva extra virgen',
        plateTotalApprox: '~275g ensalada servida',
        ruleNote: 'Servir su ensalada con 130g de pollo, 1/3 palta y 15ml de oliva.'
      }
    },
    tags: ['Keto', 'Día 30', 'Fresco', 'Pollo', 'Palta', 'Huevo'],
    createdAt: '2026-10-30'
  }
];
