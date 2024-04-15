import {createSelector} from '@reduxjs/toolkit';
import {RootState} from './store';

export const selectMovieData = (state: RootState) => state.movieDetail;

export const selectMovieDataStore = createSelector(
  selectMovieData,
  movieDetail => movieDetail,
);
