import React, { useState } from 'react';
import { X, Download, Upload, RotateCcw, Check, Copy } from 'lucide-react';
import { Recipe, PrepLog } from '../types';
import { INITIAL_RECIPES } from '../data/initialRecipes';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipes: Recipe[];
  logs: PrepLog[];
  onImportData: (recipes: Recipe[], logs: PrepLog[]) => void;
  onResetDefaults: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  recipes,
  logs,
  onImportData,
  onResetDefaults
}) => {
  const [importText, setImportText] = useState('');
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const exportData = {
    app: 'Savia Diet Recipes',
    version: '1.0',
    exportDate: new Date().toISOString(),
    recipes,
    logs
  };

  const jsonStr = JSON.stringify(exportData, null, 2);

  const handleDownload = () => {
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `savia-recetas-dieta-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonStr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleImport = () => {
    setErrorMsg('');
    setSuccessMsg('');
    try {
      const parsed = JSON.parse(importText);
      if (!parsed.recipes || !Array.isArray(parsed.recipes)) {
        throw new Error('El JSON no contiene un array válido de recetas.');
      }
      onImportData(parsed.recipes, Array.isArray(parsed.logs) ? parsed.logs : []);
      setSuccessMsg('¡Datos importados con éxito!');
      setImportText('');
    } catch (err: any) {
      setErrorMsg(err?.message || 'Error al procesar el formato JSON.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div
        className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-black/[0.08] overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="px-6 py-4 border-b border-black/[0.06] flex items-center justify-between bg-[#FAF9F6]">
          <h3 className="text-base font-bold text-[#181818]">
            Copia de seguridad y exportación
          </h3>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full hover:bg-stone-200 text-[#555] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-6 text-xs text-[#333]">
          <div>
            <h4 className="font-semibold text-sm text-[#181818] mb-1">
              Descargar tus recetas e historial
            </h4>
            <p className="text-[#666] mb-3">
              Guarda tus recetas personalizadas y tu historial de comidas en tu dispositivo sin necesidad de cuentas ni registros.
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleDownload}
                className="px-4 py-2 bg-[#2C523C] hover:bg-[#234230] text-white rounded-lg font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Descargar archivo JSON</span>
              </button>
              <button
                onClick={handleCopy}
                className="px-3 py-2 border border-black/15 hover:bg-stone-50 rounded-lg text-[#555] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copiado' : 'Copiar al portapapeles'}</span>
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-black/[0.06]">
            <h4 className="font-semibold text-sm text-[#181818] mb-1">
              Importar recetas o restaurar copia
            </h4>
            <p className="text-[#666] mb-2">
              Pega aquí el contenido JSON para cargar tus recetas anteriores:
            </p>
            <textarea
              rows={3}
              value={importText}
              onChange={e => setImportText(e.target.value)}
              placeholder='{"recipes": [...], "logs": [...]}'
              className="w-full p-2 border border-black/15 rounded-lg text-[11px] font-mono focus:outline-none focus:ring-1 focus:ring-[#2C523C]"
            />
            {errorMsg && (
              <p className="text-rose-600 text-[11px] mt-1 font-medium">{errorMsg}</p>
            )}
            {successMsg && (
              <p className="text-emerald-700 text-[11px] mt-1 font-medium">{successMsg}</p>
            )}
            <div className="mt-2 flex justify-end">
              <button
                onClick={handleImport}
                disabled={!importText.trim()}
                className="px-3.5 py-1.5 bg-neutral-900 hover:bg-neutral-800 disabled:opacity-40 text-white rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Importar datos</span>
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
            <div>
              <h5 className="font-medium text-[#222]">Restablecer recetas originales</h5>
              <p className="text-[11px] text-[#777]">Restaura el catálogo inicial de recetas saludables de ejemplo.</p>
            </div>
            <button
              onClick={() => {
                if (confirm('¿Restablecer al catálogo inicial de recetas?')) {
                  onResetDefaults();
                  onClose();
                }
              }}
              className="px-3 py-1.5 text-xs text-stone-600 hover:text-stone-900 border border-stone-200 hover:bg-stone-50 rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restablecer</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
