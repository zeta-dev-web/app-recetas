import React, { useState } from 'react';
import { X, Plus, Utensils } from 'lucide-react';
import { Recipe, MealType, CookingMethod } from '../types';
import { PRESET_IMAGE_OPTIONS, COOKING_METHODS } from '../data/initialRecipes';

interface AddRecipeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddRecipe: (newRecipe: Recipe) => void;
}

export const AddRecipeModal: React.FC<AddRecipeModalProps> = ({
  isOpen,
  onClose,
  onAddRecipe
}) => {
  const [title, setTitle] = useState('');
  const [mealType, setMealType] = useState<MealType>('almuerzo');
  const [cookingMethod, setCookingMethod] = useState<CookingMethod>('plancha');
  const [dayNumber, setDayNumber] = useState<number | ''>('');
  const [prepTimeMinutes, setPrepTimeMinutes] = useState(20);
  const [servings, setServings] = useState(1);
  const [calories, setCalories] = useState<number | ''>('');
  const [proteinGrams, setProteinGrams] = useState<number | ''>('');
  const [carbsGrams, setCarbsGrams] = useState<number | ''>('');
  const [fatsGrams, setFatsGrams] = useState<number | ''>('');
  const [description, setDescription] = useState('');
  const [ingredientsText, setIngredientsText] = useState('');
  const [instructionsText, setInstructionsText] = useState('');
  const [tagsText, setTagsText] = useState('');
  const [selectedImage, setSelectedImage] = useState<string>(PRESET_IMAGE_OPTIONS[0].url);
  const [customImageUrl, setCustomImageUrl] = useState('');
  const [useCustomImage, setUseCustomImage] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    // Parse ingredients by newline
    const ingredients = ingredientsText
      .split('\n')
      .map(i => i.trim().replace(/^[-•*]\s*/, ''))
      .filter(Boolean);

    // Parse instructions by newline
    const instructions = instructionsText
      .split('\n')
      .map(i => i.trim().replace(/^\d+[.)]\s*/, ''))
      .filter(Boolean);

    // Parse tags by comma or space
    const tags = tagsText
      .split(/[,#]/)
      .map(t => t.trim())
      .filter(Boolean);

    const imageUrl = useCustomImage && customImageUrl.trim() ? customImageUrl.trim() : selectedImage;

    const newRecipe: Recipe = {
      id: 'custom-' + Date.now(),
      title: title.trim(),
      mealType,
      cookingMethod,
      dayNumber: dayNumber !== '' ? Number(dayNumber) : undefined,
      prepTimeMinutes: Number(prepTimeMinutes) || 15,
      servings: Number(servings) || 1,
      calories: calories !== '' ? Number(calories) : undefined,
      proteinGrams: proteinGrams !== '' ? Number(proteinGrams) : undefined,
      carbsGrams: carbsGrams !== '' ? Number(carbsGrams) : undefined,
      fatsGrams: fatsGrams !== '' ? Number(fatsGrams) : undefined,
      imageUrl,
      description: description.trim() || 'Receta personalizada para tu plan nutricional.',
      ingredients: ingredients.length > 0 ? ingredients : ['Ingredientes según preferencia'],
      instructions: instructions.length > 0 ? instructions : ['Preparar según las instrucciones deseadas'],
      tags: tags.length > 0 ? tags : ['Personalizada'],
      isCustom: true,
      createdAt: new Date().toISOString().split('T')[0]
    };

    onAddRecipe(newRecipe);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-black/[0.08] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-black/[0.06] flex items-center justify-between bg-[#FAF9F6]">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-[#181818]">
              Agregar nueva receta
            </h2>
            <p className="text-xs text-[#737373]">
              Incorpora nuevas opciones saludables a tu plan de dieta
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-stone-200 text-[#555] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="overflow-y-auto p-6 space-y-5 text-xs">
          {/* Title */}
          <div>
            <label className="block font-medium text-[#222] mb-1">
              Nombre del plato <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Ej. Pechuga de pollo al horno con finas hierbas y batata"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs border border-black/15 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2C523C]"
            />
          </div>

          {/* Meal Type, Cooking Method, Day, Prep Time & Servings */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div>
              <label className="block font-medium text-[#222] mb-1">
                Momento del día
              </label>
              <select
                value={mealType}
                onChange={e => setMealType(e.target.value as MealType)}
                className="w-full px-3 py-2 text-xs bg-white border border-black/15 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2C523C]"
              >
                <option value="almuerzo">Almuerzo</option>
                <option value="cena">Cena</option>
                <option value="desayuno">Desayuno</option>
                <option value="merienda">Merienda</option>
                <option value="snack">Snack / Colación</option>
              </select>
            </div>

            <div>
              <label className="block font-medium text-[#222] mb-1">
                Tipo de cocción
              </label>
              <select
                value={cookingMethod}
                onChange={e => setCookingMethod(e.target.value as CookingMethod)}
                className="w-full px-3 py-2 text-xs bg-white border border-black/15 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2C523C]"
              >
                <option value="plancha">A la plancha / Sartén</option>
                <option value="horno">Al horno</option>
                <option value="salteado_wok">Salteado / Wok</option>
                <option value="hervido_vapor">Hervido / Al vapor</option>
                <option value="sin_coccion">Sin cocción / Ensalada</option>
              </select>
            </div>

            <div>
              <label className="block font-medium text-[#222] mb-1">
                Tiempo prep. (min)
              </label>
              <input
                type="number"
                min="1"
                value={prepTimeMinutes}
                onChange={e => setPrepTimeMinutes(Number(e.target.value))}
                className="w-full px-3 py-2 text-xs border border-black/15 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2C523C]"
              />
            </div>

            <div>
              <label className="block font-medium text-[#222] mb-1">
                Día del plan (opcional)
              </label>
              <input
                type="number"
                min="1"
                max="30"
                placeholder="Ej: 1"
                value={dayNumber}
                onChange={e => setDayNumber(e.target.value === '' ? '' : Number(e.target.value))}
                className="w-full px-3 py-2 text-xs border border-black/15 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2C523C]"
              />
            </div>
          </div>

          {/* Nutritional Info (Optional) */}
          <div>
            <label className="block font-medium text-[#222] mb-1">
              Valores nutricionales aproximados (opcional)
            </label>
            <div className="grid grid-cols-4 gap-2">
              <div>
                <input
                  type="number"
                  placeholder="Kcal"
                  value={calories}
                  onChange={e => setCalories(e.target.value === '' ? '' : Number(e.target.value))}
                  className="w-full px-2.5 py-1.5 text-xs border border-black/15 rounded-lg"
                />
                <span className="text-[10px] text-[#777] block text-center mt-0.5">Calorías</span>
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Prot (g)"
                  value={proteinGrams}
                  onChange={e => setProteinGrams(e.target.value === '' ? '' : Number(e.target.value))}
                  className="w-full px-2.5 py-1.5 text-xs border border-black/15 rounded-lg"
                />
                <span className="text-[10px] text-[#777] block text-center mt-0.5">Proteína</span>
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Carbs (g)"
                  value={carbsGrams}
                  onChange={e => setCarbsGrams(e.target.value === '' ? '' : Number(e.target.value))}
                  className="w-full px-2.5 py-1.5 text-xs border border-black/15 rounded-lg"
                />
                <span className="text-[10px] text-[#777] block text-center mt-0.5">Carbos</span>
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Grasas (g)"
                  value={fatsGrams}
                  onChange={e => setFatsGrams(e.target.value === '' ? '' : Number(e.target.value))}
                  className="w-full px-2.5 py-1.5 text-xs border border-black/15 rounded-lg"
                />
                <span className="text-[10px] text-[#777] block text-center mt-0.5">Grasas</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium text-[#222] mb-1">
              Descripción breve
            </label>
            <textarea
              rows={2}
              placeholder="Describe el plato, sus beneficios o textura..."
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-black/15 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2C523C]"
            />
          </div>

          {/* Image Selection */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="font-medium text-[#222]">
                Fotografía del plato
              </label>
              <button
                type="button"
                onClick={() => setUseCustomImage(!useCustomImage)}
                className="text-xs text-[#2C523C] hover:underline cursor-pointer"
              >
                {useCustomImage ? 'Elegir de fotos predeterminadas' : 'Usar URL de imagen personalizada'}
              </button>
            </div>

            {useCustomImage ? (
              <input
                type="url"
                placeholder="https://ejemplo.com/mi-plato.jpg"
                value={customImageUrl}
                onChange={e => setCustomImageUrl(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-black/15 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2C523C]"
              />
            ) : (
              <div className="grid grid-cols-5 gap-2">
                {PRESET_IMAGE_OPTIONS.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedImage(img.url)}
                    className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                      selectedImage === img.url
                        ? 'border-[#2C523C] ring-2 ring-[#2C523C]/30 scale-102'
                        : 'border-transparent opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block font-medium text-[#222] mb-1">
              Ingredientes (un ingrediente por línea)
            </label>
            <textarea
              rows={4}
              placeholder="150g pechuga de pollo&#10;1 aguacate maduro&#10;1 cda aceite de oliva virgen extra&#10;Pizca de sal y pimienta"
              value={ingredientsText}
              onChange={e => setIngredientsText(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-black/15 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2C523C] font-mono text-[11px]"
            />
          </div>

          {/* Instructions */}
          <div>
            <label className="block font-medium text-[#222] mb-1">
              Instrucciones de preparación (un paso por línea)
            </label>
            <textarea
              rows={4}
              placeholder="Sazonar el pollo con las especias y el aceite.&#10;Cocinar en sartén 4 minutos por lado hasta dorar.&#10;Servir acompañado de las verduras frescas."
              value={instructionsText}
              onChange={e => setInstructionsText(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-black/15 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2C523C]"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block font-medium text-[#222] mb-1">
              Etiquetas (separadas por comas, ej: Alto en Proteína, Rápido, Sin Gluten)
            </label>
            <input
              type="text"
              placeholder="Alto en Proteína, Sin Gluten, Rápido"
              value={tagsText}
              onChange={e => setTagsText(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-black/15 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2C523C]"
            />
          </div>

          {/* Buttons */}
          <div className="pt-4 border-t border-black/[0.06] flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs text-[#666] hover:text-[#222] transition-colors cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-semibold text-white bg-[#244230] hover:bg-[#1A3324] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Guardar receta</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
