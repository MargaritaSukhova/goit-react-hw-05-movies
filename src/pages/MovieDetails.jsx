import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import MovieCard from 'components/MovieCard/MovieCard';
import { getMovieById } from 'service/movie-api';
import { Container } from 'components/App/App.styled';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';
import AditionalInfo from 'components/AditionalInfo/AditionalInfo';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();

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
      <AditionalInfo movie={movie} />
      <Outlet />
    </Container>
  );
};

export default MovieDetails;
