import { Recipe, PrepLog, MealType, CookingMethod } from '../types';
import { INITIAL_RECIPES } from '../data/initialRecipes';

const STORAGE_RECIPES_KEY = 'savia_keto_recipes_v12';
const STORAGE_PREP_LOGS_KEY = 'savia_keto_logs_v5';

// Seed initial meal history so the 7-day Bitácora has immediate visual context
function getSeedLogs(): PrepLog[] {
  const today = new Date();
  
  const formatDate = (offsetDays: number) => {
    const d = new Date(today);
    d.setDate(d.getDate() - offsetDays);
    return d.toISOString().split('T')[0];
  };

  return [
    {
      id: 'log-seed-1',
      recipeId: 'keto-d1-almuerzo',
      recipeTitle: 'Pechuga de Pollo con Brócoli a la Manteca y Palta',
      date: formatDate(0), // Hoy
      mealType: 'almuerzo',
      cookingMethod: 'plancha',
      notes: 'Plato del Día 1',
      createdAt: Date.now() - 3600000 * 3
    },
    {
      id: 'log-seed-2',
      recipeId: 'keto-d1-cena',
      recipeTitle: 'Bife de Chorizo con Ensalada Verde',
      date: formatDate(1), // Ayer
      mealType: 'cena',
      cookingMethod: 'plancha',
      notes: 'Carne a punto jugosa',
      createdAt: Date.now() - 86400000
    },
    {
      id: 'log-seed-3',
      recipeId: 'keto-d2-almuerzo',
      recipeTitle: 'Medallones de Res Gratinados con Ensalada de Tomate al Orégano',
      date: formatDate(2), // Anteayer
      mealType: 'almuerzo',
      cookingMethod: 'plancha',
      notes: 'Con queso bien derretido',
      createdAt: Date.now() - 86400000 * 2
    },
    {
      id: 'log-seed-4',
      recipeId: 'keto-d5-cena',
      recipeTitle: 'Tarta Keto de Espinaca sin Masa',
      date: formatDate(3),
      mealType: 'cena',
      cookingMethod: 'horno',
      createdAt: Date.now() - 86400000 * 3
    },
    {
      id: 'log-seed-5',
      recipeId: 'keto-d3-almuerzo',
      recipeTitle: 'Churrasco de Cerdo con Puré Cremoso de Coliflor',
      date: formatDate(5),
      mealType: 'almuerzo',
      cookingMethod: 'plancha',
      createdAt: Date.now() - 86400000 * 5
    }
  ];
}

export function loadRecipes(): Recipe[] {
  try {
    const raw = localStorage.getItem(STORAGE_RECIPES_KEY);
    if (!raw) {
      saveRecipes(INITIAL_RECIPES);
      return INITIAL_RECIPES;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return INITIAL_RECIPES;
    }
    return parsed;
  } catch (e) {
    console.error('Error loading recipes from localStorage', e);
    return INITIAL_RECIPES;
  }
}

export function saveRecipes(recipes: Recipe[]): void {
  try {
    localStorage.setItem(STORAGE_RECIPES_KEY, JSON.stringify(recipes));
  } catch (e) {
    console.error('Error saving recipes to localStorage', e);
  }
}

export function loadPrepLogs(): PrepLog[] {
  try {
    const raw = localStorage.getItem(STORAGE_PREP_LOGS_KEY);
    if (!raw) {
      const seed = getSeedLogs();
      savePrepLogs(seed);
      return seed;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed;
  } catch (e) {
    console.error('Error loading prep logs', e);
    return [];
  }
}

export function savePrepLogs(logs: PrepLog[]): void {
  try {
    localStorage.setItem(STORAGE_PREP_LOGS_KEY, JSON.stringify(logs));
  } catch (e) {
    console.error('Error saving prep logs', e);
  }
}

export function addMealLog(
  recipeId: string,
  dateStr: string,
  mealType: MealType,
  recipeTitle: string,
  notes?: string,
  cookingMethod?: CookingMethod
): PrepLog {
  const logs = loadPrepLogs();
  const newLog: PrepLog = {
    id: 'log-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
    recipeId,
    recipeTitle,
    date: dateStr,
    mealType,
    cookingMethod,
    notes,
    createdAt: Date.now()
  };
  const updated = [newLog, ...logs];
  savePrepLogs(updated);
  return newLog;
}

export function deleteMealLog(logId: string): void {
  const logs = loadPrepLogs();
  const updated = logs.filter(l => l.id !== logId);
  savePrepLogs(updated);
}

export function getLogsForRecipe(recipeId: string, logs: PrepLog[]): PrepLog[] {
  return logs
    .filter(l => l.recipeId === recipeId)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getLastPreparedDate(recipeId: string, logs: PrepLog[]): string | null {
  const recipeLogs = getLogsForRecipe(recipeId, logs);
  if (recipeLogs.length === 0) return null;
  return recipeLogs[0].date;
}

export function getDaysSinceLastPrepared(recipeId: string, logs: PrepLog[]): number | null {
  const lastDate = getLastPreparedDate(recipeId, logs);
  if (!lastDate) return null;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [y, m, d] = lastDate.split('-').map(Number);
  const target = new Date(y, m - 1, d);
  target.setHours(0, 0, 0, 0);

  const diffTime = today.getTime() - target.getTime();
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

export function getHumanRecency(
  recipeId: string,
  logs: PrepLog[]
): {
  label: string;
  tone: 'today' | 'recent' | 'fresh' | 'never';
  daysAgo: number | null;
} {
  const days = getDaysSinceLastPrepared(recipeId, logs);
  if (days === null) {
    return { label: 'Sin preparar aún', tone: 'never', daysAgo: null };
  }
  if (days === 0) {
    return { label: 'Preparada hoy', tone: 'today', daysAgo: 0 };
  }
  if (days === 1) {
    return { label: 'Preparada ayer', tone: 'recent', daysAgo: 1 };
  }
  if (days > 1 && days < 7) {
    return { label: `Hace ${days} días`, tone: 'recent', daysAgo: days };
  }
  if (days >= 7 && days < 14) {
    return { label: 'Hace 1 semana', tone: 'fresh', daysAgo: days };
  }
  if (days >= 14 && days < 30) {
    return { label: `Hace ${Math.floor(days / 7)} semanas`, tone: 'fresh', daysAgo: days };
  }
  return { label: `Hace ${Math.floor(days / 30)} meses`, tone: 'fresh', daysAgo: days };
}

export function getTodayDateString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function formatDateSpanish(dateStr: string): string {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString('es-ES', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}
