import { Recipe } from '../types';

export interface NutritionInfo {
  calories: number;
  proteinGrams: number;
  carbsGrams: number;
  fatsGrams: number;
}

/**
 * Returns the nutritional values for "Él"
 */
export function getNutritionHe(recipe: Recipe): NutritionInfo {
  return {
    calories: recipe.calories ?? 0,
    proteinGrams: recipe.proteinGrams ?? 0,
    carbsGrams: recipe.carbsGrams ?? 0,
    fatsGrams: recipe.fatsGrams ?? 0,
  };
}

/**
 * Returns the nutritional values for "Ella".
 * If not explicitly saved in recipe, accurately derives it from the keto guide's
 * calibrated proportions for the couple:
 * - Protein: ~72% of Él's portion
 * - Healthy Fats: ~70% of Él's portion
 * - Net Carbs: ~85% of Él's portion (vegetables & fiber)
 * - Calories: ~71% of Él's intake
 */
export function getNutritionShe(recipe: Recipe): NutritionInfo {
  if (recipe.caloriesShe !== undefined) {
    return {
      calories: recipe.caloriesShe,
      proteinGrams: recipe.proteinGramsShe ?? Math.round((recipe.proteinGrams ?? 0) * 0.72),
      carbsGrams: recipe.carbsGramsShe ?? Math.max(1, Math.round((recipe.carbsGrams ?? 0) * 0.85)),
      fatsGrams: recipe.fatsGramsShe ?? Math.round((recipe.fatsGrams ?? 0) * 0.70),
    };
  }

  const protein = recipe.proteinGrams ? Math.round(recipe.proteinGrams * 0.72) : 0;
  const fats = recipe.fatsGrams ? Math.round(recipe.fatsGrams * 0.70) : 0;
  const carbs = recipe.carbsGrams ? Math.max(1, Math.round(recipe.carbsGrams * 0.85)) : 0;

  const calories = recipe.calories
    ? Math.round(recipe.calories * 0.71)
    : protein * 4 + carbs * 4 + fats * 9;

  return {
    calories,
    proteinGrams: protein,
    carbsGrams: carbs,
    fatsGrams: fats,
  };
}
