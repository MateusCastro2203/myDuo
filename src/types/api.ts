export const apiConfig: Readonly<{
  readonly url: string;
  readonly apiKey: string;
  readonly movies_url: string;
  readonly authentication: string;
  readonly searchMovies: string;
  readonly image_base_url: string;
  readonly movies_detail: string;
  readonly watch_providers: string;
}> = {
  url: 'https://api.themoviedb.org/3',
  authentication: '/authentication',
  apiKey:
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Nzk4NWU0OWNkODBiNjFjYzc4Y2M4YzdiNWYzYzkwNiIsInN1YiI6IjY2MDFkYmJiYjg0Y2RkMDE3ZGY2OWRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w86orlQaXwXtAxWmqhYJbHj8Niy3r35eAFjTlR8_uTA',
  movies_url: '/movie/',
  searchMovies: '/search/movie?',
  image_base_url: 'https://image.tmdb.org/t/p/original',
  movies_detail: '/movie/',
  watch_providers: '/watch/providers',
};
