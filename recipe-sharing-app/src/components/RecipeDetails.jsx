// src/components/RecipeDetails.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams(); // URL param
  const navigate = useNavigate();
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === Number(id))
  );
  const [isEditing, setIsEditing] = useState(false);

  if (!recipe) return <p>Recipe not found!</p>;

  return (
    <div style={{ padding: 20 }}>
      {isEditing ? (
        <EditRecipeForm recipe={recipe} onClose={() => setIsEditing(false)} />
      ) : (
        <>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <DeleteRecipeButton
            recipeId={recipe.id}
            onDelete={() => navigate('/')}
          />
        </>
      )}
    </div>
  );
};

export default RecipeDetails;
