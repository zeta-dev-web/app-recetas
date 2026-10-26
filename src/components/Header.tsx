import React from 'react';
import { Plus, Utensils, CalendarDays, ShoppingCart, BookOpen, HardDriveDownload, Sparkles } from 'lucide-react';
import { ActiveTab } from '../types';

interface HeaderProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  onOpenAddModal: () => void;
  onOpenExportModal: () => void;
  onOpenAiChat: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  onOpenAddModal,
  onOpenExportModal,
  onOpenAiChat
}) => {
  return (
    <>
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-black/[0.06] transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-4">
          {/* Zone 1: Brand wordmark */}
          <button
            onClick={() => onTabChange('recipes')}
            className="text-left group cursor-pointer focus:outline-none flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#2C523C] shrink-0" />
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#1A1A1A] lowercase">
                zeta-keto
              </span>
            </div>
          </button>

          {/* Zone 2: Desktop Navigation Links (Hidden on mobile) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
            <button
              onClick={() => onTabChange('recipes')}
              className={`whitespace-nowrap transition-colors pb-0.5 cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'recipes'
                  ? 'text-[#1A1A1A] border-b-2 border-[#2C523C] font-semibold'
                  : 'text-[#666666] hover:text-[#1A1A1A]'
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span>Recetas (30 Días)</span>
            </button>
            <button
              onClick={() => onTabChange('history')}
              className={`whitespace-nowrap transition-colors pb-0.5 cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'history'
                  ? 'text-[#1A1A1A] border-b-2 border-[#2C523C] font-semibold'
                  : 'text-[#666666] hover:text-[#1A1A1A]'
              }`}
            >
              <CalendarDays className="w-4 h-4" />
              <span>Bitácora (7 Días)</span>
            </button>
            <button
              onClick={() => onTabChange('shopping')}
              className={`whitespace-nowrap transition-colors pb-0.5 cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'shopping'
                  ? 'text-[#1A1A1A] border-b-2 border-[#2C523C] font-semibold'
                  : 'text-[#666666] hover:text-[#1A1A1A]'
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Compras</span>
            </button>
            <button
              onClick={() => onTabChange('guide')}
              className={`whitespace-nowrap transition-colors pb-0.5 cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'guide'
                  ? 'text-[#1A1A1A] border-b-2 border-[#2C523C] font-semibold'
                  : 'text-[#666666] hover:text-[#1A1A1A]'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Guía de Alimentos</span>
            </button>
            <button
              onClick={onOpenExportModal}
              className="text-[#777777] hover:text-[#1A1A1A] whitespace-nowrap transition-colors cursor-pointer text-xs"
            >
              Copia de seguridad
            </button>
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenAiChat}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#183B28] bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-900/15 rounded-lg transition-colors whitespace-nowrap shadow-3xs cursor-pointer min-h-[40px]"
              title="Consultar a Zeta-Keto AI"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span className="hidden sm:inline">Asistente AI</span>
              <span className="sm:hidden">AI</span>
            </button>

            <button
              onClick={onOpenExportModal}
              title="Copia de seguridad y exportar"
              className="md:hidden p-2 text-[#666] hover:text-[#1A1A1A] rounded-lg border border-black/10 hover:bg-stone-100 transition-colors cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
            >
              <HardDriveDownload className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenAddModal}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 text-xs font-semibold text-white bg-[#244230] hover:bg-[#1A3324] rounded-lg transition-colors whitespace-nowrap shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2C523C] min-h-[40px]"
            >
              <Plus className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Nueva receta</span>
              <span className="xs:hidden">Receta</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar (Visible only on mobile screens < 768px) */}
      <nav
        aria-label="Navegación móvil"
        className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-t border-black/[0.08] px-2 py-1.5 shadow-[0_-4px_16px_rgba(0,0,0,0.05)]"
      >
        <div className="grid grid-cols-4 gap-1 max-w-md mx-auto">
          {/* Tab 1: Recetas */}
          <button
            onClick={() => onTabChange('recipes')}
            className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all cursor-pointer min-h-[48px] ${
              activeTab === 'recipes'
                ? 'text-[#2C523C] font-bold bg-[#2C523C]/10'
                : 'text-[#666666] hover:text-[#1A1A1A] hover:bg-black/[0.02]'
            }`}
          >
            <Utensils className={`w-5 h-5 mb-0.5 ${activeTab === 'recipes' ? 'stroke-[2.5]' : 'stroke-[1.75]'}`} />
            <span className="text-[10px] tracking-tight leading-none">Recetas</span>
          </button>

          {/* Tab 2: Bitácora */}
          <button
            onClick={() => onTabChange('history')}
            className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all cursor-pointer min-h-[48px] ${
              activeTab === 'history'
                ? 'text-[#2C523C] font-bold bg-[#2C523C]/10'
                : 'text-[#666666] hover:text-[#1A1A1A] hover:bg-black/[0.02]'
            }`}
          >
            <CalendarDays className={`w-5 h-5 mb-0.5 ${activeTab === 'history' ? 'stroke-[2.5]' : 'stroke-[1.75]'}`} />
            <span className="text-[10px] tracking-tight leading-none">Bitácora</span>
          </button>

          {/* Tab 3: Compras */}
          <button
            onClick={() => onTabChange('shopping')}
            className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all cursor-pointer min-h-[48px] ${
              activeTab === 'shopping'
                ? 'text-[#2C523C] font-bold bg-[#2C523C]/10'
                : 'text-[#666666] hover:text-[#1A1A1A] hover:bg-black/[0.02]'
            }`}
          >
            <ShoppingCart className={`w-5 h-5 mb-0.5 ${activeTab === 'shopping' ? 'stroke-[2.5]' : 'stroke-[1.75]'}`} />
            <span className="text-[10px] tracking-tight leading-none">Compras</span>
          </button>

          {/* Tab 4: Guía */}
          <button
            onClick={() => onTabChange('guide')}
            className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all cursor-pointer min-h-[48px] ${
              activeTab === 'guide'
                ? 'text-[#2C523C] font-bold bg-[#2C523C]/10'
                : 'text-[#666666] hover:text-[#1A1A1A] hover:bg-black/[0.02]'
            }`}
          >
            <BookOpen className={`w-5 h-5 mb-0.5 ${activeTab === 'guide' ? 'stroke-[2.5]' : 'stroke-[1.75]'}`} />
            <span className="text-[10px] tracking-tight leading-none">Guía Keto</span>
          </button>
        </div>
      </nav>
    </>
  );
};

