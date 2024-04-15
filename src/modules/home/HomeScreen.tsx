import React, {useEffect, useState} from 'react';
import {Text, TextInput, View, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {validateAuth, findMovies} from '../../hooks/useOnLoadAppAPi';
import {fetchMoviesSuccess} from '../../store/searchMoviesStore/actions';
import {selectPopularMovies} from '../../store/movieStore/selectors';
import {MoviesResult} from '../../components/moviesResult/MoviesResult';
import * as S from './styles';
import {selectAllMovies} from '../../store/searchMoviesStore/selectors';

export const HomeScreen = () => {
  //CRIAR UM HOOK USEHOME

  const dispatch = useDispatch();
  const selectedPopularMovies = useSelector(selectPopularMovies);

  const [value, setValue] = useState<string>('');

  const handleChangeText = async (text: string) => {
    setValue(text);
  };

  const movies = useSelector(selectAllMovies);

  useEffect(() => {
    const saveRedux = async () => {
      const movie = value.replace(' ', '%');
      const moviesResponse = await findMovies(movie, 1);
      dispatch(fetchMoviesSuccess(moviesResponse));
    };
    saveRedux();

    console.log('valus', value.length);
  }, [value]);

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
        renderItem={item => <MoviesResult item={item.item} />}
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
