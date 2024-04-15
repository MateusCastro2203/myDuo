import {combineReducers} from 'redux';
import {
  MoviesPage,
  Movie,
  MoviesActions,
  MoviesActionTypes,
} from '../../types/movies';

export const initialState: MoviesPage = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const moviesReducer = (
  state = initialState,
  action: MoviesActions,
): MoviesPage => {
  if (action.type === MoviesActionTypes.FETCH_MOVIES_SUCCES) {
    return {
      ...state,
      results: action.payload.results as Movie[],
    };
  }
  return state;
};

// export const RootState = combineReducers({
//   movies: reposReducer,
// });
