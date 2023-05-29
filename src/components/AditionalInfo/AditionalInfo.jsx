import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Btn, BtnWrapper } from './AditionalInfo.styled';

const AditionalInfo = ({ movie }) => {
  return (
    <div>
      <h3>Aditional information</h3>
      <BtnWrapper>
        <li>
          <Link to={`/movies/${movie.id}/cast`}>
            <Btn type="button">Cast</Btn>
          </Link>
        </li>
        <li>
          <Link to={`/movies/${movie.id}/reviews`}>
            <Btn type="button">Reviews</Btn>
          </Link>
        </li>
      </BtnWrapper>
    </div>
  );
};

AditionalInfo.propTypes = {
  movie: PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired,
};

export default AditionalInfo;
