import React, { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

export default function AddRecipeForm() {
  const addRecipe = useRecipeStore(state => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addRecipe({
      id: Date.now(),
      title: title.trim(),
      description: description.trim()
    });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe title"
          required
          style={{ width: '100%', padding: 8, marginBottom: 8 }}
        />
      </div>
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Short description"
          style={{ width: '100%', padding: 8, marginBottom: 8 }}
        />
      </div>
      <button type="submit">Add Recipe</button>
    </form>
  );
}
