import React from 'react';
import {TextInput, View} from 'react-native';

type inputSearchProps = {
  text: string;
  onChange: () => void;
};

export const InputSearch = ({text, onChange}: inputSearchProps) => {
  return (
    <View>
      <TextInput value={text} onChangeText={onChange} />
    </View>
  );
};
