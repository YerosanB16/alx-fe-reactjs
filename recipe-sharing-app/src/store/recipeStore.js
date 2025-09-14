import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],

  // add one recipe object: { id, title, description, ingredients?, prepTime? }
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),

  // replace the recipes list
  setRecipes: (recipes) => set({ recipes }),

  // update an existing recipe by id
  updateRecipe: (id, updatedFields) =>
    set(state => ({
      recipes: state.recipes.map(r => (r.id === id ? { ...r, ...updatedFields } : r))
    })),

  // delete by id
  deleteRecipe: (id) =>
    set(state => ({ recipes: state.recipes.filter(r => r.id !== id) }))
}));
