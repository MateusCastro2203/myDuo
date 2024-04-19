import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Movie} from '../types/movies';

export const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
});

export const useSaveLocalStorage = (id: number, movies: Movie) => {
  storage.save({
    key: 'favoritesMovies',
    id: id.toString(),
    data: movies,
  });
};
