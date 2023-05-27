import React from 'react';
import { Link } from 'react-router-dom';
import { Title } from './TrendingList.styled';

const TrendingList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`movies/${movie.id}`}>
            <Title>{movie.title}</Title>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TrendingList;
