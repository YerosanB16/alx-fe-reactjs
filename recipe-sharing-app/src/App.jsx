// src/App.jsx
import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

export default function App() {
  return (
    <div style={{ maxWidth: 900, margin: 'auto', padding: 16 }}>
      <header style={{ marginBottom: 24 }}>
        <h1>Recipe Sharing App</h1>
        <p>Built with React + Zustand</p>
      </header>

      <main>
        <AddRecipeForm />
        <RecipeList />
      </main>
    </div>
  );
}
