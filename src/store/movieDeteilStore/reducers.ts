// reducers.ts
import {MovieDetailData} from '../../types/movieDetail';
import {FETCH_MOVIES_SUCCESS, MovieActionTypes} from './actions';

interface MovieState {
  movieData: MovieDetailData | null;
}

const initialState: MovieState = {
  movieData: null,
};

export const movieDetailReducer = (
  state = initialState,
  action: MovieActionTypes,
): MovieState => {
  return {
    ...state,
    movieData: action.payload,
  };
};
