import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';
import {selectAllMovies} from '../../store/searchMoviesStore/selectors';
import {apiConfig} from '../../types/api';
import {searchMovies} from '../../types/movies';
import {fetchMoviesDetail} from '../../hooks/useMoviesResult';
import {fetchMovieDetailSuccess} from '../../store/movieDeteilStore/actions';

import * as S from './styles';

export const MoviesResult = ({item}: {item: searchMovies}) => {
  const dispatch = useDispatch();
  const movies = useSelector(selectAllMovies);

  const navigation = useNavigation();

  const img = item?.poster_path
    ? apiConfig.image_base_url + item.poster_path
    : null;

  const handlePressMovieDetail = async () => {
    const moviesDetails = await fetchMoviesDetail(item.id);
    dispatch(fetchMovieDetailSuccess(moviesDetails));
    navigation.navigate('MovieDetails');
  };

  return (
    <TouchableOpacity
      onPress={() => {
        handlePressMovieDetail();
      }}>
      <S.Container>
        {img && (
          <FastImage source={{uri: img}} style={{width: 140, height: 200}} />
        )}
        <S.TitleContainer>
          <S.Title>{item.title}</S.Title>
          <S.Description numberOfLines={6}>{item.overview}</S.Description>
        </S.TitleContainer>
      </S.Container>
    </TouchableOpacity>
  );
};
