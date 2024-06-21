import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

function Brewery(){
  const { id } = useParams();
  const [brewery, setBrewery] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  useEffect(() => {
    const fetchBrewery = async () => {
      const { data } = await axios.get(`https://api.openbrewerydb.org/breweries/${id}`);
      setBrewery(data);
    };

    const fetchReviews = () => {
      setReviews([
        { id: 1, text: 'Great place!' },
        { id: 2, text: 'Loved the beer.' },
      ]);
    };

    fetchBrewery();
    fetchReviews();
  }, [id]);

  const handleAddReview = (review) => {
    setReviews([...reviews, { id: reviews.length + 1, text: review }]);
    setNewReview('');
  };

  if (!brewery) return <div>Loading...</div>;

  return (
    <div className="brewery-container">
      <h1>{brewery.name}</h1>
      <div className="brewery-info">
        <p>{brewery.street}, {brewery.city}, {brewery.state}</p>
        <p>{brewery.phone}</p>
        <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a>
      </div>

      <h2>Reviews</h2>
      <ReviewList reviews={reviews} />
      <ReviewForm newReview={newReview} setNewReview={setNewReview} handleAddReview={handleAddReview} />
    </div>
  );
};

export default Brewery;