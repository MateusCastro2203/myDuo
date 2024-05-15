import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Movie} from '../../types/movies';

export const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
});

export const save = (id: number, movies: Movie) => {
  try {
    storage.save({
      key: 'favoritesMovies',
      id: id.toString(),
      data: movies,
    });
  } catch (error) {
    console.error('Erro ao salvar no armazenamento local:', error);
  }
};

export const remove = (id: number) => {
  try {
    storage.remove({
      key: 'favoritesMovies',
      id: id.toString(),
    });
  } catch (error) {
    console.error('Erro ao remover item do armazenamento local:', error);
  }
};
