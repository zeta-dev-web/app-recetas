import React, { useState } from 'react';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Plus,
  Trash2,
  Utensils,
  Clock,
  Flame,
  RotateCcw,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { PrepLog, Recipe, MealType, CookingMethod } from '../types';
import { formatDateSpanish, getTodayDateString } from '../utils/storage';

interface HistoryTimelineProps {
  logs: PrepLog[];
  recipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
  onAddLog: (recipeId: string, date: string, mealType: MealType, recipeTitle: string, notes?: string, cookingMethod?: CookingMethod) => void;
  onDeleteLog: (logId: string) => void;
}

export const HistoryTimeline: React.FC<HistoryTimelineProps> = ({
  logs,
  recipes,
  onSelectRecipe,
  onAddLog,
  onDeleteLog
}) => {
  // pageOffset = 0 means current 7 days (today down to 6 days ago).
  // pageOffset = 1 means 7 days earlier (7 days ago to 13 days ago), etc.
  const [pageOffset, setPageOffset] = useState(0);

  // Quick log dialog for a specific day in the 7-day view
  const [loggingForDate, setLoggingForDate] = useState<string | null>(null);
  const [selectedRecipeId, setSelectedRecipeId] = useState<string>(recipes[0]?.id || '');
  const [selectedMealType, setSelectedMealType] = useState<MealType>('almuerzo');
  const [quickNote, setQuickNote] = useState('');

  // Calculate the 7 days for the current page
  const daysInWindow = React.useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const days = [];
    const startOffset = pageOffset * 7;

    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() - (startOffset + i));
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      const dateStr = `${year}-${month}-${day}`;

      days.push({
        date: d,
        dateStr,
        isToday: startOffset + i === 0,
        isYesterday: startOffset + i === 1,
        dayOffset: startOffset + i
      });
    }
    return days;
  }, [pageOffset]);

  // Group logs by date
  const logsByDate = React.useMemo(() => {
    const map: Record<string, PrepLog[]> = {};
    logs.forEach(l => {
      if (!map[l.date]) {
        map[l.date] = [];
      }
      map[l.date].push(l);
    });
    return map;
  }, [logs]);

  // Cooking method display map
  const cookingMethodLabel: Record<string, string> = {
    plancha: 'A la plancha',
    horno: 'Al horno',
    salteado_wok: 'Salteado / Wok',
    hervido_vapor: 'Hervido / Vapor',
    sin_coccion: 'Sin cocción'
  };

  const mealColorMap: Record<string, string> = {
    almuerzo: 'bg-emerald-100/90 text-emerald-900 border-emerald-200',
    cena: 'bg-indigo-100/90 text-indigo-900 border-indigo-200',
    desayuno: 'bg-amber-100/90 text-amber-900 border-amber-200',
    merienda: 'bg-orange-100/90 text-orange-900 border-orange-200',
    snack: 'bg-stone-100 text-stone-800 border-stone-200'
  };

  const totalMealsInWindow = daysInWindow.reduce((acc, curr) => {
    return acc + (logsByDate[curr.dateStr]?.length || 0);
  }, 0);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loggingForDate || !selectedRecipeId) return;
    const targetRecipe = recipes.find(r => r.id === selectedRecipeId);
    if (!targetRecipe) return;

    onAddLog(
      targetRecipe.id,
      loggingForDate,
      selectedMealType,
      targetRecipe.title,
      quickNote.trim() || undefined,
      targetRecipe.cookingMethod
    );
    setQuickNote('');
    setLoggingForDate(null);
  };

  return (
    <div className="space-y-6">
      {/* Header with Title and Pagination Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-black/[0.06]">
        <div>
          <span className="text-xs font-semibold text-[#2C523C] uppercase tracking-wider block mb-1">
            Seguimiento Diario
          </span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A]">
            Bitácora de los últimos 7 días
          </h2>
          <p className="text-xs text-[#737373] mt-0.5">
            {pageOffset === 0
              ? 'Mostrando tus comidas de la semana actual.'
              : `Mostrando período de 7 días anteriores (${pageOffset * 7} a ${pageOffset * 7 + 6} días atrás).`}{' '}
            Total: <span className="font-semibold text-[#181818] tabular-nums">{totalMealsInWindow}</span> comidas registradas.
          </p>
        </div>

        {/* 7-Day Pagination Controls */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          {pageOffset > 0 && (
            <button
              onClick={() => setPageOffset(0)}
              className="px-3 py-1.5 text-xs font-medium text-[#2C523C] bg-[#EEF4F0] hover:bg-[#DEEBE1] rounded-lg transition-colors cursor-pointer flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Semana actual</span>
            </button>
          )}

          <div className="flex items-center bg-white border border-black/15 rounded-xl p-0.5 shadow-2xs">
            <button
              onClick={() => setPageOffset(prev => prev + 1)}
              title="Ver 7 días anteriores"
              className="px-3 py-1.5 text-xs font-medium text-[#555] hover:text-[#111] hover:bg-stone-100 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>7 días anteriores</span>
            </button>

            <div className="h-4 w-px bg-black/10 mx-1" />

            <button
              onClick={() => setPageOffset(prev => Math.max(0, prev - 1))}
              disabled={pageOffset === 0}
              title="Ver 7 días más recientes"
              className="px-3 py-1.5 text-xs font-medium text-[#555] hover:text-[#111] hover:bg-stone-100 disabled:opacity-40 disabled:hover:bg-transparent rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>7 días más recientes</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Date Window Indicator */}
      <div className="flex items-center justify-between text-xs text-[#666] bg-stone-100/70 px-4 py-2 rounded-xl">
        <span className="font-medium text-[#222]">
          Período:{' '}
          <span className="font-semibold text-[#2C523C]">
            {formatDateSpanish(daysInWindow[daysInWindow.length - 1].dateStr)}
          </span>{' '}
          al{' '}
          <span className="font-semibold text-[#2C523C]">
            {formatDateSpanish(daysInWindow[0].dateStr)}
          </span>
        </span>
        <span className="text-[11px] text-[#777]">
          Página {pageOffset + 1}
        </span>
      </div>

      {/* Quick Meal Logging Inline Modal */}
      {loggingForDate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div
            className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-black/[0.08] overflow-hidden p-6"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] mb-4">
              <h3 className="text-sm font-bold text-[#181818]">
                Registrar comida del {formatDateSpanish(loggingForDate)}
              </h3>
              <button
                onClick={() => setLoggingForDate(null)}
                className="text-xs text-[#888] hover:text-[#222] cursor-pointer"
              >
                Cerrar
              </button>
            </div>

            <form onSubmit={handleQuickSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[11px] font-medium text-[#555] mb-1">
                  Selecciona la receta
                </label>
                <select
                  value={selectedRecipeId}
                  onChange={e => {
                    setSelectedRecipeId(e.target.value);
                    const r = recipes.find(rec => rec.id === e.target.value);
                    if (r) setSelectedMealType(r.mealType);
                  }}
                  className="w-full p-2 bg-white border border-black/15 rounded-lg text-xs"
                >
                  {recipes.map(r => (
                    <option key={r.id} value={r.id}>
                      {r.dayNumber ? `[Día ${r.dayNumber}] ` : ''}
                      {r.title} ({r.mealType})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-[#555] mb-1">
                  Momento de la comida
                </label>
                <select
                  value={selectedMealType}
                  onChange={e => setSelectedMealType(e.target.value as MealType)}
                  className="w-full p-2 bg-white border border-black/15 rounded-lg text-xs"
                >
                  <option value="almuerzo">Almuerzo</option>
                  <option value="cena">Cena</option>
                  <option value="desayuno">Desayuno</option>
                  <option value="merienda">Merienda</option>
                  <option value="snack">Snack / Colación</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-[#555] mb-1">
                  Nota breve (opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ej. 'Cocinada con ensalada mixta', 'Término medio'"
                  value={quickNote}
                  onChange={e => setQuickNote(e.target.value)}
                  className="w-full p-2 border border-black/15 rounded-lg text-xs"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-black/[0.06]">
                <button
                  type="button"
                  onClick={() => setLoggingForDate(null)}
                  className="px-3 py-1.5 text-xs text-[#666] hover:text-[#222]"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 text-xs font-semibold text-white bg-[#244230] hover:bg-[#1A3324] rounded-lg shadow-xs"
                >
                  Guardar en bitácora
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 7-Day List View */}
      <div className="space-y-4">
        {daysInWindow.map(dayItem => {
          const dayLogs = logsByDate[dayItem.dateStr] || [];

          return (
            <div
              key={dayItem.dateStr}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                dayItem.isToday
                  ? 'bg-white border-[#2C523C] shadow-sm ring-1 ring-[#2C523C]/20'
                  : 'bg-white border-black/[0.08] hover:border-black/[0.16]'
              }`}
            >
              {/* Day Section Header */}
              <div className="px-5 py-3.5 bg-[#FAF9F6] border-b border-black/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      dayItem.isToday
                        ? 'bg-[#2C523C] text-white'
                        : 'bg-stone-200 text-[#444]'
                    }`}
                  >
                    {dayItem.date.getDate()}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#181818]">
                        {formatDateSpanish(dayItem.dateStr)}
                      </span>
                      {dayItem.isToday && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#2C523C] text-white">
                          Hoy
                        </span>
                      )}
                      {dayItem.isYesterday && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-stone-200 text-[#555]">
                          Ayer
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-[#737373]">
                      {dayLogs.length === 0
                        ? 'Sin comidas registradas'
                        : `${dayLogs.length} ${dayLogs.length === 1 ? 'comida preparada' : 'comidas preparadas'}`}
                    </span>
                  </div>
                </div>

                {/* Quick Add Button for this day */}
                <button
                  onClick={() => {
                    setLoggingForDate(dayItem.dateStr);
                    setQuickNote('');
                  }}
                  className="px-3 py-1.5 text-xs font-medium text-[#2C523C] hover:bg-[#EEF4F0] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Añadir comida</span>
                </button>
              </div>

              {/* Meals rendered for this day */}
              <div className="p-4 sm:p-5">
                {dayLogs.length === 0 ? (
                  <div className="py-4 text-center">
                    <p className="text-xs text-[#888] italic mb-2">
                      No registraste ninguna comida en esta fecha.
                    </p>
                    <button
                      onClick={() => setLoggingForDate(dayItem.dateStr)}
                      className="inline-flex items-center gap-1 text-xs text-[#2C523C] font-semibold hover:underline cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                      <span>Registrar qué preparaste</span>
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {dayLogs.map(log => {
                      const recipe = recipes.find(r => r.id === log.recipeId);
                      const method = log.cookingMethod || recipe?.cookingMethod;

                      return (
                        <div
                          key={log.id}
                          className="p-3.5 bg-[#FAF9F6] rounded-xl border border-black/[0.05] hover:border-black/[0.12] transition-colors flex items-center justify-between gap-3"
                        >
                          <div className="flex items-center gap-3.5 min-w-0 flex-1">
                            {/* Thumbnail */}
                            <div
                              onClick={() => recipe && onSelectRecipe(recipe)}
                              className="w-12 h-12 rounded-lg bg-stone-200 overflow-hidden shrink-0 cursor-pointer"
                            >
                              {recipe?.imageUrl ? (
                                <img
                                  src={recipe.imageUrl}
                                  alt={log.recipeTitle}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-[#2C523C]">
                                  <Utensils className="w-5 h-5" />
                                </div>
                              )}
                            </div>

                            {/* Details */}
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-1.5 text-[10px] text-[#777] mb-0.5 flex-wrap">
                                <span className={`font-semibold uppercase px-1.5 py-0.2 rounded border ${mealColorMap[log.mealType]}`}>
                                  {log.mealType}
                                </span>
                                {method && (
                                  <>
                                    <span aria-hidden="true" className="text-black/30">·</span>
                                    <span className="font-medium text-[#7C4A1D]">
                                      {cookingMethodLabel[method] || method}
                                    </span>
                                  </>
                                )}
                                {recipe?.prepTimeMinutes && (
                                  <>
                                    <span aria-hidden="true" className="text-black/30">·</span>
                                    <span className="tabular-nums flex items-center gap-0.5">
                                      <Clock className="w-2.5 h-2.5" />
                                      {recipe.prepTimeMinutes}m
                                    </span>
                                  </>
                                )}
                              </div>

                              <h4
                                onClick={() => recipe && onSelectRecipe(recipe)}
                                className={`text-xs font-semibold text-[#181818] truncate ${
                                  recipe ? 'hover:text-[#2C523C] cursor-pointer' : ''
                                }`}
                              >
                                {log.recipeTitle}
                              </h4>

                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-2 shrink-0">
                            {recipe && (
                              <button
                                onClick={() => onSelectRecipe(recipe)}
                                className="text-xs font-medium text-[#2C523C] hover:underline cursor-pointer"
                              >
                                Ver
                              </button>
                            )}
                            <button
                              onClick={() => onDeleteLog(log.id)}
                              title="Eliminar este registro"
                              className="p-1.5 text-[#999] hover:text-rose-600 transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
