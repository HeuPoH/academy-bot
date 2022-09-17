import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Carousel } from '~library/components/Carousel';
import { flex1, row } from '~library/base/baseStyles';
import { BaseView } from '~library/base/BaseView';
import { Speciality } from '~library/services/specialtiesReq';
import { SpecialtiesModel } from '~models/Specialties';
import { COLOR } from '~res/colors';

type Props = {
  model: SpecialtiesModel;
};

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

  private renderItem(item: Speciality) {
    const { icon, name, countUnivers } = item;

    return (
      <View style={row}>
        {icon}
        <View style={flex1}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.greyText}>
            {countUnivers} <Text style={styles.orangeText}>вузов</Text>
          </Text>
        </View>
      </View>
    );
  }

  private getHeader() {
    return <Text style={styles.contTitle}>Специальности</Text>;
  }

  componentDidMount(): void {
    this.props.model.fetch();
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
  greyText: {
    fontWeight: '700',
    fontSize: 14,
    color: COLOR.GREY6
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
