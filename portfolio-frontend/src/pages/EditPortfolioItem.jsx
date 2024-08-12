import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/EditPortfolioItem.css'; // Importă fișierul CSS

function EditPortfolioItem() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/portfolio/${id}`)
      .then(response => setItem(response.data))
      .catch(error => console.error('Error fetching item:', error));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/portfolio/${id}`, item)
      .then(() => navigate('/'))
      .catch(error => console.error('Error updating item:', error));
  };

  if (!item) return <p>Loading...</p>;

  return (
    <div className="edit-form-container">
      <h1>Edit Portfolio Item</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Title</label>
          <input type="text" value={item.title} onChange={(e) => setItem({ ...item, title: e.target.value })} required />
        </div>
        <div>
          <label>Description</label>
          <textarea value={item.description} onChange={(e) => setItem({ ...item, description: e.target.value })} required></textarea>
        </div>
        <div>
          <label>Image URL</label>
          <input type="text" value={item.imageUrl} onChange={(e) => setItem({ ...item, imageUrl: e.target.value })} required />
        </div>
        <div>
          <label>Client Link</label>
          <input type="text" value={item.clientLink} onChange={(e) => setItem({ ...item, clientLink: e.target.value })} required />
        </div>
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
}

export default EditPortfolioItem;
