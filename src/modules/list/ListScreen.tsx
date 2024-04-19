import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {storage} from '../../hooks/useLocalStorage';
import {selectAllMovies} from '../../store/searchMoviesStore/selectors';

export const ListScreen = () => {
  const localData = storage;
  useEffect(() => {
    const value = localData.getAllDataForKey('favoritesMovies');
    value.then(data => {
      console.log(data);
    });
  }, []);
  return <View></View>;
};
