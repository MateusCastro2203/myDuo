import {moviesReducer} from './searchMoviesStore/reducers';
import {movieDetailReducer} from './movieDeteilStore/reducers';

import {combineReducers, configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterMoviesList/reducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  movieDetail: movieDetailReducer,
  counter: counterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
