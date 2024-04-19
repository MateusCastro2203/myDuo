import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';
import {selectMovieDataStore} from '../../store/movieDeteilStore/selectors';
import {apiConfig} from '../../types/api';
import {MovieDetailData} from '../../types/movieDetail';
import * as S from './style';
import {getWatchProviders} from '../../hooks/useMovieDetails';
import {Button} from '../../components/button/Button';
import {useSaveLocalStorage} from '../../hooks/useLocalStorage';

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
  const movieDetail = useSelector(selectMovieDataStore);
  const imgUri = apiConfig.image_base_url + movieDetail.movieData.backdrop_path;
  const details: MovieDetailData = movieDetail.movieData;
  const formattedDate = new Date(details.release_date).getFullYear();
  const [getProviders, setProviders] = useState<MovieData>();

  useEffect(() => {
    const fetchWatchProviders = async () => {
      const response = await getWatchProviders(details.id);
      setProviders(response);
    };
    fetchWatchProviders();
  }, []);

  const saveStore = async () => {
    await useSaveLocalStorage(details.id, movieDetail);
  };

  return (
    <S.Container>
      <FastImage source={{uri: imgUri}} style={{width: '100%', height: 200}} />
      <S.MovieContainer>
        <S.HeaderContainer>
          <S.Avarage>{details.vote_average.toFixed(1)}</S.Avarage>
          <S.TitleContainer>
            <S.Title numberOfLines={2}>{details.title}</S.Title>
            <S.ReleaseDate>{formattedDate}</S.ReleaseDate>
          </S.TitleContainer>
        </S.HeaderContainer>

        <S.Description>{details.overview}</S.Description>
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

      <S.ButtonContainer>
        <Button
          onPress={() => {
            saveStore;
          }}
        />
      </S.ButtonContainer>
    </S.Container>
  );
};
