import { Recipe } from '../types';

export interface PlanCaroGuidelines {
  title: string;
  summary: string;
  rules: { title: string; detail: string; icon: string }[];
}

export const PLAN_CARO_GUIDELINES: PlanCaroGuidelines = {
  title: 'Reglas y Directrices del Plan Caro',
  summary: 'Plan individual estructurado con flexibilidad de 3 a 4 comidas diarias, ayuno intermitente y porciones específicas.',
  rules: [
    {
      title: 'Frecuencia de comidas',
      detail: 'Puede comer más de 3 veces al día (lo ideal es de 3 a 4 comidas).',
      icon: 'Clock'
    },
    {
      title: 'Ayuno Intermitente',
      detail: 'Cuantas más veces haga ayuno intermitente, mejor.',
      icon: 'Sparkles'
    },
    {
      title: 'Huevos',
      detail: 'Único alimento que puede comer en cantidad superior (preferentemente hervido, poché o revuelto, menos frito).',
      icon: 'Egg'
    },
    {
      title: 'Proteínas',
      detail: 'Carne vacuna, pollo o pescado de 180g a 260g tanto en almuerzo como en cena.',
      icon: 'Flame'
    },
    {
      title: 'Vegetales permitidos',
      detail: 'Entre 140g y 210g de los vegetales permitidos por comida (se puede reemplazar por cualquier vegetal permitido al gusto).',
      icon: 'Salad'
    },
    {
      title: 'Grasas agregadas',
      detail: '1 cucharada sopera de aceite de oliva, aceite de coco o manteca por comida.',
      icon: 'Droplet'
    },
    {
      title: 'Quesos',
      detail: 'Máximo 100g diarios (o cada 2 días si nota estancamiento en el peso).',
      icon: 'ShieldAlert'
    },
    {
      title: 'Infusiones libres',
      detail: 'Café, té y mate con edulcorante líquido permitidos en todo momento.',
      icon: 'Coffee'
    }
  ]
};

