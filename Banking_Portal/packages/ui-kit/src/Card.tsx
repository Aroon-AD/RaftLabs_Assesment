import { View, StyleSheet } from 'react-native';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Card = ({ children }: Props) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginVertical: 8,
  },
});
