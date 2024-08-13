import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/EditPortfolioItem.css';

function EditPortfolioItem() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true); // Adăugați starea de încărcare
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/portfolio/${id}`)
      .then(response => {
        setItem(response.data);
        setLoading(false); // Datele au fost primite, opriți încărcarea
      })
      .catch(error => {
        console.error('Error fetching item:', error);
        setLoading(false); // A apărut o eroare, opriți încărcarea
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/portfolio/${id}`, item)
      .then(() => navigate('/'))
      .catch(error => console.error('Error updating item:', error));
  };

  if (loading) {
    return <div>Loading...</div>; // Afișați mesajul de încărcare
  }

  return (
    <div className="edit-form-container">
      <h1>Edit Portfolio Item</h1>
      <form onSubmit={handleUpdate}>
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
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
}

export default EditPortfolioItem;
