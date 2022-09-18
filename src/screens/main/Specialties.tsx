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
import { flex1, row } from '~library/base/baseStyles';
import { BaseView } from '~library/base/BaseView';
import { Speciality } from '~library/services/specialtiesReq';
import { ScreenNavigationProp, ScreensName } from '~library/StackNavigators';
import { Button } from '~library/react-controls/Button';
import { SpecialtiesModel } from '~models/Specialties';
import { COLOR } from '~res/colors';

interface Props extends ScreenNavigationProp<ScreensName.Main> {
  model: SpecialtiesModel;
}

export class Specialties extends BaseView<Props> {
  private bgColors = [
    COLOR.ORANGE3,
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

  private onNavigateTo(id: number, title: string) {
    this.props.navigation.navigate(ScreensName.Directions, { id, title });
  }

  private renderItem = (item: Speciality) => {
    const { icon, name, countUnivers, countDirections, id } = item;

    return (
      <Button color='transparent' styleBtn={row} onPress={() => this.onNavigateTo(id, name)}>
        {icon}
        <View style={flex1}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.item}>
            <Text>{countUnivers} <Text style={styles.orangeText}>вузов</Text></Text>
            <Text>{countDirections} <Text style={styles.orangeText}>специальностей</Text></Text>
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
    fontWeight: '800',
    fontSize: 24,
    lineHeight: 28,
    color: COLOR.BLACK,
    paddingTop: 30
  }
});
