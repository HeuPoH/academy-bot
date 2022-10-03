/* eslint-disable prettier/prettier */
import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { ffSF_ProDisplay_Black, row, textDecorationLine, upperCase } from '~library/base/baseStyles';
import { BaseView } from '~library/base/BaseView';
import { Button } from '~library/react-controls/Button';
import { ButtonToBack } from '~library/react-controls/ButtonToBack';
import { Direction } from '~library/services/SpecialtiesReq';
import {
  ScreenNavAndRouteProps,
  ScreenNavigationProp,
  ScreensName
} from '~library/StackNavigators';
import type { DirectionsModel } from '~models/Directions';
import { Models } from '~models/Models';
import { COLOR } from '~res/colors';
import { icons } from '~res/images/icons';

interface Props extends ScreenNavigationProp<ScreensName.Directions> {
  model: DirectionsModel;
}

export class Directions extends BaseView<Props> {
  static navigationOptions = (): any => {
    return {
      header: (p: ScreenNavAndRouteProps<ScreensName.Directions>) => {
        const direction = Models.DirectionsModel().getDirection(p.route.params.id);

        return (
          <ImageBackground
            style={styles.headerCont}
            source={icons.bgDirections}
          >
            <ButtonToBack styles={styles.headerBtnGoBack} goBack={p.navigation.goBack} />
            <Text style={{ ...styles.headerTitle, ...ffSF_ProDisplay_Black }}>СПЕЦИАЛЬНОСТИ</Text>
            <View style={{ ...styles.headerSubTitle, ...row, ...ffSF_ProDisplay_Black }}>
              <Text style={ffSF_ProDisplay_Black}>в сфере </Text>
              <Text style={{ ...textDecorationLine, ...upperCase, ...ffSF_ProDisplay_Black }}>
                {direction?.name}
              </Text>
            </View>
          </ImageBackground>
        );
      }
    };
  };

  private colors = [
    '#F6E58D',
    '#F9CA24',
    '#FFBE76',
    '#F0932B',
    '#FF7979',
    '#EB4D4B',
    '#BADC58',
    '#6AB04C',
    '#C7ECEE',
    '#7ED6DF',
    '#22A6B3',
    '#E056FD',
    '#BE2EDD',
    '#686DE0',
    '#4834D4',
    '#30336B',
    '#535C68',
    '#000000'
  ];

  componentDidMount(): void {
    const { model, route } = this.props;
    model.fetch({ specId: route.params.id });
    super.componentDidMount();
  }

  private getColor(id: number) {
    if (id >= this.colors.length) {
      id = id - this.colors.length;
    }

    return this.colors[id];
  }

  private onNavigateTo(id: number) {
    this.props.navigation.navigate(ScreensName.Direction, { dirId: id });
  }

  private renderItem(direction: Direction, i: number) {
    const style = {
      ...styles.item,
      borderLeftColor: this.getColor(i)
    };

    return (
      <Button
        color='transparent'
        styleBtn={style}
        onPress={() => this.onNavigateTo(direction.id)}
      >
        <Text style={{ ...styles.itemName, ...ffSF_ProDisplay_Black }}>{direction.name}</Text>
        <Image source={icons.arrowRightSmall} />
      </Button>
    );
  }

  render() {
    const directions = this.props.model.getDirections();
    if (directions.length === 0) {
      return <Text style={ffSF_ProDisplay_Black}>Записи не найдены</Text>;
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={directions}
          keyExtractor={(item) => `directions-${item.id}`}
          renderItem={({ item, index }) => this.renderItem(item, index)}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 21,
    paddingBottom: 21,
    backgroundColor: COLOR.WHITE4
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: COLOR.WHITE,
    marginVertical: 6,
    borderRadius: 10,
    borderLeftWidth: 10
  },
  itemName: {
    fontSize: 17,
    textTransform: 'uppercase',
    color: COLOR.GREY6,
    fontWeight: '400'
  },
  headerBtnGoBack: {
    paddingBottom: 37
  },
  headerCont: {
    backgroundColor: COLOR.WHITE,
    paddingTop: 25
  },
  headerTitle: {
    fontWeight: '600',
    fontSize: 20,
    color: COLOR.BLACK,
    textTransform: 'uppercase',
    paddingLeft: 16
  },
  headerSubTitle: {
    fontWeight: '500',
    fontSize: 14,
    color: COLOR.BLACK,
    marginVertical: 10,
    marginHorizontal: 16,
    textTransform: 'uppercase'
  }
});
