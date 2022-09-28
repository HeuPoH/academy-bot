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

import { row, textDecorationLine, upperCase } from '~library/base/baseStyles';
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
import { COLOR } from '~res/colors';
import { icons } from '~res/images/icons';

interface Props extends ScreenNavigationProp<ScreensName.Directions> {
  model: DirectionsModel;
}

export class Directions extends BaseView<Props> {
  static navigationOptions = (): any => {
    return {
      header: (p: ScreenNavAndRouteProps<ScreensName.Directions>) => {
        return (
          <ImageBackground
            style={styles.headerCont}
            source={icons.bgDirections}
          >
            <ButtonToBack styles={styles.headerBtnGoBack} goBack={p.navigation.goBack} />
            <Text style={styles.headerTitle}>СПЕЦИАЛЬНОСТИ</Text>
            <View style={{ ...styles.headerSubTitle, ...row }}>
              <Text>в сфере </Text>
              <Text style={{ ...textDecorationLine, ...upperCase }}>
                {p.route.params?.title}
              </Text>
            </View>
          </ImageBackground>
        );
      }
    };
  };

  componentDidMount(): void {
    const { model, route } = this.props;
    model.fetch({ specId: route.params.id });
    super.componentDidMount();
  }

  private onNavigateTo(id: number) {
    this.props.navigation.navigate(ScreensName.Direction, { dirId: id });
  }

  private renderItem(direction: Direction, i: number) {
    const style = {
      ...styles.item,
      borderLeftColor: this.props.model.getColor(i)
    };

    return (
      <Button
        color='transparent'
        styleBtn={style}
        onPress={() => this.onNavigateTo(direction.id)}
      >
        <Text style={styles.itemName}>{direction.name}</Text>
        <Image source={icons.arrowRightSmall} />
      </Button>
    );
  }

  render() {
    const directions = this.props.model.getDirections();
    if (directions.length === 0) {
      return <Text>Записи не найдены</Text>;
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

const styles = StyleSheet.create({
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
  },
});
