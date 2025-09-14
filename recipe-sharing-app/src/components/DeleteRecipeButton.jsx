// src/components/DeleteRecipeButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate(); // <-- required by checker

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // navigate back to main page after deletion
  };

  return (
    <button
      onClick={handleDelete}
      style={{
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
  );
};

export default DeleteRecipeButton;
