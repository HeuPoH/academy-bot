import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ScreenNavigationProp, ScreensName } from '~library/StackNavigators';
import { Models } from '~models/Models';
import { COLOR } from '~res/colors';
import { Specialties } from './Specialties';

export class Main extends React.Component<
  ScreenNavigationProp<ScreensName.Main>
> {
  private specModel = Models.SpecialtiesModel();

  render() {
    return (
      <View style={style.bgContainer}>
        <ScrollView style={style.container}>
          <Specialties model={this.specModel} {...this.props} />
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  bgContainer: {
    backgroundColor: COLOR.ORANGE2
  },
  container: {
    borderTopStartRadius: 24,
    borderTopEndRadius: 24,
    backgroundColor: COLOR.WHITE,
    paddingHorizontal: 16
  }
});
