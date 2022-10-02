import React from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';

import { row, textDecorationLine } from '~library/base/baseStyles';
import { fonts } from '~res/assets/fonts/fonts';
import { COLOR } from '~res/colors';
import { icons } from '~res/images/icons';

export function Header() {
  return (
    <View style={styles.headerCont}>
      <StatusBar backgroundColor={COLOR.ORANGE2} barStyle='dark-content' />
      <Text style={styles.title}>БотАкадемия</Text>
      <View style={row}>
        <Text style={styles.subTitle}>
          Найди свой <Text style={textDecorationLine}>ВУЗ мечты</Text>
        </Text>
        <Image source={icons.logo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerCont: {
    paddingHorizontal: 24,
    paddingBottom: 10,
    paddingTop: 24
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    color: COLOR.BLACK,
    fontFamily: fonts.SF_ProDisplay_Black
  },
  subTitle: {
    color: COLOR.WHITE,
    marginTop: 8,
    fontSize: 20,
    flex: 1,
    fontFamily: fonts.SF_ProDisplay_Black
  }
});
