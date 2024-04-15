// reducers.ts
import {combineReducers} from 'redux';
import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from './actions';
import {searchMovies} from '../../types/movies';

interface MoviesState {
  loading: boolean;
  data: searchMovies[];
  error: string | null;
}

const initialState: MoviesState = {
  loading: false,
  data: [],
  error: null,
};

export const moviesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
