import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Title } from './TrendingList.styled';

const TrendingList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`movies/${movie.id}`} state={{ from: location }}>
            <Title>{movie.title}</Title>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TrendingList;
