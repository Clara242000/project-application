import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/PortfolioItemForm.css';

function PortfolioItemForm() {
  const { id } = useParams();
  const [item, setItem] = useState({ title: '', description: '', imageUrl: '', clientLink: '', status: 'hidden' });
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3000/portfolio/${id}`)
        .then(response => setItem(response.data))
        .catch(error => console.error('Error fetching item:', error));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`http://localhost:3000/portfolio/${id}`, item)
        .then(() => navigate('/'))
        .catch(error => console.error('Error updating item:', error));
    } else {
      axios.post('http://localhost:3000/portfolio', item)
        .then(() => navigate('/'))
        .catch(error => console.error('Error adding item:', error));
    }
  };

  return (
    <div className="form-container">
      <h1>{id ? 'Edit' : 'Add'} Portfolio Item</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={item.title}
            onChange={(e) => setItem({ ...item, title: e.target.value })}
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
            value={item.imageUrl}
            onChange={(e) => setItem({ ...item, imageUrl: e.target.value })}
          />
        </label>
        <label>
          Client Link:
          <input
            type="text"
            value={item.clientLink}
            onChange={(e) => setItem({ ...item, clientLink: e.target.value })}
          />
        </label>
        <label>
          Status:
          <select
            value={item.status}
            onChange={(e) => setItem({ ...item, status: e.target.value })}
          >
            <option value="hidden">Hidden</option>
            <option value="visible">Visible</option>
          </select>
        </label>
        <button type="submit">{id ? 'Update' : 'Add'} Item</button>
      </form>
    </div>
  );
}

export default PortfolioItemForm;
