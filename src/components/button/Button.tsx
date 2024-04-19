import React from 'react';
import * as S from './styles';

interface ButtonProos {
  onPress: () => void;
}

export const Button = ({onPress}: ButtonProos) => {
  return (
    <S.Button onPress={onPress}>
      <S.Label>Salvar Filme</S.Label>
    </S.Button>
  );
};