export const RECIPES_PLAN_CARO: Recipe[] = [
  // =========================================================================
  // DESAYUNOS / MERIENDAS (13 OPCIONES)
  // =========================================================================
  {
    id: 'caro-des-1',
    planId: 'caro',
    optionNumber: 1,
    title: 'Revuelto de 1 Huevo y 1 Clara al Oliva con Infusión',
    mealType: 'desayuno',
    cookingMethod: 'plancha',
    prepTimeMinutes: 8,
    servings: 1,
    calories: 210,
    proteinGrams: 14,
    carbsGrams: 1,
    fatsGrams: 17,
    imageUrl: '/images/recipe_omelette_espinaca_1792713324934.jpg',
    description: 'Revuelto liviano y proteico de 1 huevo entero y 1 clara fresca en sartén con 1 cucharada de aceite de oliva extra virgen, acompañado de café, té o mate.',
    ingredients: [
      '1 huevo entero',
      '1 clara de huevo',
      '15ml de aceite de oliva extra virgen (1 cda sopera)',
      'Sal y pimienta a gusto',
      'Café, té o mate con edulcorante líquido a gusto'
    ],
    instructions: [
      'Batir el huevo entero junto con la clara en un bol pequeño. Condimentar con una pizca de sal y pimienta.',
      'Calentar la sartén a fuego medio con la cucharada sopera de aceite de oliva.',
      'Verter los huevos y revolver suavemente con espátula durante 2 minutos hasta lograr una textura cremosa.',
      'Servir caliente acompañado de tu infusión preferida (café, té o mate amargo/edulcorado).'
    ],
    tags: ['Plan Caro', 'Desayuno / Merienda', 'Rápido', 'Huevos']
  },
  {
    id: 'caro-des-2',
    planId: 'caro',
    optionNumber: 2,
    title: 'Fetas de Queso con Infusión Caliente',
    mealType: 'desayuno',
    cookingMethod: 'sin_coccion',
    prepTimeMinutes: 3,
    servings: 1,
    calories: 220,
    proteinGrams: 15,
    carbsGrams: 1,
    fatsGrams: 18,
    imageUrl: '/images/recipe_tostada_aguacate_huevo_1792711348428.jpg',
    description: '3 fetas generosas de queso semiduro (Gouda, Tybo, Danbo o Sardo) acompañadas de infusión caliente.',
    ingredients: [
      '60g de queso en fetas (3 fetas de Gouda, Tybo o Port Salut)',
      'Café solo, té de hierbas o mate con edulcorante líquido'
    ],
    instructions: [
      'Disponer las 3 fetas de queso en un plato.',
      'Preparar café expreso, té negro o mate a temperatura ideal con edulcorante líquido.',
      'Consumir como desayuno express o merienda saciante.'
    ],
    tags: ['Plan Caro', 'Desayuno / Merienda', 'Sin cocción', 'Express']
  },
  {
    id: 'caro-des-3',
    planId: 'caro',
    optionNumber: 3,
    title: 'Copa de Yogur Griego con Arándanos',
    mealType: 'desayuno',
    cookingMethod: 'sin_coccion',
    prepTimeMinutes: 4,
    servings: 1,
    calories: 180,
    proteinGrams: 15,
    carbsGrams: 6,
    fatsGrams: 10,
    imageUrl: '/images/recipe_avena_frutas_1792711345969.jpg',
    description: 'Copa fresca de yogur griego natural sin azúcar añadido, coronada con un puñado controlado de arándanos frescos.',
    ingredients: [
      '150g de yogur griego natural sin azúcar',
      '30g de arándanos frescos (puñado pequeño)',
      'Unas gotas de edulcorante líquido (opcional)'
    ],
    instructions: [
      'Colocar los 150g de yogur griego en un vaso o copa.',
      'Endulzar a gusto con unas gotas de edulcorante líquido si se desea.',
      'Lavar los 30g de arándanos y coronar la copa antes de disfrutar.'
    ],
    tags: ['Plan Caro', 'Desayuno / Merienda', 'Fresco', 'Antioxidante']
  },
  {
    id: 'caro-des-4',
    planId: 'caro',
    optionNumber: 4,
    title: 'Mini Pan de Almendras en Sartén y Mates de Coco',
    mealType: 'desayuno',
    cookingMethod: 'plancha',
    prepTimeMinutes: 10,
    servings: 1,
    calories: 250,
    proteinGrams: 12,
    carbsGrams: 3,
    fatsGrams: 21,
    imageUrl: '/images/recipe_tarta_keto_espinaca_1792712405870.jpg',
    description: 'Mini pan express keto hecho en sartén con harina de almendras y huevo, perfecto para acompañar con mates con coco rallado.',
    ingredients: [
      '30g de harina de almendras',
      '1 huevo',
      '1/2 cdita de polvo de hornear',
      'Pizca de sal',
      '1 cdita de manteca o aceite de coco para la sartén',
      'Mate preparado reemplazando 2 cdas de yerba por coco rallado'
    ],
    instructions: [
      'En un pocillo, mezclar los 30g de harina de almendras con el huevo, la pizca de sal y el polvo de hornear hasta formar una pasta homogénea.',
      'Engrasar una sartén pequeña con manteca y verter la mezcla a fuego corona/bajo.',
      'Tapar y cocinar 3 minutos por lado hasta que infle y dore.',
      'Preparar el mate reemplazando 2 cucharadas de yerba mate por coco rallado para un sabor suave y reconfortante.'
    ],
    tags: ['Plan Caro', 'Desayuno / Merienda', 'Pan Keto', 'Mates']
  },
  {
    id: 'caro-des-5',
    planId: 'caro',
    optionNumber: 5,
    title: 'Fetas de Jamón y Queso con Infusión',
    mealType: 'desayuno',
    cookingMethod: 'sin_coccion',
    prepTimeMinutes: 3,
    servings: 1,
    calories: 190,
    proteinGrams: 16,
    carbsGrams: 1,
    fatsGrams: 14,
    imageUrl: '/images/recipe_tostada_aguacate_huevo_1792711348428.jpg',
    description: '2 fetas de jamón cocido natural y 2 fetas de queso semiduro acompañadas de café o infusión.',
    ingredients: [
      '40g de jamón cocido natural (2 fetas)',
      '40g de queso semiduro o Tybo (2 fetas)',
      'Café, té o mate con edulcorante líquido a gusto'
    ],
    instructions: [
      'Enrollar o disponer en el plato las 2 fetas de jamón y las 2 de queso.',
      'Acompañar con infusión caliente a elección.'
    ],
    tags: ['Plan Caro', 'Desayuno / Merienda', 'Express', 'Proteico']
  },
  {
    id: 'caro-des-6',
    planId: 'caro',
    optionNumber: 6,
    title: 'Huevos Revueltos con Panceta Crocante',
    mealType: 'desayuno',
    cookingMethod: 'plancha',
    prepTimeMinutes: 10,
    servings: 1,
    calories: 320,
    proteinGrams: 19,
    carbsGrams: 1,
    fatsGrams: 27,
    imageUrl: '/images/recipe_hamburguesa_huevo_1792713324729.jpg',
    description: '2 huevos batidos revueltos en sartén acompañados de 2 fetas de panceta ahumada dorada al punto crocante.',
    ingredients: [
      '2 huevos enteros',
      '40g de panceta ahumada (2 fetas)',
      'Pizca de sal y pimienta negra recién molida',
      'Infusión a gusto'
    ],
    instructions: [
      'Dorar las 2 fetas de panceta en la sartén a fuego medio sin agregar aceite hasta que queden crocantes. Retirar la panceta.',
      'Batir los 2 huevos y verterlos en la misma sartén aprovechando la grasa natural de la panceta.',
      'Revolver a fuego bajo durante 2 minutos hasta que queden tiernos y cremosos.',
      'Servir los huevos coronados con la panceta crocante e infusión.'
    ],
    tags: ['Plan Caro', 'Desayuno / Merienda', 'Keto Clásico', 'Saciante']
  },
  {
    id: 'caro-des-7',
    planId: 'caro',
    optionNumber: 7,
    title: 'Trío de Jamón y Queso con Infusión',
    mealType: 'desayuno',
    cookingMethod: 'sin_coccion',
    prepTimeMinutes: 3,
    servings: 1,
    calories: 270,
    proteinGrams: 23,
    carbsGrams: 1,
    fatsGrams: 20,
    imageUrl: '/images/recipe_tostada_aguacate_huevo_1792711348428.jpg',
    description: '3 fetas de jamón cocido de calidad y 3 fetas de queso en fetas acompañadas de infusión caliente.',
    ingredients: [
      '60g de jamón cocido (3 fetas)',
      '60g de queso Tybo o Gouda (3 fetas)',
      'Infusión a gusto (café, té o mate con edulcorante)'
    ],
    instructions: [
      'Armar los rollitos alternando jamón y queso.',
      'Servir junto con tu infusión preferida.'
    ],
    tags: ['Plan Caro', 'Desayuno / Merienda', 'Sin cocción', 'Rápido']
  },
  {
    id: 'caro-des-8',
    planId: 'caro',
    optionNumber: 8,
    title: 'Huevos Duros con Media Palta y Tomates Cherry',
    mealType: 'desayuno',
    cookingMethod: 'hervido_vapor',
    prepTimeMinutes: 12,
    servings: 1,
    calories: 290,
    proteinGrams: 15,
    carbsGrams: 5,
    fatsGrams: 24,
    imageUrl: '/images/recipe_bowl_pollo_aguacate_1792711348006.jpg',
    description: '2 huevos duros con media palta fresca laminada y 5 tomates cherry jugosos con toque de sal marina y pimienta.',
    ingredients: [
      '2 huevos',
      '70g de palta fresca (1/2 unidad chica)',
      '5 tomates cherry (aprox. 50g)',
      'Sal marina y pimienta a gusto'
    ],
    instructions: [
      'Hervir los 2 huevos durante 9 a 10 minutos en agua hirviendo. Enfriar con agua fría y pelar.',
      'Cortar la media palta en rodajas y los tomates cherry al medio.',
      'Disponer los huevos partidos al medio con la palta y los cherrys. Espolvorear sal y pimienta.'
    ],
    tags: ['Plan Caro', 'Desayuno / Merienda', 'Grasas Saludables', 'Nutritivo']
  },
  {
    id: 'caro-des-9',
    planId: 'caro',
    optionNumber: 9,
    title: 'Pan Nube con Queso Crema Untable',
    mealType: 'desayuno',
    cookingMethod: 'horno',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 190,
    proteinGrams: 12,
    carbsGrams: 2,
    fatsGrams: 15,
    imageUrl: '/images/recipe_tarta_keto_espinaca_1792712405870.jpg',
    description: 'Pan nube esponjoso sin harinas horneado con clara a nieve y queso untable, untado con queso crema.',
    ingredients: [
      '2 porciones de pan nube (hecho con huevo batido a nieve y queso crema)',
      '40g de queso crema untable (Casancrem / Finlandia)',
      'Infusión a gusto'
    ],
    instructions: [
      'Tomar 2 unidades de pan nube keto horneado previamente.',
      'Untar generosamente con los 40g de queso crema.',
      'Acompañar con infusión caliente con edulcorante.'
    ],
    tags: ['Plan Caro', 'Desayuno / Merienda', 'Horno', 'Pan Nube']
  },
  {
    id: 'caro-des-10',
    planId: 'caro',
    optionNumber: 10,
    title: 'Porción Controlada de Almendras con Infusión',
    mealType: 'desayuno',
    cookingMethod: 'sin_coccion',
    prepTimeMinutes: 2,
    servings: 1,
    calories: 100,
    proteinGrams: 4,
    carbsGrams: 2,
    fatsGrams: 9,
    imageUrl: '/images/recipe_avena_frutas_1792711345969.jpg',
    description: '10 almendras seleccionadas crujientes (porción keto exacta) acompañadas de café solo, té o mate amargo.',
    ingredients: [
      '15g de almendras naturales o tostadas (exactamente 10 unidades)',
      'Café, té o mate con edulcorante líquido a gusto'
    ],
    instructions: [
      'Contar 10 almendras para respetar estrictamente la porción de frutos secos del plan.',
      'Disfrutar junto a una taza grande de infusión caliente.'
    ],
    tags: ['Plan Caro', 'Desayuno / Merienda', 'Snack', 'Express']
  },
  {
    id: 'caro-des-11',
    planId: 'caro',
    optionNumber: 11,
    title: 'Mitades de Nueces con Queso Port Salut e Infusión',
    mealType: 'desayuno',
    cookingMethod: 'sin_coccion',
    prepTimeMinutes: 3,
    servings: 1,
    calories: 260,
    proteinGrams: 14,
    carbsGrams: 3,
    fatsGrams: 22,
    imageUrl: '/images/recipe_tostada_aguacate_huevo_1792711348428.jpg',
    description: '6 mitades de nueces mariposa seleccionadas acompañadas de 50g de queso Port Salut en dados e infusión.',
    ingredients: [
      '15g de nueces (6 mitades)',
      '50g de queso Port Salut cortado en dados',
      'Infusión caliente a gusto'
    ],
    instructions: [
      'Cortar los 50g de queso Port Salut en cubitos.',
      'Añadir las 6 mitades de nueces.',
      'Acompañar con infusión caliente.'
    ],
    tags: ['Plan Caro', 'Desayuno / Merienda', 'Queso', 'Energético']
  },
  {
    id: 'caro-des-12',
    planId: 'caro',
    optionNumber: 12,
    title: 'Doble Rollito de Jamón y Queso Artesanal',
    mealType: 'desayuno',
    cookingMethod: 'sin_coccion',
    prepTimeMinutes: 3,
    servings: 1,
    calories: 190,
    proteinGrams: 16,
    carbsGrams: 1,
    fatsGrams: 14,
    imageUrl: '/images/recipe_tostada_aguacate_huevo_1792711348428.jpg',
    description: '2 rollitos preparados con jamón cocido magro y queso Gouda o Tybo, acompañados de mate o café.',
    ingredients: [
      '40g de jamón cocido (2 fetas)',
      '40g de queso semiduro (2 fetas)',
      'Infusión a gusto'
    ],
    instructions: [
      'Colocar una feta de jamón sobre una de queso y enrollar con firmeza.',
      'Repetir con el segundo rollito y servir con la infusión.'
    ],
    tags: ['Plan Caro', 'Desayuno / Merienda', 'Sin cocción', 'Ligero']
  },
  {
    id: 'caro-des-13',
    planId: 'caro',
    optionNumber: 13,
    title: 'Sándwich Keto en Pan Proteico con Infusión',
    mealType: 'desayuno',
    cookingMethod: 'sin_coccion',
    prepTimeMinutes: 5,
    servings: 1,
    calories: 270,
    proteinGrams: 20,
    carbsGrams: 3,
    fatsGrams: 20,
    imageUrl: '/images/recipe_tostada_aguacate_huevo_1792711348428.jpg',
    description: 'Sándwich preparado con 2 rodajas de pan proteico keto bajo en carbos, relleno con queso y jamón, con café o mate.',
    ingredients: [
      '2 rodajas de pan proteico keto (harina de lino/almendras/gluten)',
      '30g de queso en fetas',
      '30g de jamón cocido',
      'Infusión a gusto con edulcorante'
    ],
    instructions: [
      'Tostar ligeramente las 2 rodajas de pan proteico si se prefiere tibio.',
      'Rellenar con el queso y el jamón.',
      'Acompañar con infusión caliente.'
    ],
    tags: ['Plan Caro', 'Desayuno / Merienda', 'Pan Proteico', 'Sándwich']
  },

  // =========================================================================
  // ALMUERZOS (21 OPCIONES)
  // =========================================================================
  {
    id: 'caro-alm-1',
    planId: 'caro',
    optionNumber: 1,
    title: 'Pollo a la Plancha con Ensalada Grande y Oliva',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 490,
    proteinGrams: 42,
    carbsGrams: 6,
    fatsGrams: 33,
    imageUrl: '/images/recipe_pollo_brocoli_palta_1792712404721.jpg',
    description: '150g de pechuga de pollo a la plancha acompañada de ensalada grande (lechuga, repollo colorado, 100g de pepino y 1 tomate chico) con 2 cdas de aceite de oliva.',
    ingredients: [
      '150g de pechuga de pollo',
      '80g de lechuga fresca',
      '50g de repollo colorado rallado fino',
      '100g de pepino en rodajas',
      '80g de tomate chico',
      '30ml de aceite de oliva extra virgen (2 cdas soperas)',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Cocinar la pechuga de pollo a la plancha a fuego medio-alto 6 minutos por lado hasta que esté bien dorada y jugosa.',
      'Lavar la lechuga, rallar el repollo colorado, cortar el pepino en rodajas y el tomate en gajos.',
      'Armar una ensalada grande en un bol y aderezar con las 2 cucharadas soperas de aceite de oliva, sal y pimienta.',
      'Servir la pechuga caliente junto a la ensalada fresca.'
    ],
    tags: ['Plan Caro', 'Almuerzo', 'Pollo', 'Ensalada']
  },
  {
    id: 'caro-alm-2',
    planId: 'caro',
    optionNumber: 2,
    title: 'Carne Vacuna Magra con Mix de Hojas Verdes',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 15,
    servings: 1,
    calories: 430,
    proteinGrams: 44,
    carbsGrams: 3,
    fatsGrams: 27,
    imageUrl: '/images/recipe_bife_chorizo_1792712404795.jpg',
    description: '150g de carne vacuna magra a la plancha con mix abundante de hojas verdes aderezado con aceite de oliva.',
    ingredients: [
      '150g de carne vacuna magra (cuadril, bife o bola de lomo)',
      '150g de mix de hojas verdes (lechuga, rúcula, espinaca y radicheta)',
      '15ml de aceite de oliva extra virgen (1 cda sopera)',
      'Sal gruesa y pimienta a gusto'
    ],
    instructions: [
      'Calentar la plancha a fuego fuerte.',
      'Cocinar el corte de carne vacuna 4 minutos por lado, agregando sal gruesa y pimienta al voltear.',
      'Servir sobre una base fresca de 150g de hojas verdes lavadas y secas.',
      'Aderezar con 1 cucharada sopera de aceite de oliva extra virgen.'
    ],
    tags: ['Plan Caro', 'Almuerzo', 'Carne', 'Plancha']
  },
  {
    id: 'caro-alm-3',
    planId: 'caro',
    optionNumber: 3,
    title: 'Hamburguesa de Pollo con Ensalada Mixta',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 440,
    proteinGrams: 40,
    carbsGrams: 6,
    fatsGrams: 28,
    imageUrl: '/images/recipe_hamburguesa_huevo_1792713324729.jpg',
    description: 'Hamburguesa casera de pollo picado (180g) a la plancha con ensalada de lechuga, tomate y finas plumas de cebolla.',
    ingredients: [
      '180g de carne de pollo picada o procesada',
      '80g de lechuga fresca',
      '70g de tomate en rodajas',
      '20g de cebolla cortada en plumas finas',
      '15ml de aceite de oliva extra virgen (1 cda sopera)',
      'Orégano, sal y pimienta a gusto'
    ],
    instructions: [
      'Condimentar el pollo picado con sal, pimienta y orégano. Formar un medallón firme.',
      'Cocinar en plancha caliente con un hilo de oliva 5 minutos por lado hasta que quede bien cocido por dentro.',
      'Mezclar la lechuga, tomate y la cebolla en plumas finas. Aderezar con 1 cucharada de aceite de oliva.',
      'Servir la hamburguesa caliente con la ensalada mixta.'
    ],
    tags: ['Plan Caro', 'Almuerzo', 'Hamburguesa', 'Pollo']
  },
  {
    id: 'caro-alm-4',
    planId: 'caro',
    optionNumber: 4,
    title: 'Carne al Horno con Puré de Palta y Limón',
    mealType: 'almuerzo',
    cookingMethod: 'horno',
    prepTimeMinutes: 30,
    servings: 1,
    calories: 520,
    proteinGrams: 48,
    carbsGrams: 4,
    fatsGrams: 34,
    imageUrl: '/images/recipe_churrasco_coliflor_1792713325916.jpg',
    description: '200g de carne vacuna al horno jugosa acompañada de puré fresco de 1 palta chica con jugo de limón y sal.',
    ingredients: [
      '200g de carne vacuna (tapa de asado, vacío o roast beef)',
      '100g de palta fresca (1 palta chica)',
      '1 cda de jugo de limón',
      'Sal marina y pimienta a gusto'
    ],
    instructions: [
      'Precalentar el horno a 190°C. Sazonar la carne con sal y pimienta, y hornear durante 25 a 30 minutos.',
      'Pisar la pulpa de la palta con un tenedor agregando el jugo de limón y una pizca de sal marina hasta formar un puré suave.',
      'Cortar la carne en rodajas y servir junto con el puré de palta fresco.'
    ],
    tags: ['Plan Caro', 'Almuerzo', 'Carne', 'Horno', 'Palta']
  },
  {
    id: 'caro-alm-5',
    planId: 'caro',
    optionNumber: 5,
    title: 'Filet de Merluza con Brócoli Salteado al Oliva',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 18,
    servings: 1,
    calories: 390,
    proteinGrams: 42,
    carbsGrams: 5,
    fatsGrams: 22,
    imageUrl: '/images/recipe_merluza_acelga_1792713325749.jpg',
    description: '220g de filet de merluza a la plancha con 150g de brócoli al vapor salteado en 1 cucharada sopera de aceite de oliva.',
    ingredients: [
      '220g de filet de merluza fresca',
      '150g de arbolitos de brócoli',
      '15ml de aceite de oliva extra virgen (1 cda sopera)',
      '1 diente de ajo picado, sal y jugo de limón'
    ],
    instructions: [
      'Cocinar el brócoli al vapor durante 4 minutos hasta que esté al dente.',
      'En una sartén, calentar la cucharada de aceite de oliva con el ajo y saltear el brócoli 2 minutos. Salpimentar y retirar.',
      'En la misma plancha o sartén caliente, dorar la merluza 3 minutos por lado con un toque de sal y jugo de limón.',
      'Servir la merluza junto al brócoli salteado.'
    ],
    tags: ['Plan Caro', 'Almuerzo', 'Pescado', 'Brócoli']
  },
  {
    id: 'caro-alm-6',
    planId: 'caro',
    optionNumber: 6,
    title: 'Matambre de Cerdo con Espinaca Salteada',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 510,
    proteinGrams: 42,
    carbsGrams: 3,
    fatsGrams: 36,
    imageUrl: '/images/recipe_churrasco_coliflor_1792713325916.jpg',
    description: '180g de matambre de cerdo dorado y crocante a la plancha servido con 150g de hojas de espinaca salteadas en oliva.',
    ingredients: [
      '180g de matambre de cerdo',
      '150g de espinaca fresca limpia',
      '15ml de aceite de oliva extra virgen (1 cda sopera)',
      'Sal gruesa, pimienta y limón a gusto'
    ],
    instructions: [
      'Colocar el matambre de cerdo en la plancha bien caliente a fuego medio-alto.',
      'Cocinar 6 minutos de un lado hasta que dore, dar vuelta y cocinar 5 minutos más. Salar con sal gruesa.',
      'En una sartén con la cucharada de oliva, saltear la espinaca fresca durante 1 a 2 minutos hasta que reduzca.',
      'Servir el matambre con un chorrito de limón junto a la espinaca salteada.'
    ],
    tags: ['Plan Caro', 'Almuerzo', 'Cerdo', 'Espinaca']
  },
  {
    id: 'caro-alm-7',
    planId: 'caro',
    optionNumber: 7,
    title: 'Omelette de 3 Huevos con Jamón y Queso',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 12,
    servings: 1,
    calories: 460,
    proteinGrams: 33,
    carbsGrams: 2,
    fatsGrams: 35,
    imageUrl: '/images/recipe_omelette_espinaca_1792713324934.jpg',
    description: 'Omelette esponjoso de 3 huevos de campo relleno con 50g de queso mozzarella o cremoso y 50g de jamón cocido.',
    ingredients: [
      '3 huevos enteros',
      '50g de queso cremoso o mozzarella en cubos',
      '50g de jamón cocido en tiras',
      '15ml de aceite de oliva o manteca (1 cda sopera)',
      'Sal y orégano a gusto'
    ],
    instructions: [
      'Batir los 3 huevos con una pizca de sal y orégano.',
      'Calentar la cucharada de aceite o manteca en sartén antiadherente a fuego medio.',
      'Verter los huevos. Cuando la base esté cocida pero la superficie tierna, agregar el queso y el jamón en una mitad.',
      'Doblar el omelette, tapar 1 minuto para fundir el queso y servir de inmediato.'
    ],
    tags: ['Plan Caro', 'Almuerzo', 'Huevos', 'Rápido']
  },
  {
    id: 'caro-alm-8',
    planId: 'caro',
    optionNumber: 8,
    title: '3 Alitas de Pollo al Horno con Ensalada de Brócoli y Tomate',
    mealType: 'almuerzo',
    cookingMethod: 'horno',
    prepTimeMinutes: 35,
    servings: 1,
    calories: 460,
    proteinGrams: 36,
    carbsGrams: 6,
    fatsGrams: 32,
    imageUrl: '/images/recipe_pollo_brocoli_palta_1792712404721.jpg',
    description: '3 alitas de pollo doradas al horno con piel crocante, acompañadas de ensalada fresca de brócoli al dente y tomate.',
    ingredients: [
      '3 alitas de pollo enteras (aprox. 200g)',
      '100g de brócoli al vapor',
      '80g de tomate en cubos',
      '15ml de aceite de oliva extra virgen (1 cda sopera)',
      'Pimentón, orégano, sal y pimienta'
    ],
    instructions: [
      'Sazonar las alitas de pollo con sal, pimienta, pimentón y orégano.',
      'Hornear a 200°C durante 30 a 35 minutos hasta que la piel quede crujiente y bien dorada.',
      'Preparar la ensalada con el brócoli cocido al vapor y el tomate en cubos. Aderezar con 1 cucharada de aceite de oliva.',
      'Servir las 3 alitas recién salidas del horno con la ensalada.'
    ],
    tags: ['Plan Caro', 'Almuerzo', 'Pollo', 'Horno']
  },
  {
    id: 'caro-alm-9',
    planId: 'caro',
    optionNumber: 9,
    title: 'Revuelto de Huevos, Zapallitos, Cebolla, Morrón y Queso Port Salut',
    mealType: 'almuerzo',
    cookingMethod: 'salteado_wok',
    prepTimeMinutes: 15,
    servings: 1,
    calories: 430,
    proteinGrams: 28,
    carbsGrams: 7,
    fatsGrams: 32,
    imageUrl: '/images/recipe_wok_pollo_zuchini_1792713326934.jpg',
    description: 'Revuelto de 3 huevos con 150g de zapallitos en cubos, cebolla y morrón salteados, completado con 50g de queso Port Salut fundido.',
    ingredients: [
      '3 huevos enteros',
      '150g de zapallitos verdes en cubos',
      '30g de cebolla picada',
      '30g de morrón verde o rojo picado',
      '50g de queso Port Salut en cubitos',
      '15ml de aceite de oliva (1 cda sopera)',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Saltear la cebolla, el morrón y los zapallitos en sartén con 1 cucharada de oliva durante 5 minutos a fuego medio.',
      'Batir los 3 huevos con sal y pimienta. Volcarlos sobre los vegetales.',
      'Revolver a fuego medio-bajo durante 2 a 3 minutos hasta cuajar.',
      'Agregar los 50g de queso Port Salut en cubos justo antes de retirar del fuego para que se derrita suavemente.'
    ],
    tags: ['Plan Caro', 'Almuerzo', 'Revuelto', 'Vegetales']
  },
  {
    id: 'caro-alm-10',
    planId: 'caro',
    optionNumber: 10,
    title: 'Plato Libre Proteico con Vegetales Permitidos',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 520,
    proteinGrams: 48,
    carbsGrams: 6,
    fatsGrams: 33,
    imageUrl: '/images/recipe_bife_chorizo_1792712404795.jpg',
    description: '220g de proteína a tu elección (carne vacuna, pechuga de pollo o filet de pescado) con hasta 200g de vegetales keto permitidos y 1 cda de grasa saludable.',
    ingredients: [
      '220g de carne, pollo o pescado a elección',
      '180g de vegetales keto permitidos (espinaca, brócoli, zuchini, lechuga o repollo)',
      '15ml de aceite de oliva o manteca (1 cda sopera)',
      'Sal, pimienta y condimentos a gusto'
    ],
    instructions: [
      'Elegir tu proteína favorita de la lista (carne vacuna, pollo o pescado) y cocinar a la plancha o al horno con sal y condimentos.',
      'Preparar hasta 200g de vegetales keto (crudos en ensalada o cocidos al vapor/salteados).',
      'Aderezar con 1 cucharada sopera de aceite de oliva virgen extra o manteca pura.'
    ],
    tags: ['Plan Caro', 'Almuerzo', 'Libre', 'Flexible']
  },
  {
    id: 'caro-alm-11',
    planId: 'caro',
    optionNumber: 11,
    title: 'Bife de Chorizo con Puré de Berenjenas Asadas',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 25,
    servings: 1,
    calories: 540,
    proteinGrams: 46,
    carbsGrams: 6,
    fatsGrams: 37,
    imageUrl: '/images/recipe_bife_chorizo_1792712404795.jpg',
    description: '200g de bife de chorizo jugoso a la plancha servido con 160g de puré de berenjena asada con ajo y oliva.',
    ingredients: [
      '200g de bife de chorizo vacuno',
      '160g de berenjena asada (pulpa)',
      '1 diente de ajo pequeño',
      '15ml de aceite de oliva extra virgen (1 cda sopera)',
      'Sal gruesa y pimienta negra'
    ],
    instructions: [
      'Asar la berenjena al horno o a la hornalla hasta que esté tierna. Retirar la pulpa y pisarla con ajo picado, sal y la cucharada de oliva.',
      'Cocinar el bife de chorizo en plancha bien caliente a fuego fuerte durante 4 a 5 minutos por lado. Agregar sal gruesa.',
      'Servir el bife con el puré tibio de berenjenas.'
    ],
    tags: ['Plan Caro', 'Almuerzo', 'Carne', 'Berenjena']
  },
  {
    id: 'caro-alm-12',
    planId: 'caro',
    optionNumber: 12,
    title: 'Pechuga Gratinada con Cherries y Ensalada Verde',
    mealType: 'almuerzo',
    cookingMethod: 'horno',
    prepTimeMinutes: 22,
    servings: 1,
    calories: 480,
    proteinGrams: 48,
    carbsGrams: 5,
    fatsGrams: 30,
    imageUrl: '/images/recipe_medallones_res_queso_1792712404767.jpg',
    description: 'Pechuga de pollo dorada (180g) gratinada con 50g de queso y tomates cherry, con ensalada verde abundante (160g de acelga, espinaca y lechuga).',
    ingredients: [
      '180g de pechuga de pollo',
      '50g de queso cremoso o mozzarella',
      '50g de tomates cherry',
      '160g de ensalada verde (acelga tierna, espinaca y lechuga)',
      '15ml de aceite de oliva extra virgen (1 cda sopera)',
      'Sal y orégano'
    ],
    instructions: [
      'Dorar la pechuga a la plancha 4 minutos por lado.',
      'Colocar en fuente de horno, cubrir con los 50g de queso y los tomates cherry partidos al medio. Hornear o gratinar 5 minutos.',
      'Lavar y trozar las hojas verdes (160g) y aderezar con 1 cucharada sopera de aceite de oliva y sal.',
      'Servir la pechuga gratinada con la ensalada verde.'
    ],
    tags: ['Plan Caro', 'Almuerzo', 'Pollo', 'Gratinado']
  },
  {
    id: 'caro-alm-13',
    planId: 'caro',
    optionNumber: 13,
    title: 'Costeleta de Cerdo Magra con Chauchas Salteadas al Oliva',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 460,
    proteinGrams: 42,
    carbsGrams: 5,
    fatsGrams: 30,
    imageUrl: '/images/recipe_churrasco_coliflor_1792713325916.jpg',
    description: 'Costeleta de cerdo magra dorada a la plancha (200g) acompañada de 150g de chauchas tiernas salteadas en aceite de oliva.',
    ingredients: [
      '200g de costeleta de cerdo magra',
      '150g de chauchas frescas despuntadas',
      '15ml de aceite de oliva extra virgen (1 cda sopera)',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Hervir las chauchas en agua hirviendo con sal durante 5 minutos. Escurrir bien.',
      'Saltear las chauchas en sartén con la cucharada de aceite de oliva y pimienta durante 2 minutos.',
      'Cocinar la costeleta de cerdo a la plancha a fuego medio durante 5 a 6 minutos por lado hasta dorar.',
      'Servir la costeleta caliente con las chauchas salteadas.'
    ],
    tags: ['Plan Caro', 'Almuerzo', 'Cerdo', 'Chauchas']
  },
  {
    id: 'caro-alm-14',
    planId: 'caro',
    optionNumber: 14,
    title: 'Hamburguesa de Carne con Rúcula y Huevo a la Plancha',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 15,
    servings: 1,
    calories: 480,
    proteinGrams: 42,
    carbsGrams: 2,
    fatsGrams: 34,
    imageUrl: '/images/recipe_hamburguesa_huevo_1792713324729.jpg',
    description: 'Hamburguesa casera de res (180g) coronada con huevo a la plancha, servida sobre colchón de rúcula fresca con 1 cda de aceite de oliva.',
    ingredients: [
      '180g de carne picada de res',
      '1 huevo',
      '100g de rúcula fresca',
      '15ml de aceite de oliva extra virgen (1 cda sopera)',
      'Sal, pimienta y orégano'
    ],
    instructions: [
      'Condimentar la carne picada y armar el medallón de hamburguesa.',
      'Cocinar en plancha caliente 4 minutos por lado.',
      'En la misma plancha o sartén, cocinar el huevo a la plancha con la yema tierna.',
      'Disponer la rúcula en el plato, aderezar con la cucharada de oliva, colocar la hamburguesa y coronar con el huevo.'
    ],
    tags: ['Plan Caro', 'Almuerzo', 'Hamburguesa', 'Huevo']
  },
  {
    id: 'caro-alm-15',
    planId: 'caro',
    optionNumber: 15,
    title: 'Wraps de Hojas de Lechuga Rellenos de Atún, Huevo y Apio',
    mealType: 'almuerzo',
    cookingMethod: 'sin_coccion',
    prepTimeMinutes: 12,
    servings: 1,
    calories: 360,
    proteinGrams: 40,
    carbsGrams: 3,
    fatsGrams: 20,
    imageUrl: '/images/recipe_bowl_pollo_aguacate_1792711348006.jpg',
    description: 'Hojas crujientes de lechuga rellenas con 180g de atún al natural, 1 huevo duro picado, apio crocante y 1 cda de queso untable o mayonesa.',
    ingredients: [
      '180g de atún al natural escurrido',
      '1 huevo duro',
      '4 hojas grandes de lechuga capuchina o mantecosa',
      '30g de apio picado en cubitos',
      '20g de mayonesa o queso untable descremado (1 cda sopera)',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'En un bol, desmenuzar el atún escurrido y mezclar con el huevo duro picado, el apio y la cucharada de mayonesa o queso untable.',
      'Lavar y secar muy bien las 4 hojas grandes de lechuga.',
      'Distribuir el relleno en el centro de cada hoja formando wraps o tacos frescos.',
      'Servir frío inmediatamente.'
    ],
    tags: ['Plan Caro', 'Almuerzo', 'Pescado', 'Wraps', 'Sin cocción']
  },
  {
    id: 'caro-alm-16',
    planId: 'caro',
    optionNumber: 16,
    title: 'Puré de Brócoli con Riñón o Bife de Hígado al Horno',
    mealType: 'almuerzo',
    cookingMethod: 'horno',
    prepTimeMinutes: 25,
    servings: 1,
    calories: 440,
    proteinGrams: 44,
    carbsGrams: 6,
    fatsGrams: 26,
    imageUrl: '/images/recipe_crema_calabaza_1792711348767.jpg',
    description: '150g de puré de brócoli cremoso con manteca acompañado de 200g de riñón o bife de hígado dorado al horno con cebolla y provenzal.',
    ingredients: [
      '200g de riñón o bife de hígado vacuno',
      '150g de brócoli al vapor',
      '15g de manteca pura (1 cda sopera)',
      'Provenzal, sal y pimienta a gusto'
    ],
    instructions: [
      'Limpiar el riñón o hígado, sazonar con provenzal, sal y pimienta. Hornear a 190°C por 15 a 20 minutos hasta cocinar.',
      'Hervir el brócoli 5 minutos, escurrir bien y procesar en caliente con los 15g de manteca y sal hasta lograr un puré fino.',
      'Servir la porción de hígado/riñón con el puré de brócoli.'
    ],
    tags: ['Plan Caro', 'Almuerzo', 'Menudencias', 'Hierro']
  },
  {
    id: 'caro-alm-17',
    planId: 'caro',
    optionNumber: 17,
    title: 'Asado o Bife Magro con Ensalada de Repollo',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 18,
    servings: 1,
    calories: 490,
    proteinGrams: 46,
    carbsGrams: 4,
    fatsGrams: 32,
    imageUrl: '/images/recipe_bife_chorizo_1792712404795.jpg',
    description: '200g de asado o bife magro a la plancha acompañado de ensalada crujiente de repollo blanco con 1 cda de mayonesa o queso untable.',
    ingredients: [
      '200g de asado o bife magro',
      '120g de repollo blanco cortado fino',
      '20g de queso untable o mayonesa (1 cda sopera)',
      'Sal gruesa y pimienta'
    ],
    instructions: [
      'Cocinar la carne en plancha a fuego alto 4 a 5 minutos por lado. Agregar sal gruesa.',
      'Mezclar el repollo cortado en juliana muy fina con la cucharada de mayonesa o queso crema, sal y pimienta.',
      'Servir la carne caliente junto con la ensalada de repollo.'
    ],
    tags: ['Plan Caro', 'Almuerzo', 'Carne', 'Repollo']
  },
  {
    id: 'caro-alm-18',
    planId: 'caro',
    optionNumber: 18,
    title: 'Tortilla de Espinaca, Acelga y Zapallito Verde',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 18,
    servings: 1,
    calories: 340,
    proteinGrams: 18,
    carbsGrams: 7,
    fatsGrams: 26,
    imageUrl: '/images/recipe_tarta_keto_espinaca_1792712405870.jpg',
    description: 'Tortilla dorada en sartén preparada con 2 huevos, espinaca, acelga y zapallito verde salteados en 1 cda de aceite de oliva.',
    ingredients: [
      '2 huevos enteros',
      '70g de espinaca cocida y escurrida',
      '70g de acelga cocida y escurrida',
      '80g de zapallito verde rallado y escurrido',
      '15ml de aceite de oliva extra virgen (1 cda sopera)',
      'Sal, pimienta y nuez moscada'
    ],
    instructions: [
      'Exprimir muy bien los vegetales cocidos para que no desprendan agua.',
      'Batir los 2 huevos con sal, pimienta y nuez moscada. Integrar los vegetales picados.',
      'Calentar la cucharada de aceite de oliva en sartén a fuego medio.',
      'Verter la preparación, cocinar 4 minutos de un lado, dar vuelta con plato y cocinar 3 minutos más.'
    ],
    tags: ['Plan Caro', 'Almuerzo', 'Tortilla', 'Vegetales']
  },
  {
    id: 'caro-alm-19',
    planId: 'caro',
    optionNumber: 19,
    title: 'Filet de Atún o Merluza con Cherries y Aceitunas',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 15,
    servings: 1,
    calories: 420,
    proteinGrams: 42,
    carbsGrams: 4,
    fatsGrams: 26,
    imageUrl: '/images/recipe_merluza_acelga_1792713325749.jpg',
    description: 'Filet de pescado blanco o atún (220g) dorado a la plancha con tomates cherry salteados y 6 aceitunas.',
    ingredients: [
      '220g de filet de merluza fresca o lomito de atún',
      '70g de tomates cherry',
      '6 aceitunas verdes o negras (aprox. 25g)',
      '15ml de aceite de oliva extra virgen (1 cda sopera)',
      'Orégano, sal y pimienta'
    ],
    instructions: [
      'En una sartén con la cucharada de aceite de oliva, saltear los tomates cherry y las aceitunas durante 3 minutos.',
      'Empujar los vegetales a un lado de la sartén y colocar el filet de pescado.',
      'Cocinar 3 minutos por lado con sal, pimienta y orégano.',
      'Servir el pescado bañado con los cherries y aceitunas.'
    ],
    tags: ['Plan Caro', 'Almuerzo', 'Pescado', 'Mediterráneo']
  },
  {
    id: 'caro-alm-20',
    planId: 'caro',
    optionNumber: 20,
    title: 'Plato Libre Proteico de Almuerzo a Elección',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 510,
    proteinGrams: 48,
    carbsGrams: 6,
    fatsGrams: 32,
    imageUrl: '/images/recipe_churrasco_coliflor_1792713325916.jpg',
    description: '220g de carne vacuna, pollo o pescado a elección libre con hasta 200g de vegetales keto permitidos y 1 cda de aceite de oliva.',
    ingredients: [
      '220g de carne vacuna, pechuga de pollo o filet de pescado',
      'Hasta 200g de vegetales keto permitidos (ensalada verde o salteado)',
      '15ml de aceite de oliva extra virgen o manteca (1 cda sopera)',
      'Sal, pimienta y hierbas al gusto'
    ],
    instructions: [
      'Seleccionar la proteína según lo que tengas disponible en casa y cocinar a punto.',
      'Acompañar con hasta 200g de vegetales variados de la lista de permitidos.',
      'Completar con 1 cucharada sopera de aceite de oliva o manteca.'
    ],
    tags: ['Plan Caro', 'Almuerzo', 'Libre', 'Personalizable']
  },
  {
    id: 'caro-alm-21',
    planId: 'caro',
    optionNumber: 21,
    title: 'Tortilla de Brócoli al Sartén',
    mealType: 'almuerzo',
    cookingMethod: 'plancha',
    prepTimeMinutes: 18,
    servings: 1,
    calories: 360,
    proteinGrams: 22,
    carbsGrams: 6,
    fatsGrams: 27,
    imageUrl: '/images/recipe_tarta_keto_espinaca_1792712405870.jpg',
    description: 'Tortilla esponjosa y dorada en sartén con 3 huevos y 180g de arbolitos de brócoli al dente con queso rallado.',
    ingredients: [
      '3 huevos enteros',
      '180g de brócoli cocido al vapor',
      '20g de queso parmesano o sardo rallado',
      '15ml de aceite de oliva extra virgen (1 cda sopera)',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Picar groseramente el brócoli cocido al vapor.',
      'Batir los 3 huevos con sal, pimienta y los 20g de queso rallado. Incorporar el brócoli.',
      'Calentar la cucharada de aceite de oliva en sartén a fuego medio.',
      'Verter la mezcla y cocinar 4 minutos. Dar vuelta con ayuda de un plato y cocinar 3 minutos más.'
    ],
    tags: ['Plan Caro', 'Almuerzo', 'Tortilla', 'Brócoli']
  },

  // =========================================================================
  // CENAS (21 OPCIONES)
  // =========================================================================
  {
    id: 'caro-cen-1',
    planId: 'caro',
    optionNumber: 1,
    title: 'Atún Natural al Oliva con Ensalada de Rúcula',
    mealType: 'cena',
    cookingMethod: 'sin_coccion',
    prepTimeMinutes: 8,
    servings: 1,
    calories: 290,
    proteinGrams: 30,
    carbsGrams: 2,
    fatsGrams: 18,
    imageUrl: '/images/recipe_bowl_pollo_aguacate_1792711348006.jpg',
    description: '120g de atún al natural escurrido aderezado con 1 cda de aceite de oliva virgen extra y ensalada abundante de rúcula.',
    ingredients: [
      '120g de atún al natural escurrido (1 lata grande)',
      '100g de rúcula fresca lavada',
      '15ml de aceite de oliva extra virgen (1 cda sopera)',
      'Sal marina y gotas de limón'
    ],
    instructions: [
      'Disponer la rúcula fresca en un plato hondo o ensaladera.',
      'Colocar encima el atún al natural escurrido.',
      'Condimentar con la cucharada sopera de aceite de oliva, sal marina y unas gotas de limón.'
    ],
    tags: ['Plan Caro', 'Cena', 'Pescado', 'Ligero', 'Sin cocción']
  },
  {
    id: 'caro-cen-2',
    planId: 'caro',
    optionNumber: 2,
    title: 'Omelette de Huevos con Fideos de Zuchini',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 15,
    servings: 1,
    calories: 280,
    proteinGrams: 16,
    carbsGrams: 4,
    fatsGrams: 22,
    imageUrl: '/images/recipe_omelette_espinaca_1792713324934.jpg',
    description: 'Omelette tierno de 2 huevos de campo servido con fideos en espiral de zuchini salteados en aceite de oliva.',
    ingredients: [
      '2 huevos enteros',
      '180g de zuchini cortado en tiras finas o espiralado (zoodles)',
      '15ml de aceite de oliva extra virgen (1 cda sopera)',
      'Sal, pimienta y orégano a gusto'
    ],
    instructions: [
      'Espiralizar o cortar el zuchini en tiras como fideos.',
      'Saltear los fideos de zuchini en sartén con la mitad del aceite de oliva por 3 minutos hasta que estén al dente. Salpimentar y reservar.',
      'Batir los 2 huevos con sal y orégano, y cocinar el omelette en la misma sartén con el resto del aceite.',
      'Servir el omelette acompañado de los fideos de zuchini.'
    ],
    tags: ['Plan Caro', 'Cena', 'Huevos', 'Zuchini', 'Bajo en carbos']
  },
  {
    id: 'caro-cen-3',
    planId: 'caro',
    optionNumber: 3,
    title: 'Tortilla de Acelga y Cebolla',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 18,
    servings: 1,
    calories: 290,
    proteinGrams: 16,
    carbsGrams: 6,
    fatsGrams: 22,
    imageUrl: '/images/recipe_tarta_keto_espinaca_1792712405870.jpg',
    description: 'Tortilla liviana para la noche preparada con 150g de acelga bien escurrida, cebolla dorada y 2 huevos.',
    ingredients: [
      '2 huevos enteros',
      '150g de acelga hervida y muy bien escurrida',
      '40g de cebolla picada fina',
      '15ml de aceite de oliva extra virgen (1 cda sopera)',
      'Sal, pimienta y nuez moscada'
    ],
    instructions: [
      'Picar la acelga escurrida. En sartén con la mitad del aceite, rehogar la cebolla picada durante 3 minutos.',
      'Batir los 2 huevos con sal, pimienta y nuez moscada. Añadir la acelga y la cebolla dorada.',
      'Calentar el resto del aceite en la sartén y verter la mezcla.',
      'Cocinar 4 minutos de un lado a fuego medio-bajo, voltear con plato y cocinar 3 minutos más.'
    ],
    tags: ['Plan Caro', 'Cena', 'Tortilla', 'Acelga']
  },
  {
    id: 'caro-cen-4',
    planId: 'caro',
    optionNumber: 4,
    title: 'Hamburguesa de Atún con Puré de Coliflor al Queso',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 360,
    proteinGrams: 42,
    carbsGrams: 6,
    fatsGrams: 18,
    imageUrl: '/images/recipe_churrasco_coliflor_1792713325916.jpg',
    description: 'Hamburguesa casera hecha con 180g de atún y huevo a la plancha, servida con puré cremoso de coliflor procesado con 1 cda de queso untable.',
    ingredients: [
      '180g de atún al natural escurrido',
      '1 huevo',
      '180g de coliflor',
      '20g de queso untable (1 cda sopera)',
      'Sal, pimienta y nuez moscada'
    ],
    instructions: [
      'Mezclar el atún desmenuzado con 1 huevo, sal y pimienta. Moldear una hamburguesa firme.',
      'Cocinar en sartén antiadherente caliente 3 a 4 minutos por lado.',
      'Hervir la coliflor 10 minutos hasta que esté muy blanda. Escurrir bien y procesar en caliente con la cucharada de queso untable y nuez moscada.',
      'Servir la hamburguesa caliente con el puré de coliflor suave.'
    ],
    tags: ['Plan Caro', 'Cena', 'Atún', 'Coliflor']
  },
  {
    id: 'caro-cen-5',
    planId: 'caro',
    optionNumber: 5,
    title: 'Bife de Chorizo con Ensalada de Hojas Verdes',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 15,
    servings: 1,
    calories: 520,
    proteinGrams: 46,
    carbsGrams: 2,
    fatsGrams: 37,
    imageUrl: '/images/recipe_bife_chorizo_1792712404795.jpg',
    description: '200g de bife de chorizo jugoso a la plancha con ensalada fresca de hojas verdes (lechuga y rúcula) con 1 cda de aceite de oliva.',
    ingredients: [
      '200g de bife de chorizo',
      '120g de hojas verdes mixtas (lechuga, rúcula, radicheta)',
      '15ml de aceite de oliva extra virgen (1 cda sopera)',
      'Sal gruesa y pimienta'
    ],
    instructions: [
      'Calentar la plancha a fuego máximo.',
      'Cocinar el bife 4 a 5 minutos por lado. Salar al dar vuelta.',
      'Servir con las hojas verdes lavadas y aderezadas con la cucharada de aceite de oliva.'
    ],
    tags: ['Plan Caro', 'Cena', 'Carne', 'Clásico']
  },
  {
    id: 'caro-cen-6',
    planId: 'caro',
    optionNumber: 6,
    title: 'Matambre de Cerdo con Espinaca Salteada',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 18,
    servings: 1,
    calories: 500,
    proteinGrams: 42,
    carbsGrams: 3,
    fatsGrams: 35,
    imageUrl: '/images/recipe_churrasco_coliflor_1792713325916.jpg',
    description: '180g de matambre de cerdo crocante a la plancha acompañado de 150g de espinaca salteada en oliva.',
    ingredients: [
      '180g de matambre de cerdo',
      '150g de hojas de espinaca fresca',
      '15ml de aceite de oliva extra virgen (1 cda sopera)',
      'Sal gruesa, pimienta y limón'
    ],
    instructions: [
      'Dorar el matambre en plancha caliente 5 minutos por lado con sal gruesa.',
      'Saltear la espinaca en sartén con la cucharada de oliva durante 2 minutos.',
      'Servir el matambre con un toque de jugo de limón y la espinaca.'
    ],
    tags: ['Plan Caro', 'Cena', 'Cerdo', 'Espinaca']
  },
  {
    id: 'caro-cen-7',
    planId: 'caro',
    optionNumber: 7,
    title: 'Pata Muslo al Horno con Rúcula y Parmesano',
    mealType: 'cena',
    cookingMethod: 'horno',
    prepTimeMinutes: 35,
    servings: 1,
    calories: 490,
    proteinGrams: 44,
    carbsGrams: 2,
    fatsGrams: 34,
    imageUrl: '/images/recipe_pollo_brocoli_palta_1792712404721.jpg',
    description: 'Pata muslo de pollo dorada al horno con piel crujiente, servida sobre colchón de rúcula fresca con 20g de queso parmesano en hebras.',
    ingredients: [
      '1 pata muslo de pollo con piel (aprox. 250g con hueso / ~180g carne)',
      '80g de rúcula fresca limpia',
      '20g de queso parmesano en hebras',
      '15ml de aceite de oliva extra virgen (1 cda sopera)',
      'Sal, pimienta y orégano'
    ],
    instructions: [
      'Condimentar la pata muslo con sal, pimienta y orégano.',
      'Hornear a 200°C durante 35 minutos hasta que la piel quede dorada y crujiente.',
      'Disponer la rúcula en el plato, espolvorear el queso parmesano y aderezar con la cucharada de oliva.',
      'Colocar la pieza de pollo bien caliente sobre la ensalada.'
    ],
    tags: ['Plan Caro', 'Cena', 'Pollo', 'Horno']
  },
  {
    id: 'caro-cen-8',
    planId: 'caro',
    optionNumber: 8,
    title: 'Wok de Pollo con Verduras Verdes',
    mealType: 'cena',
    cookingMethod: 'salteado_wok',
    prepTimeMinutes: 18,
    servings: 1,
    calories: 430,
    proteinGrams: 42,
    carbsGrams: 6,
    fatsGrams: 27,
    imageUrl: '/images/recipe_wok_pollo_zuchini_1792713326934.jpg',
    description: '180g de pechuga de pollo en tiras salteada al wok con zuchini, brócoli, pimiento verde y aceite de coco o manteca.',
    ingredients: [
      '180g de pechuga de pollo en tiras',
      '80g de zuchini en bastones',
      '80g de arbolitos de brócoli al vapor',
      '40g de pimiento verde en juliana',
      '15g de aceite de coco o manteca (1 cda sopera)',
      'Sal, pimienta y toque de provenzal'
    ],
    instructions: [
      'Calentar el wok a fuego alto con la cucharada de aceite de coco o manteca.',
      'Saltear las tiras de pollo durante 5 minutos hasta que tomen buen color dorado.',
      'Incorporar los bastones de zuchini, pimiento verde y el brócoli. Saltear 4 minutos más revolviendo continuamente.',
      'Condimentar con sal y provenzal antes de servir en el plato.'
    ],
    tags: ['Plan Caro', 'Cena', 'Wok', 'Pollo', 'Vegetales']
  },
  {
    id: 'caro-cen-9',
    planId: 'caro',
    optionNumber: 9,
    title: 'Hamburguesa Casera en Pan Nube con Lechuga y Tomate',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 420,
    proteinGrams: 40,
    carbsGrams: 4,
    fatsGrams: 27,
    imageUrl: '/images/recipe_hamburguesa_huevo_1792713324729.jpg',
    description: 'Hamburguesa casera de res (180g) a la plancha servida entre 2 panes nube keto esponjosos con rodajas de tomate y lechuga.',
    ingredients: [
      '180g de carne picada de res',
      '2 porciones de pan nube keto (sin harinas)',
      '50g de tomate en rodajas',
      '40g de hojas de lechuga fresca',
      'Sal, pimienta y orégano'
    ],
    instructions: [
      'Condimentar la carne y moldear una hamburguesa.',
      'Cocinar en plancha caliente 4 minutos por lado.',
      'Armar el sándwich keto colocando la hamburguesa sobre el pan nube con las hojas de lechuga y rodajas de tomate.',
      'Servir caliente.'
    ],
    tags: ['Plan Caro', 'Cena', 'Hamburguesa', 'Pan Nube']
  },
  {
    id: 'caro-cen-10',
    planId: 'caro',
    optionNumber: 10,
    title: 'Plato Libre Proteico de Cena con Vegetales',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 18,
    servings: 1,
    calories: 490,
    proteinGrams: 46,
    carbsGrams: 5,
    fatsGrams: 32,
    imageUrl: '/images/recipe_bife_chorizo_1792712404795.jpg',
    description: 'Carne vacuna, pollo o pescado hasta 220g con hasta 200g de vegetales verdes permitidos y 1 cucharada de aceite de oliva.',
    ingredients: [
      'Hasta 220g de carne, pollo o pescado a elección',
      'Hasta 200g de vegetales verdes (lechuga, rúcula, espinaca o brócoli)',
      '15ml de aceite de oliva extra virgen (1 cda sopera)',
      'Sal y condimentos al gusto'
    ],
    instructions: [
      'Cocinar la proteína elegida a la plancha o sartén.',
      'Acompañar con los vegetales verdes al vapor o crudos.',
      'Aderezar con 1 cucharada sopera de aceite de oliva virgen extra.'
    ],
    tags: ['Plan Caro', 'Cena', 'Libre', 'Flexible']
  },
  {
    id: 'caro-cen-11',
    planId: 'caro',
    optionNumber: 11,
    title: 'Puré de Calabaza con Camarones o Rabas al Coco',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 340,
    proteinGrams: 30,
    carbsGrams: 9,
    fatsGrams: 20,
    imageUrl: '/images/recipe_crema_calabaza_1792711348767.jpg',
    description: 'Puré ligero de calabaza en porción controlada keto con 5 camarones o rabas salteadas en aceite de coco.',
    ingredients: [
      '120g de puré de calabaza cocida al vapor (porción keto moderada)',
      '150g de camarones o rabas limpias (aprox. 5 unidades grandes)',
      '15g de aceite de coco (1 cda sopera)',
      'Sal, ajo en polvo y perejil picado'
    ],
    instructions: [
      'Pisar la calabaza cocida al vapor con una pizca de sal marina.',
      'En una sartén bien caliente, derretir la cucharada de aceite de coco y saltear los camarones/rabas con ajo y perejil por 3 a 4 minutos.',
      'Servir los mariscos dorados junto al puré de calabaza.'
    ],
    tags: ['Plan Caro', 'Cena', 'Mariscos', 'Gourmet']
  },
  {
    id: 'caro-cen-12',
    planId: 'caro',
    optionNumber: 12,
    title: 'Ensalada César Keto con Pechuga y Parmesano',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 18,
    servings: 1,
    calories: 470,
    proteinGrams: 48,
    carbsGrams: 3,
    fatsGrams: 30,
    imageUrl: '/images/recipe_pollo_brocoli_palta_1792712404721.jpg',
    description: '200g de pechuga grillada en tiras sobre colchón de rúcula fresca, 1 cda de aderezo César keto y 50g de queso parmesano.',
    ingredients: [
      '200g de pechuga de pollo',
      '100g de rúcula fresca',
      '50g de queso parmesano en lascas o rallado grueso',
      '15g de aderezo César keto (1 cda sopera)',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Cocinar la pechuga a la plancha 6 minutos por lado. Cortar en tiras tibias.',
      'En un plato colocar la rúcula fresca lavada.',
      'Agregar las tiras de pollo y las lascas de queso parmesano.',
      'Aderezar con 1 cucharada de aderezo César casero sin azúcar.'
    ],
    tags: ['Plan Caro', 'Cena', 'Pollo', 'Ensalada César']
  },
  {
    id: 'caro-cen-13',
    planId: 'caro',
    optionNumber: 13,
    title: 'Matambre de Carne con Hojas Verdes',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 18,
    servings: 1,
    calories: 510,
    proteinGrams: 44,
    carbsGrams: 2,
    fatsGrams: 36,
    imageUrl: '/images/recipe_bife_chorizo_1792712404795.jpg',
    description: '180g de matambre vacuno a la plancha dorado y jugoso con ensalada verde mixta aderezada con aceite de oliva.',
    ingredients: [
      '180g de matambre vacuno',
      '120g de hojas verdes mixtas (lechuga, rúcula, espinaca)',
      '15ml de aceite de oliva extra virgen (1 cda sopera)',
      'Sal gruesa y pimienta'
    ],
    instructions: [
      'Cocinar el matambre en plancha caliente a fuego medio-alto 5 a 6 minutos por lado.',
      'Lavar las hojas verdes y aderezar con la cucharada sopera de aceite de oliva y sal.',
      'Servir el matambre cortado en tiras junto a las hojas verdes.'
    ],
    tags: ['Plan Caro', 'Cena', 'Carne', 'Plancha']
  },
  {
    id: 'caro-cen-14',
    planId: 'caro',
    optionNumber: 14,
    title: 'Ensalada de Rúcula, Tomate, Palta y Queso en Cubos al Oliva',
    mealType: 'cena',
    cookingMethod: 'sin_coccion',
    prepTimeMinutes: 10,
    servings: 1,
    calories: 420,
    proteinGrams: 18,
    carbsGrams: 6,
    fatsGrams: 36,
    imageUrl: '/images/recipe_bowl_pollo_aguacate_1792711348006.jpg',
    description: '1 palta chica, 100g de rúcula, 60g de queso semiduro en dados, rodajas de tomate y 1 cda de aceite de oliva extra virgen.',
    ingredients: [
      '100g de palta fresca (1 palta chica)',
      '100g de rúcula fresca',
      '60g de queso semiduro o Tybo en dados',
      '80g de tomate en rodajas',
      '15ml de aceite de oliva extra virgen (1 cda sopera)',
      'Sal y orégano'
    ],
    instructions: [
      'Lavar la rúcula y disponer como base en el plato.',
      'Cortar la palta en cubos, el tomate en rodajas y el queso en dados.',
      'Distribuir sobre la rúcula y aderezar con la cucharada de aceite de oliva, sal y orégano.'
    ],
    tags: ['Plan Caro', 'Cena', 'Vegetariano', 'Palta', 'Sin cocción']
  },
  {
    id: 'caro-cen-15',
    planId: 'caro',
    optionNumber: 15,
    title: 'Espárragos Envueltos en Panceta con Huevos a la Plancha',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 15,
    servings: 1,
    calories: 460,
    proteinGrams: 26,
    carbsGrams: 3,
    fatsGrams: 38,
    imageUrl: '/images/recipe_salmon_esparragos_1792711347231.jpg',
    description: '100g de espárragos envueltos en 100g de panceta dorada y crocante, acompañados de 2 huevos a la plancha.',
    ingredients: [
      '100g de espárragos frescos (parte tierna)',
      '100g de fetas de panceta ahumada',
      '2 huevos enteros',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Blanquear los espárragos 2 minutos en agua hirviendo y escurrir.',
      'Envolver ataditos de espárragos con las fetas de panceta.',
      'Dorar en sartén o plancha a fuego medio hasta que la panceta quede crocante.',
      'Cocinar los 2 huevos a la plancha en la misma grasa y servir todo junto.'
    ],
    tags: ['Plan Caro', 'Cena', 'Panceta', 'Espárragos', 'Gourmet']
  },
  {
    id: 'caro-cen-16',
    planId: 'caro',
    optionNumber: 16,
    title: 'Bife a la Plancha con Puré de Coliflor Cremoso',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 510,
    proteinGrams: 46,
    carbsGrams: 5,
    fatsGrams: 34,
    imageUrl: '/images/recipe_churrasco_coliflor_1792713325916.jpg',
    description: 'Bife tierno de 200g a la plancha acompañado de puré de coliflor suave procesado con manteca y nuez moscada.',
    ingredients: [
      '200g de bife vacuno (cuadril, bife o bola de lomo)',
      '180g de coliflor',
      '15g de manteca pura (1 cda sopera)',
      'Sal gruesa, pimienta y nuez moscada'
    ],
    instructions: [
      'Hervir la coliflor 10 minutos hasta tierna. Escurrir bien y pisar con los 15g de manteca, sal y nuez moscada.',
      'Cocinar el bife a la plancha a fuego fuerte durante 3 a 4 minutos por lado con sal gruesa.',
      'Servir el bife caliente con el puré de coliflor cremoso.'
    ],
    tags: ['Plan Caro', 'Cena', 'Carne', 'Coliflor']
  },
  {
    id: 'caro-cen-17',
    planId: 'caro',
    optionNumber: 17,
    title: 'Pizza Keto con Masa de Queso o Pollo',
    mealType: 'cena',
    cookingMethod: 'horno',
    prepTimeMinutes: 25,
    servings: 1,
    calories: 490,
    proteinGrams: 45,
    carbsGrams: 4,
    fatsGrams: 32,
    imageUrl: '/images/recipe_tarta_keto_espinaca_1792712405870.jpg',
    description: 'Pizza keto individual con masa crocante de queso o pollo procesado, salsa de tomate natural y mozzarella derretida.',
    ingredients: [
      '150g de base keto (pollo procesado con huevo o masa fathead de queso y harina de almendras)',
      '40g de salsa de tomate natural sin azúcar',
      '60g de queso mozzarella rallado',
      'Aceitunas y orégano a gusto'
    ],
    instructions: [
      'Precocinar la base de pizza keto en horno a 200°C durante 10 minutos hasta dorar.',
      'Untar con la salsa de tomate natural y cubrir con los 60g de mozzarella.',
      'Llevar a gratinar por 5 minutos más hasta que el queso burbujee y dore.',
      'Espolvorear con orégano y servir caliente.'
    ],
    tags: ['Plan Caro', 'Cena', 'Pizza Keto', 'Favoritos']
  },
  {
    id: 'caro-cen-18',
    planId: 'caro',
    optionNumber: 18,
    title: 'Costeleta de Cerdo con Ensalada de Chaucha y Huevo',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 20,
    servings: 1,
    calories: 470,
    proteinGrams: 44,
    carbsGrams: 5,
    fatsGrams: 30,
    imageUrl: '/images/recipe_churrasco_coliflor_1792713325916.jpg',
    description: 'Costeleta de cerdo a la plancha con ensalada tibia de 140g de chauchas al vapor y 1 huevo duro picado con oliva.',
    ingredients: [
      '200g de costeleta de cerdo',
      '140g de chauchas frescas',
      '1 huevo duro picado',
      '15ml de aceite de oliva extra virgen (1 cda sopera)',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Hervir las chauchas 5 minutos y escurrir.',
      'Mezclar las chauchas tibias con el huevo duro picado y aderezar con la cucharada de aceite de oliva y sal.',
      'Cocinar la costeleta de cerdo a la plancha 5 minutos por lado.',
      'Servir caliente junto a la ensalada de chauchas.'
    ],
    tags: ['Plan Caro', 'Cena', 'Cerdo', 'Huevo']
  },
  {
    id: 'caro-cen-19',
    planId: 'caro',
    optionNumber: 19,
    title: 'Omelette de Queso y Espinaca con Cebolla Salteada',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 15,
    servings: 1,
    calories: 410,
    proteinGrams: 27,
    carbsGrams: 4,
    fatsGrams: 31,
    imageUrl: '/images/recipe_omelette_espinaca_1792713324934.jpg',
    description: 'Omelette esponjoso de 3 huevos relleno con cebolla dorada, 40g de queso cremoso o mozzarella y espinaca fresca salteada.',
    ingredients: [
      '3 huevos enteros',
      '40g de queso cremoso o mozzarella',
      '60g de espinaca fresca salteada',
      '30g de cebolla picada fina',
      '15ml de aceite de oliva (1 cda sopera)',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Rehogar la cebolla y la espinaca en sartén con media cucharada de oliva durante 3 minutos.',
      'Batir los 3 huevos con sal y pimienta. Volcar en sartén con el resto del aceite.',
      'Rellenar con la espinaca, cebolla y los 40g de queso.',
      'Doblar el omelette, tapar 1 minuto para derretir el queso y servir.'
    ],
    tags: ['Plan Caro', 'Cena', 'Omelette', 'Vegetales']
  },
  {
    id: 'caro-cen-20',
    planId: 'caro',
    optionNumber: 20,
    title: 'Plato Libre Nocturno de Proteínas y Vegetales',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 18,
    servings: 1,
    calories: 490,
    proteinGrams: 46,
    carbsGrams: 5,
    fatsGrams: 32,
    imageUrl: '/images/recipe_bife_chorizo_1792712404795.jpg',
    description: '220g de carne vacuna, pechuga de pollo o filet de pescado con hasta 200g de vegetales verdes y 1 cda de aceite de oliva.',
    ingredients: [
      '220g de carne vacuna, pollo o pescado a elección',
      'Hasta 200g de vegetales verdes permitidos',
      '15ml de aceite de oliva extra virgen (1 cda sopera)',
      'Sal y condimentos al gusto'
    ],
    instructions: [
      'Cocinar la porción de carne, pollo o pescado a la plancha a fuego medio.',
      'Acompañar con vegetales verdes cocidos o en ensalada.',
      'Aderezar con 1 cucharada sopera de aceite de oliva.'
    ],
    tags: ['Plan Caro', 'Cena', 'Libre', 'Flexible']
  },
  {
    id: 'caro-cen-21',
    planId: 'caro',
    optionNumber: 21,
    title: 'Omelette Generoso de Queso, Espinaca y Champiñones',
    mealType: 'cena',
    cookingMethod: 'plancha',
    prepTimeMinutes: 15,
    servings: 1,
    calories: 520,
    proteinGrams: 34,
    carbsGrams: 4,
    fatsGrams: 41,
    imageUrl: '/images/recipe_omelette_espinaca_1792713324934.jpg',
    description: 'Omelette generoso de 3 huevos de campo relleno con 100g de queso fundido, 50g de espinaca salteada y 50g de champiñones dorados.',
    ingredients: [
      '3 huevos enteros',
      '100g de queso cremoso o mozzarella',
      '50g de espinaca fresca salteada',
      '50g de champiñones laminados dorados',
      '15ml de aceite de oliva o manteca (1 cda sopera)',
      'Sal y pimienta a gusto'
    ],
    instructions: [
      'Dorar los champiñones y la espinaca en sartén con un poco de aceite durante 3 minutos. Salpimentar.',
      'Batir los 3 huevos y volcar en la sartén caliente.',
      'Cuando tome consistencia, colocar los 100g de queso y las verduras salteadas en el centro.',
      'Doblar el omelette, tapar a fuego mínimo por 2 minutos para fundir completamente el queso y servir.'
    ],
    tags: ['Plan Caro', 'Cena', 'Champiñones', 'Queso']
  }
];
