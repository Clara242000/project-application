// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddPortfolioItem from './pages/AddPortfolioItem';
import EditPortfolioItem from './pages/EditPortfolioItem';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddPortfolioItem />} />
        <Route path="/edit/:id" element={<EditPortfolioItem />} />
      </Routes>
    </Router>
  );
}

export default App;
