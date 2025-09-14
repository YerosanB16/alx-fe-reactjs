import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',
  filteredRecipes: [],

  // Recipe actions
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  updateRecipe: (id, updatedFields) =>
    set(state => ({
      recipes: state.recipes.map(r => (r.id === id ? { ...r, ...updatedFields } : r))
    })),
  deleteRecipe: (id) =>
    set(state => ({ recipes: state.recipes.filter(r => r.id !== id) })),

  // Search actions
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(term);
  },
  filterRecipes: (term) =>
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      )
    })),

  // Favorites actions
  addFavorite: (recipeId) =>
    set(state => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) =>
    set(state => ({
      favorites: state.favorites.filter(id => id !== recipeId)
    })),

  // Recommendations (mock logic based on favorites)
  generateRecommendations: () =>
    set(state => {
      const recommended = state.recipes.filter(
        recipe => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    })
}));
