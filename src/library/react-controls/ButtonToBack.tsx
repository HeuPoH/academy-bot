import React from 'react';
import { StyleSheet } from 'react-native';
import { arrowLeftSmall } from '~res/images/icons/svg/arrowLeftSmall';
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
      type='svg'
      src={arrowLeftSmall}
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
