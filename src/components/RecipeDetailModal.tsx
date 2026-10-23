import React, { useState } from 'react';
import {
  X,
  Clock,
  Calendar,
  ChefHat,
  Flame,
  Check,
  AlertTriangle,
  Scale,
  Plus,
  Trash2,
  Users,
  Info,
  Sparkles,
  Utensils
} from 'lucide-react';
import { Recipe, PrepLog } from '../types';
import {
  getLogsForRecipe,
  getHumanRecency,
  getDaysSinceLastPrepared,
  formatDateSpanish,
  getTodayDateString
} from '../utils/storage';

interface RecipeDetailModalProps {
  recipe: Recipe | null;
  logs: PrepLog[];
  onClose: () => void;
  onLogMeal: (recipe: Recipe, date: string, notes?: string) => void;
  onDeleteLog: (logId: string) => void;
  onDeleteRecipe?: (recipeId: string) => void;
}

export const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({
  recipe,
  logs,
  onClose,
  onLogMeal,
  onDeleteLog,
  onDeleteRecipe
}) => {
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});
  const [portionMultiplier, setPortionMultiplier] = useState<1 | 2>(2); // Default to 2 porciones as requested
  const [customDate, setCustomDate] = useState<string>(getTodayDateString());
  const [showAddDateBox, setShowAddDateBox] = useState(false);
  const [imgError, setImgError] = useState(false);

  if (!recipe) return null;

  const recipeLogs = getLogsForRecipe(recipe.id, logs);
  const recency = getHumanRecency(recipe.id, logs);
  const daysAgo = getDaysSinceLastPrepared(recipe.id, logs);
  const isRecentlyRepeated = daysAgo !== null && daysAgo <= 2;

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handleLogCustomDate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customDate) return;
    onLogMeal(recipe, customDate);
    setShowAddDateBox(false);
  };

  // Safe references to cooked serving breakdown
  const cooked = recipe.cookedServing;
  const servingHe = cooked?.servingHe;
  const servingShe = cooked?.servingShe;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fade-in">
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-black/[0.08] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Sticky Header with Close */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#222] flex items-center justify-center shadow-md transition-colors cursor-pointer focus:outline-none"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto flex-1 divide-y divide-black/[0.06]">
          {/* Header Image */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-[#EAE8E3] overflow-hidden">
            {!imgError ? (
              <img
                src={recipe.imageUrl}
                alt={recipe.title}
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-stone-200 text-stone-500">
                <ChefHat className="w-12 h-12 stroke-[1.2]" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-5 sm:p-6">
              <div className="text-white space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-medium text-stone-200 uppercase tracking-wider flex-wrap">
                  {recipe.dayNumber && (
                    <span className="bg-[#2C523C] text-emerald-100 px-2.5 py-0.5 rounded-full font-bold">
                      Día {recipe.dayNumber}
                    </span>
                  )}
                  <span>{recipe.mealType}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-amber-200 font-semibold">
                    {recipe.cookingMethod === 'plancha'
                      ? 'A la plancha'
                      : recipe.cookingMethod === 'horno'
                      ? 'Al horno'
                      : recipe.cookingMethod === 'salteado_wok'
                      ? 'Salteado / Wok'
                      : recipe.cookingMethod === 'hervido_vapor'
                      ? 'Hervido / Vapor'
                      : 'Sin cocción'}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {recipe.prepTimeMinutes} min
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Plan Keto 30 Días</span>
                </div>
                <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                  {recipe.title}
                </h2>
              </div>
            </div>
          </div>

          {/* Quick Repetition Alert & Date Logging Strip */}
          <div className="p-4 sm:p-5 bg-[#FAF9F6] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] text-[#737373] block mb-0.5">Frecuencia en tu dieta</span>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs font-semibold ${
                    recency.tone === 'today'
                      ? 'text-[#2C523C]'
                      : recency.tone === 'recent'
                      ? 'text-[#A05E1C]'
                      : 'text-[#333333]'
                  }`}
                >
                  {recency.label}
                </span>
                {isRecentlyRepeated && (
                  <span className="text-[11px] text-[#A05E1C] bg-[#FDF4E7] px-2 py-0.5 rounded border border-[#E9D5B4] flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    Cuidado con repetir platos tan seguido
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onLogMeal(recipe, getTodayDateString())}
                className="px-3.5 py-2 text-xs font-semibold text-white bg-[#244230] hover:bg-[#1A3324] rounded-lg transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer min-h-[38px]"
              >
                <Check className="w-4 h-4" />
                <span>Marcar preparada hoy</span>
              </button>
              <button
                onClick={() => setShowAddDateBox(!showAddDateBox)}
                className="px-3 py-2 text-xs font-medium text-[#444] bg-white hover:bg-stone-100 border border-black/10 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer min-h-[38px]"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Otra fecha</span>
              </button>
            </div>
          </div>

          {/* Collapsible Custom Date Logging Form */}
          {showAddDateBox && (
            <form onSubmit={handleLogCustomDate} className="p-4 sm:p-5 bg-white border-b border-black/[0.06] flex flex-col sm:flex-row gap-3 items-end">
              <div className="flex-1 w-full">
                <label className="block text-xs font-medium text-[#555] mb-1">
                  Fecha en la que la preparaste
                </label>
                <input
                  type="date"
                  value={customDate}
                  onChange={e => setCustomDate(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-black/15 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2C523C]"
                  required
                />
              </div>
              <div className="flex gap-2 shrink-0">
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-medium text-white bg-[#2C523C] hover:bg-[#234230] rounded-lg transition-colors cursor-pointer"
                >
                  Registrar fecha
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddDateBox(false)}
                  className="px-3 py-2 text-xs text-[#666] hover:text-[#222] cursor-pointer"
                >
                  Cancelar
                </button>
              </div>
            </form>
          )}

          {/* HIGHLIGHTED SECTION: SELECTOR 1 PORCIÓN ÉL vs 2 PORCIONES */}
          <div className="p-5 sm:p-6 bg-gradient-to-br from-emerald-50/80 via-stone-50 to-[#FAF9F6] border-y border-emerald-900/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#2C523C] text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <Scale className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#1A1A1A]">
                    {portionMultiplier === 1
                      ? 'Cocinar para ti solo (1 porción Él)'
                      : '2 Porciones: Proporción Él vs Ella y regla de servido'}
                  </h3>
                  <p className="text-[11px] text-[#666]">
                    {portionMultiplier === 1
                      ? 'Cantidades y pesaje en balanza para cocinar solo para ti'
                      : 'Cantidades combinadas para cocinar juntos y qué servir en el plato de cada uno'}
                  </p>
                </div>
              </div>

              {/* Comensales Selector (1 porcion El vs 2 porciones) */}
              <div className="inline-flex items-center p-1 bg-white border border-black/10 rounded-xl shrink-0 self-start sm:self-auto shadow-3xs">
                <button
                  onClick={() => setPortionMultiplier(1)}
                  className={`px-3 py-1.5 text-xs rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                    portionMultiplier === 1
                      ? 'bg-[#2C523C] text-white font-semibold shadow-xs'
                      : 'text-[#666] hover:text-[#1A1A1A]'
                  }`}
                >
                  <span>1 porción Él</span>
                </button>
                <button
                  onClick={() => setPortionMultiplier(2)}
                  className={`px-3 py-1.5 text-xs rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                    portionMultiplier === 2
                      ? 'bg-[#2C523C] text-white font-semibold shadow-xs'
                      : 'text-[#666] hover:text-[#1A1A1A]'
                  }`}
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>2 porciones</span>
                </button>
              </div>
            </div>

            {/* Cooked Breakdown Section */}
            {portionMultiplier === 1 ? (
              /* MODE: 1 PORCION EL */
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-white p-3.5 rounded-xl border border-black/[0.06] shadow-3xs">
                    <span className="text-[10px] font-bold text-[#2C523C] uppercase tracking-wider block mb-1">
                      🥩 Proteína cocida para tu plato
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#181818] block leading-snug">
                      {servingHe?.proteinCooked || cooked?.cookedProtein || 'Según porción'}
                    </span>
                    <span className="text-[11px] text-[#737373] block mt-1">
                      (Considera merma habitual por cocción en carnes)
                    </span>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-black/[0.06] shadow-3xs">
                    <span className="text-[10px] font-bold text-[#2C523C] uppercase tracking-wider block mb-1">
                      🥗 Vegetales & Guarnición para tu plato
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#181818] block leading-snug">
                      {servingHe?.sides || cooked?.cookedSides || 'Según porción'}
                    </span>
                    {servingHe?.fatsAndToppings && (
                      <span className="text-[11px] text-[#737373] block mt-1">
                        Aderezo / Grasas: {servingHe.fatsAndToppings}
                      </span>
                    )}
                  </div>
                </div>

                <div className="bg-emerald-950/5 border border-emerald-900/10 p-3.5 rounded-xl text-xs text-[#1F3E2C] flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-[#2C523C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[13px] block mb-0.5">
                      Servir en tu plato:
                    </span>
                    <p className="leading-relaxed text-[#2C523C]">
                      {servingHe?.ruleNote || 'Pesar la proteína recién salida del fuego y acompañar con la guarnición aderezada.'}
                    </p>
                    <span className="text-[11px] text-[#557762] block mt-1 font-semibold">
                      ⚖️ Peso total servido en tu plato: {servingHe?.plateTotalApprox || cooked?.plateTotalApprox || '~280g'}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              /* MODE: 2 PORCIONES (QUE SERVIR PARA CADA UNO - EXACTO DEL PLAN) */
              <div className="space-y-3">
                {/* Rule summary banner */}
                {cooked?.servingRuleSummary && (
                  <div className="bg-emerald-900/10 border border-emerald-900/15 p-3.5 rounded-xl text-xs text-[#163323] flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#2C523C] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[12px] uppercase tracking-wide block mb-0.5 text-[#2C523C]">
                        Regla de servido y emplatado del plan:
                      </span>
                      <p className="leading-relaxed font-medium">
                        {cooked.servingRuleSummary}
                      </p>
                    </div>
                  </div>
                )}

                {/* Two Distinct Differential Cards: Para Él vs Para Ella */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Card 1: Para Él */}
                  <div className="bg-white p-4 rounded-xl border-2 border-emerald-800/20 shadow-2xs">
                    <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-black/[0.06]">
                      <span className="text-xs sm:text-sm font-bold text-[#183B28] flex items-center gap-1.5">
                        <span>👨 Para Él</span>
                        {servingHe?.percentage && (
                          <span className="text-[11px] font-extrabold bg-[#2C523C] text-white px-2 py-0.5 rounded-full">
                            {servingHe.percentage}
                          </span>
                        )}
                      </span>
                      <span className="text-[11px] font-bold bg-[#EEF4F0] text-[#183B28] px-2.5 py-0.5 rounded-md">
                        {servingHe?.plateTotalApprox || '~290g en plato'}
                      </span>
                    </div>
                    <div className="space-y-2 text-xs text-[#333]">
                      <div>
                        <span className="text-[10px] text-[#777] block uppercase font-semibold">🥩 Proteína cocida servida:</span>
                        <span className="font-bold text-[#1A1A1A]">{servingHe?.proteinCooked}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#777] block uppercase font-semibold">🥗 Vegetales & guarnición:</span>
                        <span className="font-medium text-[#222]">{servingHe?.sides}</span>
                      </div>
                      {servingHe?.fatsAndToppings && (
                        <div>
                          <span className="text-[10px] text-[#777] block uppercase font-semibold">🫒 Aderezos & Grasas:</span>
                          <span className="text-[#444]">{servingHe.fatsAndToppings}</span>
                        </div>
                      )}
                      <div className="pt-2 border-t border-black/[0.05] text-[11px] text-[#2C523C] font-medium leading-relaxed">
                        📌 {servingHe?.ruleNote}
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Para Ella */}
                  <div className="bg-white p-4 rounded-xl border-2 border-emerald-800/20 shadow-2xs">
                    <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-black/[0.06]">
                      <span className="text-xs sm:text-sm font-bold text-[#183B28] flex items-center gap-1.5">
                        <span>👩 Para Ella (Esposa)</span>
                        {servingShe?.percentage && (
                          <span className="text-[11px] font-extrabold bg-[#2C523C] text-white px-2 py-0.5 rounded-full">
                            {servingShe.percentage}
                          </span>
                        )}
                      </span>
                      <span className="text-[11px] font-bold bg-[#EEF4F0] text-[#183B28] px-2.5 py-0.5 rounded-md">
                        {servingShe?.plateTotalApprox || '~210g en plato'}
                      </span>
                    </div>
                    <div className="space-y-2 text-xs text-[#333]">
                      <div>
                        <span className="text-[10px] text-[#777] block uppercase font-semibold">🥩 Proteína cocida servida:</span>
                        <span className="font-bold text-[#1A1A1A]">{servingShe?.proteinCooked}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#777] block uppercase font-semibold">🥗 Vegetales & guarnición:</span>
                        <span className="font-medium text-[#222]">{servingShe?.sides}</span>
                      </div>
                      {servingShe?.fatsAndToppings && (
                        <div>
                          <span className="text-[10px] text-[#777] block uppercase font-semibold">🫒 Aderezos & Grasas:</span>
                          <span className="text-[#444]">{servingShe.fatsAndToppings}</span>
                        </div>
                      )}
                      <div className="pt-2 border-t border-black/[0.05] text-[11px] text-[#2C523C] font-medium leading-relaxed">
                        📌 {servingShe?.ruleNote}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>


          {/* Main Recipe Content: Ingredients & Instructions */}
          <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-5 gap-8 bg-white">
            {/* Ingredients (2 cols) */}
            <div className="md:col-span-2">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold text-[#181818] uppercase tracking-wider">
                  {portionMultiplier === 1
                    ? 'Ingredientes (para ti solo)'
                    : 'Ingredientes (proporción Él | Ella)'}
                </h4>
                {portionMultiplier === 2 ? (
                  <span className="text-[10px] font-bold text-[#2C523C] bg-[#EEF4F0] px-2 py-0.5 rounded-full">
                    Total sartén/wok
                  </span>
                ) : (
                  <span className="text-[10px] font-medium text-[#777] bg-stone-100 px-2 py-0.5 rounded">
                    1 porción Él
                  </span>
                )}
              </div>
              <p className="text-[11px] text-[#888888] mb-3">
                {portionMultiplier === 2
                  ? 'Cantidad exacta para cada comensal y peso total a colocar en sartén/wok:'
                  : 'Lo que necesitas pesar en crudo para cocinar solo para ti:'}
              </p>

              {/* Differential Ingredients List (Mode 2) */}
              {portionMultiplier === 2 && recipe.differentialIngredients && recipe.differentialIngredients.length > 0 ? (
                <ul className="space-y-2.5">
                  {recipe.differentialIngredients.map((diff, idx) => {
                    const isChecked = !!checkedIngredients[idx];

                    return (
                      <li
                        key={idx}
                        onClick={() => toggleIngredient(idx)}
                        className="p-2.5 rounded-xl border border-black/[0.08] bg-[#FAF9F6] hover:bg-[#F4F2EC] transition-colors cursor-pointer select-none group"
                      >
                        <div className="flex items-start gap-2.5">
                          <div
                            className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                              isChecked
                                ? 'bg-[#2C523C] border-[#2C523C] text-white'
                                : 'border-black/25 group-hover:border-black/50 bg-white'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <div className="flex-1 text-xs">
                            <span className={`font-semibold text-[#181818] block ${isChecked ? 'line-through text-[#999]' : ''}`}>
                              {diff.name}
                            </span>
                            <div className="mt-1 flex items-center gap-2 text-[11px] text-[#555] flex-wrap">
                              <span className="bg-white px-2 py-0.5 rounded border border-black/[0.06] font-medium">
                                👨 Él: <strong className="text-[#1A1A1A]">{diff.he}</strong>
                              </span>
                              <span className="bg-white px-2 py-0.5 rounded border border-black/[0.06] font-medium">
                                👩 Ella: <strong className="text-[#1A1A1A]">{diff.she}</strong>
                              </span>
                              <span className="bg-[#EEF4F0] text-[#183B28] px-2 py-0.5 rounded font-bold">
                                Total: {diff.total}
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                /* Single Portion Ingredients (Mode 1) */
                <ul className="space-y-2.5">
                  {recipe.ingredients.map((ing, idx) => {
                    const isChecked = !!checkedIngredients[idx];

                    return (
                      <li
                        key={idx}
                        onClick={() => toggleIngredient(idx)}
                        className="flex items-start gap-2.5 text-xs text-[#333333] cursor-pointer group select-none"
                      >
                        <div
                          className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                            isChecked
                              ? 'bg-[#2C523C] border-[#2C523C] text-white'
                              : 'border-black/25 group-hover:border-black/50 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div className="leading-relaxed">
                          <span className={`${isChecked ? 'line-through text-[#999999]' : 'font-medium'}`}>
                            {ing}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}

              {/* Tags */}
              {recipe.tags && recipe.tags.length > 0 && (
                <div className="mt-6 pt-4 border-t border-black/[0.06]">
                  <span className="text-[11px] font-medium text-[#777] block mb-2">Etiquetas de la receta</span>
                  <div className="flex flex-wrap gap-1.5 text-xs text-[#666]">
                    {recipe.tags.map((tag, i) => (
                      <span key={i} className="text-[11px] text-[#555] bg-stone-100 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Step by step Instructions (3 cols) */}
            <div className="md:col-span-3">
              <h4 className="text-sm font-semibold text-[#181818] uppercase tracking-wider mb-2">
                Preparación paso a paso
              </h4>
              <p className="text-[11px] text-[#777] mb-3">
                {portionMultiplier === 2
                  ? 'Guía exacta de cocción combinada y distribución de platos para los dos:'
                  : 'Guía de cocción para preparar tu porción individual:'}
              </p>

              <ol className="space-y-4">
                {(portionMultiplier === 2 && recipe.instructionsCombined && recipe.instructionsCombined.length > 0
                  ? recipe.instructionsCombined
                  : recipe.instructions
                ).map((step, idx) => (
                  <li key={idx} className="flex gap-3 text-xs leading-relaxed text-[#333]">
                    <span className="w-5 h-5 rounded-full bg-[#2C523C] text-white text-[11px] font-bold flex items-center justify-center shrink-0 tabular-nums">
                      {idx + 1}
                    </span>
                    <p className="pt-0.5 flex-1">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Nutritional Breakdown strip (Al final de los pasos e ingredientes) */}
          {(recipe.calories || recipe.proteinGrams || recipe.carbsGrams || recipe.fatsGrams) && (
            <div className="p-4 sm:p-5 bg-[#FAF9F6] border-t border-black/[0.06]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-600" />
                  <span>Valor Nutricional (porción Él)</span>
                </span>
                <span className="text-[11px] text-[#737373]">
                  Valores calculados según ingredientes del plan
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3.5 rounded-xl border border-black/[0.06] text-center shadow-3xs">
                <div>
                  <span className="text-[11px] text-[#737373] uppercase tracking-wider block">Calorías (porción Él)</span>
                  <span className="text-base sm:text-lg font-bold text-[#222] tabular-nums">
                    {recipe.calories ?? '—'} <span className="text-xs font-normal text-[#888]">kcal</span>
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-[#737373] uppercase tracking-wider block">Proteínas</span>
                  <span className="text-base sm:text-lg font-bold text-[#222] tabular-nums">
                    {recipe.proteinGrams ?? '—'} <span className="text-xs font-normal text-[#888]">g</span>
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-[#737373] uppercase tracking-wider block">Carbohidratos</span>
                  <span className="text-base sm:text-lg font-bold text-[#222] tabular-nums">
                    {recipe.carbsGrams ?? '—'} <span className="text-xs font-normal text-[#888]">g</span>
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-[#737373] uppercase tracking-wider block">Grasas</span>
                  <span className="text-base sm:text-lg font-bold text-[#222] tabular-nums">
                    {recipe.fatsGrams ?? '—'} <span className="text-xs font-normal text-[#888]">g</span>
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Historical Preparation Dates Log */}
          <div className="p-5 sm:p-6 bg-[#FAF9F6]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3.5">
              <h4 className="text-sm font-semibold text-[#181818] flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#2C523C]" />
                <span>Historial de preparaciones ({recipeLogs.length})</span>
              </h4>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onLogMeal(recipe, getTodayDateString())}
                  className="px-2.5 py-1.5 text-xs font-semibold text-white bg-[#2C523C] hover:bg-[#234230] rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Marcar hoy</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddDateBox(!showAddDateBox)}
                  className="px-2.5 py-1.5 text-xs font-medium text-[#2C523C] bg-white hover:bg-emerald-50 border border-emerald-900/15 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{showAddDateBox ? 'Ocultar' : 'Añadir fecha'}</span>
                </button>
              </div>
            </div>

            {/* Inline Form to add date right here */}
            {showAddDateBox && (
              <form
                onSubmit={handleLogCustomDate}
                className="mb-4 p-4 bg-white rounded-xl border border-emerald-900/20 shadow-xs flex flex-col sm:flex-row gap-3 items-end"
              >
                <div className="flex-1 w-full">
                  <label className="block text-xs font-medium text-[#555] mb-1">
                    Fecha de preparación
                  </label>
                  <input
                    type="date"
                    value={customDate}
                    onChange={e => setCustomDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-black/15 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2C523C]"
                    required
                  />
                </div>
                <div className="flex gap-2 shrink-0 w-full sm:w-auto">
                  <button
                    type="submit"
                    className="flex-1 sm:flex-initial px-4 py-2 text-xs font-semibold text-white bg-[#2C523C] hover:bg-[#234230] rounded-lg transition-colors cursor-pointer"
                  >
                    Guardar fecha
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddDateBox(false)}
                    className="px-3 py-2 text-xs text-[#666] hover:text-[#222] border border-black/10 rounded-lg cursor-pointer bg-stone-50"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            )}

            {recipeLogs.length === 0 ? (
              <div className="p-4 rounded-xl border border-dashed border-black/15 bg-white/70 text-center">
                <p className="text-xs text-[#666666] mb-3">
                  Aún no has registrado preparaciones de esta receta. Pulsa abajo para registrarla:
                </p>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <button
                    type="button"
                    onClick={() => onLogMeal(recipe, getTodayDateString())}
                    className="px-4 py-2 text-xs font-semibold text-white bg-[#2C523C] hover:bg-[#234230] rounded-lg transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Marcar preparada hoy ({formatDateSpanish(getTodayDateString())})</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddDateBox(true)}
                    className="px-3 py-2 text-xs font-medium text-[#444] bg-white hover:bg-stone-100 border border-black/15 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Elegir otra fecha...</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="divide-y divide-black/[0.05] bg-white rounded-lg border border-black/[0.06] overflow-hidden shadow-3xs">
                {recipeLogs.map(log => (
                  <div key={log.id} className="p-3 flex items-center justify-between text-xs hover:bg-[#FAF9F6] transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-[#183B28] tabular-nums flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#2C523C]" />
                        {formatDateSpanish(log.date)}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => onDeleteLog(log.id)}
                      title="Eliminar este registro"
                      className="text-[#999] hover:text-rose-600 transition-colors p-1.5 rounded hover:bg-rose-50 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
