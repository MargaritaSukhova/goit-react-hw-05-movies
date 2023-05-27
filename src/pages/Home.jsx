import React, { useState, useEffect } from 'react';
import { getTrendingMovies } from 'service/movie-api';
import TrendingList from 'components/TrendingList/TrendingList';
import { Container } from 'components/App/App.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setTrendingMovies);
  }, []);

  return (
    <Container>
      <h1>Trending today</h1>
      <TrendingList movies={trendingMovies} />
    </Container>
  );
};

export default Home;
