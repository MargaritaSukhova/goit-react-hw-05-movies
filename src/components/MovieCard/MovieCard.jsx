import React from 'react';
import PropTypes from 'prop-types';
import { InfoWrapper, MovieWrapper, Poster } from './MovieCard.styled';
import NoImage from 'images/no-image.jpg';

const MovieCard = ({ movie }) => {
  const {
    poster_path,
    original_title,
    overview,
    genres,
    vote_average,
    release_date,
  } = movie;
  const movieGenres = genres.map(genre => genre.name).join(', ');
  const userScore = (vote_average * 10).toFixed(0);
  const year = release_date.slice(0, 4);
  return (
    <MovieWrapper>
      <Poster
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : NoImage
        }
        alt={original_title}
      />
      <InfoWrapper>
        <h2>{`${original_title ? original_title : 'N/a'} ${
          year ? year : ''
        }`}</h2>
        <p>User score: {userScore}%</p>
        <h3>Overview</h3>
        <p>{overview ? overview : 'N/a'}</p>
        <h4>Genres</h4>
        <p>{movieGenres ? movieGenres : 'N/a'}</p>
      </InfoWrapper>
    </MovieWrapper>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
