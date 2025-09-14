// src/components/EditRecipeForm.jsx
import React, { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = ({ recipe, onClose }) => {
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipe.id, { title, description });
    onClose(); // close edit form
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 8 }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ padding: 6, marginBottom: 6 }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{ padding: 6, marginBottom: 6 }}
      />
      <button type="submit" style={{ padding: '6px 12px', marginRight: 6 }}>Save</button>
      <button type="button" onClick={onClose} style={{ padding: '6px 12px' }}>Cancel</button>
    </form>
  );
};

export default EditRecipeForm;
