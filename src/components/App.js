import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNav from './TopNav';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';
import CreateRecipe from './CreateRecipe';
import axios from 'axios';

export const RecipeContext = createContext();

const App = () => {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:3001/recipes').then(res => {
          setRecipes(res.data);
      });
  }, []);

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  

  return (
      <Router>
        <RecipeContext.Provider value={{ selectedRecipe, setSelectedRecipe, recipes }}>
          <TopNav />
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/createRecipe" element={<CreateRecipe />} />
          </Routes>
        </RecipeContext.Provider>
      </Router>
  );
};

export default App;

