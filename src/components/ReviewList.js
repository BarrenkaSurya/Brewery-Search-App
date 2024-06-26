import React from 'react';

const ReviewList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>{review.text}</li>
      ))}
    </ul>
  );
};

export default ReviewList;