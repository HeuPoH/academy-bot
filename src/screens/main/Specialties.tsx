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
import {
  ff14SF_ProDisplay_Black,
  ff17SF_ProDisplay_Black,
  ff24SF_ProDisplay_Black,
  ffSF_ProDisplay_Black,
  flex1,
  row
} from '~library/base/baseStyles';
import { BaseView } from '~library/base/BaseView';
import { Speciality } from '~library/services/SpecialtiesReq';
import { ScreenNavigationProp, ScreensName } from '~library/StackNavigators';
import { Button } from '~library/react-controls/Button';
import { Models } from '~models/Models';
import { COLOR } from '~res/colors';

export class Specialties extends BaseView<ScreenNavigationProp<ScreensName.Main>> {
  model = Models.SpecialtiesModel();

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
    this.model.fetch();
    super.componentDidMount();
  }

  private getSpecialties() {
    return this.model.getSpecialties().map((spec, i) => ({
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
    color: COLOR.BLACK,
    fontWeight: '500',
    ...ff17SF_ProDisplay_Black
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
    flexDirection: 'column'
  },
  orangeText: {
    fontWeight: '400',
    color: COLOR.ORANGE,
    ...ff14SF_ProDisplay_Black
  },
  contTitle: {
    fontWeight: '800',
    lineHeight: 28,
    color: COLOR.BLACK,
    paddingTop: 30,
    ...ff24SF_ProDisplay_Black
  }
});
