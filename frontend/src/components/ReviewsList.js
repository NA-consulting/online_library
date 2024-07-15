import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

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
    <div className="review-container">
      <h2>Avis:</h2>
      {reviews.map(review => (
        <div className="review" key={review.id}>
          <h3>{review.name}</h3>
          <p>{review.review}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsList;
