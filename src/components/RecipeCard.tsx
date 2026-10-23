import React, { useState } from 'react';
import { Clock, Calendar, Check, Utensils, AlertCircle, Scale } from 'lucide-react';
import { Recipe, PrepLog } from '../types';
import { getHumanRecency, getDaysSinceLastPrepared, getTodayDateString } from '../utils/storage';

interface RecipeCardProps {
  recipe: Recipe;
  logs: PrepLog[];
  onSelect: (recipe: Recipe) => void;
  onQuickLogToday: (recipe: Recipe) => void;
  onOpenLogModal: (recipe: Recipe) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  logs,
  onSelect,
  onQuickLogToday,
  onOpenLogModal
}) => {
  const [imgError, setImgError] = useState(false);
  const recency = getHumanRecency(recipe.id, logs);
  const daysAgo = getDaysSinceLastPrepared(recipe.id, logs);
  const isRecentlyCooked = daysAgo !== null && daysAgo <= 2;

  // Meal type label
  const mealLabelMap: Record<string, string> = {
    desayuno: 'Desayuno',
    almuerzo: 'Almuerzo',
    merienda: 'Merienda',
    cena: 'Cena',
    snack: 'Snack / Colación'
  };

  const cookingMethodMap: Record<string, string> = {
    plancha: 'A la plancha',
    horno: 'Al horno',
    salteado_wok: 'Salteado / Wok',
    hervido_vapor: 'Hervido / Vapor',
    sin_coccion: 'Sin cocción'
  };

  return (
    <article className="group relative flex flex-col bg-white rounded-xl border border-black/[0.08] hover:border-black/[0.16] transition-all duration-200 overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
      {/* Recipe Image with Fallback Container */}
      <div
        onClick={() => onSelect(recipe)}
        className="relative aspect-[4/3] w-full overflow-hidden bg-[#F0EFEB] cursor-pointer"
      >
        {!imgError ? (
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#EAE8E3] to-[#DDD9D0] text-[#555555] p-6 text-center">
            <Utensils className="w-8 h-8 mb-2 stroke-[1.5] text-[#2C523C]" />
            <span className="text-xs font-medium tracking-wide uppercase text-[#666666]">
              {mealLabelMap[recipe.mealType]}
            </span>
            <span className="text-sm font-semibold text-[#222222] line-clamp-1 mt-1">
              {recipe.title}
            </span>
          </div>
        )}

        {/* Repetition notice overlay if cooked within 2 days */}
        {isRecentlyCooked && (
          <div className="absolute top-3 left-3 bg-[#1A1A1A]/85 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded flex items-center gap-1.5 shadow-xs">
            <AlertCircle className="w-3 h-3 text-[#E2B755]" />
            <span>{daysAgo === 0 ? 'Preparada hoy' : `Preparada hace ${daysAgo}d`}</span>
          </div>
        )}

        {/* Day & Meal badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5">
          {recipe.dayNumber && (
            <div className="bg-white/95 backdrop-blur-xs text-[#1A1A1A] text-[11px] font-bold px-2 py-0.5 rounded shadow-xs">
              Día {recipe.dayNumber}
            </div>
          )}
          <div
            className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-xs flex items-center gap-1 ${
              recipe.mealType === 'almuerzo'
                ? 'bg-[#2C523C] text-white'
                : 'bg-[#2E2856] text-white'
            }`}
          >
            <span>{recipe.mealType === 'almuerzo' ? '☀️ Almuerzo' : '🌙 Cena'}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        {/* Category & Metadata - Zero-Pill rule: clean inline text with dots */}
        <div className="flex items-center gap-1.5 text-xs text-[#737373] mb-1.5 flex-wrap">
          <span className="font-semibold text-[#2C523C] uppercase tracking-wider text-[11px]">
            {mealLabelMap[recipe.mealType]}
          </span>
          <span aria-hidden="true" className="text-black/30">·</span>
          <span className="font-medium text-[#8F4800] text-[11px]">
            {cookingMethodMap[recipe.cookingMethod] || 'A la plancha'}
          </span>
          <span aria-hidden="true" className="text-black/30">·</span>
          <span className="tabular-nums flex items-center gap-1 font-medium text-[#222]">
            <Clock className="w-3 h-3 text-[#777]" />
            {recipe.prepTimeMinutes} min
          </span>
          {recipe.calories && (
            <>
              <span aria-hidden="true" className="text-black/30">·</span>
              <span className="tabular-nums text-[#666]">{recipe.calories} kcal</span>
            </>
          )}
        </div>

        {/* Title */}
        <h3
          onClick={() => onSelect(recipe)}
          className="text-base font-semibold text-[#181818] group-hover:text-[#2C523C] transition-colors leading-snug cursor-pointer mb-2 line-clamp-2"
        >
          {recipe.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-[#555555] line-clamp-2 mb-3 leading-relaxed flex-1">
          {recipe.description}
        </p>

        {/* Cooked Serving Highlight Banner */}
        {recipe.cookedServing && (
          <div
            onClick={() => onSelect(recipe)}
            className="mb-3 px-2.5 py-1.5 bg-[#FAF9F6] hover:bg-[#EEF4F0] border border-black/[0.06] rounded-lg text-[11px] transition-colors cursor-pointer flex items-center justify-between gap-1.5"
            title="Haz clic para ver las porciones cocidas exactas para servir en balanza"
          >
            <div className="flex items-center gap-1.5 truncate">
              <Scale className="w-3.5 h-3.5 shrink-0 text-[#2C523C]" />
              <span className="font-semibold text-[#183B28] truncate">Servir cocido:</span>
              <span className="text-[#444] truncate">
                {recipe.cookedServing.servingHe?.proteinCooked?.split(' ').slice(0, 3).join(' ') ||
                  recipe.cookedServing.cookedProtein?.split(' ').slice(0, 3).join(' ') ||
                  'En balanza'}
              </span>
            </div>
            <span className="text-[10px] text-[#2C523C] shrink-0 font-bold bg-emerald-100/60 px-1.5 py-0.5 rounded">
              {recipe.cookedServing.servingHe?.percentage || '58%'} / {recipe.cookedServing.servingShe?.percentage || '42%'}
            </span>
          </div>
        )}

        {/* Last Prepared Status & Recency */}
        <div className="pt-2.5 border-t border-black/[0.05] flex items-center justify-between text-xs text-[#666666] mb-3">
          <span className="text-[11px] text-[#737373]">Última preparación:</span>
          <span
            className={`font-medium tabular-nums ${
              recency.tone === 'today'
                ? 'text-[#2C523C]'
                : recency.tone === 'recent'
                ? 'text-[#A05E1C]'
                : 'text-[#555555]'
            }`}
          >
            {recency.label}
          </span>
        </div>

        {/* Quick Date Logging Actions */}
        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={() => onQuickLogToday(recipe)}
            title="Marcar como preparada hoy"
            className="flex-1 py-1.5 px-3 text-xs font-medium text-[#2C523C] bg-[#EEF4F0] hover:bg-[#DEEBE1] active:bg-[#CFE2D4] rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Cocinada hoy</span>
          </button>

          <button
            onClick={() => onOpenLogModal(recipe)}
            title="Elegir otra fecha de preparación"
            className="py-1.5 px-2.5 text-xs font-medium text-[#444444] bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 rounded-md transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#555555]" />
            <span className="hidden sm:inline">Fecha</span>
          </button>
        </div>
      </div>
    </article>
  );
};
