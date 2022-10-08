import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNav from './TopNav';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';

export const RecipeContext = createContext();

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  return (
      <Router>
        <RecipeContext.Provider value={{ selectedRecipe, setSelectedRecipe }}>
          <TopNav />
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </RecipeContext.Provider>
      </Router>
  );
};

export default App;

