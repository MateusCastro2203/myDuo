export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: string;
  vote_average: number;
  vote_count: number;
}

export interface MoviesPage {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export enum MoviesActionTypes {
  FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST',
  FETCH_MOVIES_SUCCES = 'FETCH_MOVIES_SUCCES',
  FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE',
}

interface FetchMoviesRequestAction {
  type: MoviesActionTypes.FETCH_MOVIES_REQUEST;
}

interface FetchMoviesSuccessAction {
  type: MoviesActionTypes.FETCH_MOVIES_SUCCES;
  payload: MoviesPage;
}

interface FetchMoviesFailureAction {
  type: MoviesActionTypes.FETCH_MOVIES_FAILURE;
  payload: Error;
}

export type MoviesActions =
  | FetchMoviesRequestAction
  | FetchMoviesSuccessAction
  | FetchMoviesFailureAction;

export interface searchMovies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface searchMoviesResponse {
  movie: searchMovies[];
}
