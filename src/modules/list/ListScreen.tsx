import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {getCount} from '../../store/counterMoviesList/selector';
import {MovieCard} from '@components';
import * as S from './style';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Device} from '@device';

export const ListScreen = () => {
  const localData = Device.Storage.data;

  const counter = useSelector(getCount);

  const [movieSaved, setMovieSaved] = useState([]);

  const route = useRoute();

  const navigation = useNavigation();

  useEffect(() => {
    const value = localData.getAllDataForKey('favoritesMovies');
    value.then(data => {
      setMovieSaved(data);
    });
  }, [counter]);

  const handlePressMovieDetail = (id: number, screenPath: string) => {
    navigation.navigate('MovieDetails', {
      movieId: id,
      lastScreen: screenPath,
    });
  };

  return (
    <>
      {movieSaved.length === 0 || undefined ? (
        <S.ContainerText>
          <S.Title>Você ainda salvou nenhum filme</S.Title>
        </S.ContainerText>
      ) : (
        <S.Container>
          <FlatList
            data={movieSaved}
            renderItem={({item}) => (
              <MovieCard
                item={item}
                screenPath={route.name}
                handlePressMovieDetail={() =>
                  handlePressMovieDetail(item.id, route.name)
                }
              />
            )}
          />
        </S.Container>
      )}
    </>
  );
};
