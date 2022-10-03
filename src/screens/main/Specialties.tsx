/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Carousel } from '~library/react-controls/Carousel';
import { ffSF_ProDisplay_Black, flex1, row } from '~library/base/baseStyles';
import { BaseView } from '~library/base/BaseView';
import { Speciality } from '~library/services/SpecialtiesReq';
import { ScreenNavigationProp, ScreensName } from '~library/StackNavigators';
import { Button } from '~library/react-controls/Button';
import { SpecialtiesModel } from '~models/Specialties';
import { COLOR } from '~res/colors';
import { fonts } from '~res/assets/fonts/fonts';

interface Props extends ScreenNavigationProp<ScreensName.Main> {
  model: SpecialtiesModel;
}

export class Specialties extends BaseView<Props> {
  private bgColors = [
    COLOR.ORANGE3,
    COLOR.WHITE3,
    COLOR.BLUE2,
    COLOR.BLUE3,
    COLOR.PINKY4,
    COLOR.PINKY5,
    COLOR.GREEN,
    COLOR.RED2,
    COLOR.RED3
  ];

  componentDidMount() {
    this.props.model.fetch();
    super.componentDidMount();
  }

  private getSpecialties() {
    return this.props.model.getSpecialties().map((spec, i) => ({
      ...spec,
      icon: (
        <Image
          style={{ ...styles.icon, backgroundColor: this.bgColors[i] }}
          source={spec.icon as ImageSourcePropType}
        />
      )
    }));
  }

  private onNavigateTo(id: number) {
    this.props.navigation.navigate(ScreensName.Directions, { id });
  }

  private renderItem = (item: Speciality) => {
    const { icon, name, countUnivers, countDirections, id } = item;

    return (
      <Button color='transparent' styleBtn={row} onPress={() => this.onNavigateTo(id)}>
        {icon}
        <View style={flex1}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.item}>
            <Text style={ffSF_ProDisplay_Black}>{countUnivers} <Text style={styles.orangeText}>вузов</Text></Text>
            <Text style={ffSF_ProDisplay_Black}>{countDirections} <Text style={styles.orangeText}>специальностей</Text></Text>
          </View>
        </View>
      </Button>
    );
  };

  private getHeader() {
    return <Text style={styles.contTitle}>Специальности</Text>;
  }

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          header={this.getHeader()}
          items={this.getSpecialties()}
          renderItem={this.renderItem}
          numColumnsHor={3}
          rowGap={12}
          columnGap={34}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 46
  },
  title: {
    fontFamily: fonts.SF_ProDisplay_Black,
    fontSize: 17,
    color: COLOR.BLACK,
    fontWeight: '500'
  },
  icon: {
    borderRadius: 10,
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12
  },
  item: {
    fontWeight: '700',
    fontSize: 14,
    color: COLOR.GREY6,
    flexDirection: 'column'
  },
  orangeText: {
    fontWeight: '400',
    fontSize: 14,
    color: COLOR.ORANGE
  },
  contTitle: {
    fontFamily: fonts.SF_ProDisplay_Black,
    fontWeight: '800',
    fontSize: 24,
    lineHeight: 28,
    color: COLOR.BLACK,
    paddingTop: 30
  }
});
