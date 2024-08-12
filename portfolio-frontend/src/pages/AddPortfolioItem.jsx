import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/AddPortfolioItem.css';

function AddPortfolioItem() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [clientLink, setClientLink] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', imageFile);
    formData.append('clientLink', clientLink);
    formData.append('status', 'visible');

    axios.post('http://localhost:3000/portfolio', formData)
      .then(() => navigate('/'))
      .catch(error => console.error('Error adding item:', error));
  };

  return (
    <div className="add-form-container">
      <h1>Add Portfolio Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </div>
        <div>
          <label>Image</label>
          <input type="file" onChange={handleImageChange} required />
        </div>
        <div>
          <label>Client Link</label>
          <input type="text" value={clientLink} onChange={(e) => setClientLink(e.target.value)} required />
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddPortfolioItem;
