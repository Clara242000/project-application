// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Asigură-te că stilurile sunt corecte

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add-portfolio-item">Add Portfolio Item</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
