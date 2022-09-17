import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { row } from '~library/base/baseStyles';
import { BaseView } from '~library/base/BaseView';
import { IconButton } from '~library/components/IconButton';
import { Direction } from '~library/services/specialtiesReq';
import {
  ScreenNavAndRouteProps,
  ScreenNavigationProp,
  ScreensName
} from '~library/StackNavigators';
import type { DirectionsModel } from '~models/Directions';
import { COLOR } from '~res/colors';
import { icons } from '~res/images/icons';

type Props = {
  model: DirectionsModel;
} & ScreenNavigationProp<ScreensName.Directions>;

export class Directions extends BaseView<Props> {
  static navigationOptions = (): NativeStackNavigationOptions => {
    return {
      header: (p: ScreenNavAndRouteProps<ScreensName.Directions>) => {
        return (
          <ImageBackground
            style={styles.headerCont}
            source={icons.bgDirections}
            // resizeMode='cover'
          >
            <IconButton
              styleBtn={{ width: 100 }}
              styleTxt={styles.btnBackText}
              color='transparent'
              title='Назад'
              onPress={p.navigation.goBack}
              src={icons.arrowLeft}
            />
            <Text style={styles.headerTitle}>СПЕЦИАЛЬНОСТИ</Text>
            <View style={row}>
              <Text>в сфере </Text>
              <Text>{p.route.params?.name}</Text>
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

  private renderItem(direction: Direction, i: number) {
    const style = {
      ...styles.item,
      borderLeftColor: this.props.model.getColor(i)
    };

    return (
      <View style={style}>
        <Text style={styles.itemName}>{direction.name}</Text>
        <Image source={icons.arrowRightSmall} />
      </View>
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
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 14
  },
  headerCont: {
    backgroundColor: 'white'
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
  headerTitle: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.38,
    color: COLOR.BLACK,
    paddingLeft: 18
  },
  btnBackText: {
    fontWeight: '400',
    fontSize: 17,
    paddingBottom: 18,
    paddingTop: 35,
    lineHeight: 22
  }
});
