import React from 'react';
import * as S from './styles';

interface ButtonProos {
  onPress: () => void;
  title: string;
}

export const Button = ({onPress, title}: ButtonProos) => {
  return (
    <S.Button onPress={onPress}>
      <S.Label>{title}</S.Label>
    </S.Button>
  );
};
