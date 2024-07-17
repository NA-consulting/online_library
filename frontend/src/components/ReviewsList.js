import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import styled from 'styled-components';

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'reviews'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const reviewsArray = [];
      querySnapshot.forEach((doc) => {
        reviewsArray.push({ id: doc.id, ...doc.data() });
      });
      setReviews(reviewsArray);
    });

    return () => unsubscribe();
  }, []);

  return (
    <ReviewContainer>
      <Title>Avis:</Title>
      {reviews.map(review => (
        <Review key={review.id}>
          <ReviewName>{review.name}</ReviewName>
          <ReviewText>{review.review}</ReviewText>
        </Review>
      ))}
    </ReviewContainer>
  );
};

const ReviewContainer = styled.div`
  max-width: 100%;
  width: 90%;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 600px) {
    max-width: 600px;
  }
`;

const Title = styled.h2`
  text-align: center;
  color: #000;
`;

const Review = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin: 10px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #000;
`;

const ReviewName = styled.h3`
  margin-bottom: 10px;
  color: #000;
`;

const ReviewText = styled.p`
  margin: 0;
  color: #000;
  text-align: left; /* Justifier le texte */
  overrflow-wrap: break-word;
  max-width:100%;
  width:100%;
  padding: 10px;
  



`;

export default ReviewsList;
