export type MealType = 'desayuno' | 'almuerzo' | 'merienda' | 'cena' | 'snack';

export type CookingMethod =
  | 'plancha'
  | 'horno'
  | 'hervido_vapor'
  | 'salteado_wok'
  | 'sin_coccion';

export interface PrepLog {
  id: string;
  recipeId: string;
  recipeTitle: string;
  date: string; // ISO format 'YYYY-MM-DD'
  mealType: MealType;
  cookingMethod?: CookingMethod;
  notes?: string;
  createdAt: number;
}

export interface DifferentialIngredient {
  name: string;
  he: string; // ej. "180g"
  she: string; // ej. "130g"
  total: string; // ej. "310g"
  note?: string;
}

export interface ServingPersonDetail {
  percentage?: string; // ej. "58%" o "42%"
  proteinCooked: string; // ej. "135g - 140g matambre cocido"
  sides: string; // ej. "30g rúcula fresca"
  fatsAndToppings?: string; // ej. "30g salsa de tomate + 40g mozzarella fundida + 15ml oliva"
  plateTotalApprox: string; // ej. "~245g en su plato"
  ruleNote: string; // Regla específica de servido
}

export interface CookedServingInfo {
  dishType: 'integrado' | 'separado'; // 'integrado' (wok, revuelto, tarta) o 'separado' (matambre, bifes, pechuga)
  servingRuleSummary: string; // ej. "Servir el 58% de la preparación en el plato de él y el 42% en el de ella."
  servingHe: ServingPersonDetail;
  servingShe: ServingPersonDetail;
  // Backward compatibility convenience fields
  cookedProtein?: string;
  cookedSides?: string;
  plateTotalApprox?: string;
}

export interface Recipe {
  id: string;
  title: string;
  mealType: MealType;
  cookingMethod: CookingMethod;
  dayNumber?: number; // 1 to 15 from Keto plan
  prepTimeMinutes: number;
  servings: number;
  calories?: number;
  proteinGrams?: number;
  carbsGrams?: number;
  fatsGrams?: number;

  // Nutrition for Ella
  caloriesShe?: number;
  proteinGramsShe?: number;
  carbsGramsShe?: number;
  fatsGramsShe?: number;
  imageUrl: string;
  description: string;

  // Single portion for Él
  ingredients: string[];
  instructions: string[];

  // 2 portions (Él + Ella) with exact proportions
  differentialIngredients?: DifferentialIngredient[];
  instructionsCombined?: string[];

  tags: string[];
  cookedServing?: CookedServingInfo;
  isCustom?: boolean;
  createdAt: string;
}

export type SortOption =
  | 'recommended' // Menos repetidas primero
  | 'plan_order' // Orden del Plan Keto (Día 1 a 15)
  | 'last_cooked' // Última vez preparada
  | 'name_asc'
  | 'time_asc'
  | 'time_desc';

export type RecencyFilter =
  | 'all'
  | 'never'
  | 'not_this_week'
  | 'recent_week';

export type TimeFilter =
  | 'all'
  | 'quick' // <= 15 min
  | 'medium' // 16 - 30 min
  | 'slow'; // > 30 min

export type ActiveTab = 'recipes' | 'history' | 'shopping' | 'guide';
