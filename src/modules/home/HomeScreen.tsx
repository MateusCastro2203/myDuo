import React, {useEffect, useState} from 'react';
import {TextInput, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {findMovies} from '../../hooks/useOnLoadAppAPi';
import {fetchMoviesSuccess} from '../../store/searchMoviesStore/actions';
import {MovieCard} from '@components';
import * as S from './styles';
import {selectAllMovies} from '../../store/searchMoviesStore/selectors';
import {useNavigation, useRoute} from '@react-navigation/native';

export const HomeScreen = () => {
  const dispatch = useDispatch();

  const route = useRoute();

  const {name} = route;

  const navigation = useNavigation();

  const [value, setValue] = useState<string>('');

  const handleChangeText = async (text: string) => {
    setValue(text);
  };

  const movies = useSelector(selectAllMovies);

  const saveRedux = async () => {
    const movie = value.replace(' ', '%');
    const moviesResponse = await findMovies(movie, 1);
    dispatch(fetchMoviesSuccess(moviesResponse));
  };

  useEffect(() => {
    saveRedux();
  }, [value]);

  const handlePressMovieDetail = (id: number, screenPath: string) => {
    navigation.navigate('MovieDetails', {
      movieId: id,
      lastScreen: screenPath,
    });
  };

  return (
    <S.Container>
      <TextInput
        onChangeText={handleChangeText}
        value={value}
        style={styles.input}
        placeholder={'Digite o nome do filme'}
        placeholderTextColor="#FFFFFF"
      />
      <FlatList
        data={movies}
        renderItem={item => (
          <MovieCard
            item={item.item}
            screenPath={name}
            handlePressMovieDetail={() =>
              handlePressMovieDetail(item.item.id, name)
            }
          />
        )}
      />
    </S.Container>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: 'grey',
    color: '#FFFFFF',
    fontSize: 20,
  },
});
