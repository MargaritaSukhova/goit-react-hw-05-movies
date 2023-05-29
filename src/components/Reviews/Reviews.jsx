import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsbyId } from 'service/movie-api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviewsbyId(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h4>Author: {author}</h4>
            <p>{content}</p>
          </li>
        ))}
      </ul>
      {reviews.length === 0 && <p>We don't have any reviews for this movie.</p>}
    </div>
  );
};

export default Reviews;
