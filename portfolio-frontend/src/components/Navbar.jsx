import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Importă stilurile specifice pentru Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/add" className="nav-link">Add Portfolio Item</Link>
        </li>
        <li className="nav-item">
          <Link to="/edit/1" className="nav-link">Edit Portfolio Item</Link> {/* Exemplu static, va trebui actualizat dinamic */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
