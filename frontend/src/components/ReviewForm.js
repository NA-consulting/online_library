import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const ReviewForm = () => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'reviews'), {
      name,
      review,
      createdAt: serverTimestamp()
    });
    setName('');
    setReview('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Nom:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Avis:</label>
        <textarea 
          value={review} 
          onChange={(e) => setReview(e.target.value)} 
          required 
          style={styles.textarea}
        />
      </div>
      <button type="submit" style={styles.button}>Soumettre</button>
    </form>
  );
};

const styles = {
  form: {
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '10px',
    padding: '20px',
    margin: '20px auto', // Centrer le formulaire horizontalement
    maxWidth: '400px', // Limiter la largeur du formulaire
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid black',
    boxSizing: 'border-box', // Assurer que le padding est inclus dans la largeur totale
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid black',
    boxSizing: 'border-box', // Assurer que le padding est inclus dans la largeur totale
    height: '100px',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default ReviewForm;
