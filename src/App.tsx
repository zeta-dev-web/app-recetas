/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import {
  Search,
  SlidersHorizontal,
  Plus,
  Utensils,
  CheckCircle2,
  X,
  ArrowUpDown,
  BookOpen,
  Clock,
  Flame,
  ChefHat,
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Recipe, PrepLog, MealType, CookingMethod, ActiveTab, SortOption, RecencyFilter, TimeFilter } from './types';
import {
  loadRecipes,
  saveRecipes,
  loadPrepLogs,
  savePrepLogs,
  addMealLog,
  deleteMealLog,
  getDaysSinceLastPrepared,
  getTodayDateString
} from './utils/storage';
import { INITIAL_RECIPES, MEAL_TYPES, COOKING_METHODS } from './data/initialRecipes';
import { PLAN_CARO_GUIDELINES } from './data/recipesPlanCaro';
import { matchesRecipeSearch } from './utils/search';
import { Header } from './components/Header';
import { RecipeCard } from './components/RecipeCard';
import { RecipeDetailModal } from './components/RecipeDetailModal';
import { AddRecipeModal } from './components/AddRecipeModal';
import { LogMealModal } from './components/LogMealModal';
import { HistoryTimeline } from './components/HistoryTimeline';
import { KetoGuideView } from './components/KetoGuideView';
import { ShoppingListView } from './components/ShoppingListView';
import { ExportModal } from './components/ExportModal';
import { KetoAiChatModal } from './components/KetoAiChatModal';

