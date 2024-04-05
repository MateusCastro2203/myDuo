import {apiConfig} from '../types/api';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiConfig.apiKey}`,
  },
};

export const validateAuth = () => {
  const validate = fetch(apiConfig.url, options)
    .then(res => {
      return res.json();
    })
    .catch(err => console.error('error:' + err));
  return validate;
};

export const findMovies = (urlParams: string, pagesNumber: number) => {
  const url =
    apiConfig.movies_url + urlParams + '?language=pt-BR&page=' + pagesNumber;
  const response = fetch(url, options)
    .then(res => {
      return res.json();
    })
    .catch(err => console.error('error: ' + err));
  console.log(response);
  return response;
};

function parsedFindPopularMovies(data: unknown) {
  return data;
}
