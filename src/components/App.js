import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNav from './Navbars/TopNav';
import RecipeList from './RecipeList';
import RecipeDetails from './FullRecipe/RecipeDetails';
import CreateRecipe from './CreateRecipe';
import axios from 'axios';
import MyRecipes from './MyRecipes';
import Footer from './Footer';

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
        <RecipeContext.Provider value={{ selectedRecipe, setSelectedRecipe, recipes, setRecipes }}>
          <TopNav />
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/createRecipe" element={<CreateRecipe />} />
            <Route path="/myRecipes" element={<MyRecipes />} />
          </Routes>
          <Footer />
        </RecipeContext.Provider>
      </Router>
  );
};

export default App;