export default function App() {
  const [recipes, setRecipes] = useState<Recipe[]>(() => loadRecipes());
  const [logs, setLogs] = useState<PrepLog[]>(() => loadPrepLogs());
  const [activeTab, setActiveTab] = useState<ActiveTab>('recipes');

  // Plan Selection ('all' | 'leo' | 'caro')
  const [selectedPlan, setSelectedPlan] = useState<'all' | 'leo' | 'caro'>('all');
  const [isCaroGuidelinesOpen, setIsCaroGuidelinesOpen] = useState(false);

  // Search & Filtering
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMealType, setSelectedMealType] = useState<string>('all');
  const [selectedCookingMethod, setSelectedCookingMethod] = useState<string>('all');
  const [selectedTimeFilter, setSelectedTimeFilter] = useState<TimeFilter>('all');
  const [recencyFilter, setRecencyFilter] = useState<RecencyFilter>('all');
  const [sortBy, setSortBy] = useState<SortOption>('plan_order');

  // Modals
  const [selectedRecipeForDetail, setSelectedRecipeForDetail] = useState<Recipe | null>(null);
  const [recipeForLogModal, setRecipeForLogModal] = useState<Recipe | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isAiChatOpen, setIsAiChatOpen] = useState(false);
  const [chatRecipeContext, setChatRecipeContext] = useState<Recipe | null>(null);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // State sync to storage
  const handleAddRecipe = (newRecipe: Recipe) => {
    const updated = [newRecipe, ...recipes];
    setRecipes(updated);
    saveRecipes(updated);
    showToast(`Receta "${newRecipe.title}" agregada al recetario.`);
  };

  const handleDeleteRecipe = (recipeId: string) => {
    const updated = recipes.filter(r => r.id !== recipeId);
    setRecipes(updated);
    saveRecipes(updated);
    showToast('Receta eliminada correctamente.');
  };

  const handleQuickLogToday = (recipe: Recipe) => {
    const today = getTodayDateString();
    const newLog = addMealLog(recipe.id, today, recipe.mealType, recipe.title, undefined, recipe.cookingMethod);
    setLogs(prev => [newLog, ...prev]);
    showToast(`Registrado: "${recipe.title}" preparada hoy.`);
  };

  const handleSaveLogWithDate = (
    recipe: Recipe,
    date: string,
    mealType: MealType,
    notes?: string
  ) => {
    const newLog = addMealLog(recipe.id, date, mealType, recipe.title, notes, recipe.cookingMethod);
    setLogs(prev => [newLog, ...prev]);
    showToast(`Registrada preparación para el ${date}.`);
  };

  const handleDirectAddLog = (
    recipeId: string,
    date: string,
    mealType: MealType,
    recipeTitle: string,
    notes?: string,
    cookingMethod?: CookingMethod
  ) => {
    const newLog = addMealLog(recipeId, date, mealType, recipeTitle, notes, cookingMethod);
    setLogs(prev => [newLog, ...prev]);
    showToast(`Registrada preparación para el ${date}.`);
  };

  const handleDeleteLog = (logId: string) => {
    deleteMealLog(logId);
    setLogs(prev => prev.filter(l => l.id !== logId));
    showToast('Registro eliminado de la bitácora.');
  };

  const handleImportData = (newRecipes: Recipe[], newLogs: PrepLog[]) => {
    setRecipes(newRecipes);
    saveRecipes(newRecipes);
    setLogs(newLogs);
    savePrepLogs(newLogs);
    showToast('Datos sincronizados correctamente.');
  };

  const handleResetDefaults = () => {
    setRecipes(INITIAL_RECIPES);
    saveRecipes(INITIAL_RECIPES);
    showToast('Recetas restablecidas al plan Keto inicial.');
  };

  // Plan counts for badges
  const leoCount = useMemo(() => recipes.filter(r => (r.planId || 'leo') === 'leo').length, [recipes]);
  const caroCount = useMemo(() => recipes.filter(r => r.planId === 'caro').length, [recipes]);

  // Filter & Sort Logic
  const filteredAndSortedRecipes = useMemo(() => {
    return recipes
      .filter(recipe => {
        // Plan filter
        if (selectedPlan !== 'all') {
          const plan = recipe.planId || 'leo';
          if (plan !== selectedPlan) {
            return false;
          }
        }

        // Meal Type Filter
        if (selectedMealType !== 'all' && recipe.mealType !== selectedMealType) {
          return false;
        }

        // Cooking Method Filter (Plancha, Horno, Salteado/Wok, Hervido/Vapor, Sin cocción)
        if (selectedCookingMethod !== 'all' && recipe.cookingMethod !== selectedCookingMethod) {
          return false;
        }

        // Preparation Time Filter
        if (selectedTimeFilter === 'quick' && recipe.prepTimeMinutes > 15) {
          return false;
        }
        if (selectedTimeFilter === 'medium' && (recipe.prepTimeMinutes <= 15 || recipe.prepTimeMinutes > 30)) {
          return false;
        }
        if (selectedTimeFilter === 'slow' && recipe.prepTimeMinutes <= 30) {
          return false;
        }

        // Search Query (multi-word, accent-insensitive search across title, ingredients, tags, etc.)
        if (searchQuery.trim() && !matchesRecipeSearch(recipe, searchQuery)) {
          return false;
        }

        // Recency Filter
        const days = getDaysSinceLastPrepared(recipe.id, logs);
        if (recencyFilter === 'never' && days !== null) {
          return false;
        }
        if (recencyFilter === 'not_this_week' && days !== null && days < 7) {
          return false;
        }
        if (recencyFilter === 'recent_week' && (days === null || days >= 7)) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        const daysA = getDaysSinceLastPrepared(a.id, logs);
        const daysB = getDaysSinceLastPrepared(b.id, logs);

        if (sortBy === 'plan_order') {
          const planA = a.planId || 'leo';
          const planB = b.planId || 'leo';

          // When displaying both plans together, group by plan first
          if (selectedPlan === 'all' && planA !== planB) {
            if (planA === 'leo') return -1;
            if (planB === 'leo') return 1;
          }

          // Plan Caro: Desayunos -> Almuerzos -> Cenas, then optionNumber
          if (planA === 'caro' && planB === 'caro') {
            const mealPriority: Record<string, number> = { desayuno: 1, almuerzo: 2, cena: 3, merienda: 4, snack: 5 };
            const prioA = mealPriority[a.mealType] || 99;
            const prioB = mealPriority[b.mealType] || 99;
            if (prioA !== prioB) return prioA - prioB;
            const optA = a.optionNumber || a.dayNumber || 999;
            const optB = b.optionNumber || b.dayNumber || 999;
            return optA - optB;
          }

          // Plan Leo: Sort by day number first, then almuerzo before cena
          const dayA = a.dayNumber || 999;
          const dayB = b.dayNumber || 999;
          if (dayA !== dayB) return dayA - dayB;
          if (a.mealType === 'almuerzo' && b.mealType === 'cena') return -1;
          if (a.mealType === 'cena' && b.mealType === 'almuerzo') return 1;
          return a.title.localeCompare(b.title);
        }

        if (sortBy === 'recommended') {
          // Menos repetidas primero
          if (daysA === null && daysB === null) return 0;
          if (daysA === null) return -1;
          if (daysB === null) return 1;
          return daysB - daysA;
        }

        if (sortBy === 'last_cooked') {
          if (daysA === null && daysB === null) return 0;
          if (daysA === null) return 1;
          if (daysB === null) return -1;
          return daysA - daysB;
        }

        if (sortBy === 'name_asc') {
          return a.title.localeCompare(b.title);
        }

        if (sortBy === 'time_asc') {
          return a.prepTimeMinutes - b.prepTimeMinutes;
        }

        if (sortBy === 'time_desc') {
          return b.prepTimeMinutes - a.prepTimeMinutes;
        }

        return 0;
      });
  }, [recipes, logs, selectedPlan, selectedMealType, selectedCookingMethod, selectedTimeFilter, searchQuery, recencyFilter, sortBy]);

  // Statistics for top overview
  const totalMealsThisWeek = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return logs.filter(l => {
      const [y, m, d] = l.date.split('-').map(Number);
      const target = new Date(y, m - 1, d);
      target.setHours(0, 0, 0, 0);
      const diff = Math.round((today.getTime() - target.getTime()) / (1000 * 60 * 60 * 24));
      return diff >= 0 && diff < 7;
    }).length;
  }, [logs]);

  // Global search matches across all plans and filters (to suggest when active plan/meal filter has 0 results)
  const matchingRecipesAnywhere = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return recipes.filter(r => matchesRecipeSearch(r, searchQuery));
  }, [recipes, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#222222] flex flex-col font-sans">
      {/* Top Bar Contract compliant Navigation */}
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onOpenAddModal={() => setIsAddModalOpen(true)}
        onOpenExportModal={() => setIsExportModalOpen(true)}
        onOpenAiChat={() => {
          setChatRecipeContext(null);
          setIsAiChatOpen(true);
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 pb-24 md:pb-8">
        {/* Toast Notification (raised on mobile to clear bottom nav) */}
        {toastMessage && (
          <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-50 bg-[#1A1A1A] text-white text-xs font-medium px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in max-w-[90vw]">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="truncate">{toastMessage}</span>
          </div>
        )}

        {/* VIEW 1: RECETARIO KETO */}
        {activeTab === 'recipes' && (
          <div className="space-y-6">
            {/* Hero Section & Key Statistics */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/[0.06]">
              <div className="max-w-xl">
                <span className="text-xs font-medium text-[#2C523C] uppercase tracking-wider block mb-1">
                  Plan Cetogénico · Recetario Integral
                </span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1A1A1A] leading-tight text-balance">
                  {selectedPlan === 'leo'
                    ? 'Plan Leo · Almuerzos y Cenas (30 Días)'
                    : selectedPlan === 'caro'
                    ? 'Plan Caro · 55 Opciones y Pautas Nutricionales'
                    : 'Recetario Keto · Plan Leo & Plan Caro'}
                </h1>
                <p className="text-xs sm:text-sm text-[#666666] mt-2 leading-relaxed">
                  {selectedPlan === 'leo'
                    ? 'Menú de 30 días para almuerzos y cenas con ingredientes y porciones diferenciadas para Él y Ella.'
                    : selectedPlan === 'caro'
                    ? '55 opciones (13 desayunos/meriendas, 21 almuerzos, 21 cenas) con porciones individuales y reglas nutricionales.'
                    : 'Accede a las recetas de Plan Leo y Plan Caro. Puedes combinarlas en la lista de compras según tu preferencia.'}
                </p>
              </div>

              {/* Quick Metrics */}
              <div className="flex items-center gap-6 sm:gap-8 pt-2 md:pt-0">
                <div>
                  <span className="text-[11px] text-[#737373] uppercase tracking-wider block">
                    Recetas en vista
                  </span>
                  <span className="text-2xl font-bold text-[#1A1A1A] tabular-nums">
                    {filteredAndSortedRecipes.length}
                  </span>
                </div>
                <div className="h-8 w-px bg-black/[0.08]" />
                <div>
                  <span className="text-[11px] text-[#737373] uppercase tracking-wider block">
                    Cocinadas esta semana
                  </span>
                  <span className="text-2xl font-bold text-[#2C523C] tabular-nums">
                    {totalMealsThisWeek}
                  </span>
                </div>
              </div>
            </div>

            {/* SECTION 1: PLAN SELECTOR (PLAN LEO vs PLAN CARO) */}
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Card Plan Leo */}
                <div
                  onClick={() => {
                    setSelectedPlan('leo');
                    if (selectedMealType === 'desayuno') setSelectedMealType('all');
                  }}
                  className={`p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-3 relative overflow-hidden ${
                    selectedPlan === 'leo'
                      ? 'bg-gradient-to-br from-[#183B28] to-[#244A34] text-white border-[#2C523C] shadow-md ring-2 ring-[#2C523C]/50'
                      : 'bg-white hover:bg-stone-50 text-[#222] border-black/[0.08] hover:border-black/20 shadow-3xs'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          selectedPlan === 'leo'
                            ? 'bg-emerald-700/80 text-emerald-100'
                            : 'bg-emerald-100 text-[#183B28]'
                        }`}
                      >
                        Plan Leo
                      </span>
                      <span
                        className={`text-xs font-semibold tabular-nums ${
                          selectedPlan === 'leo' ? 'text-emerald-200' : 'text-[#666]'
                        }`}
                      >
                        {leoCount} recetas
                      </span>
                    </div>
                    <h3 className="text-base font-bold tracking-tight">
                      Almuerzos & Cenas (30 Días)
                    </h3>
                    <p
                      className={`text-xs mt-1 leading-relaxed ${
                        selectedPlan === 'leo' ? 'text-stone-200' : 'text-[#666]'
                      }`}
                    >
                      30 días completos de almuerzo y cena con porciones calibradas para Él y Ella.
                    </p>
                  </div>

                  <div
                    className={`flex items-center justify-between pt-2 border-t text-xs font-medium ${
                      selectedPlan === 'leo'
                        ? 'border-white/15 text-emerald-200'
                        : 'border-black/[0.06] text-[#2C523C]'
                    }`}
                  >
                    <span>{selectedPlan === 'leo' ? '✓ Plan Activo' : 'Entrar a Plan Leo →'}</span>
                    <span className="text-[11px] opacity-80">Porciones Él / Ella</span>
                  </div>
                </div>

                {/* Card Plan Caro */}
                <div
                  onClick={() => {
                    setSelectedPlan('caro');
                  }}
                  className={`p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-3 relative overflow-hidden ${
                    selectedPlan === 'caro'
                      ? 'bg-gradient-to-br from-[#4A154B] to-[#5B1E5C] text-white border-purple-800 shadow-md ring-2 ring-purple-500/50'
                      : 'bg-white hover:bg-stone-50 text-[#222] border-black/[0.08] hover:border-black/20 shadow-3xs'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          selectedPlan === 'caro'
                            ? 'bg-purple-700/80 text-purple-100'
                            : 'bg-purple-100 text-[#581C87]'
                        }`}
                      >
                        Plan Caro
                      </span>
                      <span
                        className={`text-xs font-semibold tabular-nums ${
                          selectedPlan === 'caro' ? 'text-purple-200' : 'text-[#666]'
                        }`}
                      >
                        {caroCount} opciones
                      </span>
                    </div>
                    <h3 className="text-base font-bold tracking-tight">
                      Guía y Opciones Individuales
                    </h3>
                    <p
                      className={`text-xs mt-1 leading-relaxed ${
                        selectedPlan === 'caro' ? 'text-stone-200' : 'text-[#666]'
                      }`}
                    >
                      13 desayunos/meriendas, 21 almuerzos y 21 cenas con pautas nutricionales personalizadas.
                    </p>
                  </div>

                  <div
                    className={`flex items-center justify-between pt-2 border-t text-xs font-medium ${
                      selectedPlan === 'caro'
                        ? 'border-white/15 text-purple-200'
                        : 'border-black/[0.06] text-[#581C87]'
                    }`}
                  >
                    <span>{selectedPlan === 'caro' ? '✓ Plan Activo' : 'Entrar a Plan Caro →'}</span>
                    <span className="text-[11px] opacity-80">Porción individual + pautas</span>
                  </div>
                </div>
              </div>

              {/* Quick Segmented Switch and Caro Guidelines button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
                <div className="inline-flex items-center p-1 bg-stone-200/70 rounded-xl overflow-x-auto">
                  <button
                    onClick={() => setSelectedPlan('all')}
                    className={`px-3 py-1.5 text-xs rounded-lg transition-colors cursor-pointer font-medium whitespace-nowrap ${
                      selectedPlan === 'all'
                        ? 'bg-white text-[#1A1A1A] font-bold shadow-xs'
                        : 'text-[#666] hover:text-[#1A1A1A]'
                    }`}
                  >
                    Ver ambos planes ({recipes.length})
                  </button>
                  <button
                    onClick={() => {
                      setSelectedPlan('leo');
                      if (selectedMealType === 'desayuno') setSelectedMealType('all');
                    }}
                    className={`px-3 py-1.5 text-xs rounded-lg transition-colors cursor-pointer font-medium whitespace-nowrap ${
                      selectedPlan === 'leo'
                        ? 'bg-[#183B28] text-white font-bold shadow-xs'
                        : 'text-[#666] hover:text-[#1A1A1A]'
                    }`}
                  >
                    Solo Plan Leo ({leoCount})
                  </button>
                  <button
                    onClick={() => setSelectedPlan('caro')}
                    className={`px-3 py-1.5 text-xs rounded-lg transition-colors cursor-pointer font-medium whitespace-nowrap ${
                      selectedPlan === 'caro'
                        ? 'bg-[#581C87] text-white font-bold shadow-xs'
                        : 'text-[#666] hover:text-[#1A1A1A]'
                    }`}
                  >
                    Solo Plan Caro ({caroCount})
                  </button>
                </div>

                {selectedPlan === 'caro' && (
                  <button
                    type="button"
                    onClick={() => setIsCaroGuidelinesOpen(!isCaroGuidelinesOpen)}
                    className="text-xs text-[#581C87] font-semibold bg-purple-50 hover:bg-purple-100/80 px-3 py-1.5 rounded-lg border border-purple-900/15 flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-purple-700" />
                    <span>{isCaroGuidelinesOpen ? 'Ocultar pautas de Caro' : 'Ver pautas y directrices de Caro'}</span>
                    {isCaroGuidelinesOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                )}
              </div>

              {/* Collapsible Caro Guidelines Card */}
              {selectedPlan === 'caro' && isCaroGuidelinesOpen && (
                <div className="bg-purple-50/70 border border-purple-900/15 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5 animate-fade-in">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#581C87]" />
                        <h3 className="text-sm font-bold text-[#581C87]">
                          {PLAN_CARO_GUIDELINES.title}
                        </h3>
                      </div>
                      <p className="text-xs text-[#555] mt-0.5">
                        {PLAN_CARO_GUIDELINES.summary}
                      </p>
                    </div>
                    <button
                      onClick={() => setIsCaroGuidelinesOpen(false)}
                      className="text-[#777] hover:text-[#222] text-xs p-1 cursor-pointer"
                      title="Cerrar pautas"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    {PLAN_CARO_GUIDELINES.rules.map((rule, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-3 rounded-xl border border-purple-900/10 shadow-3xs flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-xs font-bold text-[#1A1A1A] block mb-1">
                            {rule.title}
                          </span>
                          <p className="text-[11px] text-[#555] leading-relaxed">
                            {rule.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Filter Section: Meal Type Tabs (Segmented Control) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4 overflow-x-auto pb-1 scrollbar-none">
                {/* Segmented meal buttons */}
                <div className="inline-flex items-center p-1 bg-stone-200/60 rounded-xl shrink-0">
                  <button
                    onClick={() => setSelectedMealType('all')}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                      selectedMealType === 'all'
                        ? 'bg-white text-[#1A1A1A] shadow-xs font-semibold'
                        : 'text-[#666] hover:text-[#1A1A1A]'
                    }`}
                  >
                    Todas ({
                      selectedPlan === 'all'
                        ? recipes.length
                        : selectedPlan === 'leo'
                        ? leoCount
                        : caroCount
                    })
                  </button>
                  {(selectedPlan === 'leo'
                    ? MEAL_TYPES.filter(m => m.id !== 'desayuno')
                    : MEAL_TYPES
                  ).map(m => (
                    <button
                      key={m.id}
                      onClick={() => setSelectedMealType(m.id)}
                      className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                        selectedMealType === m.id
                          ? 'bg-white text-[#1A1A1A] shadow-xs font-semibold'
                          : 'text-[#666] hover:text-[#1A1A1A]'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>

                {/* Counter indicator */}
                <div className="text-xs text-[#737373] whitespace-nowrap hidden sm:block tabular-nums">
                  {filteredAndSortedRecipes.length} recetas filtradas
                </div>
              </div>

              {/* Cooking Method Filter Bar (Plancha, Horno, Wok, Hervido/Vapor, Sin Cocción) */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                <span className="text-xs font-medium text-[#777] shrink-0 mr-1 flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-[#8F4800]" />
                  <span>Cocción:</span>
                </span>
                <button
                  onClick={() => setSelectedCookingMethod('all')}
                  className={`px-2.5 py-1 text-xs rounded-lg transition-colors shrink-0 cursor-pointer ${
                    selectedCookingMethod === 'all'
                      ? 'bg-[#244230] text-white font-medium'
                      : 'bg-white text-[#555] border border-black/10 hover:border-black/25'
                  }`}
                >
                  Todas las cocciones
                </button>
                {COOKING_METHODS.map(cm => (
                  <button
                    key={cm.id}
                    onClick={() => setSelectedCookingMethod(cm.id)}
                    className={`px-2.5 py-1 text-xs rounded-lg transition-colors shrink-0 cursor-pointer ${
                      selectedCookingMethod === cm.id
                        ? 'bg-[#244230] text-white font-medium'
                        : 'bg-white text-[#555] border border-black/10 hover:border-black/25'
                    }`}
                  >
                    {cm.label}
                  </button>
                ))}
              </div>

              {/* Search input + Sub-filters bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                {/* Search Input */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888888]" />
                  <input
                    type="text"
                    placeholder="Buscar por carne, pollo, brócoli, palta, acelga o ingrediente..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-9 py-2 text-[16px] sm:text-xs bg-white border border-black/15 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#2C523C] placeholder:text-[#999999]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999] hover:text-[#222]"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Time & Frequency Filters (same row in mobile via grid-cols-2) */}
                <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 sm:gap-3">
                  {/* Preparation Time Filter */}
                  <div className="flex items-center gap-1.5 bg-white border border-black/15 rounded-xl px-2.5 py-1.5 text-xs w-full">
                    <Clock className="w-3.5 h-3.5 text-[#666] shrink-0" />
                    <select
                      value={selectedTimeFilter}
                      onChange={e => setSelectedTimeFilter(e.target.value as TimeFilter)}
                      className="bg-transparent text-xs text-[#333] focus:outline-none cursor-pointer w-full truncate"
                    >
                      <option value="all">Tiempo: Todos</option>
                      <option value="quick">Rápidas (≤ 15 min)</option>
                      <option value="medium">Medias (16 - 30 min)</option>
                      <option value="slow">Lentas (&gt; 30 min)</option>
                    </select>
                  </div>

                  {/* Recency repetition filter */}
                  <div className="flex items-center gap-1.5 bg-white border border-black/15 rounded-xl px-2.5 py-1.5 text-xs w-full">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-[#666] shrink-0" />
                    <select
                      value={recencyFilter}
                      onChange={e => setRecencyFilter(e.target.value as RecencyFilter)}
                      className="bg-transparent text-xs text-[#333] focus:outline-none cursor-pointer w-full truncate"
                    >
                      <option value="all">Frecuencia: Todas</option>
                      <option value="not_this_week">No preparadas (≥7d)</option>
                      <option value="never">Sin preparar aún</option>
                      <option value="recent_week">Preparadas (≤7d)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Recipes Grid */}
            {filteredAndSortedRecipes.length === 0 ? (
              <div className="bg-white rounded-2xl border border-black/[0.08] p-8 sm:p-12 text-center max-w-md mx-auto my-8 space-y-4 shadow-3xs">
                <Utensils className="w-8 h-8 text-[#2C523C] mx-auto mb-1" />
                <div>
                  <h3 className="text-base font-semibold text-[#181818] mb-1">
                    No hay resultados en esta vista
                  </h3>
                  {matchingRecipesAnywhere.length > 0 ? (
                    <p className="text-xs text-[#555] leading-relaxed">
                      Encontramos <strong className="text-[#2C523C] font-bold">{matchingRecipesAnywhere.length} receta(s)</strong> que coinciden con &ldquo;{searchQuery}&rdquo; en otro plan o tipo de comida.
                    </p>
                  ) : (
                    <p className="text-xs text-[#666] leading-relaxed">
                      No encontramos recetas con esos términos. Puedes buscar por múltiples palabras como &ldquo;huevo clara&rdquo;, &ldquo;bife palta&rdquo; o &ldquo;pollo limon&rdquo;.
                    </p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-1">
                  {matchingRecipesAnywhere.length > 0 && (
                    <button
                      onClick={() => {
                        setSelectedPlan('all');
                        setSelectedMealType('all');
                        setSelectedCookingMethod('all');
                        setSelectedTimeFilter('all');
                        setRecencyFilter('all');
                      }}
                      className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-white bg-[#244230] hover:bg-[#1A3324] rounded-lg transition-colors cursor-pointer shadow-xs"
                    >
                      Ver {matchingRecipesAnywhere.length} receta{matchingRecipesAnywhere.length === 1 ? '' : 's'} en todos los planes
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedMealType('all');
                      setSelectedCookingMethod('all');
                      setSelectedTimeFilter('all');
                      setRecencyFilter('all');
                    }}
                    className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-[#2C523C] bg-[#EEF4F0] hover:bg-[#DEEBE1] rounded-lg transition-colors cursor-pointer"
                  >
                    Restablecer filtros
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAndSortedRecipes.map(recipe => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    logs={logs}
                    onSelect={setSelectedRecipeForDetail}
                    onQuickLogToday={handleQuickLogToday}
                    onOpenLogModal={setRecipeForLogModal}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* VIEW 2: BITÁCORA (7 DÍAS CON PAGINACIÓN) */}
        {activeTab === 'history' && (
          <HistoryTimeline
            logs={logs}
            recipes={recipes}
            onSelectRecipe={setSelectedRecipeForDetail}
            onAddLog={handleDirectAddLog}
            onDeleteLog={handleDeleteLog}
          />
        )}

        {/* VIEW 3: COMPRAS (LISTA DE INGREDIENTES AUTOMÁTICA) */}
        {activeTab === 'shopping' && (
          <ShoppingListView
            recipes={recipes}
            onSelectRecipeDetail={setSelectedRecipeForDetail}
          />
        )}

        {/* VIEW 4: GUÍA KETO (ALIMENTOS PERMITIDOS Y PROHIBIDOS) */}
        {activeTab === 'guide' && (
          <KetoGuideView onGoToRecipes={() => setActiveTab('recipes')} />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-black/[0.06] bg-[#FAF9F6] py-6 text-center text-xs text-[#737373]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#222] lowercase">zeta-keto</span>
            <span>·</span>
            <span>Plan Cetogénico de 30 Días & Bitácora de 7 Días</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <button
              onClick={() => setActiveTab('shopping')}
              className="hover:text-[#111] transition-colors cursor-pointer"
            >
              Lista de Compras
            </button>
            <button
              onClick={() => setActiveTab('guide')}
              className="hover:text-[#111] transition-colors cursor-pointer"
            >
              Guía de Alimentos
            </button>
            <button
              onClick={() => setIsExportModalOpen(true)}
              className="hover:text-[#111] transition-colors cursor-pointer"
            >
              Exportar / Respaldar
            </button>
            <button
              onClick={() => {
                setActiveTab('recipes');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#111] transition-colors cursor-pointer"
            >
              Volver arriba
            </button>
          </div>
        </div>
      </footer>

      {/* MODALS */}
      {/* 1. Recipe Detail Modal */}
      <RecipeDetailModal
        recipe={selectedRecipeForDetail}
        logs={logs}
        onClose={() => setSelectedRecipeForDetail(null)}
        onLogMeal={(recipe, date, notes) => {
          handleSaveLogWithDate(recipe, date, recipe.mealType, notes);
        }}
        onDeleteLog={handleDeleteLog}
        onDeleteRecipe={handleDeleteRecipe}
        onOpenAiChat={(recipe) => {
          setChatRecipeContext(recipe);
          setIsAiChatOpen(true);
        }}
      />

      {/* 2. Add Recipe Modal */}
      <AddRecipeModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddRecipe={handleAddRecipe}
      />

      {/* 3. Log Meal Date Modal */}
      <LogMealModal
        recipe={recipeForLogModal}
        isOpen={!!recipeForLogModal}
        onClose={() => setRecipeForLogModal(null)}
        onSave={handleSaveLogWithDate}
      />

      {/* 4. Export / Import Backup Modal */}
      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        recipes={recipes}
        logs={logs}
        onImportData={handleImportData}
        onResetDefaults={handleResetDefaults}
      />

      {/* Floating AI Assistant Trigger (always accessible) */}
      <button
        onClick={() => {
          setChatRecipeContext(null);
          setIsAiChatOpen(true);
        }}
        className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-30 bg-[#2C523C] hover:bg-[#1E3B2A] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group cursor-pointer border border-emerald-400/25"
        title="Consultar a Zeta-Keto AI"
        aria-label="Abrir Asistente Zeta-Keto AI"
      >
        <Sparkles className="w-5 h-5 text-emerald-200 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          Preguntar a la IA
        </span>
      </button>

      {/* 5. Zeta-Keto AI Chat Modal */}
      <KetoAiChatModal
        isOpen={isAiChatOpen}
        onClose={() => setIsAiChatOpen(false)}
        activeRecipeContext={chatRecipeContext}
        onClearRecipeContext={() => setChatRecipeContext(null)}
      />
    </div>
  );
}
