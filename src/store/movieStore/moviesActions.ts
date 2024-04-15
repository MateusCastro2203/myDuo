import {MoviesActionTypes, MoviesActions, MoviesPage} from '../../types/movies';

export const moviesRequest = (): MoviesActions => ({
  type: MoviesActionTypes.FETCH_MOVIES_REQUEST,
});

export const fetchMoviesSuccess = (movies: MoviesPage) => ({
  type: 'FETCH_MOVIES_SUCCES',
  payload: movies,
});

export const fetchMoviesFailure = (err: Error): MoviesActions => ({
  type: MoviesActionTypes.FETCH_MOVIES_FAILURE,
  payload: err,
});
