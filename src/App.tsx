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
  Sparkles
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

  // Filter & Sort Logic
  const filteredAndSortedRecipes = useMemo(() => {
    return recipes
      .filter(recipe => {
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

        // Search Query (title, tags, ingredients, description)
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchTitle = recipe.title.toLowerCase().includes(q);
          const matchDesc = recipe.description.toLowerCase().includes(q);
          const matchTag = recipe.tags.some(t => t.toLowerCase().includes(q));
          const matchIng = recipe.ingredients.some(i => i.toLowerCase().includes(q));
          if (!matchTitle && !matchDesc && !matchTag && !matchIng) {
            return false;
          }
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
          // Sort by day number first, then almuerzo before cena
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
  }, [recipes, logs, selectedMealType, selectedCookingMethod, selectedTimeFilter, searchQuery, recencyFilter, sortBy]);

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
            {/* Minimalist Hero Section & Key Statistics */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/[0.06]">
              <div className="max-w-xl">
                <span className="text-xs font-medium text-[#2C523C] uppercase tracking-wider block mb-1">
                  Plan Cetogénico de 30 Días
                </span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1A1A1A] leading-tight text-balance">
                  Almuerzos y Cenas Keto organizados
                </h1>
                <p className="text-xs sm:text-sm text-[#666666] mt-2 leading-relaxed">
                  Filtra por comida, tipo de cocción (plancha, horno, salteado) y tiempo de preparación. Registra la fecha para no repetir platos.
                </p>
              </div>

              {/* Quick Metrics */}
              <div className="flex items-center gap-6 sm:gap-8 pt-2 md:pt-0">
                <div>
                  <span className="text-[11px] text-[#737373] uppercase tracking-wider block">
                    Recetas del Plan
                  </span>
                  <span className="text-2xl font-bold text-[#1A1A1A] tabular-nums">
                    {recipes.length}
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
                    Todas ({recipes.length})
                  </button>
                  {MEAL_TYPES.map(m => (
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
                  {filteredAndSortedRecipes.length} de {recipes.length} recetas
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
              <div className="bg-white rounded-2xl border border-black/[0.08] p-12 text-center max-w-md mx-auto my-8">
                <Utensils className="w-8 h-8 text-[#2C523C] mx-auto mb-3" />
                <h3 className="text-base font-semibold text-[#181818] mb-1">
                  No hay recetas que coincidan
                </h3>
                <p className="text-xs text-[#666666] mb-4">
                  Prueba a limpiar los filtros de cocción, tiempo o frecuencia.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedMealType('all');
                    setSelectedCookingMethod('all');
                    setSelectedTimeFilter('all');
                    setRecencyFilter('all');
                  }}
                  className="px-4 py-2 text-xs font-semibold text-[#2C523C] bg-[#EEF4F0] hover:bg-[#DEEBE1] rounded-lg transition-colors cursor-pointer"
                >
                  Restablecer todos los filtros
                </button>
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
