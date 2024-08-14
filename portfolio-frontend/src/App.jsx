
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import AddPortfolioItem from '../src/pages/AddPortfolioItem';
import Navbar from '../src/components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-portfolio-item" element={<AddPortfolioItem />} />
      </Routes>
    </Router>
  );
}

export default App;
