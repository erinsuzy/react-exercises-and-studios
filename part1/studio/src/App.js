import logo from './logo.svg';
import './App.css';
import RecipeDescription from './components/RecipeDescription';
import RecipeIngredients from './components/Ingredients'
import RecipePhoto from './components/Photos';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="recipePhotoBlock">
        <RecipePhoto />
        <div>
        <RecipeDescription />
        <RecipeIngredients />
          </div>
      </div>
    </div>
  );
}

export default App;
