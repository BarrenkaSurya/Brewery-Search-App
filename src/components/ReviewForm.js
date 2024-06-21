import React from 'react';

const ReviewForm = ({ newReview, setNewReview, handleAddReview }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddReview(newReview);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={newReview}
        onChange={(e) => setNewReview(e.target.value)}
        placeholder="Write a review..."
      />
      <button type="submit">Add Review</button>
    </form>
  );
};

export default ReviewForm;