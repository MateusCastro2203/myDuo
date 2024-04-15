import {apiConfig} from '../types/api';
import {MovieDetailData} from '../types/movieDetail';
import {validateAuth} from './useOnLoadAppAPi';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiConfig.apiKey}`,
  },
};

export const fetchMoviesDetail = async (
  movieId: number,
): Promise<MovieDetailData> => {
  validateAuth();
  const url =
    apiConfig.url + apiConfig.movies_detail + movieId + '?language=pt-BR';
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
};
