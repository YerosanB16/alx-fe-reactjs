// src/components/RecipeList.jsx
import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

export default function RecipeList() {
  const recipes = useRecipeStore(state => state.recipes);
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  if (!recipes.length) return <p>No recipes yet. Add one!</p>;

  return (
    <div>
      {recipes.map(recipe => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #ddd',
            padding: 12,
            marginBottom: 12,
            borderRadius: 8
          }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>

          <button
            onClick={() => deleteRecipe(recipe.id)}
            style={{
              marginTop: 8,
              backgroundColor: '#ff4d4d',
              color: 'white',
              border: 'none',
              padding: '6px 12px',
              borderRadius: 4,
              cursor: 'pointer'
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
