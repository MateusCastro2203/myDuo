import {apiConfig} from '../types/api';
import {Movie, MoviesPage, searchMovies} from '../types/movies';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiConfig.apiKey}`,
  },
};

export const validateAuth = () => {
  const validate = fetch(apiConfig.url + apiConfig.authentication, options)
    .then(res => {
      return res.json();
    })
    .catch(err => console.error('error:' + err));
  return validate;
};

export const findMovies = async (
  urlParams: string,
  pagesNumber: number,
): Promise<searchMovies[]> => {
  const movieUrl =
    apiConfig.searchMovies +
    'query=' +
    urlParams +
    '&include_adult=false&language=pt-BR&page=' +
    pagesNumber;

  try {
    const response = await fetch(apiConfig.url + movieUrl, options);
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error('error: ' + err);
    throw err;
  }
};
function parsedFindPopularMovies(data: unknown) {
  return data;
}
