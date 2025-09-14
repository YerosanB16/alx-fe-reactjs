// src/components/FavoritesList.jsx
import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore(state =>
    state.favorites.map(id => state.recipes.find(recipe => recipe.id === id))
  );

  if (!favorites.length) return <p>No favorites yet.</p>;

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map(recipe => (
        <div key={recipe.id} style={{ border: '1px solid #ddd', padding: 12, marginBottom: 12, borderRadius: 8 }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
