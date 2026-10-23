import { Recipe, CookingMethod, MealType } from '../types';
import { RECIPES_DAYS_16_TO_30 } from './recipesDays16to30';

export const MEAL_TYPES: { id: MealType; label: string }[] = [
  { id: 'almuerzo', label: 'Almuerzos (30)' },
  { id: 'cena', label: 'Cenas (30)' }
];

export const COOKING_METHODS: { id: CookingMethod; label: string; icon: string }[] = [
  { id: 'plancha', label: 'A la Plancha / Sartén', icon: 'Flame' },
  { id: 'horno', label: 'Al Horno', icon: 'Flame' },
  { id: 'salteado_wok', label: 'Salteado / Wok', icon: 'ChefHat' },
  { id: 'hervido_vapor', label: 'Hervido / Al Vapor', icon: 'Waves' },
  { id: 'sin_coccion', label: 'Sin Cocción / Fresco', icon: 'Salad' }
];

export const PRESET_IMAGE_OPTIONS = [
  { label: 'Pollo y brócoli', url: '/src/assets/images/recipe_pollo_brocoli_palta_1792712404721.jpg' },
  { label: 'Bife de chorizo', url: '/src/assets/images/recipe_bife_chorizo_1792712404795.jpg' },
  { label: 'Hamburguesa con huevo', url: '/src/assets/images/recipe_hamburguesa_huevo_1792713324729.jpg' },
  { label: 'Omelette espinaca', url: '/src/assets/images/recipe_omelette_espinaca_1792713324934.jpg' },
  { label: 'Filete de merluza', url: '/src/assets/images/recipe_merluza_acelga_1792713325749.jpg' },
  { label: 'Churrasco de cerdo', url: '/src/assets/images/recipe_churrasco_coliflor_1792713325916.jpg' },
  { label: 'Wok de pollo y zuchini', url: '/src/assets/images/recipe_wok_pollo_zuchini_1792713326934.jpg' },
  { label: 'Medallones de res con queso', url: '/src/assets/images/recipe_medallones_res_queso_1792712404767.jpg' },
  { label: 'Tarta keto de espinaca', url: '/src/assets/images/recipe_tarta_keto_espinaca_1792712405870.jpg' }
];

