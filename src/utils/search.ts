import { Recipe } from '../types';

/**
 * Normalizes text by converting to lower case and stripping diacritics/accents
 * (e.g., 'brócoli' -> 'brocoli', 'limón' -> 'limon', 'infusión' -> 'infusion')
 */
export const normalizeSearchText = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};

/**
 * Matches a recipe against a multi-word search query.
 * All whitespace-separated terms must match somewhere in the recipe's searchable attributes.
 * Allows searching across title, ingredients, tags, description, meal type, day/option number, etc.
 */
export const matchesRecipeSearch = (recipe: Recipe, rawQuery: string): boolean => {
  const trimmed = rawQuery.trim();
  if (!trimmed) return true;

  const tokens = normalizeSearchText(trimmed)
    .split(/\s+/)
    .filter(Boolean);

  if (tokens.length === 0) return true;

  const searchableParts = [
    recipe.title,
    recipe.description || '',
    recipe.mealType,
    recipe.cookingMethod,
    recipe.dayNumber ? `dia ${recipe.dayNumber} dia${recipe.dayNumber} d${recipe.dayNumber}` : '',
    recipe.optionNumber ? `opcion ${recipe.optionNumber} opcion${recipe.optionNumber} op${recipe.optionNumber}` : '',
    recipe.planId === 'caro' ? 'caro plan caro' : 'leo plan leo',
    ...(recipe.tags || []),
    ...(recipe.ingredients || []),
    ...(recipe.instructions || []),
    ...(recipe.differentialIngredients?.map(d => `${d.name} ${d.he} ${d.she} ${d.note || ''}`) || [])
  ];

  const fullSearchableText = normalizeSearchText(searchableParts.join(' '));

  return tokens.every(token => fullSearchableText.includes(token));
};
