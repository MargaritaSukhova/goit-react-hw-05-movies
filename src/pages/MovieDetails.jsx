import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import MovieCard from 'components/MovieCard/MovieCard';
import { getMovieById } from 'service/movie-api';
import { ContainerMovie } from 'components/App/App.styled';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';
import AditionalInfo from 'components/AditionalInfo/AditionalInfo';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const backLickLoctionRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId, setMovie]);

  if (!movie) return;

  return (
    <ContainerMovie>
      <Link to={backLickLoctionRef.current}>
        <GoBackBtn />
      </Link>
      <MovieCard movie={movie} />
      <AditionalInfo movie={movie} />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </ContainerMovie>
  );
};

export default MovieDetails;