const INITIAL_15_RECIPES: Recipe[] = [
  // ==================== DÍA 1 ====================
  {
    id: 'keto-d1-almuerzo',
    dayNumber: 1,
    title: 'Pechuga de Pollo con Brócoli a la Manteca y Palta',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 520,
    proteinGrams: 46,
    carbsGrams: 6,
    fatsGrams: 35,
    imageUrl: '/src/assets/images/recipe_pollo_brocoli_palta_1792712404721.jpg',
    description: 'Pechuga dorada a la plancha acompañada de brócoli salteado en manteca y palta fresca en láminas aderezada con aceite de oliva extra virgen.',
    ingredients: [
      '180g de pechuga de pollo',
      '150g de brócoli fresco',
      '15g de manteca',
      '80g de palta (1/2 unidad)',
      '15ml de aceite de oliva extra virgen',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Cocinar los 150g de brócoli al vapor durante 4 a 5 minutos hasta que esté tierno pero firme.',
      'En una sartén, derretir los 15g de manteca a fuego medio y saltear el brócoli por 2 minutos. Salpimentar.',
      'Cocinar la pechuga de pollo (180g) a la plancha a fuego medio-alto durante 6 a 8 minutos por lado hasta que esté bien cocida y dorada.',
      'Servir la pechuga (~135g-140g cocida) acompañada del brócoli y la media palta (80g) cortada en láminas, aderezada con los 15ml de aceite de oliva.'
    ],
    differentialIngredients: [
      { name: 'Pechuga de pollo fresca', he: '180g', she: '130g', total: '310g' },
      { name: 'Brócoli fresco', he: '150g', she: '150g', total: '300g' },
      { name: 'Manteca (para saltear brócoli)', he: '15g', she: '10g', total: '25g sartén' },
      { name: 'Palta fresca', he: '80g (1/2 palta)', she: '50g (1/3 palta)', total: '~130g' },
      { name: 'Aceite de oliva extra virgen', he: '15ml (1 cda)', she: '10ml (2/3 cda)', total: '25ml' },
      { name: 'Sal y pimienta a gusto', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Cocinar los 300g de brócoli al vapor durante 4-5 minutos hasta que esté tierno pero firme.',
      'Derretir los 25g de manteca en una sartén a fuego medio y saltear todo el brócoli durante 2 minutos. Salpimentar y dividir en dos platos (150g a cada uno).',
      'Cocinar los 310g de pollo a la plancha a fuego medio-alto durante 6-8 minutos por lado. Servir 180g en su plato (~135g cocido) y 130g en el de ella (~95g cocido).',
      'Servir con la palta (80g / 1/2 palta para Él, 50g / 1/3 palta para Ella) y aderezar con oliva (15ml para Él, 10ml para Ella).'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Cocinar ambas pechugas a la plancha. Servir a Él su pieza de 180g cruda (~135g cocida) y a Ella su pieza de 130g cruda (~95g cocida). Distribuir brócoli (150g c/u), palta (80g él / 50g ella) y oliva (15ml él / 10ml ella).',
      servingHe: {
        percentage: '58%',
        proteinCooked: '~135g pechuga cocida dorada',
        sides: '150g brócoli al vapor salteado en manteca + 80g palta fresca (1/2 u)',
        fatsAndToppings: '15g manteca de cocción + 15ml aceite de oliva',
        plateTotalApprox: '~365g en su plato',
        ruleNote: 'Servir su pechuga de 180g cruda con 150g de brócoli, media palta y 15ml de oliva.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '~95g pechuga cocida dorada',
        sides: '150g brócoli al vapor salteado en manteca + 50g palta fresca (1/3 u)',
        fatsAndToppings: '10g manteca de cocción + 10ml aceite de oliva',
        plateTotalApprox: '~295g en su plato',
        ruleNote: 'Servir su pechuga de 130g cruda con 150g de brócoli, 1/3 palta y 10ml de oliva.'
      }
    },
    tags: ['Keto', 'Día 1', 'Plancha', 'Pollo', 'Palta'],
    createdAt: '2026-10-01'
  },
  {
    id: 'keto-d1-cena',
    dayNumber: 1,
    title: 'Bife de Chorizo con Ensalada Verde',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 15,
    servings: 1,
    calories: 540,
    proteinGrams: 44,
    carbsGrams: 2,
    fatsGrams: 40,
    imageUrl: '/src/assets/images/recipe_bife_chorizo_1792712404795.jpg',
    description: 'Jugoso bife de chorizo sellado a fuego vivo a la plancha con escamas de sal, servido con fresca rúcula y lechuga al aceite de oliva.',
    ingredients: [
      '200g de bife de chorizo',
      '50g de rúcula limpia',
      '50g de lechuga crocante',
      '22ml de aceite de oliva extra virgen',
      'Sal gruesa y pimienta a gusto'
    ],
    instructions: [
      'Calentar una plancha a fuego máximo.',
      'Cocinar el bife de chorizo (200g) durante 4 a 5 minutos por lado para término medio/cocido. Añadir sal gruesa al darlo vuelta.',
      'Lavar y secar los 50g de rúcula y 50g de lechuga.',
      'Emplatar la ensalada verde aderezada con los 22ml de aceite de oliva y acompañar con el bife recién salido (~150g-160g cocido).'
    ],
    differentialIngredients: [
      { name: 'Bife de chorizo vacuno', he: '200g (1 bife grande)', she: '140g (1 bife mediano)', total: '340g' },
      { name: 'Rúcula fresca limpia', he: '50g', she: '40g', total: '90g' },
      { name: 'Lechuga crocante', he: '50g', she: '40g', total: '90g' },
      { name: 'Aceite de oliva extra virgen', he: '22ml', she: '12ml', total: '34ml' },
      { name: 'Sal gruesa y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Calentar la plancha a fuego máximo hasta que humee levemente.',
      'Colocar ambos bifes (200g para él, 140g para ella). Cocinar de 4 a 5 minutos por lado. Salar con sal gruesa al dar la vuelta.',
      'Mezclar las hojas de rúcula y lechuga limpias.',
      'Emplatar en el plato de Él su bife de 200g (~150-160g cocido) con 100g de ensalada verde aderezada con 22ml de oliva.',
      'Emplatar en el plato de Ella su bife de 140g (~105-110g cocido) con 80g de ensalada verde aderezada con 12ml de oliva.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Cocinar los 2 bifes en la misma plancha. Servir a Él su bife de 200g crudo (~150g cocido) con 22ml oliva y a Ella su bife de 140g crudo (~105g cocido) con 12ml oliva.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '150g - 160g bife de chorizo cocido',
        sides: '100g ensalada verde (50g rúcula + 50g lechuga)',
        fatsAndToppings: '22ml aceite de oliva extra virgen',
        plateTotalApprox: '~280g en su plato',
        ruleNote: 'Servir el bife de 200g crudo recién salido de la plancha junto a la ensalada grande.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '105g - 110g bife de chorizo cocido',
        sides: '80g ensalada verde (40g rúcula + 40g lechuga)',
        fatsAndToppings: '12ml aceite de oliva extra virgen',
        plateTotalApprox: '~200g en su plato',
        ruleNote: 'Servir el bife de 140g crudo recién salido de la plancha junto a la ensalada.'
      }
    },
    tags: ['Keto', 'Día 1', 'Plancha', 'Carne Vacuna', 'Rápido'],
    createdAt: '2026-10-01'
  },

  // ==================== DÍA 2 ====================
  {
    id: 'keto-d2-almuerzo',
    dayNumber: 2,
    title: 'Medallones de Res Gratinados con Ensalada de Tomate al Orégano',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 15,
    servings: 1,
    calories: 480,
    proteinGrams: 42,
    carbsGrams: 5,
    fatsGrams: 32,
    imageUrl: '/src/assets/images/recipe_medallones_res_queso_1792712404767.jpg',
    description: 'Medallones compactos de carne picada sellados a la plancha con queso cremoso derretido y ensalada de tomate maduro.',
    ingredients: [
      '180g de carne picada de res',
      '40g de queso cremoso',
      '120g de tomate en rodajas',
      '15ml de aceite de oliva extra virgen',
      'Orégano seco, sal y pimienta a gusto'
    ],
    instructions: [
      'Formar dos medallones compactos de 90g cada uno con la carne picada y salpimentar exteriormente.',
      'Cocinar los medallones en una plancha bien caliente a fuego medio-alto durante 4 minutos.',
      'Dar vuelta los medallones, colocar 20g de queso cremoso sobre cada uno (40g total), tapar la plancha y cocinar por 4 minutos más hasta fundir.',
      'Cortar los 120g de tomate en rodajas, condimentar con orégano y los 15ml de aceite de oliva. Servir junto a los medallones gratinados.'
    ],
    differentialIngredients: [
      { name: 'Carne picada vacuna de res', he: '180g (2 medallones de 90g)', she: '130g (2 medallones de 65g)', total: '310g' },
      { name: 'Queso cremoso o cuartirolo', he: '40g', she: '25g', total: '65g' },
      { name: 'Tomate redondo maduro', he: '120g', she: '80g', total: '200g' },
      { name: 'Aceite de oliva extra virgen', he: '15ml', she: '10ml', total: '25ml' },
      { name: 'Orégano seco, sal y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Moldear cuatro medallones: dos de 90g para Él y dos de 65g para Ella. Salpimentar exteriormente.',
      'Cocinar todos los medallones en la plancha bien caliente durante 4 minutos de un lado.',
      'Dar vuelta: colocar los 40g de queso cremoso sobre los dos medallones de Él y los 25g sobre los dos medallones de Ella. Tapar y cocinar 4 minutos más.',
      'Servir en el plato de Él sus 2 medallones gratinados con 120g de tomate y 15ml de oliva.',
      'Servir en el plato de Ella sus 2 medallones gratinados con 80g de tomate y 10ml de oliva.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Planchar los 4 medallones. Servir los 2 medallones de 90g con 40g de queso a Él y los 2 de 65g con 25g de queso a Ella.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '135g - 140g medallones de res cocidos',
        sides: '120g tomate maduro al orégano',
        fatsAndToppings: '40g queso cremoso fundido + 15ml aceite de oliva',
        plateTotalApprox: '~280g en su plato',
        ruleNote: 'Servir los dos medallones grandes gratinados junto con las rodajas de tomate aderezadas.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '95g - 100g medallones de res cocidos',
        sides: '80g tomate maduro al orégano',
        fatsAndToppings: '25g queso cremoso fundido + 10ml aceite de oliva',
        plateTotalApprox: '~200g en su plato',
        ruleNote: 'Servir los dos medallones chicos gratinados junto con las rodajas de tomate aderezadas.'
      }
    },
    tags: ['Keto', 'Día 2', 'Plancha', 'Carne Vacuna', 'Queso'],
    createdAt: '2026-10-02'
  },
  {
    id: 'keto-d2-cena',
    dayNumber: 2,
    title: 'Filete de Merluza al Ajo con Acelga al Parmesano',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 450,
    proteinGrams: 48,
    carbsGrams: 4,
    fatsGrams: 26,
    imageUrl: '/src/assets/images/recipe_merluza_acelga_1792713325749.jpg',
    description: 'Filetes tiernos de merluza dorados a la plancha con ajo salteado en manteca, acompañados de hojas de acelga al vapor con queso parmesano.',
    ingredients: [
      '220g de filete de merluza fresca',
      '150g de acelga fresca',
      '22g de manteca',
      '20g de queso parmesano rallado',
      '1 diente de ajo picado',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Hervir los 150g de acelga en abundante agua con sal durante 2 minutos. Escurrir extrayendo el exceso de agua y picar.',
      'Saltear la acelga escurrida en sartén con 11g de manteca a fuego medio durante 2 minutos. Servir y espolvorear los 20g de parmesano.',
      'En la misma sartén, derretir los otros 11g de manteca junto con el ajo picado a fuego medio.',
      'Incorporar el filete de merluza (220g) salpimentado y cocinar a la plancha 3 minutos por lado. Servir junto a la acelga.'
    ],
    differentialIngredients: [
      { name: 'Filete de merluza fresca despinada', he: '220g', she: '150g', total: '370g' },
      { name: 'Acelga fresca limpia', he: '150g', she: '120g', total: '270g' },
      { name: 'Manteca', he: '22g', she: '14g', total: '36g' },
      { name: 'Queso parmesano rallado', he: '20g', she: '12g', total: '32g' },
      { name: 'Dientes de ajo picados', he: '1 diente', she: '1 diente', total: '2 dientes' },
      { name: 'Sal y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Hervir los 270g de acelga durante 2 minutos. Escurrir apretando fuertemente y picar de forma gruesa.',
      'En una sartén derretir 18g de manteca y saltear toda la acelga 2 minutos. Servir 150g en el plato de Él (espolvorear 20g de parmesano) y 120g en el de Ella (espolvorear 12g de parmesano).',
      'En la misma sartén derretir los 18g de manteca restantes con el ajo picado.',
      'Cocinar los filetes de merluza (220g para él, 150g para ella) a la plancha por 3 minutos por lado con cuidado al dar vuelta.',
      'Servir el filete de 220g en el plato de Él y el de 150g en el de Ella con el sofrito de ajo y manteca.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Cocinar los filetes a la plancha. Servir a Él su filete de 220g crudo (~165g cocido) con 20g de parmesano y a Ella su filete de 150g crudo (~110g cocido) con 12g de parmesano.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '165g - 175g filete de merluza cocido',
        sides: '150g acelga salteada con ajo',
        fatsAndToppings: '20g queso parmesano + 22g manteca al ajo',
        plateTotalApprox: '~335g en su plato',
        ruleNote: 'Servir la pieza grande de pescado cocido con su porción de acelga y hebras de queso.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '110g - 120g filete de merluza cocido',
        sides: '120g acelga salteada con ajo',
        fatsAndToppings: '12g queso parmesano + 14g manteca al ajo',
        plateTotalApprox: '~240g en su plato',
        ruleNote: 'Servir la pieza de pescado cocido con su porción de acelga y hebras de queso.'
      }
    },
    tags: ['Keto', 'Día 2', 'Plancha', 'Pescado', 'Acelga'],
    createdAt: '2026-10-02'
  },

  // ==================== DÍA 3 ====================
  {
    id: 'keto-d3-almuerzo',
    dayNumber: 3,
    title: 'Churrasco de Cerdo con Puré Cremoso de Coliflor',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 510,
    proteinGrams: 42,
    carbsGrams: 7,
    fatsGrams: 36,
    imageUrl: '/src/assets/images/recipe_churrasco_coliflor_1792713325916.jpg',
    description: 'Churrasco de cerdo sellado a punto dorado en sartén de hierro, complementado con puré caliente y sedoso de coliflor, manteca y crema.',
    ingredients: [
      '180g de churrasco de cerdo',
      '200g de coliflor',
      '15g de manteca',
      '30ml de crema de leche',
      'Sal, pimienta y nuez moscada a gusto'
    ],
    instructions: [
      'Hervir los 200g de coliflor en agua con sal durante 10 a 12 minutos hasta que esté muy blanda.',
      'Escurrir completamente y procesar caliente con los 15g de manteca, 30ml de crema, sal, pimienta y nuez moscada.',
      'Cocinar el churrasco de cerdo (180g) a la plancha a fuego medio durante 5 a 6 minutos por lado.',
      'Servir el churrasco caliente (~135g cocido) con el puré de coliflor cremoso.'
    ],
    differentialIngredients: [
      { name: 'Churrasco de cerdo (carré o pulpa)', he: '180g', she: '130g', total: '310g' },
      { name: 'Coliflor fresca en floretes', he: '200g', she: '150g', total: '350g' },
      { name: 'Manteca', he: '15g', she: '10g', total: '25g' },
      { name: 'Crema de leche entera', he: '30ml', she: '20ml', total: '50ml' },
      { name: 'Sal, pimienta y nuez moscada', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Hervir los 350g de floretes de coliflor en agua con sal durante 10 a 12 minutos hasta tiernos.',
      'Escurrir completamente la coliflor y procesar caliente con los 25g de manteca, 50ml de crema de leche, sal, pimienta y nuez moscada.',
      'Cocinar ambos churrascos de cerdo a la plancha a fuego medio durante 5 a 6 minutos por lado hasta que estén cocidos y bien dorados.',
      'Servir en el plato de Él su churrasco de 180g (~135g cocido) acompañado del 58% del puré de coliflor (~180g).',
      'Servir en el plato de Ella su churrasco de 130g (~95g cocido) acompañado del 42% del puré de coliflor (~130g).'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Cocinar ambos churrascos. Servir a Él su churrasco de 180g crudo (~135g cocido) con el 58% del puré y a Ella su churrasco de 130g crudo (~95g cocido) con el 42% del puré.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '135g - 140g churrasco de cerdo cocido',
        sides: '180g puré de coliflor cremoso en balanza',
        fatsAndToppings: '15g manteca + 30ml crema incorporadas al puré',
        plateTotalApprox: '~315g en su plato',
        ruleNote: 'Servir la pieza de cerdo dorada con el puré caliente recién procesado.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '95g - 100g churrasco de cerdo cocido',
        sides: '130g puré de coliflor cremoso en balanza',
        fatsAndToppings: '10g manteca + 20ml crema incorporadas al puré',
        plateTotalApprox: '~225g en su plato',
        ruleNote: 'Servir la pieza de cerdo dorada con el puré caliente recién procesado.'
      }
    },
    tags: ['Keto', 'Día 3', 'Plancha', 'Cerdo', 'Coliflor'],
    createdAt: '2026-10-03'
  },
  {
    id: 'keto-d3-cena',
    dayNumber: 3,
    title: 'Omelette de Espinaca y Mozzarella',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 12,
    servings: 1,
    calories: 460,
    proteinGrams: 28,
    carbsGrams: 3,
    fatsGrams: 38,
    imageUrl: '/src/assets/images/recipe_omelette_espinaca_1792713324934.jpg',
    description: 'Omelette keto esponjoso preparado exclusivamente a base de huevos batidos, espinaca salteada al punto y queso mozzarella hilado.',
    ingredients: [
      '3 huevos',
      '60g de espinaca fresca',
      '40g de queso mozzarella rallado',
      '22ml de aceite de oliva extra virgen',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Saltear los 60g de espinaca en sartén con un chorrito de aceite a fuego medio durante 1 minuto hasta reducir volumen. Salpimentar y retirar.',
      'Batir los 3 huevos en un bol con sal y pimienta.',
      'Calentar los 22ml de aceite de oliva en la sartén a fuego bajo y verter los huevos batidos.',
      'Distribuir la espinaca y los 40g de mozzarella en una mitad. Doblar, tapar y dejar 2 a 3 minutos hasta fundir el queso.'
    ],
    differentialIngredients: [
      { name: 'Huevos de campo', he: '3 unidades', she: '2 unidades', total: '5 huevos' },
      { name: 'Espinaca fresca limpia', he: '60g', she: '40g', total: '100g' },
      { name: 'Queso mozzarella rallado', he: '40g', she: '25g', total: '65g' },
      { name: 'Aceite de oliva extra virgen', he: '22ml', she: '12ml', total: '34ml' },
      { name: 'Sal y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Saltear los 100g de espinaca con un chorrito de oliva en sartén durante 1 minuto. Retirar y reservar.',
      'Preparar el omelette de Él: batir 3 huevos con sal y pimienta. Calentar sartén con 22ml de oliva, verter los huevos y cuando cuaje la base colocar 60g de espinaca y 40g de mozzarella. Doblar por la mitad y tapar 2 min hasta fundir el queso. Emplatar.',
      'Preparar el omelette de Ella: batir 2 huevos con sal y pimienta. Calentar sartén con 12ml de oliva, verter huevos, rellenar con 40g de espinaca y 25g de mozzarella. Doblar y tapar 2 min. Emplatar.',
      'Servir ambos omelettes calientes con el queso derretido en su interior.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Preparar en sartenes individuales. Servir a Él su omelette de 3 huevos con 40g de queso y a Ella su omelette de 2 huevos con 25g de queso.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '3 huevos cuajados esponjosos',
        sides: '60g espinaca salteada en el relleno',
        fatsAndToppings: '40g queso mozzarella fundido + 22ml aceite de oliva',
        plateTotalApprox: '~250g en su plato',
        ruleNote: 'Servir el omelette de 3 huevos recién hecho y doblado en su plato.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '2 huevos cuajados esponjosos',
        sides: '40g espinaca salteada en el relleno',
        fatsAndToppings: '25g queso mozzarella fundido + 12ml aceite de oliva',
        plateTotalApprox: '~175g en su plato',
        ruleNote: 'Servir el omelette de 2 huevos recién hecho y doblado en su plato.'
      }
    },
    tags: ['Keto', 'Día 3', 'Sartén', 'Huevos', 'Sin Harina'],
    createdAt: '2026-10-03'
  },

  // ==================== DÍA 4 ====================
  {
    id: 'keto-d4-almuerzo',
    dayNumber: 4,
    title: 'Pollo al Horno con Ensalada Mixta de Repollo, Tomate y Palta',
    mealType: 'almuerzo',
    cookingMethod: 'horno',
    prepTimeMinutes: 45,
    servings: 1,
    calories: 550,
    proteinGrams: 45,
    carbsGrams: 6,
    fatsGrams: 39,
    imageUrl: '/src/assets/images/recipe_pollo_horno_ensalada_1792713325350.jpg',
    description: 'Pata y muslo asada al horno con piel tostada y crocante, acompañada de ensalada fresca de repollo fino, tomate y dados de palta.',
    ingredients: [
      '250g de pata y muslo de pollo con piel',
      '70g de repollo cortado fino',
      '60g de tomate picado',
      '80g de palta',
      '15ml de aceite de oliva extra virgen',
      'Sal, pimienta y orégano a gusto'
    ],
    instructions: [
      'Precalentar el horno a 200°C.',
      'Condimentar la pieza de pollo con sal, pimienta y orégano. Hornear en asadera a 200°C durante 35 a 40 minutos hasta que la piel quede crocante y dorada.',
      'Mezclar en un bol el repollo finamente cortado, el tomate y la palta en trozos.',
      'Condimentar con los 15ml de aceite de oliva y sal. Servir junto al pollo recién horneado.'
    ],
    differentialIngredients: [
      { name: 'Pata y muslo de pollo con piel', he: '250g (pieza grande)', she: '180g (pieza mediana)', total: '430g' },
      { name: 'Repollo cortado fino', he: '70g', she: '50g', total: '120g' },
      { name: 'Tomate redondo picado', he: '60g', she: '40g', total: '100g' },
      { name: 'Palta fresca', he: '80g (1/2 u)', she: '60g (1/2 u chica)', total: '140g (1 u entera)' },
      { name: 'Aceite de oliva extra virgen', he: '15ml', she: '10ml', total: '25ml' },
      { name: 'Sal, pimienta y orégano', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Precalentar el horno a 200°C.',
      'Condimentar ambas piezas de pata y muslo (250g para él, 180g para ella) con sal, pimienta y orégano seco.',
      'Hornear durante 35 a 40 minutos a 200°C hasta que la piel esté dorada y crujiente y la carne bien cocida.',
      'Preparar la ensalada mixta cortando el repollo finamente, el tomate y la palta.',
      'Servir en el plato de Él su pieza de pollo de 250g con ensalada (70g repollo, 60g tomate, 80g palta) y 15ml de oliva.',
      'Servir en el plato de Ella su pieza de pollo de 180g con ensalada (50g repollo, 40g tomate, 60g palta) y 10ml de oliva.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Hornear las dos piezas de pollo. Servir a Él su pieza de 250g cruda (~170g cocida) y a Ella su pieza de 180g cruda (~125g cocida) con sus respectivas ensaladas.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '170g - 175g pollo horneado con piel crocante',
        sides: '210g ensalada mixta (70g repollo + 60g tomate + 80g palta)',
        fatsAndToppings: '15ml aceite de oliva extra virgen',
        plateTotalApprox: '~380g en su plato',
        ruleNote: 'Servir la pieza grande asada al horno con su ensalada aderezada.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '120g - 125g pollo horneado con piel crocante',
        sides: '150g ensalada mixta (50g repollo + 40g tomate + 60g palta)',
        fatsAndToppings: '10ml aceite de oliva extra virgen',
        plateTotalApprox: '~275g en su plato',
        ruleNote: 'Servir la pieza mediana asada al horno con su ensalada aderezada.'
      }
    },
    tags: ['Keto', 'Día 4', 'Horno', 'Pollo', 'Repollo'],
    createdAt: '2026-10-04'
  },
  {
    id: 'keto-d4-cena',
    dayNumber: 4,
    title: 'Hamburguesas de Res con Huevo Frito y Ensalada',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 15,
    servings: 1,
    calories: 520,
    proteinGrams: 44,
    carbsGrams: 4,
    fatsGrams: 36,
    imageUrl: '/src/assets/images/recipe_hamburguesa_huevo_1792713324729.jpg',
    description: 'Hamburguesas artesanales de res con queso cremoso fundido, coronadas con huevo frito de yema tierna y ensalada fresca.',
    ingredients: [
      '180g de carne picada de res',
      '30g de queso cremoso',
      '1 huevo',
      '15g de grasa animal o aceite de coco',
      '100g de ensalada (50g lechuga y 50g tomate)',
      '15ml de aceite de oliva extra virgen',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Armar dos hamburguesas de 90g con la carne picada y cocinar en plancha caliente 4 minutos de un lado.',
      'Dar vuelta, colocar los 30g de queso cremoso sobre las hamburguesas y cocinar por 4 minutos más tapado hasta fundir.',
      'En sartén aparte derretir los 15g de grasa o aceite de coco e incorporar el huevo. Freír 2 a 3 minutos hasta clara firme.',
      'Servir las hamburguesas coronadas con el huevo frito, acompañadas de la ensalada con 15ml de oliva.'
    ],
    differentialIngredients: [
      { name: 'Carne picada de res artesanal', he: '180g (2 de 90g)', she: '130g (2 de 65g)', total: '310g' },
      { name: 'Queso cremoso o cuartirolo', he: '30g', she: '20g', total: '50g' },
      { name: 'Huevos de campo para freír', he: '1 huevo', she: '1 huevo', total: '2 huevos' },
      { name: 'Grasa animal o aceite de coco para freír', he: '15g', she: '10g', total: '25g' },
      { name: 'Ensalada fresca (lechuga y tomate)', he: '100g (50g/50g)', she: '80g (40g/40g)', total: '180g' },
      { name: 'Aceite de oliva extra virgen', he: '15ml', she: '10ml', total: '25ml' },
      { name: 'Sal y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Moldear cuatro hamburguesas: dos de 90g para Él y dos de 65g para Ella. Salpimentar exteriormente.',
      'Cocinar en plancha caliente durante 4 minutos de un lado.',
      'Dar vuelta: colocar 30g de queso cremoso sobre las hamburguesas de Él y 20g sobre las de Ella. Tapar la plancha y cocinar 4 minutos más hasta fundir totalmente.',
      'En sartén con los 25g de grasa o coco, freír 2 huevos hasta clara firme y yema tierna (1 huevo para cada plato).',
      'Servir en el plato de Él sus 2 hamburguesas coronadas con 1 huevo frito y 100g de ensalada con 15ml de oliva.',
      'Servir en el plato de Ella sus 2 hamburguesas coronadas con 1 huevo frito y 80g de ensalada con 10ml de oliva.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Cocinar las hamburguesas y freír 1 huevo para cada plato. Servir a Él sus 2 hamburguesas de 90g con 30g de queso y a Ella sus 2 hamburguesas de 65g con 20g de queso.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '135g hamburguesas cocidas + 1 huevo frito',
        sides: '100g ensalada fresca (50g lechuga + 50g tomate)',
        fatsAndToppings: '30g queso fundido + 15g grasa/coco + 15ml aceite de oliva',
        plateTotalApprox: '~340g en su plato',
        ruleNote: 'Emplatar las 2 hamburguesas grandes gratinadas con el huevo frito encima y la ensalada.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '95g hamburguesas cocidas + 1 huevo frito',
        sides: '80g ensalada fresca (40g lechuga + 40g tomate)',
        fatsAndToppings: '20g queso fundido + 10g grasa/coco + 10ml aceite de oliva',
        plateTotalApprox: '~245g en su plato',
        ruleNote: 'Emplatar las 2 hamburguesas chicas gratinadas con el huevo frito encima y la ensalada.'
      }
    },
    tags: ['Keto', 'Día 4', 'Plancha', 'Hamburguesa', 'Huevo'],
    createdAt: '2026-10-04'
  },

  // ==================== DÍA 5 ====================
  {
    id: 'keto-d5-almuerzo',
    dayNumber: 5,
    title: 'Bife de Cuadril con Tomates a la Provenzal',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 15,
    servings: 1,
    calories: 510,
    proteinGrams: 44,
    carbsGrams: 5,
    fatsGrams: 35,
    imageUrl: '/src/assets/images/recipe_bife_chorizo_1792712404795.jpg',
    description: 'Bife magro y tierno de cuadril cocinado a fuego vivo con rodajas gruesas de tomate dorado al ajo y perejil fresco.',
    ingredients: [
      '200g de bife de cuadril',
      '150g de tomate en rodajas gruesas',
      '22ml de aceite de oliva extra virgen',
      '1 diente de ajo y perejil fresco picados',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Calentar una plancha a fuego alto con la mitad del aceite de oliva.',
      'Cocinar el bife de cuadril (200g) durante 3 a 4 minutos por lado. Salpimentar al dar vuelta y retirar.',
      'En la misma plancha caliente, agregar el resto del aceite de oliva y colocar las rodajas de tomate.',
      'Espolvorear el ajo y perejil picados sobre los tomates y dorar durante 1 minuto por lado. Servir inmediatamente con la carne.'
    ],
    differentialIngredients: [
      { name: 'Bife de cuadril vacuno', he: '200g', she: '140g', total: '340g' },
      { name: 'Tomate en rodajas gruesas', he: '150g', she: '100g', total: '250g' },
      { name: 'Aceite de oliva extra virgen', he: '22ml', she: '12ml', total: '34ml' },
      { name: 'Ajo picado y perejil fresco', he: '1 diente + perejil', she: '1 diente + perejil', total: '2 dientes + perejil' },
      { name: 'Sal y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Calentar la plancha a fuego alto con una cucharada de aceite de oliva.',
      'Cocinar ambos bifes de cuadril (200g para él, 140g para ella) durante 3 a 4 minutos por lado. Salpimentar al dar vuelta y retirar a los platos.',
      'En la misma plancha caliente, agregar el resto de los 34ml de aceite de oliva y colocar los 250g de rodajas de tomate.',
      'Espolvorear el ajo y perejil picados sobre los tomates y dorar durante 1 minuto por lado.',
      'Servir en el plato de Él su bife de 200g (~150g cocido) con 150g de tomates provenzal.',
      'Servir en el plato de Ella su bife de 140g (~105g cocido) con 100g de tomates provenzal.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Cocinar los bifes y saltear los tomates en la plancha. Servir a Él su bife de 200g crudo (~150g cocido) con 150g de tomates y a Ella su bife de 140g crudo (~105g cocido) con 100g de tomates.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '150g - 155g bife de cuadril cocido',
        sides: '150g tomates a la provenzal dorados',
        fatsAndToppings: '22ml aceite de oliva extra virgen',
        plateTotalApprox: '~300g en su plato',
        ruleNote: 'Servir la pieza de carne con los tomates dorados al ajo y perejil.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '105g - 110g bife de cuadril cocido',
        sides: '100g tomates a la provenzal dorados',
        fatsAndToppings: '12ml aceite de oliva extra virgen',
        plateTotalApprox: '~210g en su plato',
        ruleNote: 'Servir la pieza de carne con los tomates dorados al ajo y perejil.'
      }
    },
    tags: ['Keto', 'Día 5', 'Plancha', 'Carne Vacuna', 'Tomate'],
    createdAt: '2026-10-05'
  },
  {
    id: 'keto-d5-cena',
    dayNumber: 5,
    title: 'Tarta Keto de Espinaca sin Masa',
    mealType: 'cena',
    cookingMethod: 'horno',
    prepTimeMinutes: 30,
    servings: 1,
    calories: 470,
    proteinGrams: 26,
    carbsGrams: 5,
    fatsGrams: 38,
    imageUrl: '/src/assets/images/recipe_tarta_keto_espinaca_1792712405870.jpg',
    description: 'Tarta keto horneada 100% libre de harinas con espinaca fresca bien escurrida, huevos batidos con crema y dados de queso fundido.',
    ingredients: [
      '150g de espinaca cocida y escurrida',
      '2 huevos',
      '45ml de crema de leche',
      '15g de queso reggianito rallado',
      '40g de queso cremoso en cubos',
      'Sal, pimienta y nuez moscada a gusto'
    ],
    instructions: [
      'Precalentar el horno a 180°C.',
      'En un recipiente, batir los 2 huevos con los 45ml de crema de leche, sal, pimienta y nuez moscada.',
      'Agregar la espinaca cocida bien picada, los 15g de queso rallado y los 40g de queso cremoso en cubos. Integrar bien.',
      'Verter en molde pequeño engrasado y hornear a 180°C durante 20 a 25 minutos hasta que esté dorada y firme.'
    ],
    differentialIngredients: [
      { name: 'Espinaca cocida y muy bien escurrida', he: '150g', she: '100g', total: '250g' },
      { name: 'Huevos de campo', he: '2 huevos', she: '2 huevos', total: '4 huevos' },
      { name: 'Crema de leche entera', he: '45ml', she: '30ml', total: '75ml' },
      { name: 'Queso reggianito o sardo rallado', he: '15g', she: '10g', total: '25g' },
      { name: 'Queso cremoso en cubos', he: '40g', she: '25g', total: '65g' },
      { name: 'Sal, pimienta y nuez moscada', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Precalentar el horno a 180°C.',
      'En un bol grande, batir los 4 huevos con los 75ml de crema de leche, nuez moscada, sal y pimienta.',
      'Incorporar los 250g de espinaca cocida y escurrida, los 25g de queso reggianito rallado y los 65g de queso cremoso en cubos.',
      'Verter en molde apto para horno previamente engrasado con manteca o aceite.',
      'Hornear a 180°C durante 20 a 25 minutos hasta que la superficie esté dorada y el relleno firme.',
      'Servir el 58% de la preparación en el plato de Él (~250g) y el 42% en el plato de Ella (~180g).'
    ],
    cookedServing: {
      dishType: 'integrado',
      servingRuleSummary: 'Preparación integrada horneada en un solo molde. Servir el 58% de la tarta en el plato de Él y el 42% en el plato de Ella.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '58% de la tarta horneada (huevos y quesos)',
        sides: 'Espinaca integrada en el relleno',
        fatsAndToppings: 'Crema de leche y queso reggianito gratinado',
        plateTotalApprox: '~250g en su plato',
        ruleNote: 'Cortar y servir el 58% de la tarta horneada en el plato de él.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '42% de la tarta horneada (huevos y quesos)',
        sides: 'Espinaca integrada en el relleno',
        fatsAndToppings: 'Crema de leche y queso reggianito gratinado',
        plateTotalApprox: '~180g en su plato',
        ruleNote: 'Cortar y servir el 42% de la tarta horneada en el plato de ella.'
      }
    },
    tags: ['Keto', 'Día 5', 'Horno', 'Espinaca', 'Sin Harina'],
    createdAt: '2026-10-05'
  },

  // ==================== DÍA 6 ====================
  {
    id: 'keto-d6-almuerzo',
    dayNumber: 6,
    title: 'Matambre de Cerdo a la Pizza con Rúcula',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 18,
    servings: 1,
    calories: 530,
    proteinGrams: 46,
    carbsGrams: 3,
    fatsGrams: 37,
    imageUrl: '/src/assets/images/recipe_churrasco_coliflor_1792713325916.jpg',
    description: 'Corte fino de matambre de cerdo a la plancha cubierto de salsa de tomate natural, abundante mozzarella derretida y colchón de rúcula al oliva.',
    ingredients: [
      '180g de matambre de cerdo',
      '30g de salsa de tomate natural (sin azúcar)',
      '40g de queso mozzarella',
      '30g de rúcula fresca',
      '15ml de aceite de oliva extra virgen',
      'Orégano y sal a gusto'
    ],
    instructions: [
      'Calentar bien la plancha a fuego medio-alto y cocinar el matambre de cerdo (180g) durante 4 a 5 minutos de un lado.',
      'Dar vuelta la carne, extender los 30g de salsa de tomate natural, cubrir con los 40g de mozzarella y espolvorear orégano.',
      'Tapar la plancha y cocinar por 4 a 5 minutos más hasta que la carne esté cocida y el queso derretido.',
      'Servir acompañado de la rúcula (30g) aderezada con los 15ml de aceite de oliva y sal.'
    ],
    differentialIngredients: [
      { name: 'Matambre de cerdo', he: '180g', she: '130g', total: '310g' },
      { name: 'Salsa de tomate natural', he: '30g', she: '20g', total: '50g' },
      { name: 'Queso mozzarella', he: '40g', she: '25g', total: '65g' },
      { name: 'Rúcula fresca', he: '30g', she: '30g', total: '60g' },
      { name: 'Aceite de oliva extra virgen', he: '15ml', she: '10ml', total: '25ml' },
      { name: 'Orégano seco y sal', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Cocinar los matambres a la plancha por 4-5 minutos de un lado.',
      'Dar vuelta, colocar la salsa de tomate (30g en el de él, 20g en el de ella), la mozzarella (40g y 25g) y orégano. Tapar y cocinar 4-5 minutos más.',
      'Servir acompañado de la rúcula aderezada con oliva (15ml para él, 10ml para ella).'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Cocinar los dos cortes de matambre. Servir a Él su matambre de 180g con 30g salsa, 40g mozzarella y 15ml oliva; y a Ella su matambre de 130g con 20g salsa, 25g mozzarella y 10ml oliva.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '135g - 140g matambre de cerdo cocido a la pizza',
        sides: '30g rúcula fresca',
        fatsAndToppings: '30g salsa de tomate + 40g mozzarella derretida + 15ml oliva',
        plateTotalApprox: '~245g en su plato',
        ruleNote: 'Servir su matambre gratinado de 180g crudo con los 30g de rúcula aderezada con 15ml de oliva.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '95g - 100g matambre de cerdo cocido a la pizza',
        sides: '30g rúcula fresca',
        fatsAndToppings: '20g salsa de tomate + 25g mozzarella derretida + 10ml oliva',
        plateTotalApprox: '~175g en su plato',
        ruleNote: 'Servir su matambre gratinado de 130g crudo con los 30g de rúcula aderezada con 10ml de oliva.'
      }
    },
    tags: ['Keto', 'Día 6', 'Plancha', 'Cerdo', 'Mozzarella', 'Rúcula'],
    createdAt: '2026-10-06'
  },
  {
    id: 'keto-d6-cena',
    dayNumber: 6,
    title: 'Wok de Pollo y Zuchini',
    mealType: 'cena',
    cookingMethod: 'salteado_wok',
    prepTimeMinutes: 15,
    servings: 1,
    calories: 470,
    proteinGrams: 42,
    carbsGrams: 4,
    fatsGrams: 30,
    imageUrl: '/src/assets/images/recipe_wok_pollo_zuchini_1792713326934.jpg',
    description: 'Tiras tiernas de pechuga doradas a fuego vivo con bastones crujientes de zuchini salteados en perfumado aceite de coco virgen.',
    ingredients: [
      '180g de pechuga o muslo de pollo en tiras',
      '120g de zuchini en bastones o rodajas',
      '15g de aceite de coco',
      'Sal, pimienta y provenzal a gusto'
    ],
    instructions: [
      'Calentar el wok o sartén profunda a fuego alto con los 15g de aceite de coco.',
      'Agregar las tiras de pollo (180g) y saltear intensamente durante 5 minutos hasta que adquieran color dorado.',
      'Incorporar los 120g de zuchini y saltear todo junto durante 4 minutos adicionales para que el vegetal quede crujiente.',
      'Condimentar con sal, pimienta y provenzal antes de retirar del fuego y servir caliente.'
    ],
    differentialIngredients: [
      { name: 'Pollo en tiras (pechuga o muslo)', he: '180g', she: '130g', total: '310g' },
      { name: 'Zuchini en bastones o rodajas', he: '120g', she: '120g', total: '240g' },
      { name: 'Aceite de coco virgen', he: '15g', she: '10g', total: '25g (Total wok)' },
      { name: 'Sal, pimienta y provenzal', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Calentar el wok a fuego alto con los 25g de aceite de coco.',
      'Saltear los 310g de pollo en tiras por 5 minutos hasta dorar.',
      'Agregar los 240g de zuchini y cocinar 4 minutos más revolviendo.',
      'Servir el 58% de la preparación en el plato de él y el 42% en el de ella.'
    ],
    cookedServing: {
      dishType: 'integrado',
      servingRuleSummary: 'Preparación integrada en wok. Al terminar de saltear, servir el 58% de la preparación en el plato de él y el 42% en el de ella.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '58% del pollo dorado en tiras (~135g-140g cocido)',
        sides: '58% de los bastones de zuchini salteados (~115g)',
        fatsAndToppings: '15g aceite de coco integrado en el salteado',
        plateTotalApprox: '~290g en balanza servido en plato',
        ruleNote: 'Pesar en la balanza ~290g del wok total recién salido del fuego en el plato de Él.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '42% del pollo dorado en tiras (~95g-100g cocido)',
        sides: '42% de los bastones de zuchini salteados (~85g)',
        fatsAndToppings: '10g aceite de coco integrado en el salteado',
        plateTotalApprox: '~210g en balanza servido en plato',
        ruleNote: 'Pesar en la balanza ~210g del wok total recién salido del fuego en el plato de Ella.'
      }
    },
    tags: ['Keto', 'Día 6', 'Salteado Wok', 'Pollo', 'Zuchini', 'Aceite Coco'],
    createdAt: '2026-10-06'
  },

  // ==================== DÍA 7 ====================
  {
    id: 'keto-d7-almuerzo',
    dayNumber: 7,
    title: 'Vacío a la Plancha con Ensalada de Rúcula y Parmesano',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 560,
    proteinGrams: 44,
    carbsGrams: 2,
    fatsGrams: 42,
    imageUrl: '/src/assets/images/recipe_bife_chorizo_1792712404795.jpg',
    description: 'Corte tradicional de vacío a la plancha en su punto exacto de jugosidad con colchón de rúcula aderezada con oliva y hebras de queso parmesano.',
    ingredients: [
      '200g de vacío o tiras de asado',
      '80g de rúcula fresca',
      '20g de queso parmesano en hebras',
      '22ml de aceite de oliva extra virgen',
      'Sal gruesa a gusto'
    ],
    instructions: [
      'Calentar la plancha a fuego medio.',
      'Colocar el corte de carne (200g) y cocinar 6 a 7 minutos por lado para sellar exteriormente y mantener la jugosidad. Salar al dar la vuelta.',
      'Disponer la rúcula en un plato, agregar las hebras de parmesano por encima y aderezar con los 22ml de aceite de oliva.',
      'Servir la carne caliente recién retirada del fuego junto con la ensalada.'
    ],
    differentialIngredients: [
      { name: 'Vacío vacuno o tiras de asado', he: '200g', she: '140g', total: '340g' },
      { name: 'Rúcula fresca limpia', he: '80g', she: '60g', total: '140g' },
      { name: 'Queso parmesano en hebras', he: '20g', she: '12g', total: '32g' },
      { name: 'Aceite de oliva extra virgen', he: '22ml', she: '12ml', total: '34ml' },
      { name: 'Sal gruesa', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Calentar la plancha o parrilla a fuego medio.',
      'Colocar ambos cortes de vacío (200g para él, 140g para ella) y cocinar 6 a 7 minutos por lado. Salar con sal gruesa al dar la vuelta.',
      'Disponer en el plato de Él 80g de rúcula con 20g de hebras de parmesano y 22ml de oliva.',
      'Disponer en el plato de Ella 60g de rúcula con 12g de hebras de parmesano y 12ml de oliva.',
      'Servir cada corte de carne caliente al lado de su respectiva ensalada.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Cocinar los dos cortes de vacío. Servir a Él su pieza de 200g cruda (~150g cocida) con 20g parmesano y a Ella su pieza de 140g cruda (~105g cocida) con 12g parmesano.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '145g - 155g vacío cocido a punto',
        sides: '80g rúcula fresca con hebras de parmesano',
        fatsAndToppings: '20g queso parmesano + 22ml aceite de oliva',
        plateTotalApprox: '~265g en su plato',
        ruleNote: 'Servir la pieza de vacío de 200g crudo recién salida de la plancha con su ensalada.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '105g - 110g vacío cocido a punto',
        sides: '60g rúcula fresca con hebras de parmesano',
        fatsAndToppings: '12g queso parmesano + 12ml aceite de oliva',
        plateTotalApprox: '~185g en su plato',
        ruleNote: 'Servir la pieza de vacío de 140g crudo recién salida de la plancha con su ensalada.'
      }
    },
    tags: ['Keto', 'Día 7', 'Plancha', 'Carne Vacuna', 'Parmesano'],
    createdAt: '2026-10-07'
  },
  {
    id: 'keto-d7-cena',
    dayNumber: 7,
    title: 'Ensalada Templada de Atún y Huevo Duro',
    mealType: 'cena',
    cookingMethod: 'sin_coccion',
    prepTimeMinutes: 12,
    servings: 1,
    calories: 440,
    proteinGrams: 36,
    carbsGrams: 4,
    fatsGrams: 30,
    imageUrl: '/src/assets/images/recipe_omelette_espinaca_1792713324934.jpg',
    description: 'Ensalada fresca y saciante con lomos de atún, huevos duros tibios cortados en cuartos, tomates en dados y lechuga al aceite de oliva.',
    ingredients: [
      '120g de atún en lomo (en aceite o al natural)',
      '2 huevos duros',
      '60g de tomate en cubos',
      '50g de lechuga troceada',
      '15ml de aceite de oliva extra virgen',
      'Sal a gusto'
    ],
    instructions: [
      'Hervir los 2 huevos durante 9 a 10 minutos. Pelar y cortar en cuartos.',
      'En un bol colocar la base de 50g de lechuga troceada y 60g de tomate en cubos.',
      'Incorporar los 120g de atún desmenuzado y los cuartos de huevo tibios.',
      'Rociar con los 15ml de aceite de oliva, agregar sal y mezclar suavemente.'
    ],
    differentialIngredients: [
      { name: 'Atún en lomo escurrido', he: '120g (1 lata)', she: '80g (~3/4 lata)', total: '200g' },
      { name: 'Huevos de campo', he: '2 unidades', she: '1 unidad', total: '3 huevos' },
      { name: 'Tomate redondo en cubos', he: '60g', she: '40g', total: '100g' },
      { name: 'Lechuga troceada fresca', he: '50g', she: '40g', total: '90g' },
      { name: 'Aceite de oliva extra virgen', he: '15ml', she: '10ml', total: '25ml' },
      { name: 'Sal a gusto', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Hervir los 3 huevos durante 9 a 10 minutos. Pelar y cortar en cuartos.',
      'En el bol de Él: colocar 50g de lechuga, 60g de tomate, 120g de atún y los 2 huevos duros en cuartos. Aderezar con 15ml de oliva y sal.',
      'En el bol de Ella: colocar 40g de lechuga, 40g de tomate, 80g de atún y 1 huevo duro en cuartos. Aderezar con 10ml de oliva y sal.',
      'Mezclar suavemente ambos boles y servir tibios.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Armar los boles por separado. Servir a Él 120g de atún con 2 huevos duros y a Ella 80g de atún con 1 huevo duro.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '120g atún en lomo + 2 huevos duros',
        sides: '110g ensalada (50g lechuga + 60g tomate)',
        fatsAndToppings: '15ml aceite de oliva extra virgen',
        plateTotalApprox: '~340g en su plato',
        ruleNote: 'Emplatar el bol grande con la porción completa de atún y los 2 huevos.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '80g atún en lomo + 1 huevo duro',
        sides: '80g ensalada (40g lechuga + 40g tomate)',
        fatsAndToppings: '10ml aceite de oliva extra virgen',
        plateTotalApprox: '~230g en su plato',
        ruleNote: 'Emplatar el bol mediano con 80g de atún y 1 huevo.'
      }
    },
    tags: ['Keto', 'Día 7', 'Sin Cocción', 'Atún', 'Huevos'],
    createdAt: '2026-10-07'
  },

  // ==================== DÍA 8 ====================
  {
    id: 'keto-d8-almuerzo',
    dayNumber: 8,
    title: 'Pechuga en Costra de Parmesano con Lechuga Mixta',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 18,
    servings: 1,
    calories: 490,
    proteinGrams: 47,
    carbsGrams: 2,
    fatsGrams: 32,
    imageUrl: '/src/assets/images/recipe_pollo_brocoli_palta_1792712404721.jpg',
    description: 'Suprema de pollo rebozada en fino queso parmesano rallado y dorada en sartén hasta lograr una costra crocante y aromática.',
    ingredients: [
      '180g de pechuga de pollo',
      '25g de queso parmesano rallado fino',
      '80g de lechuga mixta (morada y mantecosa)',
      '15ml de aceite de oliva extra virgen',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Salpimentar la pechuga de pollo (180g) y presionarla firmemente por ambos lados sobre los 25g de queso parmesano para formar la costra.',
      'Calentar sartén antiadherente a fuego medio y cocinar 4 a 5 minutos por lado hasta costra dorada y pollo cocido.',
      'Servir la pechuga (~135g-140g cocida) acompañada de la lechuga mixta aderezada con los 15ml de oliva.'
    ],
    differentialIngredients: [
      { name: 'Pechuga de pollo', he: '180g', she: '130g', total: '310g' },
      { name: 'Queso parmesano rallado fino', he: '25g', she: '15g', total: '40g' },
      { name: 'Lechuga mixta limpia', he: '80g', she: '60g', total: '140g' },
      { name: 'Aceite de oliva extra virgen', he: '15ml', she: '10ml', total: '25ml' },
      { name: 'Sal y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Salpimentar las dos pechugas. Presionar la pechuga de Él (180g) sobre sus 25g de parmesano, y la de Ella (130g) sobre sus 15g de parmesano para formar las costras.',
      'Calentar sartén antiadherente a fuego medio y colocar ambas pechugas.',
      'Cocinar durante 4 a 5 minutos por lado hasta que la costra de queso esté dorada y crujiente y la carne cocida.',
      'Servir en el plato de Él su pechuga con 80g de lechuga y 15ml de oliva.',
      'Servir en el plato de Ella su pechuga con 60g de lechuga y 10ml de oliva.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Cocinar ambas pechugas con costra de parmesano. Servir a Él su pieza de 180g con 25g parmesano y a Ella su pieza de 130g con 15g parmesano.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '135g - 140g pechuga con costra crujiente',
        sides: '80g lechuga mixta fresca',
        fatsAndToppings: '25g parmesano crocante + 15ml aceite de oliva',
        plateTotalApprox: '~250g en su plato',
        ruleNote: 'Servir la pechuga grande con su costra dorada y ensalada.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '95g - 100g pechuga con costra crujiente',
        sides: '60g lechuga mixta fresca',
        fatsAndToppings: '15g parmesano crocante + 10ml aceite de oliva',
        plateTotalApprox: '~175g en su plato',
        ruleNote: 'Servir la pechuga mediana con su costra dorada y ensalada.'
      }
    },
    tags: ['Keto', 'Día 8', 'Plancha', 'Pollo', 'Parmesano'],
    createdAt: '2026-10-08'
  },
  {
    id: 'keto-d8-cena',
    dayNumber: 8,
    title: 'Bife de Nalga con Manteca de Hierbas y Brócoli al Vapor',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 18,
    servings: 1,
    calories: 510,
    proteinGrams: 45,
    carbsGrams: 5,
    fatsGrams: 34,
    imageUrl: '/src/assets/images/recipe_bife_chorizo_1792712404795.jpg',
    description: 'Bife tierno de nalga a la plancha fundido con manteca de tomillo y romero, acompañado de ramilletes de brócoli cocidos al vapor.',
    ingredients: [
      '200g de bife de nalga',
      '22g de manteca blanda con tomillo y romero picados',
      '150g de brócoli fresco',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Cocinar los 150g de brócoli al vapor durante 4 a 5 minutos a fuego medio. Reservar caliente.',
      'Calentar la plancha a fuego alto. Salpimentar el bife (200g) y cocinar 3 minutos por lado.',
      'Al retirar el bife caliente, colocar inmediatamente los 22g de manteca de hierbas por encima para fundir.',
      'Acompañar con el brócoli al vapor recién hecho.'
    ],
    differentialIngredients: [
      { name: 'Bife de nalga vacuno tierno', he: '200g', she: '140g', total: '340g' },
      { name: 'Manteca con tomillo y romero', he: '22g', she: '12g', total: '34g' },
      { name: 'Brócoli fresco en floretes', he: '150g', she: '120g', total: '270g' },
      { name: 'Sal y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Cocinar los 270g de brócoli al vapor durante 4 a 5 minutos hasta que esté tierno. Reservar caliente.',
      'Calentar la plancha a fuego alto. Salpimentar ambos bifes (200g para él, 140g para ella) y cocinar 3 minutos por lado.',
      'Al retirar a los platos, colocar de inmediato los 22g de manteca de hierbas sobre el bife de Él y los 12g sobre el de Ella para que se fundan con el calor.',
      'Servir en el plato de Él 150g de brócoli al vapor y en el de Ella 120g.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Cocinar ambos bifes de nalga. Servir a Él su bife de 200g crudo (~150g cocido) con 22g de manteca y 150g de brócoli; y a Ella su bife de 140g crudo (~105g cocido) con 12g de manteca y 120g de brócoli.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '150g - 155g bife de nalga cocido',
        sides: '150g brócoli al vapor tierno',
        fatsAndToppings: '22g manteca de hierbas fundida sobre la carne',
        plateTotalApprox: '~320g en su plato',
        ruleNote: 'Servir el bife de 200g crudo con la manteca de hierbas derretida y el brócoli.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '105g - 110g bife de nalga cocido',
        sides: '120g brócoli al vapor tierno',
        fatsAndToppings: '12g manteca de hierbas fundida sobre la carne',
        plateTotalApprox: '~235g en su plato',
        ruleNote: 'Servir el bife de 140g crudo con la manteca de hierbas derretida y el brócoli.'
      }
    },
    tags: ['Keto', 'Día 8', 'Plancha', 'Carne Vacuna', 'Brócoli'],
    createdAt: '2026-10-08'
  },

  // ==================== DÍA 9 ====================
  {
    id: 'keto-d9-almuerzo',
    dayNumber: 9,
    title: 'Bondiola de Cerdo a la Mostaza con Ensalada de Tomate y Palta',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 550,
    proteinGrams: 42,
    carbsGrams: 5,
    fatsGrams: 40,
    imageUrl: '/src/assets/images/recipe_churrasco_coliflor_1792713325916.jpg',
    description: 'Jugosas rodajas de bondiola doradas a la plancha bañadas en reducción de crema de leche y mostaza Dijon, con tomate y palta fresca.',
    ingredients: [
      '180g de bondiola de cerdo en rodajas',
      '30ml de crema de leche',
      '5g de mostaza tipo Dijon',
      '60g de tomate en dados',
      '80g de palta',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Cocinar la bondiola (180g) a la plancha a fuego medio durante 5 minutos por lado. Retirar la carne al plato.',
      'En la misma sartén a fuego bajo añadir 30ml de crema de leche y 5g de mostaza. Reducir 2 minutos revolviendo.',
      'Verter la salsa caliente sobre la bondiola dorada.',
      'Acompañar con la ensalada de 60g de tomate y 80g de palta en dados.'
    ],
    differentialIngredients: [
      { name: 'Bondiola de cerdo en rodajas', he: '180g', she: '130g', total: '310g' },
      { name: 'Crema de leche entera', he: '30ml', she: '20ml', total: '50ml' },
      { name: 'Mostaza tipo Dijon', he: '5g', she: '5g', total: '10g' },
      { name: 'Tomate en dados', he: '60g', she: '40g', total: '100g' },
      { name: 'Palta fresca en dados', he: '80g (1/2 u)', she: '60g (1/2 u chica)', total: '140g (1 u entera)' },
      { name: 'Sal y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Cocinar ambas porciones de bondiola (180g para él, 130g para ella) a la plancha por 5 minutos por lado. Retirar a los platos.',
      'En la misma sartén a fuego bajo, verter los 50ml de crema de leche y los 10g de mostaza Dijon. Revolver durante 2 minutos hasta emulsionar y espesar levemente.',
      'Verter el 58% de la salsa sobre la bondiola de Él y el 42% sobre la de Ella.',
      'Servir en el plato de Él 60g de tomate y 80g de palta; en el de Ella 40g de tomate y 60g de palta.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Cocinar las bondiolas y preparar la salsa en la misma sartén. Servir a Él su bondiola de 180g con el 58% de la salsa de mostaza y a Ella su bondiola de 130g con el 42% de la salsa.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '135g - 140g bondiola de cerdo cocida',
        sides: '140g ensalada (60g tomate + 80g palta)',
        fatsAndToppings: '30ml crema de mostaza Dijon sobre la carne',
        plateTotalApprox: '~305g en su plato',
        ruleNote: 'Servir la bondiola bañada en su salsa cremosa de mostaza y la ensalada.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '95g - 100g bondiola de cerdo cocida',
        sides: '100g ensalada (40g tomate + 60g palta)',
        fatsAndToppings: '20ml crema de mostaza Dijon sobre la carne',
        plateTotalApprox: '~215g en su plato',
        ruleNote: 'Servir la bondiola bañada en su salsa cremosa de mostaza y la ensalada.'
      }
    },
    tags: ['Keto', 'Día 9', 'Plancha', 'Cerdo', 'Mostaza'],
    createdAt: '2026-10-09'
  },
  {
    id: 'keto-d9-cena',
    dayNumber: 9,
    title: 'Revuelto Gramajo Keto',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 15,
    servings: 1,
    calories: 470,
    proteinGrams: 30,
    carbsGrams: 3,
    fatsGrams: 36,
    imageUrl: '/src/assets/images/recipe_omelette_espinaca_1792713324934.jpg',
    description: 'Versión keto del clásico gramajo: huevos de campo revueltos cremosos con jamón cocido en tiritas, espinaca salteada y mozzarella fundida.',
    ingredients: [
      '3 huevos',
      '40g de jamón cocido picado',
      '30g de mozzarella en cubos',
      '50g de espinaca fresca',
      '15ml de aceite de oliva extra virgen',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Calentar los 15ml de aceite de oliva en sartén a fuego medio y saltear los 50g de espinaca durante 2 minutos.',
      'Incorporar los 40g de jamón cocido picado y saltear por 1 minuto adicional.',
      'Batir los 3 huevos con sal y pimienta e integrarlos a la sartén. Revolver a fuego medio-bajo por 2 minutos.',
      'Antes de retirar, agregar los 30g de mozzarella en cubos para que fundan parcialmente. Servir caliente.'
    ],
    differentialIngredients: [
      { name: 'Huevos de campo', he: '3 huevos', she: '2 huevos', total: '5 huevos' },
      { name: 'Jamón cocido en tiritas', he: '40g', she: '25g', total: '65g' },
      { name: 'Queso mozzarella en cubitos', he: '30g', she: '20g', total: '50g' },
      { name: 'Espinaca fresca picada', he: '50g', she: '40g', total: '90g' },
      { name: 'Aceite de oliva extra virgen', he: '15ml', she: '10ml', total: '25ml' },
      { name: 'Sal y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Calentar los 25ml de aceite de oliva en sartén amplia a fuego medio y saltear los 90g de espinaca durante 2 minutos.',
      'Incorporar los 65g de jamón cocido picado y saltear 1 minuto más.',
      'Batir los 5 huevos con sal y pimienta e integrarlos a la sartén. Revolver suavemente a fuego medio-bajo durante 2 minutos hasta consistencia tierna y cremosa.',
      'Incorporar los 50g de mozzarella en cubos para que se fundan en la preparación.',
      'Servir el 58% del revuelto en el plato de Él (~260g) y el 42% en el plato de Ella (~185g).'
    ],
    cookedServing: {
      dishType: 'integrado',
      servingRuleSummary: 'Preparación integrada en una sartén. Al salir del fuego, servir el 58% del revuelto en el plato de Él y el 42% en el plato de Ella.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '58% del revuelto gramajo (3 huevos + 40g jamón)',
        sides: 'Espinaca salteada integrada',
        fatsAndToppings: '30g mozzarella fundida + 15ml oliva',
        plateTotalApprox: '~260g en balanza servido en plato',
        ruleNote: 'Pesar en la balanza ~260g del revuelto cremoso en el plato de Él.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '42% del revuelto gramajo (2 huevos + 25g jamón)',
        sides: 'Espinaca salteada integrada',
        fatsAndToppings: '20g mozzarella fundida + 10ml oliva',
        plateTotalApprox: '~185g en balanza servido en plato',
        ruleNote: 'Pesar en la balanza ~185g del revuelto cremoso en el plato de Ella.'
      }
    },
    tags: ['Keto', 'Día 9', 'Sartén', 'Huevos', 'Gramajo'],
    createdAt: '2026-10-09'
  },

  // ==================== DÍA 10 ====================
  {
    id: 'keto-d10-almuerzo',
    dayNumber: 10,
    title: 'Medallones de Res con Huevo Frito y Puré de Coliflor',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 520,
    proteinGrams: 44,
    carbsGrams: 6,
    fatsGrams: 36,
    imageUrl: '/src/assets/images/recipe_medallones_res_queso_1792712404767.jpg',
    description: 'Medallones dorados a la plancha servidos bajo un huevo frito de yema cremosa, acompañados de puré suave de coliflor a la manteca.',
    ingredients: [
      '180g de carne picada de res',
      '1 huevo',
      '200g de coliflor',
      '15g de manteca',
      '15ml de crema de leche',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Hervir la coliflor (200g) durante 10 a 12 minutos. Escurrir y procesar con los 15g de manteca, 15ml de crema, sal y pimienta.',
      'Formar los medallones con la carne (180g) y cocinar a la plancha 4 minutos por lado.',
      'Cocinar el huevo a la sartén con un toque de manteca hasta dejar la clara firme.',
      'Emplatar los medallones con el huevo frito por encima y el puré de coliflor como guarnición.'
    ],
    differentialIngredients: [
      { name: 'Carne picada de res para medallones', he: '180g (2 de 90g)', she: '130g (2 de 65g)', total: '310g' },
      { name: 'Huevos de campo para freír', he: '1 huevo', she: '1 huevo', total: '2 huevos' },
      { name: 'Coliflor fresca en floretes', he: '200g', she: '150g', total: '350g' },
      { name: 'Manteca', he: '15g', she: '10g', total: '25g' },
      { name: 'Crema de leche entera', he: '15ml', she: '10ml', total: '25ml' },
      { name: 'Sal y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Hervir los 350g de coliflor durante 10 a 12 minutos. Escurrir bien y procesar caliente con los 25g de manteca, 25ml de crema, sal y pimienta.',
      'Moldear cuatro medallones: dos de 90g para Él y dos de 65g para Ella. Cocinar a la plancha 4 minutos por lado.',
      'Freír los 2 huevos en sartén dejando la clara firme y la yema tierna (1 huevo para cada plato).',
      'Servir en el plato de Él sus 2 medallones con 1 huevo frito encima y el 58% del puré (~180g).',
      'Servir en el plato de Ella sus 2 medallones con 1 huevo frito encima y el 42% del puré (~130g).'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Cocinar los 4 medallones y freír 1 huevo por comensal. Servir a Él sus 2 medallones de 90g con el 58% del puré y a Ella sus 2 medallones de 65g con el 42% del puré.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '135g medallones de res cocidos + 1 huevo frito',
        sides: '180g puré de coliflor cremoso en balanza',
        fatsAndToppings: '15g manteca + 15ml crema integradas al puré',
        plateTotalApprox: '~360g en su plato',
        ruleNote: 'Servir los 2 medallones grandes coronados con el huevo frito y el puré.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '95g medallones de res cocidos + 1 huevo frito',
        sides: '130g puré de coliflor cremoso en balanza',
        fatsAndToppings: '10g manteca + 10ml crema integradas al puré',
        plateTotalApprox: '~255g en su plato',
        ruleNote: 'Servir los 2 medallones chicos coronados con el huevo frito y el puré.'
      }
    },
    tags: ['Keto', 'Día 10', 'Plancha', 'Carne Vacuna', 'Coliflor'],
    createdAt: '2026-10-10'
  },
  {
    id: 'keto-d10-cena',
    dayNumber: 10,
    title: 'Merluza al Horno con Limón y Zuchinis Salteados',
    mealType: 'cena',
    cookingMethod: 'horno',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 450,
    proteinGrams: 46,
    carbsGrams: 4,
    fatsGrams: 28,
    imageUrl: '/src/assets/images/recipe_merluza_acelga_1792713325749.jpg',
    description: 'Filete de merluza horneado en manteca al limón y ajo picado, acompañado de crujientes rodajas de zuchini salteadas a la sartén.',
    ingredients: [
      '220g de filete de merluza',
      '22g de manteca',
      '1 diente de ajo picado',
      'Jugo de 1/2 limón',
      '120g de zuchini en rodajas',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Precalentar el horno a 180°C.',
      'Colocar la merluza (220g) en una fuente para horno, distribuir los 22g de manteca por encima, el ajo picado, sal, pimienta y el jugo de limón.',
      'Hornear a 180°C durante 15 minutos hasta que esté opaco y tierno.',
      'Saltear los 120g de zuchini en sartén con un toque de manteca durante 4 a 5 minutos. Servir con el pescado.'
    ],
    differentialIngredients: [
      { name: 'Filete de merluza fresca despinada', he: '220g', she: '150g', total: '370g' },
      { name: 'Manteca', he: '22g', she: '14g', total: '36g' },
      { name: 'Zuchini en rodajas', he: '120g', she: '120g', total: '240g' },
      { name: 'Dientes de ajo picados y limón', he: '1 diente + limón', she: '1 diente + limón', total: '2 dientes + 1 limón' },
      { name: 'Sal y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Precalentar el horno a 180°C.',
      'Disponer los filetes de merluza en una fuente: 220g para Él (con 22g de manteca, ajo y limón) y 150g para Ella (con 14g de manteca, ajo y limón). Salpimentar.',
      'Hornear a 180°C durante 15 minutos.',
      'En una sartén saltear los 240g de rodajas de zuchini durante 4 a 5 minutos hasta que estén tiernos pero firmes.',
      'Servir en el plato de Él su filete de 220g (~165g cocido) con 120g de zuchini salteado.',
      'Servir en el plato de Ella su filete de 150g (~110g cocido) con 120g de zuchini salteado.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Hornear los dos filetes en manteca de limón. Servir a Él su filete de 220g crudo (~165g cocido) con 120g de zuchini y a Ella su filete de 150g crudo (~110g cocido) con 120g de zuchini.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '165g - 170g filete de merluza al horno',
        sides: '120g rodajas de zuchini salteadas',
        fatsAndToppings: '22g manteca al limón y ajo',
        plateTotalApprox: '~305g en su plato',
        ruleNote: 'Servir la pieza grande horneada con el jugo de manteca y los zuchinis.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '110g - 115g filete de merluza al horno',
        sides: '120g rodajas de zuchini salteadas',
        fatsAndToppings: '14g manteca al limón y ajo',
        plateTotalApprox: '~245g en su plato',
        ruleNote: 'Servir la pieza mediana horneada con el jugo de manteca y los zuchinis.'
      }
    },
    tags: ['Keto', 'Día 10', 'Horno', 'Pescado', 'Zuchini'],
    createdAt: '2026-10-10'
  },

  // ==================== DÍA 11 ====================
  {
    id: 'keto-d11-almuerzo',
    dayNumber: 11,
    title: 'Ensalada Keto Completa de Pollo, Palta y Nueces',
    mealType: 'almuerzo',
    cookingMethod: 'sin_coccion',
    prepTimeMinutes: 15,
    servings: 1,
    calories: 520,
    proteinGrams: 45,
    carbsGrams: 4,
    fatsGrams: 37,
    imageUrl: '/src/assets/images/recipe_pollo_brocoli_palta_1792712404721.jpg',
    description: 'Ensalada fresca y crujiente de pechuga cocida desmenuzada, hojas de lechuga, dados de palta y nueces picadas aderezada con oliva virgen.',
    ingredients: [
      '180g de pechuga de pollo cocida y desmenuzada',
      '80g de lechuga',
      '80g de palta',
      '15g de nueces picadas',
      '22ml de aceite de oliva extra virgen',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Disponer en un bol la base de 80g de lechuga lavada y troceada.',
      'Agregar el pollo cocido desmenuzado (~135g), los 80g de palta en cubos y los 15g de nueces picadas.',
      'Aderezar con los 22ml de aceite de oliva, sal y pimienta. Mezclar bien antes de consumir.'
    ],
    differentialIngredients: [
      { name: 'Pechuga de pollo cocida y desmenuzada', he: '180g crudo (~135g cocido)', she: '130g crudo (~95g cocido)', total: '310g crudo' },
      { name: 'Lechuga fresca limpia', he: '80g', she: '60g', total: '140g' },
      { name: 'Palta fresca en cubos', he: '80g (1/2 u)', she: '60g (1/2 u chica)', total: '140g (1 u entera)' },
      { name: 'Nueces picadas', he: '15g', she: '10g', total: '25g' },
      { name: 'Aceite de oliva extra virgen', he: '22ml', she: '12ml', total: '34ml' },
      { name: 'Sal y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'En el bol de Él: colocar 80g de lechuga troceada, ~135g de pollo cocido desmenuzado, 80g de palta en cubos y 15g de nueces picadas. Aderezar con 22ml de oliva y sal.',
      'En el bol de Ella: colocar 60g de lechuga troceada, ~95g de pollo cocido desmenuzado, 60g de palta en cubos y 10g de nueces picadas. Aderezar con 12ml de oliva y sal.',
      'Mezclar suavemente ambos boles y servir de inmediato.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Armar los dos boles según las proporciones pesadas. Servir a Él ~135g de pollo cocido con 15g nueces y 22ml oliva; y a Ella ~95g de pollo cocido con 10g nueces y 12ml oliva.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '135g - 140g pechuga cocida desmenuzada',
        sides: '160g vegetales (80g lechuga + 80g palta)',
        fatsAndToppings: '15g nueces crocantes + 22ml aceite de oliva',
        plateTotalApprox: '~330g en su plato',
        ruleNote: 'Servir el bol grande completo de ensalada keto con pollo y nueces.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '95g - 100g pechuga cocida desmenuzada',
        sides: '120g vegetales (60g lechuga + 60g palta)',
        fatsAndToppings: '10g nueces crocantes + 12ml aceite de oliva',
        plateTotalApprox: '~235g en su plato',
        ruleNote: 'Servir el bol mediano de ensalada keto con pollo y nueces.'
      }
    },
    tags: ['Keto', 'Día 11', 'Sin Cocción', 'Pollo', 'Palta', 'Nueces'],
    createdAt: '2026-10-11'
  },
  {
    id: 'keto-d11-cena',
    dayNumber: 11,
    title: 'Tarta Keto de Zuchini sin Masa',
    mealType: 'cena',
    cookingMethod: 'horno',
    prepTimeMinutes: 30,
    servings: 1,
    calories: 460,
    proteinGrams: 26,
    carbsGrams: 5,
    fatsGrams: 37,
    imageUrl: '/src/assets/images/recipe_tarta_keto_espinaca_1792712405870.jpg',
    description: 'Tarta salada horneada sin harinas a base de hebras de zuchini escurridas, huevos batidos con crema y queso mozzarella fundido.',
    ingredients: [
      '180g de zuchini rallado y escurrido',
      '2 huevos',
      '30ml de crema de leche',
      '40g de queso mozzarella rallado',
      'Sal, pimienta y provenzal a gusto'
    ],
    instructions: [
      'Precalentar el horno a 180°C.',
      'Rallar los 180g de zuchini y apretar firmemente con un paño limpio para extraer el exceso de agua.',
      'Batir los 2 huevos con los 30ml de crema, condimentos, el zuchini y los 40g de mozzarella.',
      'Verter en molde apto para horno y hornear por 20 minutos a 180°C hasta dorar.'
    ],
    differentialIngredients: [
      { name: 'Zuchini rallado y bien escurrido', he: '180g', she: '120g', total: '300g' },
      { name: 'Huevos de campo', he: '2 huevos', she: '2 huevos', total: '4 huevos' },
      { name: 'Crema de leche entera', he: '30ml', she: '20ml', total: '50ml' },
      { name: 'Queso mozzarella rallado', he: '40g', she: '25g', total: '65g' },
      { name: 'Sal, pimienta y provenzal', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Precalentar el horno a 180°C.',
      'Rallar los 300g de zuchini y apretar con paño limpio para extraer todo el líquido.',
      'Batir los 4 huevos con los 50ml de crema de leche, sal, pimienta y provenzal.',
      'Integrar el zuchini escurrido y los 65g de mozzarella rallada.',
      'Verter en molde apto para horno aceitado y hornear a 180°C por 20 a 25 minutos hasta que esté dorada y cuajada.',
      'Servir el 58% de la tarta en el plato de Él (~260g) y el 42% en el plato de Ella (~185g).'
    ],
    cookedServing: {
      dishType: 'integrado',
      servingRuleSummary: 'Tarta integrada cocinada en molde para horno. Servir el 58% de la tarta en el plato de Él y el 42% en el de Ella.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '58% de la tarta horneada (huevos y mozzarella)',
        sides: 'Zuchini rallado integrado',
        fatsAndToppings: 'Crema de leche y queso mozzarella fundido',
        plateTotalApprox: '~260g en balanza servido en plato',
        ruleNote: 'Cortar y servir el 58% de la preparación en el plato de Él.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '42% de la tarta horneada (huevos y mozzarella)',
        sides: 'Zuchini rallado integrado',
        fatsAndToppings: 'Crema de leche y queso mozzarella fundido',
        plateTotalApprox: '~185g en balanza servido en plato',
        ruleNote: 'Cortar y servir el 42% de la preparación en el plato de Ella.'
      }
    },
    tags: ['Keto', 'Día 11', 'Horno', 'Zuchini', 'Sin Harina'],
    createdAt: '2026-10-11'
  },

  // ==================== DÍA 12 ====================
  {
    id: 'keto-d12-almuerzo',
    dayNumber: 12,
    title: 'Bife de Chorizo con Ensalada de Radicheta, Tomate y Gouda',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 15,
    servings: 1,
    calories: 550,
    proteinGrams: 45,
    carbsGrams: 4,
    fatsGrams: 40,
    imageUrl: '/src/assets/images/recipe_bife_chorizo_1792712404795.jpg',
    description: 'Corte grueso de bife de chorizo sellado a la plancha acompañado de radicheta fresca, rodajas de tomate y dados de queso Gouda.',
    ingredients: [
      '200g de bife de chorizo',
      '50g de radicheta lavada',
      '60g de tomate en rodajas',
      '30g de queso Gouda en cubos',
      '22ml de aceite de oliva extra virgen',
      'Sal gruesa a gusto'
    ],
    instructions: [
      'Cocinar el bife de chorizo (200g) en plancha caliente a fuego máximo durante 4 a 5 minutos por lado. Salar al dar vuelta.',
      'Preparar la ensalada combinando la radicheta, el tomate en rodajas y los 30g de queso Gouda en cubos.',
      'Aderezar los vegetales con los 22ml de aceite de oliva y sal.',
      'Servir la carne recién salida de la plancha junto con la ensalada fresca.'
    ],
    differentialIngredients: [
      { name: 'Bife de chorizo vacuno', he: '200g', she: '140g', total: '340g' },
      { name: 'Radicheta fresca limpia', he: '50g', she: '40g', total: '90g' },
      { name: 'Tomate en rodajas', he: '60g', she: '40g', total: '100g' },
      { name: 'Queso Gouda en cubos', he: '30g', she: '20g', total: '50g' },
      { name: 'Aceite de oliva extra virgen', he: '22ml', she: '12ml', total: '34ml' },
      { name: 'Sal gruesa', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Cocinar ambos bifes de chorizo (200g para él, 140g para ella) a la plancha caliente durante 4 a 5 minutos por lado. Salar al dar la vuelta.',
      'En el plato de Él: disponer 50g de radicheta, 60g de tomate y 30g de queso Gouda con 22ml de oliva.',
      'En el plato de Ella: disponer 40g de radicheta, 40g de tomate y 20g de queso Gouda con 12ml de oliva.',
      'Servir cada bife recién salido de la plancha junto a su ensalada.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Planchar los dos bifes de chorizo. Servir a Él su bife de 200g crudo (~150g cocido) con 30g de Gouda y a Ella su bife de 140g crudo (~105g cocido) con 20g de Gouda.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '150g - 160g bife de chorizo cocido',
        sides: '110g ensalada (50g radicheta + 60g tomate)',
        fatsAndToppings: '30g queso Gouda en cubos + 22ml aceite de oliva',
        plateTotalApprox: '~295g en su plato',
        ruleNote: 'Servir la pieza de carne dorada con la ensalada y dados de queso.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '105g - 110g bife de chorizo cocido',
        sides: '80g ensalada (40g radicheta + 40g tomate)',
        fatsAndToppings: '20g queso Gouda en cubos + 12ml aceite de oliva',
        plateTotalApprox: '~210g en su plato',
        ruleNote: 'Servir la pieza de carne dorada con la ensalada y dados de queso.'
      }
    },
    tags: ['Keto', 'Día 12', 'Plancha', 'Carne Vacuna', 'Queso Gouda'],
    createdAt: '2026-10-12'
  },
  {
    id: 'keto-d12-cena',
    dayNumber: 12,
    title: 'Wok de Carne en Tiras con Repollo Blanco',
    mealType: 'cena',
    cookingMethod: 'salteado_wok',
    prepTimeMinutes: 15,
    servings: 1,
    calories: 480,
    proteinGrams: 42,
    carbsGrams: 5,
    fatsGrams: 33,
    imageUrl: '/src/assets/images/recipe_wok_pollo_zuchini_1792713326934.jpg',
    description: 'Tiras tiernas de lomo o cuadril salteadas a fuego vivo con juliana fina de repollo blanco en abundante manteca y ajo.',
    ingredients: [
      '180g de carne vacuna (cuadril o lomo) en tiras',
      '100g de repollo blanco en juliana fina',
      '22g de manteca',
      'Sal, pimienta y ajo en polvo a gusto'
    ],
    instructions: [
      'Derretir la mitad de los 22g de manteca en un wok a fuego alto y saltear las tiras de carne durante 4 minutos. Retirar.',
      'Agregar el resto de la manteca e incorporar los 100g de repollo blanco. Saltear durante 5 minutos.',
      'Reincorporar la carne, sazonar con sal, pimienta y ajo en polvo, y saltear 1 minuto más todo junto.'
    ],
    differentialIngredients: [
      { name: 'Carne vacuna (lomo o cuadril) en tiras', he: '180g', she: '130g', total: '310g' },
      { name: 'Repollo blanco en juliana fina', he: '100g', she: '80g', total: '180g' },
      { name: 'Manteca', he: '22g', she: '12g', total: '34g' },
      { name: 'Sal, pimienta y ajo en polvo', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Derretir la mitad de los 34g de manteca en el wok a fuego alto y saltear los 310g de carne en tiras durante 4 minutos. Retirar del wok.',
      'Agregar el resto de la manteca al wok e incorporar los 180g de repollo blanco en juliana.',
      'Saltear a fuego medio-alto durante 5 minutos hasta que esté blando y ligeramente dorado.',
      'Reincorporar la carne, sazonar con sal, pimienta y ajo en polvo, y saltear todo junto por 1 minuto más.',
      'Servir el 58% de la preparación en el plato de él y el 42% en el de ella.'
    ],
    cookedServing: {
      dishType: 'integrado',
      servingRuleSummary: 'Salteado integrado en wok. Al finalizar, servir el 58% de la preparación en el plato de él y el 42% en el de ella.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '58% de la carne salteada (~135g-140g cocida)',
        sides: '58% del repollo blanco salteado a la manteca (~95g)',
        fatsAndToppings: '22g manteca integrada en la cocción',
        plateTotalApprox: '~250g en balanza servido en plato',
        ruleNote: 'Pesar en la balanza ~250g del salteado en el plato de Él.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '42% de la carne salteada (~95g-100g cocida)',
        sides: '42% del repollo blanco salteado a la manteca (~75g)',
        fatsAndToppings: '12g manteca integrada en la cocción',
        plateTotalApprox: '~180g en balanza servido en plato',
        ruleNote: 'Pesar en la balanza ~180g del salteado en el plato de Ella.'
      }
    },
    tags: ['Keto', 'Día 12', 'Salteado Wok', 'Carne Vacuna', 'Repollo'],
    createdAt: '2026-10-12'
  },

  // ==================== DÍA 13 ====================
  {
    id: 'keto-d13-almuerzo',
    dayNumber: 13,
    title: 'Muslos de Pollo al Limón con Ensalada de Lechuga y Palta',
    mealType: 'almuerzo',
    cookingMethod: 'horno',
    prepTimeMinutes: 45,
    servings: 1,
    calories: 540,
    proteinGrams: 44,
    carbsGrams: 4,
    fatsGrams: 39,
    imageUrl: '/src/assets/images/recipe_pollo_horno_ensalada_1792713325350.jpg',
    description: 'Muslos de pollo perfumados al jugo de limón y orégano asados con piel crocante, servidos con ensalada de hojas de lechuga y dados de palta.',
    ingredients: [
      '250g de muslos de pollo con piel',
      'Jugo de 1/2 limón',
      '80g de lechuga',
      '80g de palta',
      '15ml de aceite de oliva extra virgen',
      'Sal, pimienta y orégano a gusto'
    ],
    instructions: [
      'Precalentar el horno a 200°C.',
      'Disponer los muslos de pollo en una asadera, rociar con el jugo de limón y condimentar con sal, pimienta y orégano.',
      'Hornear a 200°C durante 35 a 40 minutos hasta asegurar que la piel quede crujiente.',
      'Cortar la lechuga y los 80g de palta en trozos, aderezar con los 15ml de oliva y servir junto al pollo.'
    ],
    differentialIngredients: [
      { name: 'Muslos de pollo con piel', he: '250g', she: '180g', total: '430g' },
      { name: 'Jugo de limón, orégano y condimentos', he: '1/2 limón', she: '1/2 limón', total: '1 limón entero' },
      { name: 'Lechuga fresca limpia', he: '80g', she: '60g', total: '140g' },
      { name: 'Palta fresca', he: '80g (1/2 u)', she: '60g (1/2 u chica)', total: '140g (1 u entera)' },
      { name: 'Aceite de oliva extra virgen', he: '15ml', she: '10ml', total: '25ml' },
      { name: 'Sal y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Precalentar el horno a 200°C.',
      'Colocar las piezas de pollo (250g para él, 180g para ella) en una asadera con el jugo de limón, sal, pimienta y orégano.',
      'Hornear a 200°C durante 35 a 40 minutos hasta dorar la piel crocante.',
      'Servir en el plato de Él su pieza de pollo de 250g crudo (~170g cocido) con 80g de lechuga, 80g de palta y 15ml de oliva.',
      'Servir en el plato de Ella su pieza de pollo de 180g crudo (~125g cocido) con 60g de lechuga, 60g de palta y 10ml de oliva.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Hornear las dos piezas de pollo. Servir a Él su pieza de 250g cruda (~170g cocida) y a Ella su pieza de 180g cruda (~125g cocida) con sus ensaladas de palta.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '170g - 175g muslo asado con piel crocante',
        sides: '160g ensalada (80g lechuga + 80g palta)',
        fatsAndToppings: '15ml aceite de oliva extra virgen',
        plateTotalApprox: '~360g en su plato',
        ruleNote: 'Servir la pieza grande asada al horno con la ensalada.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '120g - 125g muslo asado con piel crocante',
        sides: '120g ensalada (60g lechuga + 60g palta)',
        fatsAndToppings: '10ml aceite de oliva extra virgen',
        plateTotalApprox: '~260g en su plato',
        ruleNote: 'Servir la pieza mediana asada al horno con la ensalada.'
      }
    },
    tags: ['Keto', 'Día 13', 'Horno', 'Pollo', 'Palta'],
    createdAt: '2026-10-13'
  },
  {
    id: 'keto-d13-cena',
    dayNumber: 13,
    title: 'Tortilla de Acelga y Queso',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 18,
    servings: 1,
    calories: 470,
    proteinGrams: 28,
    carbsGrams: 4,
    fatsGrams: 37,
    imageUrl: '/src/assets/images/recipe_omelette_espinaca_1792713324934.jpg',
    description: 'Tortilla tradicional keto elaborada con hojas de acelga escurridas, huevos batidos y queso mozzarella troceado, dorada por ambos lados.',
    ingredients: [
      '150g de acelga cocida y bien escurrida',
      '3 huevos',
      '40g de queso mozzarella',
      '22ml de aceite de oliva extra virgen',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Picar la acelga cocida (150g).',
      'Batir los 3 huevos con sal y pimienta e incorporar la acelga picada junto con los 40g de mozzarella.',
      'Calentar los 22ml de aceite de oliva en una sartén antiadherente a fuego medio.',
      'Verter la mezcla y cocinar durante 4 minutos de un lado. Dar vuelta con ayuda de un plato y cocinar durante 3 minutos más.'
    ],
    differentialIngredients: [
      { name: 'Acelga cocida y muy bien escurrida', he: '150g', she: '100g', total: '250g' },
      { name: 'Huevos de campo', he: '3 huevos', she: '2 huevos', total: '5 huevos' },
      { name: 'Queso mozzarella troceado', he: '40g', she: '25g', total: '65g' },
      { name: 'Aceite de oliva extra virgen', he: '22ml', she: '12ml', total: '34ml' },
      { name: 'Sal y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Picar los 250g de acelga cocida y escurrida.',
      'Batir los 5 huevos con sal y pimienta. Integrar la acelga picada y los 65g de mozzarella troceada.',
      'Calentar los 34ml de aceite de oliva en sartén a fuego medio.',
      'Verter la mezcla completa, cocinar 4 minutos de un lado hasta cuajar la base, dar vuelta con ayuda de un plato y cocinar 3 minutos más del otro lado.',
      'Servir el 58% de la tortilla en el plato de él y el 42% en el de ella.'
    ],
    cookedServing: {
      dishType: 'integrado',
      servingRuleSummary: 'Tortilla integrada en sartén. Al terminar, cortar y servir el 58% de la tortilla en el plato de él y el 42% en el de ella.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '58% de la tortilla (3 huevos + 40g mozzarella)',
        sides: 'Acelga picada integrada',
        fatsAndToppings: '40g mozzarella + 22ml aceite de oliva',
        plateTotalApprox: '~250g en balanza servido en plato',
        ruleNote: 'Servir la porción de 58% de la tortilla recién salida en el plato de Él.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '42% de la tortilla (2 huevos + 25g mozzarella)',
        sides: 'Acelga picada integrada',
        fatsAndToppings: '25g mozzarella + 12ml aceite de oliva',
        plateTotalApprox: '~180g en balanza servido en plato',
        ruleNote: 'Servir la porción de 42% de la tortilla recién salida en el plato de Ella.'
      }
    },
    tags: ['Keto', 'Día 13', 'Sartén', 'Acelga', 'Huevos'],
    createdAt: '2026-10-13'
  },

  // ==================== DÍA 14 ====================
  {
    id: 'keto-d14-almuerzo',
    dayNumber: 14,
    title: 'Churrasco de Cerdo con Vegetales Gratinados',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 510,
    proteinGrams: 45,
    carbsGrams: 5,
    fatsGrams: 35,
    imageUrl: '/src/assets/images/recipe_churrasco_coliflor_1792713325916.jpg',
    description: 'Churrasco de cerdo sellado a la plancha acompañado de floretes de brócoli y coliflor al vapor gratinados con queso duro al horno.',
    ingredients: [
      '180g de churrasco de cerdo',
      '100g de brócoli',
      '100g de coliflor',
      '20g de queso rallado (Reggianito o Sardo)',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Cocinar el brócoli (100g) y la coliflor (100g) al vapor durante 5 minutos.',
      'Disponer en fuente para horno, cubrir con los 20g de queso rallado y gratinar a 200°C por 5 minutos.',
      'Cocinar el churrasco de cerdo (180g) a la plancha a fuego medio durante 5 minutos por lado.',
      'Servir la carne acompañada por las verduras gratinadas calientes.'
    ],
    differentialIngredients: [
      { name: 'Churrasco de cerdo tierno', he: '180g', she: '130g', total: '310g' },
      { name: 'Brócoli en floretes', he: '100g', she: '80g', total: '180g' },
      { name: 'Coliflor en floretes', he: '100g', she: '80g', total: '180g' },
      { name: 'Queso rallado (Reggianito o Sardo)', he: '20g', she: '12g', total: '32g' },
      { name: 'Sal y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Cocinar los 180g de brócoli y 180g de coliflor al vapor durante 5 minutos.',
      'Colocar los vegetales en fuente para horno: el 58% para Él (cubierto con 20g de queso rallado) y el 42% para Ella (cubierto con 12g de queso rallado). Gratinar a 200°C durante 5 minutos hasta dorar.',
      'Cocinar ambos churrascos de cerdo a la plancha a fuego medio durante 5 minutos por lado.',
      'Servir en el plato de Él su churrasco de 180g (~135g cocido) con sus verduras gratinadas.',
      'Servir en el plato de Ella su churrasco de 130g (~95g cocido) con sus verduras gratinadas.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Cocinar los churrascos y gratinar los vegetales al horno. Servir a Él su pieza de 180g con 20g de queso y a Ella su pieza de 130g con 12g de queso.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '135g - 140g churrasco de cerdo cocido',
        sides: '200g vegetales gratinados (100g brócoli + 100g coliflor)',
        fatsAndToppings: '20g queso reggianito gratinado',
        plateTotalApprox: '~350g en su plato',
        ruleNote: 'Servir la pieza de cerdo dorada con los vegetales recién gratinados.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '95g - 100g churrasco de cerdo cocido',
        sides: '160g vegetales gratinados (80g brócoli + 80g coliflor)',
        fatsAndToppings: '12g queso reggianito gratinado',
        plateTotalApprox: '~265g en su plato',
        ruleNote: 'Servir la pieza de cerdo dorada con los vegetales recién gratinados.'
      }
    },
    tags: ['Keto', 'Día 14', 'Plancha', 'Cerdo', 'Gratinado'],
    createdAt: '2026-10-14'
  },
  {
    id: 'keto-d14-cena',
    dayNumber: 14,
    title: 'Hamburguesas Keto con Palta y Ensalada',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 15,
    servings: 1,
    calories: 510,
    proteinGrams: 42,
    carbsGrams: 4,
    fatsGrams: 37,
    imageUrl: '/src/assets/images/recipe_hamburguesa_huevo_1792713324729.jpg',
    description: 'Hamburguesas caseras de res con queso derretido, acompañadas de láminas de palta madura y ensalada crujiente de lechuga y tomate.',
    ingredients: [
      '180g de carne picada de res',
      '30g de queso cremoso',
      '80g de palta',
      '80g de ensalada (40g lechuga y 40g tomate)',
      '15ml de aceite de oliva extra virgen',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Moldear las hamburguesas de res (180g) y dorarlas a la plancha durante 4 minutos a fuego medio-alto.',
      'Dar vuelta la carne, disponer los 30g de queso cremoso encima y cocinar 4 minutos más tapado.',
      'Acompañar la hamburguesa con los 80g de palta en láminas y la ensalada con los 15ml de aceite de oliva.'
    ],
    differentialIngredients: [
      { name: 'Carne picada de res', he: '180g (2 de 90g)', she: '130g (2 de 65g)', total: '310g' },
      { name: 'Queso cremoso o cuartirolo', he: '30g', she: '20g', total: '50g' },
      { name: 'Palta fresca en láminas', he: '80g (1/2 u)', she: '60g (1/2 u chica)', total: '140g (1 u entera)' },
      { name: 'Ensalada fresca (lechuga y tomate)', he: '80g (40g/40g)', she: '60g (30g/30g)', total: '140g' },
      { name: 'Aceite de oliva extra virgen', he: '15ml', she: '10ml', total: '25ml' },
      { name: 'Sal y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Moldear cuatro hamburguesas: dos de 90g para Él y dos de 65g para Ella. Salpimentar exteriormente.',
      'Cocinar a la plancha bien caliente durante 4 minutos de un lado.',
      'Dar vuelta: colocar los 30g de queso sobre las hamburguesas de Él y los 20g sobre las de Ella. Tapar y cocinar 4 minutos más hasta fundir totalmente.',
      'Servir en el plato de Él sus 2 hamburguesas con 80g de palta, 80g de ensalada y 15ml de oliva.',
      'Servir en el plato de Ella sus 2 hamburguesas con 60g de palta, 60g de ensalada y 10ml de oliva.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Cocinar las hamburguesas a la plancha. Servir a Él sus 2 hamburguesas de 90g con 30g de queso y 80g palta; y a Ella sus 2 de 65g con 20g queso y 60g palta.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '135g - 140g hamburguesas cocidas con queso',
        sides: '160g guarnición (80g palta + 40g lechuga + 40g tomate)',
        fatsAndToppings: '30g queso fundido + 15ml aceite de oliva',
        plateTotalApprox: '~320g en su plato',
        ruleNote: 'Servir los 2 medallones gratinados con la palta en láminas y ensalada.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '95g - 100g hamburguesas cocidas con queso',
        sides: '120g guarnición (60g palta + 30g lechuga + 30g tomate)',
        fatsAndToppings: '20g queso fundido + 10ml aceite de oliva',
        plateTotalApprox: '~230g en su plato',
        ruleNote: 'Servir los 2 medallones gratinados con la palta en láminas y ensalada.'
      }
    },
    tags: ['Keto', 'Día 14', 'Plancha', 'Hamburguesa', 'Palta'],
    createdAt: '2026-10-14'
  },

  // ==================== DÍA 15 ====================
  {
    id: 'keto-d15-almuerzo',
    dayNumber: 15,
    title: 'Peceto al Horno con Ensalada Mixta',
    mealType: 'almuerzo',
    cookingMethod: 'horno',
    prepTimeMinutes: 35,
    servings: 1,
    calories: 490,
    proteinGrams: 46,
    carbsGrams: 3,
    fatsGrams: 33,
    imageUrl: '/src/assets/images/recipe_bife_chorizo_1792712404795.jpg',
    description: 'Tiernas rodajas de peceto asado al horno previamente sellado, acompañadas de fresca ensalada de hojas de rúcula, lechuga y tomate.',
    ingredients: [
      '200g de peceto',
      '90g de ensalada mixta (30g lechuga, 30g rúcula, 30g tomate)',
      '22ml de aceite de oliva extra virgen',
      'Sal, pimienta y ajo en polvo a gusto'
    ],
    instructions: [
      'Precalentar el horno a 180°C.',
      'Sellar el peceto (200g) en plancha caliente 1 a 2 minutos por lado. Sazonar con sal, pimienta y ajo en polvo.',
      'Hornear a 180°C durante 25 a 30 minutos y cortar en rodajas.',
      'Servir las rodajas de peceto junto a la ensalada aderezada con los 22ml de aceite de oliva.'
    ],
    differentialIngredients: [
      { name: 'Peceto vacuno tierno', he: '200g', she: '140g', total: '340g' },
      { name: 'Ensalada mixta (lechuga, rúcula y tomate)', he: '90g (30g/30g/30g)', she: '60g (20g/20g/20g)', total: '150g' },
      { name: 'Aceite de oliva extra virgen', he: '22ml', she: '12ml', total: '34ml' },
      { name: 'Ajo en polvo, sal y pimienta', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Precalentar el horno a 180°C.',
      'Sellar los trozos de peceto (200g para él, 140g para ella) en plancha caliente 1 a 2 minutos por lado para conservar jugos.',
      'Sazonar con sal, pimienta y ajo en polvo. Transferir a una fuente y hornear a 180°C durante 25 a 30 minutos.',
      'Cortar en rodajas finas y calientes.',
      'Servir en el plato de Él sus rodajas de peceto con 90g de ensalada mixta y 22ml de oliva.',
      'Servir en el plato de Ella sus rodajas de peceto con 60g de ensalada mixta y 12ml de oliva.'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Hornear el peceto sellado y cortar en rodajas. Servir a Él su porción de 200g crudo (~150g cocido) con 22ml oliva y a Ella su porción de 140g crudo (~105g cocido) con 12ml oliva.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '145g - 150g rodajas de peceto al horno',
        sides: '90g ensalada mixta fresca',
        fatsAndToppings: '22ml aceite de oliva extra virgen',
        plateTotalApprox: '~260g en su plato',
        ruleNote: 'Servir las rodajas finas asadas con la ensalada mixta aderezada.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '100g - 105g rodajas de peceto al horno',
        sides: '60g ensalada mixta fresca',
        fatsAndToppings: '12ml aceite de oliva extra virgen',
        plateTotalApprox: '~180g en su plato',
        ruleNote: 'Servir las rodajas finas asadas con la ensalada mixta aderezada.'
      }
    },
    tags: ['Keto', 'Día 15', 'Horno', 'Carne Vacuna', 'Ensalada'],
    createdAt: '2026-10-15'
  },
  {
    id: 'keto-d15-cena',
    dayNumber: 15,
    title: 'Omelette Relleno de Atún y Mozzarella',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 12,
    servings: 1,
    calories: 460,
    proteinGrams: 36,
    carbsGrams: 2,
    fatsGrams: 34,
    imageUrl: '/src/assets/images/recipe_omelette_espinaca_1792713324934.jpg',
    description: 'Omelette esponjoso relleno de atún en lomo desmenuzado y queso mozzarella derretido, acompañado de hojas frescas de rúcula.',
    ingredients: [
      '3 huevos',
      '60g de atún en conserva escurrido',
      '30g de queso mozzarella',
      '40g de rúcula',
      '15ml de aceite de oliva extra virgen',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Batir los 3 huevos en un bol con sal y pimienta.',
      'Calentar una sartén con un poco de aceite a fuego medio-bajo y verter los huevos batidos.',
      'Cuando la base empiece a consolidarse, agregar los 60g de atún y los 30g de mozzarella sobre una mitad.',
      'Doblar el omelette a la mitad, tapar y cocinar por 2 minutos hasta que el queso se derrita. Servir con los 40g de rúcula y los 15ml de oliva.'
    ],
    differentialIngredients: [
      { name: 'Huevos de campo', he: '3 huevos', she: '2 huevos', total: '5 huevos' },
      { name: 'Atún en conserva escurrido', he: '60g', she: '45g', total: '105g' },
      { name: 'Queso mozzarella', he: '30g', she: '20g', total: '50g' },
      { name: 'Rúcula fresca', he: '40g', she: '40g', total: '80g' },
      { name: 'Aceite de oliva extra virgen', he: '15ml', she: '10ml', total: '25ml' },
      { name: 'Sal y pimienta a gusto', he: 'A gusto', she: 'A gusto', total: 'Al gusto' }
    ],
    instructionsCombined: [
      'Preparar los dos omelettes de forma individual en sartén con un hilo de oliva:',
      'Para Él: Batir 3 huevos con sal y pimienta, cuajar a fuego medio-bajo, rellenar con 60g de atún y 30g de mozzarella. Doblar y fundir.',
      'Para Ella: Batir 2 huevos con sal y pimienta, cuajar, rellenar con 45g de atún y 20g de mozzarella. Doblar y fundir.',
      'Acompañar cada omelette con 40g de rúcula fresca aderezada (15ml oliva para Él, 10ml para Ella).'
    ],
    cookedServing: {
      dishType: 'separado',
      servingRuleSummary: 'Cocinar los 2 omelettes individuales. Servir a Él su omelette de 3 huevos con 60g de atún y 30g mozzarella con 40g de rúcula; y a Ella su omelette de 2 huevos con 45g de atún y 20g mozzarella con 40g de rúcula.',
      servingHe: {
        percentage: '58%',
        proteinCooked: '3 huevos + 60g atún en conserva',
        sides: '40g rúcula fresca limpia',
        fatsAndToppings: '30g mozzarella fundida + 15ml aceite de oliva',
        plateTotalApprox: '~255g en su plato',
        ruleNote: 'Servir el omelette de 3 huevos recién hecho y relleno con su rúcula aderezada.'
      },
      servingShe: {
        percentage: '42%',
        proteinCooked: '2 huevos + 45g atún en conserva',
        sides: '40g rúcula fresca limpia',
        fatsAndToppings: '20g mozzarella fundida + 10ml aceite de oliva',
        plateTotalApprox: '~180g en su plato',
        ruleNote: 'Servir el omelette de 2 huevos recién hecho y relleno con su rúcula aderezada.'
      }
    },
    tags: ['Keto', 'Día 15', 'Sartén', 'Huevos', 'Atún'],
    createdAt: '2026-10-15'
  }
];

// Días 16 a 30: Recetas exactas extraídas del Plan Keto de 30 Días
export const INITIAL_RECIPES: Recipe[] = [
  ...INITIAL_15_RECIPES,
  ...RECIPES_DAYS_16_TO_30
];

export const KETO_GUIDE = {
  allowed: [
    {
      category: '🥩 Proteínas (Base del plan)',
      items: [
        'Carne vacuna (bife de chorizo, cuadril, peceto, vacío, medallones de res)',
        'Pollo (pechuga en bifes/tiras, pata y muslo con piel)',
        'Carne de cerdo (matambre a la pizza, bondiola, churrasco de cerdo)',
        'Pescados (filete de merluza fresca, atún en conserva)',
        'Huevos de campo enteros'
      ]
    },
    {
      category: '🫒 Grasas Saludables',
      items: [
        'Aceite de oliva extra virgen (en crudo y ensaladas)',
        'Aceite de coco virgen (para salteados a fuego alto y wok)',
        'Manteca vacuna pura',
        'Grasa animal para cocción',
        'Palta entera y en láminas',
        'Crema de leche entera sin azúcar'
      ]
    },
    {
      category: '🧀 Quesos',
      items: [
        'Quesos duros y semiduros (Reggianito, Sardo, Parmesano, Gouda, Tybo)',
        'Queso Mozzarella',
        'Queso Cremoso o Cuartirolo con moderación'
      ]
    },
    {
      category: '🥬 Vegetales de Bajo Carbohidrato',
      items: [
        'Espinaca y acelga cocidas y escurridas',
        'Lechuga (mantecosa, morada, criolla)',
        'Rúcula y radicheta fresca',
        'Brócoli y coliflor (al vapor o salteados)',
        'Repollo blanco o morado cortado fino',
        'Zuchini y zapallito verde (en wok, bastones o tartas sin masa)',
        'Tomate redondo en porciones moderadas',
        'Pepino fresco'
      ]
    },
    {
      category: '🥜 Frutos Secos y Semillas',
      items: [
        'Nueces y almendras en porciones estrictamente controladas',
        'Semillas de chía, sésamo y lino'
      ]
    },
    {
      category: '☕ Bebidas e Infusiones',
      items: [
        'Agua pura y agua mineral con o sin gas',
        'Café solo sin azúcar',
        'Té e infusiones sin azúcar',
        'Mate amargo'
      ]
    }
  ],
  forbidden: [
    {
      category: '🚫 Azúcares y Dulces',
      items: [
        'Azúcar blanca, rubia o mascabo',
        'Miel, melazas y jarabes',
        'Mermeladas tradicionales y dulces de fruta',
        'Golosinas, alfajores y chocolates con leche',
        'Gaseosas azucaradas y jugos de fruta'
      ]
    },
    {
      category: '🚫 Harinas y Cereales (Cero Harinas)',
      items: [
        'Trigo, maíz, arroz, avena, cebada y centeno',
        'Fideos, pastas y masas',
        'Panificados, medialunas, bizcochos y galletitas',
        'Empanadas y tartas tradicionales con masa',
        'Rebozados con pan rallado'
      ]
    },
    {
      category: '🚫 Tubérculos y Legumbres',
      items: [
        'Papa, batata y mandioca',
        'Choclo / maíz dulce',
        'Lentejas, garbanzos, porotos y arvejas'
      ]
    },
    {
      category: '🚫 Frutas Altas en Azúcar',
      items: [
        'Banana, manzana, pera, uva y naranja',
        'Mango y frutas desecadas (pasas, ciruelas)',
        'Excepción controlada: frutillas o arándanos en cantidades mínimas'
      ]
    },
    {
      category: '🚫 Ultraprocesados y Aceites de Semilla',
      items: [
        'Aceite de girasol, maíz y soja',
        'Aderezos comerciales con almidón o azúcar añadido',
        'Snacks empaquetados industriales'
      ]
    }
  ]
};

