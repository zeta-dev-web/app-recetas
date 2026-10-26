import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Send,
  Sparkles,
  Bot,
  User,
  Copy,
  Check,
  RotateCcw,
  Utensils,
  ChevronRight,
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import { Recipe } from '../types';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: number;
}

interface KetoAiChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeRecipeContext?: Recipe | null;
  onClearRecipeContext?: () => void;
}

export const KetoAiChatModal: React.FC<KetoAiChatModalProps> = ({
  isOpen,
  onClose,
  activeRecipeContext,
  onClearRecipeContext,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome',
      sender: 'ai',
      text: activeRecipeContext
        ? `¡Hola! Soy **Zeta-Keto AI**. Tengo en pantalla la receta **"${activeRecipeContext.title}"**.\n\n¿Tienes alguna duda sobre la cocción, cómo calcular las porciones de **Él** y **Ella**, o necesitas reemplazar algún ingrediente que no tienes en casa?`
        : `¡Hola! Soy **Zeta-Keto AI**, tu asistente culinario y nutricional del Plan Cetogénico de 30 Días.\n\nPuedes preguntarme sobre:\n• **Reemplazos de alimentos** (carnes, verduras, quesos o grasas).\n• **Cálculo de porciones** para Él (~58%) y para Ella (~42%).\n• **Qué alimentos están permitidos o prohibidos** para mantener la cetosis limpia.\n• **Técnicas de preparación** de cualquier almuerzo o cena.`,
      timestamp: Date.now(),
    },
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll when messages update
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  // Focus input on open only on desktop screens to prevent iPhone virtual keyboard jump and zoom
  useEffect(() => {
    if (isOpen) {
      if (typeof window !== 'undefined' && window.innerWidth >= 640) {
        setTimeout(() => {
          inputRef.current?.focus();
        }, 150);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const quickPrompts = activeRecipeContext
    ? [
        `¿Por qué puedo reemplazar un ingrediente de esta receta?`,
        `¿Cómo divido exactamente los gramos para Él y para Ella?`,
        `¿Qué guarnición baja en carbos puedo añadir?`,
        `¿Qué técnica de cocción recomiendas para que quede jugosa?`
      ]
    : [
        `¿Cómo calcular las porciones de Él vs Ella en una comida?`,
        `¿Qué verduras tienen menos carbohidratos netos en keto?`,
        `¿Puedo tomar café con leche o mate amargo?`,
        `¿Qué grasas saludables son las mejores para cocinar?`
      ];

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    setErrorMessage(null);
    setInputMessage('');

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    try {
      // Call server-side API proxy
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          message: text,
          recipeContext: activeRecipeContext ? {
            title: activeRecipeContext.title,
            mealType: activeRecipeContext.mealType,
            cookingMethod: activeRecipeContext.cookingMethod,
            dayNumber: activeRecipeContext.dayNumber,
            prepTimeMinutes: activeRecipeContext.prepTimeMinutes,
            calories: activeRecipeContext.calories,
            ingredients: activeRecipeContext.ingredients,
            differentialIngredients: activeRecipeContext.differentialIngredients,
            cookedServing: activeRecipeContext.cookedServing,
          } : undefined,
          history: messages.slice(-6).map(m => ({
            sender: m.sender,
            text: m.text,
          })),
        }),
      });

      const contentType = response.headers.get('content-type') || '';
      let data: any = null;

      if (contentType.includes('application/json')) {
        try {
          data = await response.json();
        } catch (jsonErr: any) {
          throw new Error('Respuesta inválida del servidor. Por favor, reintenta en unos instantes.');
        }
      } else {
        const rawText = await response.text();
        if (rawText.trim().startsWith('<')) {
          throw new Error('El servidor de backend no está respondiendo en /api/chat. Si estás en una vista estática, asegúrate de que el servidor Express esté activo.');
        }
        try {
          data = JSON.parse(rawText);
        } catch {
          throw new Error(rawText || `Error inesperado del servidor (${response.status})`);
        }
      }

      if (!response.ok) {
        throw new Error(data?.error || `Error del servidor (${response.status})`);
      }

      const aiReplyText = data?.reply || 'No obtuve respuesta del asistente. Intenta reformular tu consulta.';

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: aiReplyText,
        timestamp: Date.now(),
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (err: any) {
      console.error('Chat error:', err);
      let displayError = err?.message || 'No se pudo conectar con el servidor. Verifica tu conexión o intenta nuevamente.';

      if (typeof displayError === 'string') {
        if (displayError.includes('Unexpected token') || displayError.includes('<!doctype') || displayError.includes('is not valid JSON')) {
          displayError = 'El servidor no devolvió formato JSON válido. El servicio se está reiniciando o requiere el backend activo.';
        } else if (displayError.includes('503') || displayError.includes('high demand') || displayError.includes('UNAVAILABLE')) {
          displayError = 'Los servidores de Google Gemini están experimentando alta demanda momentánea. Por favor, pulsa "Reintentar" en unos segundos.';
        } else if (displayError.includes('429') || displayError.includes('RESOURCE_EXHAUSTED')) {
          displayError = 'Se ha superado temporalmente la cuota de consultas. Por favor aguarda un momento y reintenta.';
        } else if (displayError.trim().startsWith('{')) {
          try {
            const parsed = JSON.parse(displayError);
            if (parsed?.error?.message) {
              displayError = parsed.error.code === 503 || parsed.error.status === 'UNAVAILABLE'
                ? 'Los servidores de Google Gemini están experimentando alta demanda momentánea. Por favor, pulsa "Reintentar" en unos segundos.'
                : parsed.error.message;
            }
          } catch {
            // Keep displayError
          }
        }
      }

      setErrorMessage(displayError);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'ai',
        text: `Conversación reiniciada. ¿En qué más puedo orientarte sobre tu alimentación keto?`,
        timestamp: Date.now(),
      },
    ]);
    setErrorMessage(null);
  };

  // Helper to render markdown bold and linebreaks cleanly
  const renderFormattedText = (rawText: string) => {
    const lines = rawText.split('\n');
    return lines.map((line, idx) => {
      // Parse **bold** markers
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const formattedParts = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={pIdx} className="font-bold text-[#183B28]">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      return (
        <span key={idx} className="block min-h-[1.2em]">
          {formattedParts}
        </span>
      );
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end sm:justify-center sm:items-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border-t sm:border border-black/[0.08] flex flex-col h-[100dvh] sm:h-[85vh] max-h-[100dvh] sm:max-h-[760px] overflow-hidden overscroll-contain"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-4 sm:px-5 py-3.5 bg-[#FAF9F6] border-b border-black/[0.08] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#2C523C] text-white flex items-center justify-center shadow-xs">
              <Sparkles className="w-5 h-5 text-emerald-200" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-[#181818] tracking-tight">Zeta-Keto AI</h3>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#2C523C] bg-emerald-100/70 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2C523C] animate-pulse"></span>
                  Online
                </span>
              </div>
              <p className="text-[11px] text-[#666]">
                Asistente y Guía del Plan Keto 30 Días
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleResetChat}
              title="Reiniciar chat"
              className="p-2 text-[#777] hover:text-[#2C523C] hover:bg-black/5 rounded-lg transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-[#555] hover:text-[#111] hover:bg-black/5 rounded-lg transition-colors cursor-pointer"
              aria-label="Cerrar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Active Recipe Context Bar */}
        {activeRecipeContext && (
          <div className="px-4 py-2 bg-emerald-50/70 border-b border-emerald-900/10 flex items-center justify-between gap-2 shrink-0 text-xs">
            <div className="flex items-center gap-2 truncate text-[#183B28]">
              <Utensils className="w-3.5 h-3.5 shrink-0 text-[#2C523C]" />
              <span className="truncate">
                Contexto activo: <strong className="font-semibold">{activeRecipeContext.title}</strong>
              </span>
            </div>
            {onClearRecipeContext && (
              <button
                type="button"
                onClick={onClearRecipeContext}
                className="text-[11px] text-[#666] hover:text-[#2C523C] underline cursor-pointer shrink-0"
              >
                Quitar contexto
              </button>
            )}
          </div>
        )}

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-[#FCFCFA]">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.sender === 'ai' && (
                <div className="w-7 h-7 rounded-full bg-[#2C523C] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-3xs">
                  <Bot className="w-4 h-4 text-emerald-200" />
                </div>
              )}

              <div
                className={`relative group max-w-[85%] sm:max-w-[78%] rounded-2xl px-4 py-3 text-xs sm:text-[13px] leading-relaxed shadow-3xs ${
                  msg.sender === 'user'
                    ? 'bg-[#2C523C] text-white rounded-tr-xs'
                    : 'bg-white text-[#222] border border-black/[0.08] rounded-tl-xs'
                }`}
              >
                <div className="space-y-1">
                  {renderFormattedText(msg.text)}
                </div>

                {/* Copy button for AI replies */}
                {msg.sender === 'ai' && msg.id !== 'welcome' && (
                  <button
                    onClick={() => handleCopyText(msg.text, msg.id)}
                    className="absolute top-2 right-2 p-1 rounded-md text-[#888] hover:text-[#2C523C] hover:bg-stone-100 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    title="Copiar texto"
                  >
                    {copiedId === msg.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                )}
              </div>

              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-full bg-stone-300 text-stone-700 flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex items-start gap-2.5 justify-start">
              <div className="w-7 h-7 rounded-full bg-[#2C523C] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-3xs">
                <Bot className="w-4 h-4 text-emerald-200 animate-pulse" />
              </div>
              <div className="bg-white border border-black/[0.08] rounded-2xl rounded-tl-xs px-4 py-3 text-xs text-[#555] flex items-center gap-2 shadow-3xs">
                <span className="w-2 h-2 rounded-full bg-[#2C523C] animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-[#2C523C] animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-[#2C523C] animate-bounce [animation-delay:0.4s]"></span>
                <span className="text-[#666] ml-1">Consultando pautas del plan keto...</span>
              </div>
            </div>
          )}

          {/* Error Message */}
          {errorMessage && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-start gap-2 shadow-3xs">
              <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-semibold mb-0.5">Ocurrió un problema</p>
                <p className="mb-2 leading-relaxed">{errorMessage}</p>
                {messages.length > 0 && messages[messages.length - 1].sender === 'user' && (
                  <button
                    type="button"
                    onClick={() => {
                      const lastUserMsg = messages[messages.length - 1].text;
                      setMessages(prev => prev.slice(0, -1));
                      handleSendMessage(lastUserMsg);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium text-xs transition-colors shadow-xs"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reintentar ahora
                  </button>
                )}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2.5 bg-[#FAF9F6] border-t border-black/[0.06] overflow-x-auto flex items-center gap-2 no-scrollbar shrink-0">
          <span className="text-[10px] text-[#777] font-semibold uppercase tracking-wider shrink-0 flex items-center gap-1">
            <HelpCircle className="w-3 h-3 text-[#2C523C]" />
            Sugerencias:
          </span>
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              type="button"
              disabled={isLoading}
              onClick={() => handleSendMessage(prompt)}
              className="text-[11px] font-medium text-[#2C523C] bg-white hover:bg-emerald-50 border border-emerald-900/15 px-3 py-1.5 rounded-full transition-colors whitespace-nowrap shrink-0 shadow-3xs cursor-pointer disabled:opacity-50"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar with iOS safe area inset support */}
        <div className="p-3 sm:p-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-white border-t border-black/[0.08] shrink-0">
          <div className="flex items-center gap-2 bg-[#F6F5F2] border border-black/10 focus-within:border-[#2C523C] rounded-xl px-3 py-2 transition-colors">
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={e => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => {
                setTimeout(() => {
                  messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
                }, 250);
              }}
              disabled={isLoading}
              placeholder={
                activeRecipeContext
                  ? `Pregunta sobre "${activeRecipeContext.title}" o reemplazos...`
                  : 'Pregunta sobre recetas, porciones Él/Ella, reemplazos...'
              }
              className="w-full bg-transparent text-[16px] sm:text-sm text-[#1A1A1A] placeholder:text-[#888] focus:outline-none"
            />
            <button
              type="button"
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim() || isLoading}
              className="w-9 h-9 rounded-lg bg-[#2C523C] hover:bg-[#1E3B2A] text-white flex items-center justify-center shrink-0 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-3xs"
              aria-label="Enviar pregunta"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[10px] text-[#888] text-center mt-2">
            Zeta-Keto AI responde según las reglas y proporciones del plan cetogénico (Él y Ella).
          </p>
        </div>
      </div>
    </div>
  );
};
