import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { COLOR } from '~res/colors';

type Props = {
  isShow?: boolean;
  errorMessage?: string;
};

export function ErrorMessage({ errorMessage = '', isShow = false }: Props) {
  return isShow ? (
    <Text style={styles.errorMessage}>{errorMessage}</Text>
  ) : null;
}

const styles = StyleSheet.create({
  errorMessage: {
    color: COLOR.RED
  }
});
