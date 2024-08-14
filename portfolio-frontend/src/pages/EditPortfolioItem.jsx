
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPortfolioItem = () => {
  const { id } = useParams(); 
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate(); 

  useEffect(() => {
    if (!id) {
      console.error('No ID found in URL');
      return;
    }

    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/portfolio/${id}`);
        const { title, description, image } = response.data;
        setTitle(title);
        setDescription(description);
        setImage(image);
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };

    fetchItem();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/portfolio/${id}`, { title, description, image });
      alert('Item updated successfully!');
      navigate('/'); 
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <div className="edit-portfolio-item">
      <h1>Edit Portfolio Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
};

export default EditPortfolioItem;
