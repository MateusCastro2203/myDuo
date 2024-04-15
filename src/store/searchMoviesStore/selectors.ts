// selectors.ts
import {createSelector} from 'reselect';
import {RootState} from './store';
const selectMoviesState = (state: RootState) => state.movies;

export const selectAllMovies = createSelector(
  selectMoviesState,
  moviesState => moviesState.data,
);

export const selectMoviesLoading = createSelector(
  selectMoviesState,
  moviesState => moviesState.loading,
);

export const selectMoviesError = createSelector(
  selectMoviesState,
  moviesState => moviesState.error,
);
