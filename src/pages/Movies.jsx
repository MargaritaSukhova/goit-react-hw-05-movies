import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';
import { Container } from 'components/App/App.styled';
import { getMoviesByQuery } from 'service/movie-api';
import SearchList from 'components/SearchList/SearchList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSeachParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    getMoviesByQuery(query).then(setMovies);
  }, [query]);

  const onSubmit = query => {
    setSeachParams({ query });
  };

  return (
    <Container>
      <SearchBar onSubmit={onSubmit} />
      <SearchList movies={movies} />
      {movies.length === 0 && query && (
        <p>We have not find any films matching your query</p>
      )}
    </Container>
  );
};

export default Movies;
