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

export const useRemoveItemStorage = (id: number) => {
  storage.remove({
    key: 'favoritesMovies',
    id: id.toString(),
  });
};
//ESTOU FAZENDO O REMOVE DOS DADOS DO LOCALSTORAGE, JA ESTÁ SALVANDO E PRECISO AGORA FAZER O BOTAO DE REMOVER OS DADOS DO ARRAY DO STORAGE.
// CONFIGURAR PARA FAZER O BUILD DO APK
