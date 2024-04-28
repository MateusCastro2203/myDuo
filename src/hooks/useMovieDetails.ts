import {apiConfig} from '../types/api';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiConfig.apiKey}`,
  },
};

export const getWatchProviders = async (id: number) => {
  try {
    const url =
      apiConfig.url + apiConfig.movies_url + id + apiConfig.watch_providers;
    const response = await fetch(url, options);
    const data = await response.json();

    return data.results.BR;
  } catch (err) {
    console.log('Erro ao buscar provedor : ', err);
  }
};

export const getRecommendations = async (id: number) => {
  try {
    const url =
      apiConfig.url +
      apiConfig.movies_url +
      id +
      '/recommendations?language=pt-BR';
    const response = await fetch(url, options);
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.log('Erro ao buscar filmes : ', err);
  }
};
