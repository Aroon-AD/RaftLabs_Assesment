import { TouchableOpacity, Text, ViewStyle } from 'react-native';
import React from 'react';

type Props = {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
};

export const Button = ({ title, onPress, style }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[{ backgroundColor: '#007bff', padding: 10, borderRadius: 5 }, style]}>
      <Text style={{ color: 'white', textAlign: 'center' }}>{title}</Text>
    </TouchableOpacity>
  );
};
