import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectAllMovies} from '../../store/searchMoviesStore/selectors';

export const ListScreen = () => {
  const movies = useSelector(selectAllMovies);
  console.log(movies.length);
  return (
    <View>
      <Text>{movies.item}</Text>
    </View>
  );
};
