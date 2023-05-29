import axios from 'axios';

const KEY = '185de76fc9040ef87a50d3720e8d34c5';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const endpoint = '/trending/all/day';
  const response = await axios.get(`${endpoint}?api_key=${KEY}`);
  return response.data.results;
};

export const getMovieById = async movieId => {
  const endpoint = `/movie/${movieId}`;
  const response = await axios.get(`${endpoint}?api_key=${KEY}`);
  return response.data;
};

export const getMovieCastbyId = async movieId => {
  const endpoint = `/movie/${movieId}/credits`;
  const response = await axios.get(`${endpoint}?api_key=${KEY}`);
  return response.data.cast;
};

export const getReviewsbyId = async movieId => {
  const endpoint = `/movie/${movieId}/reviews`;
  const response = await axios.get(`${endpoint}?api_key=${KEY}`);
  return response.data.results;
};

export const getMoviesByQuery = async query => {
  const endpoint = `/search/movie?query=${query}&include_adult=false`;
  const response = await axios.get(`${endpoint}&api_key=${KEY}`);
  return response.data.results;
};
