import {moviesReducer} from '../movieStore/moviesReducer';

export const selectPopularMovies = (state: moviesReducer) => {
  return state.results;
};
