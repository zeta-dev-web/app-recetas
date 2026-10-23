import React, { useState } from 'react';
import { Check, X, ShieldAlert, Sparkles, BookOpen, Utensils } from 'lucide-react';
import { KETO_GUIDE } from '../data/initialRecipes';

interface KetoGuideViewProps {
  onGoToRecipes: () => void;
}

export const KetoGuideView: React.FC<KetoGuideViewProps> = ({ onGoToRecipes }) => {
  const [activeGuideTab, setActiveGuideTab] = useState<'allowed' | 'forbidden'>('allowed');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-black/[0.06]">
        <div>
          <span className="text-xs font-semibold text-[#2C523C] uppercase tracking-wider block mb-1">
            Manual de Referencia
          </span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A]">
            Guía de Alimentos del Plan Keto (30 Días)
          </h2>
          <p className="text-xs text-[#737373] mt-0.5">
            Criterios oficiales de alimentos permitidos y alimentos prohibidos para mantenerte en cetosis.
          </p>
        </div>

        <button
          onClick={onGoToRecipes}
          className="px-4 py-2 text-xs font-semibold text-white bg-[#244230] hover:bg-[#1A3324] rounded-lg transition-colors flex items-center gap-1.5 self-start sm:self-auto cursor-pointer shadow-xs"
        >
          <Utensils className="w-3.5 h-3.5" />
          <span>Ver las 30 recetas del plan</span>
        </button>
      </div>

      {/* Segmented Control */}
      <div className="flex items-center gap-2 p-1 bg-stone-200/60 rounded-xl w-fit">
        <button
          onClick={() => setActiveGuideTab('allowed')}
          className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
            activeGuideTab === 'allowed'
              ? 'bg-white text-[#183B28] shadow-xs font-semibold'
              : 'text-[#666] hover:text-[#111]'
          }`}
        >
          <Check className="w-4 h-4 text-emerald-600" />
          <span>Alimentos Permitidos (Base del plan)</span>
        </button>
        <button
          onClick={() => setActiveGuideTab('forbidden')}
          className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
            activeGuideTab === 'forbidden'
              ? 'bg-white text-rose-800 shadow-xs font-semibold'
              : 'text-[#666] hover:text-[#111]'
          }`}
        >
          <X className="w-4 h-4 text-rose-600" />
          <span>Alimentos Prohibidos (Evitar)</span>
        </button>
      </div>

      {/* Allowed Section */}
      {activeGuideTab === 'allowed' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
          {KETO_GUIDE.allowed.map((group, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-black/[0.08] p-5 shadow-2xs hover:border-[#2C523C]/40 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <h3 className="text-sm font-bold text-[#1A1A1A]">
                  {group.category}
                </h3>
              </div>
              <ul className="space-y-1.5">
                {group.items.map((item, i) => (
                  <li key={i} className="text-xs text-[#444] flex items-start gap-2">
                    <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Forbidden Section */}
      {activeGuideTab === 'forbidden' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
          {KETO_GUIDE.forbidden.map((group, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-rose-100 p-5 shadow-2xs hover:border-rose-300 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-rose-600" />
                <h3 className="text-sm font-bold text-[#1A1A1A]">
                  {group.category}
                </h3>
              </div>
              <ul className="space-y-1.5">
                {group.items.map((item, i) => (
                  <li key={i} className="text-xs text-[#555] flex items-start gap-2">
                    <span className="text-rose-600 font-bold mt-0.5">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
