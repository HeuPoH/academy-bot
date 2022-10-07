import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { ScreenNavigationProp, ScreensName } from '~library/StackNavigators';
import { COLOR } from '~res/colors';
import { Specialties } from './Specialties';

export class Main extends React.Component<
  ScreenNavigationProp<ScreensName.Main>
> {
  render() {
    return (
      <ScrollView style={style.cont}>
        <Specialties {...this.props} />
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  cont: {
    borderTopStartRadius: 24,
    borderTopEndRadius: 24,
    backgroundColor: COLOR.WHITE,
    paddingHorizontal: 16
  }
});
