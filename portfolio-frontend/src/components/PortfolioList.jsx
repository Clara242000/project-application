import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PortfolioList = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/portfolio')
      .then(response => setPortfolioItems(response.data))
      .catch(error => console.error('Error fetching portfolio items:', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/portfolio/${id}`)
      .then(() => setPortfolioItems(portfolioItems.filter(item => item.id !== id)))
      .catch(error => console.error('Error deleting item:', error));
  };

  return (
    <div>
      <h1>Portfolio List</h1>
      <ul>
        {portfolioItems.map(item => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Link to={`/edit/${item.id}`}>Edit</Link>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/add">Add New Item</Link>
    </div>
  );
};

export default PortfolioList;
