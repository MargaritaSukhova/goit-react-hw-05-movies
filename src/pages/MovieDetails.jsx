import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import MovieCard from 'components/MovieCard/MovieCard';
import { getMovieById } from 'service/movie-api';
import { Container } from 'components/App/App.styled';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId, setMovie]);

  if (!movie) return;

  return (
    <Container>
      <Link to={location.state?.from ?? '/'}>
        <GoBackBtn />
      </Link>
      <MovieCard movie={movie} />
    </Container>
  );
};

export default MovieDetails;
