import React from 'react';
import { Link } from 'react-router-dom';

const AditionalInfo = ({ movie }) => {
  return (
    <div>
      <div>
        <p>Aditional information</p>
        <ul>
          <li>
            <Link to={`/movies/${movie.id}/cast`}>
              <button type="button">Cast</button>
            </Link>
          </li>
          <li>
            <Link to={`/movies/${movie.id}/reviews`}>
              <button type="button">Reviews</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AditionalInfo;
