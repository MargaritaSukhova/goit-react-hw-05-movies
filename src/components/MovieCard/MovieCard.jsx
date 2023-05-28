import React from 'react';
import { InfoWrapper, MovieWrapper, Poster } from './MovieCard.styled';

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
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
      />
      <InfoWrapper>
        <h2>{`${original_title} (${year})`}</h2>
        <p>User score: {userScore}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{movieGenres}</p>
      </InfoWrapper>
    </MovieWrapper>
  );
};

export default MovieCard;
