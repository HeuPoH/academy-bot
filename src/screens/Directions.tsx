import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { BaseView } from '~library/base/BaseView';
import { Direction } from '~library/services/specialtiesReq';
import { ScreenNavigationProp, ScreensName } from '~library/StackNavigators';
import type { DirectionsModel } from '~models/Directions';
import { COLOR } from '~res/colors';
import { icons } from '~res/images/icons';

type Props = {
  model: DirectionsModel;
} & ScreenNavigationProp<ScreensName.Directions>;

export class Directions extends BaseView<Props> {
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
          keyExtractor={(item) => `${item.id}`}
          renderItem={(item) => this.renderItem(item.item, item.index)}
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
  }
});
