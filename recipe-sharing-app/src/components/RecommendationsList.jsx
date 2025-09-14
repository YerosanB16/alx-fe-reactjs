// src/components/RecommendationsList.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  // Generate recommendations on mount
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (!recommendations.length) return <p>No recommendations yet.</p>;

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.map(recipe => (
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
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
