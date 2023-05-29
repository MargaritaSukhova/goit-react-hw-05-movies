import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCastbyId } from 'service/movie-api';
import NoPhoto from 'images/no-photo.png';
import {
  CastImg,
  CastItem,
  CastWrapper,
  CastTitle,
  CastName,
  TextWrapper,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCastbyId(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
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
            <TextWrapper>
              <CastName>{name ? name : 'N/a'}</CastName>
              <CastTitle>Character: {character ? character : 'n/a'}</CastTitle>
            </TextWrapper>
          </CastItem>
        ))}
      </CastWrapper>
      {cast.length === 0 && <p>We don't have any information about actors.</p>}
    </>
  );
};

export default Cast;
