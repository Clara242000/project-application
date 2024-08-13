import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/AddPortfolioItem.css';

function AddPortfolioItem() {
  const [item, setItem] = useState({
    name: '',
    description: '',
    image: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/portfolio', item)
      .then(() => navigate('/'))
      .catch(error => console.error('Error adding item:', error));
  };

  return (
    <div className="add-form-container">
      <h1>Add Portfolio Item</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={item.name}
            onChange={(e) => setItem({ ...item, name: e.target.value })}
          />
        </label>
        <label>
          Description:
          <textarea
            value={item.description}
            onChange={(e) => setItem({ ...item, description: e.target.value })}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            value={item.image}
            onChange={(e) => setItem({ ...item, image: e.target.value })}
          />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddPortfolioItem;
