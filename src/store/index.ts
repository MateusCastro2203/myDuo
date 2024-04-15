import {moviesReducer} from './searchMoviesStore/reducers';
import {movieDetailReducer} from './movieDeteilStore/reducers';

import {combineReducers, configureStore} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  movies: moviesReducer,
  movieDetail: movieDetailReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
