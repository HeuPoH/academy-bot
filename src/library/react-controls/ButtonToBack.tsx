/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { StyleSheet } from 'react-native';
import { icons } from '~res/images/icons';
import { IconButton } from './IconButton';

export function ButtonToBack(p: {
  goBack: () => void;
  styles?: React.CSSProperties;
}) {
  return (
    <IconButton
      styleBtn={{ ...styles.headerBtnBack, ...p.styles }}
      styleTxt={styles.headerBtnBackText}
      color='transparent'
      title='Назад'
      onPress={p.goBack}
      src={icons.arrowLeft}
    />
  );
}

const styles = StyleSheet.create({
  headerBtnBack: {
    width: 100
  },
  headerBtnBackText: {
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 22
  }
});
