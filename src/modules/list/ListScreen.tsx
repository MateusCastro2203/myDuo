import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {storage} from '../../hooks/useLocalStorage';
import {selectAllMovies} from '../../store/searchMoviesStore/selectors';

export const ListScreen = () => {
  const localData = storage;

  const value = localData.getAllDataForKey('favoritesMovies');

  return (
    <View>
      <Button
        onPress={() => value.then(data => console.log(data))}
        title="Clique"
      />
    </View>
  );
};
