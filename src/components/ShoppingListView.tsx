import React, { useState, useMemo } from 'react';
import {
  ShoppingCart,
  Check,
  Copy,
  Plus,
  Trash2,
  X,
  Search,
  CheckCheck,
  ListFilter,
  Layers,
  ChevronDown,
  ChevronUp,
  Info,
  Users
} from 'lucide-react';
import { Recipe } from '../types';
import {
  aggregateShoppingList,
  formatShoppingListForClipboard,
  AggregatedItem,
  CategoryGroup
} from '../utils/ingredientAggregator';
import { matchesRecipeSearch } from '../utils/search';

interface ShoppingListViewProps {
  recipes: Recipe[];
  onSelectRecipeDetail: (recipe: Recipe) => void;
}

export const ShoppingListView: React.FC<ShoppingListViewProps> = ({
  recipes,
  onSelectRecipeDetail
}) => {
  // Store selected recipe IDs for shopping (default with Day 1 & 2 so it has immediate items)
  const [selectedRecipeIds, setSelectedRecipeIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('savia_shopping_selected_recipes');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      // ignore
    }
    // Default to first 4 meals (Day 1 & Day 2)
    return recipes.slice(0, 4).map(r => r.id);
  });

  // Track checked off items in supermarket (keyed by aggregated item id)
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    try {
      const stored = localStorage.getItem('savia_shopping_checked_v2');
      if (stored) return JSON.parse(stored);
    } catch (e) {
      // ignore
    }
    return {};
  });

  // Comensales mode for shopping: 'both' (Él + Ella - default) vs 'he' (Solo Él)
  const [portionMode, setPortionMode] = useState<'both' | 'he'>('both');

  // View Mode: 'aggregated' (totals summed up - default) vs 'breakdown' (per individual plate)
  const [viewMode, setViewMode] = useState<'aggregated' | 'breakdown'>('aggregated');

  // Expanded details per item
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);

  const [recipeSearch, setRecipeSearch] = useState('');
  const [selectorPlanFilter, setSelectorPlanFilter] = useState<'all' | 'leo' | 'caro'>('all');
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sync selected recipes to storage
  const updateSelectedRecipeIds = (newIds: string[]) => {
    setSelectedRecipeIds(newIds);
    try {
      localStorage.setItem('savia_shopping_selected_recipes', JSON.stringify(newIds));
    } catch (e) {
      // ignore
    }
  };

  const toggleRecipeSelection = (recipeId: string) => {
    if (selectedRecipeIds.includes(recipeId)) {
      updateSelectedRecipeIds(selectedRecipeIds.filter(id => id !== recipeId));
    } else {
      updateSelectedRecipeIds([...selectedRecipeIds, recipeId]);
    }
  };

  const selectLeoPreset = (startDay: number, endDay: number) => {
    const ids = recipes
      .filter(r => (r.planId || 'leo') === 'leo' && r.dayNumber && r.dayNumber >= startDay && r.dayNumber <= endDay)
      .map(r => r.id);
    updateSelectedRecipeIds(Array.from(new Set([...selectedRecipeIds, ...ids])));
  };

  const selectCaroPreset = (type: 'week' | 'breakfasts' | 'all') => {
    let ids: string[] = [];
    const caroRecipes = recipes.filter(r => r.planId === 'caro');
    if (type === 'week') {
      const lunches = caroRecipes.filter(r => r.mealType === 'almuerzo').slice(0, 7).map(r => r.id);
      const dinners = caroRecipes.filter(r => r.mealType === 'cena').slice(0, 7).map(r => r.id);
      ids = [...lunches, ...dinners];
    } else if (type === 'breakfasts') {
      ids = caroRecipes.filter(r => r.mealType === 'desayuno').map(r => r.id);
    } else {
      ids = caroRecipes.map(r => r.id);
    }
    updateSelectedRecipeIds(Array.from(new Set([...selectedRecipeIds, ...ids])));
  };

  const selectDaysPreset = (startDay: number, endDay: number) => {
    selectLeoPreset(startDay, endDay);
  };

  const clearAllSelected = () => {
    updateSelectedRecipeIds([]);
    setCheckedItems({});
    try {
      localStorage.removeItem('savia_shopping_checked_v2');
    } catch (e) {
      // ignore
    }
  };

  const toggleItemChecked = (itemId: string) => {
    setCheckedItems(prev => {
      const next = { ...prev, [itemId]: !prev[itemId] };
      try {
        localStorage.setItem('savia_shopping_checked_v2', JSON.stringify(next));
      } catch (e) {
        // ignore
      }
      return next;
    });
  };

  // Compile selected recipes objects
  const selectedRecipes = useMemo(() => {
    return recipes.filter(r => selectedRecipeIds.includes(r.id));
  }, [recipes, selectedRecipeIds]);

  // Aggregated shopping list with summed weights and units
  const categoryGroups: CategoryGroup[] = useMemo(() => {
    return aggregateShoppingList(selectedRecipes, portionMode);
  }, [selectedRecipes, portionMode]);

  // Total distinct items to purchase
  const totalItemsCount = useMemo(() => {
    return categoryGroups.reduce((acc, g) => acc + g.items.length, 0);
  }, [categoryGroups]);

  // Total checked items
  const checkedCount = useMemo(() => {
    return Object.keys(checkedItems).filter(
      k => checkedItems[k] && categoryGroups.some(g => g.items.some(i => i.id === k))
    ).length;
  }, [checkedItems, categoryGroups]);

  // Specific Meat & Poultry insights (e.g. Total Pollo a comprar)
  const chickenInsight = useMemo(() => {
    const carnes = categoryGroups.find(g => g.category === 'carnes')?.items || [];
    const chickenItems = carnes.filter(i =>
      i.id.includes('pollo') || i.id.includes('pechuga') || i.id.includes('muslo')
    );
    if (chickenItems.length <= 1) return null;

    const totalChickenGrams = chickenItems.reduce((sum, i) => sum + i.totalQuantity, 0);
    const breakdown = chickenItems.map(i => `${i.formattedTotal} ${i.name.toLowerCase()}`).join(' + ');

    return {
      totalGrams: totalChickenGrams,
      label: totalChickenGrams >= 1000 ? `${(totalChickenGrams / 1000).toFixed(2)} kg` : `${totalChickenGrams}g`,
      breakdown
    };
  }, [categoryGroups]);

  // Total meat grams
  const totalMeatGrams = useMemo(() => {
    return categoryGroups.find(g => g.category === 'carnes')?.totalGrams || 0;
  }, [categoryGroups]);

  // Copy list formatted for WhatsApp
  const handleCopyForWhatsApp = () => {
    const text = formatShoppingListForClipboard(categoryGroups, selectedRecipes, checkedItems, portionMode);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Filter recipes for selector modal
  const filteredRecipesForSelector = useMemo(() => {
    return recipes.filter(r => {
      // Plan filter
      const plan = r.planId || 'leo';
      if (selectorPlanFilter !== 'all' && plan !== selectorPlanFilter) {
        return false;
      }

      // Multi-word and accent-insensitive search query
      if (recipeSearch.trim() && !matchesRecipeSearch(r, recipeSearch)) {
        return false;
      }

      return true;
    });
  }, [recipes, recipeSearch, selectorPlanFilter]);

  return (
    <div className="space-y-6 pb-20 md:pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-black/[0.06]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-[#2C523C] uppercase tracking-wider">
              Supermercado & Carnicería
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-[#EEF4F0] text-[#2C523C] px-2 py-0.5 rounded-full">
              <span>Cantidades y pesos sumados</span>
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A]">
            Lista de Compras Inteligente
          </h2>
          <p className="text-xs text-[#737373] mt-0.5">
            Suma automáticamente los gramos y unidades de cada alimento para que compres el peso total exacto.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
          <button
            onClick={() => setIsSelectorOpen(!isSelectorOpen)}
            className="px-3.5 py-2 text-xs font-semibold text-white bg-[#244230] hover:bg-[#1A3324] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs min-h-[40px]"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Elegir recetas ({selectedRecipes.length})</span>
          </button>

          {selectedRecipes.length > 0 && (
            <button
              onClick={handleCopyForWhatsApp}
              className="px-3 py-2 text-xs font-medium text-[#2C523C] bg-[#EEF4F0] hover:bg-[#DEEBE1] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer min-h-[40px]"
            >
              {copied ? <CheckCheck className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '¡Copiada!' : 'Copiar lista'}</span>
            </button>
          )}

          {selectedRecipes.length > 0 && (
            <button
              onClick={clearAllSelected}
              title="Limpiar recetas seleccionadas"
              className="p-2 text-[#888] hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Quick Presets & Comensales Selector */}
      <div className="space-y-3">
        {/* Row 1: Presets & Comensales toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Presets grouped by Plan Leo and Plan Caro */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-[#777] font-medium shrink-0 mr-1">Atajos rápidos:</span>
            
            {/* Leo presets */}
            <button
              onClick={() => selectLeoPreset(1, 3)}
              className="px-2.5 py-1.5 bg-emerald-50 border border-emerald-900/15 hover:bg-emerald-100/70 text-[#183B28] rounded-lg shrink-0 transition-colors cursor-pointer font-medium"
            >
              Leo: Días 1-3 (6)
            </button>
            <button
              onClick={() => selectLeoPreset(1, 7)}
              className="px-2.5 py-1.5 bg-emerald-50 border border-emerald-900/15 hover:bg-emerald-100/70 text-[#183B28] rounded-lg shrink-0 transition-colors cursor-pointer font-medium"
            >
              Leo: Semana 1 (14)
            </button>
            <button
              onClick={() => selectLeoPreset(1, 30)}
              className="px-2.5 py-1.5 bg-emerald-50 border border-emerald-900/15 hover:bg-emerald-100/70 text-[#183B28] rounded-lg shrink-0 transition-colors cursor-pointer font-medium"
            >
              Todo Plan Leo (30)
            </button>

            <span className="text-black/20">|</span>

            {/* Caro presets */}
            <button
              onClick={() => selectCaroPreset('week')}
              className="px-2.5 py-1.5 bg-purple-50 border border-purple-900/15 hover:bg-purple-100/70 text-[#581C87] rounded-lg shrink-0 transition-colors cursor-pointer font-medium"
            >
              Caro: 1 Semana (14)
            </button>
            <button
              onClick={() => selectCaroPreset('breakfasts')}
              className="px-2.5 py-1.5 bg-purple-50 border border-purple-900/15 hover:bg-purple-100/70 text-[#581C87] rounded-lg shrink-0 transition-colors cursor-pointer font-medium"
            >
              Caro: Desayunos (13)
            </button>
            <button
              onClick={() => selectCaroPreset('all')}
              className="px-2.5 py-1.5 bg-purple-50 border border-purple-900/15 hover:bg-purple-100/70 text-[#581C87] rounded-lg shrink-0 transition-colors cursor-pointer font-medium"
            >
              Todo Plan Caro (55)
            </button>

            <span className="text-black/20">|</span>

            <button
              onClick={() => updateSelectedRecipeIds(recipes.map(r => r.id))}
              className="px-2.5 py-1.5 bg-stone-100 hover:bg-stone-200 text-[#444] rounded-lg shrink-0 transition-colors cursor-pointer"
            >
              Ambos planes ({recipes.length})
            </button>
          </div>

          {/* Comensales Toggle: Para Ambos (Él + Ella) vs Solo Él */}
          <div className="inline-flex items-center p-1 bg-white border border-black/10 rounded-xl shrink-0 self-start sm:self-auto shadow-3xs">
            <button
              onClick={() => setPortionMode('both')}
              className={`px-3 py-1.5 text-xs rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                portionMode === 'both'
                  ? 'bg-[#2C523C] text-white font-semibold shadow-xs'
                  : 'text-[#666] hover:text-[#1A1A1A]'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Para Ambos (Él + Ella)</span>
            </button>
            <button
              onClick={() => setPortionMode('he')}
              className={`px-3 py-1.5 text-xs rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                portionMode === 'he'
                  ? 'bg-[#2C523C] text-white font-semibold shadow-xs'
                  : 'text-[#666] hover:text-[#1A1A1A]'
              }`}
            >
              <span>Solo Él (1p)</span>
            </button>
          </div>
        </div>

        {/* Row 2: View Mode Toggle & Mode Description */}
        {selectedRecipes.length > 0 && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-[#2C523C] font-semibold bg-[#EEF4F0] px-2.5 py-1 rounded-md flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" />
                {portionMode === 'both'
                  ? 'Calculando totales exactos para comprar para los dos (Él + Ella)'
                  : 'Calculando totales para comprar solo para ti (1 porción Él)'}
              </span>
            </div>

            <div className="inline-flex items-center p-0.5 bg-stone-200/70 rounded-xl shrink-0 self-start sm:self-auto">
              <button
                onClick={() => setViewMode('aggregated')}
                className={`px-3 py-1 text-xs rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'aggregated'
                    ? 'bg-white text-[#1A1A1A] font-semibold shadow-xs'
                    : 'text-[#666] hover:text-[#1A1A1A]'
                }`}
              >
                <span>Totales sumados (Compras)</span>
              </button>
              <button
                onClick={() => setViewMode('breakdown')}
                className={`px-3 py-1 text-xs rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'breakdown'
                    ? 'bg-white text-[#1A1A1A] font-semibold shadow-xs'
                    : 'text-[#666] hover:text-[#1A1A1A]'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-[#666]" />
                <span>Por receta</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Selected Recipes Pills strip */}
      {selectedRecipes.length > 0 && (
        <div className="bg-[#FAF9F6] p-3.5 sm:p-4 rounded-xl border border-black/[0.06] space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#181818]">
              Platos incluidos ({selectedRecipes.length}):
            </span>
            <span className="text-[11px] text-[#2C523C] font-semibold tabular-nums">
              {checkedCount} de {totalItemsCount} productos listos
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {selectedRecipes.map(recipe => (
              <span
                key={recipe.id}
                className={`inline-flex items-center gap-1.5 text-xs bg-white border px-2.5 py-1 rounded-lg text-[#333] shadow-3xs ${
                  recipe.planId === 'caro' ? 'border-purple-900/20' : 'border-emerald-900/20'
                }`}
              >
                <span
                  className={`font-bold text-[9px] px-1.5 py-0.5 rounded ${
                    recipe.planId === 'caro'
                      ? 'bg-purple-100 text-[#581C87]'
                      : 'bg-emerald-100 text-[#183B28]'
                  }`}
                >
                  {recipe.planId === 'caro' ? 'Caro' : 'Leo'}
                </span>
                <span className="font-bold text-[#2C523C] text-[10px]">
                  {recipe.dayNumber
                    ? `D${recipe.dayNumber}`
                    : recipe.optionNumber
                    ? `Op.${recipe.optionNumber}`
                    : recipe.mealType.slice(0, 3)}
                </span>
                <span className="truncate max-w-[170px] font-medium">{recipe.title}</span>
                <button
                  onClick={() => toggleRecipeSelection(recipe.id)}
                  className="text-[#999] hover:text-rose-600 ml-0.5 cursor-pointer p-0.5"
                  title="Quitar de compras"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>

          {/* Quick Notice: Chicken / Meat Sum */}
          {chickenInsight && (
            <div className="mt-2 text-xs bg-amber-50/80 border border-amber-200/80 text-amber-900 rounded-lg p-2.5 flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Total Pollo a pedir en la carnicería: {chickenInsight.label}</span>
                <span className="text-[11px] text-amber-800 block mt-0.5">
                  ({chickenInsight.breakdown})
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Recipe Picker Modal */}
      {isSelectorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div
            className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-black/[0.08] overflow-hidden max-h-[85vh] flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            <div className="px-5 py-4 border-b border-black/[0.06] flex items-center justify-between bg-[#FAF9F6]">
              <div>
                <h3 className="text-sm font-bold text-[#181818]">
                  Elegir recetas para la lista de compras
                </h3>
                <p className="text-xs text-[#737373]">
                  Puedes seleccionar platos de Plan Leo, Plan Caro o ambos
                </p>
              </div>
              <button
                onClick={() => setIsSelectorOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-stone-200 text-[#555] flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Plan Filter Tabs in modal */}
            <div className="px-4 py-2.5 border-b border-black/[0.06] bg-[#FAF9F6] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="inline-flex items-center p-0.5 bg-stone-200/70 rounded-xl overflow-x-auto">
                <button
                  type="button"
                  onClick={() => setSelectorPlanFilter('all')}
                  className={`px-3 py-1 text-xs rounded-lg transition-colors cursor-pointer font-medium whitespace-nowrap ${
                    selectorPlanFilter === 'all'
                      ? 'bg-white text-[#1A1A1A] font-bold shadow-xs'
                      : 'text-[#666] hover:text-[#1A1A1A]'
                  }`}
                >
                  Todos ({recipes.length})
                </button>
                <button
                  type="button"
                  onClick={() => setSelectorPlanFilter('leo')}
                  className={`px-3 py-1 text-xs rounded-lg transition-colors cursor-pointer font-medium whitespace-nowrap ${
                    selectorPlanFilter === 'leo'
                      ? 'bg-[#183B28] text-white font-bold shadow-xs'
                      : 'text-[#666] hover:text-[#1A1A1A]'
                  }`}
                >
                  Plan Leo ({recipes.filter(r => (r.planId || 'leo') === 'leo').length})
                </button>
                <button
                  type="button"
                  onClick={() => setSelectorPlanFilter('caro')}
                  className={`px-3 py-1 text-xs rounded-lg transition-colors cursor-pointer font-medium whitespace-nowrap ${
                    selectorPlanFilter === 'caro'
                      ? 'bg-[#581C87] text-white font-bold shadow-xs'
                      : 'text-[#666] hover:text-[#1A1A1A]'
                  }`}
                >
                  Plan Caro ({recipes.filter(r => r.planId === 'caro').length})
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  const visibleIds = filteredRecipesForSelector.map(r => r.id);
                  const allVisibleSelected = visibleIds.every(id => selectedRecipeIds.includes(id));
                  if (allVisibleSelected) {
                    updateSelectedRecipeIds(selectedRecipeIds.filter(id => !visibleIds.includes(id)));
                  } else {
                    updateSelectedRecipeIds(Array.from(new Set([...selectedRecipeIds, ...visibleIds])));
                  }
                }}
                className="text-[11px] text-[#2C523C] hover:underline font-semibold shrink-0 cursor-pointer text-right"
              >
                {filteredRecipesForSelector.length > 0 && filteredRecipesForSelector.every(r => selectedRecipeIds.includes(r.id))
                  ? 'Deseleccionar visibles'
                  : 'Seleccionar visibles'}
              </button>
            </div>

            {/* Search */}
            <div className="p-3 border-b border-black/[0.06] bg-white">
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#888]" />
                <input
                  type="text"
                  placeholder="Buscar receta por nombre o ingrediente (ej. pollo, bife, palta, atún)..."
                  value={recipeSearch}
                  onChange={e => setRecipeSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs border border-black/15 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2C523C]"
                />
              </div>
            </div>

            {/* Recipe List */}
            <div className="p-4 overflow-y-auto space-y-2 flex-1">
              {filteredRecipesForSelector.map(recipe => {
                const isSelected = selectedRecipeIds.includes(recipe.id);

                return (
                  <div
                    key={recipe.id}
                    onClick={() => toggleRecipeSelection(recipe.id)}
                    className={`p-3 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-[#EEF4F0] border-[#2C523C] text-[#183B28]'
                        : 'bg-white border-black/[0.06] hover:bg-stone-50 text-[#333]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'bg-[#2C523C] border-[#2C523C] text-white'
                            : 'border-black/25 bg-white'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5 text-[11px] mb-0.5 flex-wrap">
                          <span
                            className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                              recipe.planId === 'caro'
                                ? 'bg-purple-100 text-[#581C87]'
                                : 'bg-emerald-100 text-[#183B28]'
                            }`}
                          >
                            {recipe.planId === 'caro' ? 'Plan Caro' : 'Plan Leo'}
                          </span>
                          {recipe.dayNumber && (
                            <span className="font-bold text-[#181818]">Día {recipe.dayNumber}</span>
                          )}
                          {recipe.optionNumber && (
                            <span className="font-bold text-[#581C87]">Opción {recipe.optionNumber}</span>
                          )}
                          <span className="text-[#666]">·</span>
                          <span className="uppercase font-medium text-[10px]">
                            {recipe.mealType}
                          </span>
                        </div>
                        <h4 className="text-xs font-semibold">{recipe.title}</h4>
                      </div>
                    </div>

                    <span className="text-[11px] text-[#777] shrink-0 tabular-nums">
                      {recipe.ingredients.length} ing.
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-black/[0.06] flex items-center justify-between bg-[#FAF9F6]">
              <span className="text-xs text-[#666]">
                {selectedRecipeIds.length} recetas elegidas
              </span>
              <button
                onClick={() => setIsSelectorOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#244230] hover:bg-[#1A3324] rounded-lg cursor-pointer"
              >
                Ver lista de compras
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content: Empty State or Categorized Aisles */}
      {selectedRecipes.length === 0 ? (
        <div className="bg-white rounded-2xl border border-black/[0.08] p-12 text-center max-w-md mx-auto my-8">
          <ShoppingCart className="w-10 h-10 text-[#2C523C] mx-auto mb-3 stroke-[1.5]" />
          <h3 className="text-base font-bold text-[#181818] mb-1">
            Tu lista de compras está vacía
          </h3>
          <p className="text-xs text-[#666666] mb-5 leading-relaxed">
            Selecciona las recetas del plan keto que vas a preparar para que la app sume el total exacto de carnes, verduras y lácteos a comprar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
            <button
              onClick={() => selectDaysPreset(1, 3)}
              className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-white bg-[#244230] hover:bg-[#1A3324] rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              Cargar primeros 3 días
            </button>
            <button
              onClick={() => setIsSelectorOpen(true)}
              className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-[#333] bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
            >
              Elegir manualmente
            </button>
          </div>
        </div>
      ) : (
        /* MODE 1: AGGREGATED TOTALS (RECOMMENDED) */
        viewMode === 'aggregated' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categoryGroups.map(group => {
              if (group.items.length === 0) return null;

              return (
                <div
                  key={group.category}
                  className="bg-white rounded-2xl border border-black/[0.08] p-4 sm:p-5 shadow-2xs flex flex-col"
                >
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/[0.06]">
                    <div>
                      <h3 className="text-sm font-bold text-[#1A1A1A] flex items-center gap-1.5">
                        <span>{group.label}</span>
                      </h3>
                      {group.category === 'carnes' && totalMeatGrams > 0 && (
                        <span className="text-[11px] font-semibold text-[#2C523C] block mt-0.5">
                          Total carne y pescado: {totalMeatGrams >= 1000 ? `${(totalMeatGrams / 1000).toFixed(2)} kg` : `${totalMeatGrams}g`}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-[#737373] tabular-nums shrink-0">
                      {group.items.length} {group.items.length === 1 ? 'producto' : 'productos'}
                    </span>
                  </div>

                  {/* Aggregated Items List */}
                  <ul className="space-y-2.5 flex-1">
                    {group.items.map(item => {
                      const isChecked = !!checkedItems[item.id];
                      const isExpanded = expandedItemId === item.id;
                      const hasMultipleSources = item.sources.length > 1;

                      return (
                        <li
                          key={item.id}
                          className={`rounded-xl border transition-all select-none overflow-hidden ${
                            isChecked
                              ? 'bg-stone-50 border-black/[0.04] opacity-55'
                              : 'bg-white border-black/[0.07] hover:border-[#2C523C]/50 hover:shadow-3xs'
                          }`}
                        >
                          <div
                            onClick={() => toggleItemChecked(item.id)}
                            className="p-3 flex items-start gap-3 cursor-pointer min-h-[48px]"
                          >
                            {/* Checkbox */}
                            <div
                              className={`w-5 h-5 rounded mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                                isChecked
                                  ? 'bg-[#2C523C] border-[#2C523C] text-white'
                                  : 'border-black/25 bg-white hover:border-[#2C523C]'
                              }`}
                            >
                              {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>

                            {/* Main Content */}
                            <div className="min-w-0 flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                                <h4
                                  className={`text-xs font-semibold ${
                                    isChecked ? 'line-through text-[#777]' : 'text-[#1A1A1A]'
                                  }`}
                                >
                                  {item.name}
                                </h4>

                                {/* Big Summed Total Badge */}
                                <span
                                  className={`text-xs font-bold tabular-nums whitespace-nowrap self-start sm:self-auto px-2 py-0.5 rounded-md ${
                                    isChecked
                                      ? 'bg-stone-200/60 text-[#777]'
                                      : 'bg-[#EEF4F0] text-[#1D3B2B]'
                                  }`}
                                >
                                  {item.formattedTotal}
                                </span>
                              </div>

                              {/* Hint (e.g. Aprox. 1.5 paltas) */}
                              {item.hint && (
                                <p className="text-[11px] text-[#2C523C] font-medium mt-0.5">
                                  {item.hint}
                                </p>
                              )}

                              {/* Sources Preview */}
                              <div className="text-[10px] text-[#737373] mt-1 flex items-center justify-between gap-2">
                                <span className="truncate">
                                  Usado en {item.sources.length} {item.sources.length === 1 ? 'plato' : 'platos'}:{' '}
                                  {item.sources.map(s => s.recipeTitle.split(' ')[0]).slice(0, 2).join(', ')}
                                  {item.sources.length > 2 && '...'}
                                </span>

                                {hasMultipleSources && (
                                  <button
                                    type="button"
                                    onClick={e => {
                                      e.stopPropagation();
                                      setExpandedItemId(isExpanded ? null : item.id);
                                    }}
                                    className="text-[10px] text-[#2C523C] hover:underline font-medium shrink-0 flex items-center gap-0.5 cursor-pointer p-0.5"
                                  >
                                    <span>{isExpanded ? 'Ocultar' : 'Ver detalle'}</span>
                                    {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Expanded breakdown per recipe */}
                          {isExpanded && (
                            <div className="px-3 pb-3 pt-1 border-t border-black/[0.04] bg-[#FAF9F6] text-xs">
                              <span className="text-[10px] font-semibold text-[#555] uppercase tracking-wider block mb-1">
                                Desglose por receta:
                              </span>
                              <div className="space-y-1">
                                {item.sources.map((src, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center justify-between text-[11px] text-[#444] bg-white px-2 py-1 rounded border border-black/[0.04]"
                                  >
                                    <span className="truncate">
                                      {src.dayNumber ? `[Día ${src.dayNumber}] ` : ''}
                                      {src.recipeTitle}
                                    </span>
                                    <span className="font-semibold text-[#1A1A1A] tabular-nums shrink-0 ml-2">
                                      {src.amount > 0 ? `${src.amount}${src.unit}` : src.originalText}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        ) : (
          /* MODE 2: PER-RECIPE BREAKDOWN */
          <div className="space-y-4">
            {selectedRecipes.map(recipe => (
              <div
                key={recipe.id}
                className="bg-white rounded-2xl border border-black/[0.08] p-4 sm:p-5 shadow-2xs"
              >
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/[0.06]">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                      <span
                        className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                          recipe.planId === 'caro'
                            ? 'bg-purple-100 text-[#581C87]'
                            : 'bg-emerald-100 text-[#183B28]'
                        }`}
                      >
                        {recipe.planId === 'caro' ? 'Plan Caro' : 'Plan Leo'}
                      </span>
                      {recipe.dayNumber && (
                        <span className="text-[10px] font-bold text-[#2C523C] uppercase tracking-wider">
                          Día {recipe.dayNumber}
                        </span>
                      )}
                      {recipe.optionNumber && (
                        <span className="text-[10px] font-bold text-[#581C87] uppercase tracking-wider">
                          Opción {recipe.optionNumber}
                        </span>
                      )}
                      <span className="text-[#888] text-[10px]">·</span>
                      <span className="text-[10px] font-medium text-[#666] uppercase">
                        {recipe.mealType}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => onSelectRecipeDetail(recipe)}
                      className="text-sm font-bold text-[#1A1A1A] hover:text-[#2C523C] transition-colors text-left cursor-pointer"
                    >
                      {recipe.title}
                    </button>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-xs text-[#777] tabular-nums">
                      {recipe.ingredients.length} ingredientes
                    </span>
                    <button
                      type="button"
                      onClick={() => onSelectRecipeDetail(recipe)}
                      className="text-[11px] text-[#2C523C] hover:underline font-semibold cursor-pointer"
                    >
                      Ver receta →
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {recipe.ingredients.map((ing, idx) => (
                    <div
                      key={idx}
                      className="text-xs p-2.5 rounded-lg bg-[#FAF9F6] border border-black/[0.04] text-[#333]"
                    >
                      {ing}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};
