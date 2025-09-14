import React, { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';

export default function RecipeList() {
  const recipes = useRecipeStore(state =>
    state.searchTerm ? state.filteredRecipes : state.recipes
  );
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);
  const favorites = useRecipeStore(state => state.favorites);
  const [editingId, setEditingId] = useState(null);

  if (!recipes.length) return <p>No recipes found.</p>;

  const toggleFavorite = (id) => {
    favorites.includes(id) ? removeFavorite(id) : addFavorite(id);
  };

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id} style={{ border: '1px solid #ddd', padding: 12, marginBottom: 12, borderRadius: 8 }}>
          {editingId === recipe.id ? (
            <EditRecipeForm recipe={recipe} onClose={() => setEditingId(null)} />
          ) : (
            <>
              <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
              </Link>

              <button
                onClick={() => deleteRecipe(recipe.id)}
                style={{ marginTop: 8, backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '6px 12px', borderRadius: 4, cursor: 'pointer', marginRight: 6 }}
              >
                Delete
              </button>

              <button
                onClick={() => setEditingId(recipe.id)}
                style={{ marginTop: 8, backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '6px 12px', borderRadius: 4, cursor: 'pointer', marginRight: 6 }}
              >
                Edit
              </button>

              <button
                onClick={() => toggleFavorite(recipe.id)}
                style={{ marginTop: 8, backgroundColor: favorites.includes(recipe.id) ? '#FFD700' : '#ccc', border: 'none', padding: '6px 12px', borderRadius: 4, cursor: 'pointer' }}
              >
                {favorites.includes(recipe.id) ? '★ Favorite' : '☆ Favorite'}
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
