import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieImg, MovieItem, MoviesWrapper, Title } from './SearchList.styled';
import NoImage from 'images/no-image.jpg';

const SearchList = ({ movies }) => {
  const location = useLocation();

  return (
    <MoviesWrapper>
      {movies.map(({ id, poster_path, title }) => (
        <MovieItem key={id}>
          <Link to={`${id}`} state={{ from: location }}>
            <MovieImg
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : NoImage
              }
              alt=""
            />
            <Title>{title}</Title>
          </Link>
        </MovieItem>
      ))}
    </MoviesWrapper>
  );
};

SearchList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default SearchList;
