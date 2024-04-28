import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';
import {apiConfig} from '../../types/api';
import {MovieDetailData} from '../../types/movieDetail';
import * as S from './style';
import {
  getRecommendations,
  getWatchProviders,
} from '../../hooks/useMovieDetails';
import {Button} from '../../components/button/Button';
import {
  useRemoveItemStorage,
  useSaveLocalStorage,
} from '../../hooks/useLocalStorage';
import {fetchMoviesDetail} from '../../hooks/useMoviesResult';
import {useNavigation, useRoute} from '@react-navigation/native';
import {increment} from '../../store/counterMoviesList/action';
import {Movie} from '../../types/movies';
import {MovieCard} from '../../components/movieCard/MovieCard';

interface Provider {
  display_priority: number;
  logo_path: string;
  provider_id: number;
  provider_name: string;
}

interface MovieData {
  buy: Provider[];
  flatrate: Provider[];
  rent: Provider[];
  link: string;
}

export const MovieDetails = () => {
  const route = useRoute();

  const {movieId, lastScreen} = route.params;

  console.log('ROUTES: ', route);

  const [movieDetail, setMovieDetail] = useState<MovieDetailData>();
  const [moviesRecommendation, setRecommendation] = useState<Movie[]>();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const moviesDetails = await fetchMoviesDetail(movieId);
      setMovieDetail(moviesDetails);
    };

    const fetchMoviesRecomendations = async () => {
      const moviesRecomendations = await getRecommendations(movieId);
      setRecommendation(moviesRecomendations);
    };

    fetchMovieDetails();
    fetchMoviesRecomendations();
  }, [movieId]);

  useEffect(() => {
    const fetchWatchProviders = async () => {
      const response = await getWatchProviders(movieDetail.id);
      setProviders(response);
    };
    fetchWatchProviders();
  }, [movieDetail]);

  const imgUri = apiConfig.image_base_url + movieDetail?.backdrop_path;

  const formattedDate = new Date(movieDetail?.release_date).getFullYear();
  const [getProviders, setProviders] = useState<MovieData>();

  const dispatch = useDispatch();

  const saveStore = async () => {
    dispatch(increment());

    await useSaveLocalStorage(movieDetail?.id, movieDetail);
    navigation.goBack();
  };

  const navigation = useNavigation();

  const removeItem = (id: number) => {
    dispatch(increment());
    useRemoveItemStorage(id);
    navigation.goBack();
  };

  const onPressCard = (id: number, screenPath: string) => {
    navigation.navigate('MovieDetails', {
      movieId: id,
      lastScreen: screenPath,
    });
  };

  console.log('OII :', movieDetail?.id);

  return (
    <S.Container>
      <FastImage source={{uri: imgUri}} style={{width: '100%', height: 200}} />
      <S.MovieContainer>
        <S.HeaderContainer>
          <S.Avarage>{movieDetail?.vote_average.toFixed(1)}</S.Avarage>
          <S.TitleContainer>
            <S.Title numberOfLines={2}>{movieDetail?.title}</S.Title>
            <S.ReleaseDate>{formattedDate}</S.ReleaseDate>
          </S.TitleContainer>
        </S.HeaderContainer>

        <S.Description>{movieDetail?.overview}</S.Description>
        <S.MovieProvider>Onde ver o filme</S.MovieProvider>
        <FlatList
          data={getProviders?.flatrate}
          renderItem={item => (
            <FastImage
              source={{uri: apiConfig.image_base_url + item.item.logo_path}}
              style={{width: 60, height: 60, marginRight: 10, marginTop: 10}}
            />
          )}
          horizontal
        />
      </S.MovieContainer>

      <S.MovieProvider>Filmes Similares</S.MovieProvider>
      <FlatList
        data={moviesRecommendation}
        renderItem={data => (
          <MovieCard
            item={data.item}
            handlePressMovieDetail={() => onPressCard(data.item.id, route.name)}
          />
        )}
        horizontal
      />
      {lastScreen !== 'List' && (
        <S.ButtonContainer>
          <Button
            onPress={() => {
              saveStore();
            }}
            title="Adicionar filme a lista"
          />
        </S.ButtonContainer>
      )}
      {lastScreen === 'List' && (
        <S.ButtonContainer>
          <Button
            onPress={() => {
              removeItem(movieDetail?.id);
            }}
            title={'Remover filme da lista'}
          />
        </S.ButtonContainer>
      )}
    </S.Container>
  );
};
