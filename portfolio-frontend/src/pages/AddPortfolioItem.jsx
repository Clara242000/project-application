
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/AddPortfolioItem.css';

const AddPortfolioItem = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:3000/portfolio');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/portfolio', {
        title,
        description,
        image,
      });
      setItems([...items, response.data]);
      setTitle('');
      setDescription('');
      setImage('');
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

 
  const handleEdit = async (id) => {
    try {
      const updatedItem = {
        title,
        description,
        image,
      };
      await axios.put(`http://localhost:3000/portfolio/${id}`, updatedItem);
      setItems(items.map(item => (item.id === id ? { ...item, ...updatedItem } : item)));
      setEditingItem(null);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/portfolio/${id}`);
      setItems(items.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="add-portfolio-item-container">
      <h2>Add Portfolio Item</h2>
      <form onSubmit={handleAdd}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>
        <button type="submit">Add Item</button>
      </form>

      <div className="existing-items">
        <h2>Edit Items</h2>
        {items.map(item => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <img src={item.image} alt={item.title} />
            <button onClick={() => {
              setTitle(item.title);
              setDescription(item.description);
              setImage(item.image);
              setEditingItem(item.id);
            }}>
              Edit
            </button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        ))}
      </div>

      {editingItem && (
        <div className="edit-form-container">
          <h2>Edit Item</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleEdit(editingItem);
          }}>
            <div>
              <label>Title:</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
              <label>Description:</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
              <label>Image URL:</label>
              <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
            </div>
            <button type="submit">Update Item</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddPortfolioItem;
