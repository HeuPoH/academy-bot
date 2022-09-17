import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Circle, Svg } from 'react-native-svg';

import { BaseView } from '~library/base/BaseView';
import { ScreenNavAndRouteProps, ScreensName } from '~library/StackNavigators';
import { DirectionsModel } from '~models/Directions';
import { COLOR } from '~res/colors';

type Props = {
  model: DirectionsModel;
} & ScreenNavAndRouteProps<ScreensName.Direction>;

export class Direction extends BaseView<Props> {
  componentDidMount() {
    this.props.model.fetch({ specId: 1 });
    super.componentDidMount();
  }

  render() {
    const id = this.props.route.params.dirId;
    const direction = this.props.model.getDirection(id);

    if (!direction) {
      return <Text>Направление не найдено</Text>;
    }

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.descBlock}>{direction?.description}</Text>
        </View>
        <View>
          <Svg>
            <Circle />
          </Svg>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16
  },
  descBlock: {
    fontWeight: '400',
    color: COLOR.BLACK,
    fontSize: 16,
    lineHeight: 21,
    marginBottom: 30
  }
});
