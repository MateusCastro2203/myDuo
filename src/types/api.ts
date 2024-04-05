export const apiConfig: Readonly<{
  readonly url: string;
  readonly apiKey: string;
  readonly movies_url: string;
  readonly authentication: string;
}> = {
  url: 'https://api.themoviedb.org/3',
  authentication: '/authentication',
  apiKey:
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Nzk4NWU0OWNkODBiNjFjYzc4Y2M4YzdiNWYzYzkwNiIsInN1YiI6IjY2MDFkYmJiYjg0Y2RkMDE3ZGY2OWRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w86orlQaXwXtAxWmqhYJbHj8Niy3r35eAFjTlR8_uTA',
  movies_url: '/movie/',
};
