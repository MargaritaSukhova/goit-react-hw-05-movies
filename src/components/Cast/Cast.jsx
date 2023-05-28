import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCastbyId } from 'service/movie-api';
import NoPhoto from 'images/no-photo.png';
import { CastImg, CastItem, CastWrapper } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCastbyId(movieId).then(setCast);
  }, [movieId]);

  console.log(cast);

  return (
    <CastWrapper>
      {cast.map(({ id, profile_path, name, character }) => (
        <CastItem key={id}>
          <CastImg
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : NoPhoto
            }
            alt={name}
          />
          <p>{name ? name : 'N/a'}</p>
          <p>Character: {character ? character : 'n/a'}</p>
        </CastItem>
      ))}
    </CastWrapper>
  );
};

export default Cast;
