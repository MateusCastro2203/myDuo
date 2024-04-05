import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {validateAuth, findMovies} from '../../hooks/useOnLoadAppAPi';
export const HomeScreen = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Validar autenticação
        const authResponse = await validateAuth();
        if (!authResponse.success) {
          console.error('Falha na autenticação');
          return;
        }
        const moviesResponse = await findMovies('popular', 1);
        console.log('Filmes:', moviesResponse);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <View>
      <Text> OI</Text>
    </View>
  );
};
