import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
// import { Circle, Svg } from 'react-native-svg';

import { BaseView } from '~library/base/BaseView';
import { ButtonToBack } from '~library/components/ButtonToBack';
import {
  ScreenNavAndRouteProps,
  ScreenNavigationProp,
  ScreensName
} from '~library/StackNavigators';
import { DirectionsModel } from '~models/Directions';
import { Models } from '~models/Models';
import { COLOR } from '~res/colors';
import { icons } from '~res/images/icons';

interface Props extends ScreenNavigationProp<ScreensName.Direction> {
  model: DirectionsModel;
}

export class Direction extends BaseView<Props> {
  static navigationOptions = (): any => {
    return {
      header: (p: ScreenNavAndRouteProps<ScreensName.Direction>) => {
        const dir = Models.DirectionsModel().getDirection(p.route.params.dirId);
        return (
          <ImageBackground style={styles.headerCont} source={icons.bgDirection}>
            <ButtonToBack
              styles={{ paddingBottom: 86 }}
              goBack={p.navigation.goBack}
            />
            <Text style={styles.headerTitle}>{dir?.name}</Text>
            <Text style={styles.headerSubTitle}>{dir?.code}</Text>
          </ImageBackground>
        );
      }
    };
  };

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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 30
  },
  headerCont: {
    backgroundColor: COLOR.WHITE,
    paddingTop: 10
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
    opacity: 0.5,
    marginVertical: 10,
    marginHorizontal: 16
  },
  descBlock: {
    fontWeight: '400',
    color: COLOR.BLACK,
    fontSize: 16,
    lineHeight: 21,
    marginBottom: 30,
    textAlign: 'justify'
  }
});
