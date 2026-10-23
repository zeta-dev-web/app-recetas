import React, { useState } from 'react';
import { X, Calendar, Check } from 'lucide-react';
import { Recipe, MealType } from '../types';
import { getTodayDateString, formatDateSpanish } from '../utils/storage';

interface LogMealModalProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (recipe: Recipe, date: string, mealType: MealType, notes?: string) => void;
}

export const LogMealModal: React.FC<LogMealModalProps> = ({
  recipe,
  isOpen,
  onClose,
  onSave
}) => {
  const [date, setDate] = useState<string>(getTodayDateString());
  const [mealType, setMealType] = useState<MealType>(recipe?.mealType || 'almuerzo');
  const [notes, setNotes] = useState<string>('');

  if (!isOpen || !recipe) return null;

  const setRelativeDay = (offsetDays: number) => {
    const d = new Date();
    d.setDate(d.getDate() - offsetDays);
    const yr = d.getFullYear();
    const mo = String(d.getMonth() + 1).padStart(2, '0');
    const dy = String(d.getDate()).padStart(2, '0');
    setDate(`${yr}-${mo}-${dy}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) return;
    onSave(recipe, date, mealType, notes.trim() || undefined);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div
        className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-black/[0.08] overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="px-5 py-4 border-b border-black/[0.06] flex items-center justify-between bg-[#FAF9F6]">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#2C523C]" />
            <h3 className="text-sm font-bold text-[#181818]">
              Registrar fecha de preparación
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full hover:bg-stone-200 text-[#555] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4 text-xs">
          <div>
            <span className="text-[11px] text-[#737373] block mb-0.5">Receta seleccionada:</span>
            <p className="text-sm font-semibold text-[#181818] line-clamp-1">{recipe.title}</p>
          </div>

          {/* Quick shortcuts */}
          <div>
            <label className="block text-[11px] font-medium text-[#666] mb-1.5">
              Acceso rápido:
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setRelativeDay(0)}
                className={`flex-1 py-1 px-2 rounded-md border text-center transition-colors cursor-pointer ${
                  date === getTodayDateString()
                    ? 'bg-[#EEF4F0] border-[#2C523C] text-[#2C523C] font-semibold'
                    : 'border-black/10 hover:bg-stone-50 text-[#555]'
                }`}
              >
                Hoy
              </button>
              <button
                type="button"
                onClick={() => setRelativeDay(1)}
                className="flex-1 py-1 px-2 rounded-md border border-black/10 hover:bg-stone-50 text-[#555] text-center transition-colors cursor-pointer"
              >
                Ayer
              </button>
              <button
                type="button"
                onClick={() => setRelativeDay(2)}
                className="flex-1 py-1 px-2 rounded-md border border-black/10 hover:bg-stone-50 text-[#555] text-center transition-colors cursor-pointer"
              >
                Anteayer
              </button>
            </div>
          </div>

          {/* Date Picker */}
          <div>
            <label className="block text-[11px] font-medium text-[#666] mb-1">
              Fecha exacta (para evitar repetirla pronto):
            </label>
            <input
              type="date"
              required
              value={date}
              onChange={e => setDate(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-black/15 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2C523C]"
            />
            {date && (
              <span className="text-[11px] text-[#666] mt-1 block">
                {formatDateSpanish(date)}
              </span>
            )}
          </div>

          {/* Meal Slot */}
          <div>
            <label className="block text-[11px] font-medium text-[#666] mb-1">
              Comida del día:
            </label>
            <select
              value={mealType}
              onChange={e => setMealType(e.target.value as MealType)}
              className="w-full px-3 py-2 text-xs bg-white border border-black/15 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2C523C]"
            >
              <option value="desayuno">Desayuno</option>
              <option value="almuerzo">Almuerzo</option>
              <option value="merienda">Merienda</option>
              <option value="cena">Cena</option>
              <option value="snack">Snack / Colación</option>
            </select>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-[11px] font-medium text-[#666] mb-1">
              Nota o variación (opcional):
            </label>
            <input
              type="text"
              placeholder="Ej. 'Agregué semillas de sésamo extra'"
              value={notes}
              onChange={e => setNotes(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-black/15 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2C523C]"
            />
          </div>

          <div className="pt-3 border-t border-black/[0.06] flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 text-xs text-[#666] hover:text-[#222] cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 text-xs font-semibold text-white bg-[#244230] hover:bg-[#1A3324] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Guardar en calendario</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
