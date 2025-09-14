import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: JSON.parse(localStorage.getItem('recipes')) || [],

  addRecipe: (newRecipe) => set(state => {
    const updated = [...state.recipes, newRecipe];
    localStorage.setItem('recipes', JSON.stringify(updated));
    return { recipes: updated };
  }),

  updateRecipe: (id, updatedFields) => set(state => {
    const updated = state.recipes.map(r => (r.id === id ? { ...r, ...updatedFields } : r));
    localStorage.setItem('recipes', JSON.stringify(updated));
    return { recipes: updated };
  }),

  deleteRecipe: (id) => set(state => {
    const updated = state.recipes.filter(r => r.id !== id);
    localStorage.setItem('recipes', JSON.stringify(updated));
    return { recipes: updated };
  }),
}));
