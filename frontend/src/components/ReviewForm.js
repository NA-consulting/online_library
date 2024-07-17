import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import styled from 'styled-components';
import Navbar from './mise_enPage/Navbar';
import Header from './mise_enPage/Header';
import Footer from './mise_enPage/Footer';

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
    <>
      <Header />
      <FormContainer onSubmit={handleSubmit}>
        <InputGroup>
          <Label>Nom:</Label>
          <Input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </InputGroup>
        <InputGroup>
          <Label>Avis:</Label>
          <Textarea 
            value={review} 
            onChange={(e) => setReview(e.target.value)} 
            required 
          />
        </InputGroup>
        <Button type="submit">Soumettre</Button>
      </FormContainer>
    </>
  );
};

const FormContainer = styled.form`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin: 20px auto;
  max-width: 100%;
  width: 90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 600px) {
    max-width: 500px;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #000; /* Couleur noire pour le label */
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  transition: border-color 0.3s;

  &:focus {
    border-color: #0056b3;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  height: 100px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #0056b3;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #0056b3;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #003d80;
  }
`;

const ReviewContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin: 20px auto;
  max-width: 100%;
  width: 90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center; /* Centrer le texte */
  color: #000; /* Couleur noire pour le texte */

  @media (min-width: 600px) {
    max-width: 500px;
  }
`;

export default ReviewForm;
