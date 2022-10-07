/* eslint-disable prettier/prettier */
import React from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { SvgXml } from 'react-native-svg';

import {
  ff14SF_ProDisplay_Black,
  ff17SF_ProDisplay_Black,
  ff20SF_ProDisplay_Black,
  ffSF_ProDisplay_Black,
  textDecorationLine,
  upperCase
} from '~library/base/baseStyles';
import { BaseView } from '~library/base/BaseView';
import { Button } from '~library/react-controls/Button';
import { ButtonToBack } from '~library/react-controls/ButtonToBack';
import { Direction } from '~library/services/SpecialtiesReq';
import {
  ScreenNavAndRouteProps,
  ScreenNavigationProp,
  ScreensName
} from '~library/StackNavigators';
import { Models } from '~models/Models';
import { COLOR } from '~res/colors';
import { icons } from '~res/images/icons';
import { arrowRightSmall } from '~res/images/icons/svg/arrowRightSmall';

interface Props extends ScreenNavigationProp<ScreensName.Directions> {}

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
            <Text style={styles.headerTitle}>Направления</Text>
            <View style={styles.headerSubTitle}>
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

  protected model = Models.DirectionsModel();

  componentDidMount(): void {
    const { route } = this.props;
    this.model.fetch({ specId: route.params.id });
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
        <Text style={styles.itemName}>{direction.name}</Text>
        <SvgXml xml={arrowRightSmall} />
      </Button>
    );
  }

  render() {
    const directions = this.model.getDirections();
    if (directions.length === 0) {
      return <Text style={ffSF_ProDisplay_Black}>Направления не найдены</Text>;
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
    textTransform: 'uppercase',
    color: COLOR.GREY6,
    fontWeight: '500',
    ...ff17SF_ProDisplay_Black
  },
  headerBtnGoBack: {
    paddingBottom: 37
  },
  headerCont: {
    backgroundColor: COLOR.WHITE,
    paddingTop: 25
  },
  headerTitle: {
    fontWeight: '800',
    color: COLOR.BLACK,
    textTransform: 'uppercase',
    paddingLeft: 16,
    ...ff20SF_ProDisplay_Black
  },
  headerSubTitle: {
    flexDirection: 'row',
    fontWeight: '500',
    color: COLOR.BLACK,
    marginVertical: 10,
    marginHorizontal: 16,
    textTransform: 'uppercase',
    ...ff14SF_ProDisplay_Black
  }
});
