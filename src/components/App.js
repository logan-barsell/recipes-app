import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNav from './TopNav';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';

const App = () => {
  return (
      <Router>
        <TopNav />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </Router>
  );
};

export default App;

