import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { BaseView } from '~library/base/BaseView';
import {
  ScreenNavAndRouteProps,
  ScreenNavigationProp,
  ScreensName
} from '~library/StackNavigators';
import { University } from '~library/services/UniversitiesReq';
import { ButtonToBack } from '~library/react-controls/ButtonToBack';
import { Button } from '~library/react-controls/Button';
import { UniversitiesModel } from '~models/Universities';
import { icons } from '~res/images/icons';
import { COLOR } from '~res/colors';
import { ffSF_ProDisplay_Black } from '~library/base/baseStyles';

interface Props extends ScreenNavigationProp<ScreensName.Universities> {
  model: UniversitiesModel;
}

export class Universities extends BaseView<Props> {
  static navigationOptions = (): any => {
    return {
      header: (p: ScreenNavAndRouteProps<ScreensName.Universities>) => {
        return (
          <ImageBackground style={styles.headerCont} source={icons.bgDirection}>
            <ButtonToBack
              styles={styles.headerBtnGoBack}
              goBack={p.navigation.goBack}
            />
            <Text style={{ ...styles.headerTitle, ...ffSF_ProDisplay_Black }}>
              Вузы по специальности
            </Text>
            <Text
              style={{ ...styles.headerSubTitle, ...ffSF_ProDisplay_Black }}
            >
              {p.route.params?.direction}
            </Text>
          </ImageBackground>
        );
      }
    };
  };

  componentDidMount(): void {
    const direction = this.props.route.params.direction;
    this.props.model.fetch(direction);
    super.componentDidMount();
  }

  private renderItem(item: University) {
    return (
      <Button onPress={() => this.onNavigateTo(item.id)} styleBtn={styles.item}>
        <Image source={icons.coin} />
        <Text style={{ ...styles.itemTitle, ...ffSF_ProDisplay_Black }}>
          {item.name}
        </Text>
        <Image source={icons.arrowRightSmall} />
      </Button>
    );
  }

  private onNavigateTo(id: number) {
    this.props.navigation.navigate(ScreensName.University, { id });
  }

  render() {
    const univers = this.props.model.getUniversities();
    if (!univers.length) {
      return <Text style={ffSF_ProDisplay_Black}>Университеты не найдены</Text>;
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={univers}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={(item) => `unversity-${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor: COLOR.WHITE2
  },
  headerCont: {
    backgroundColor: COLOR.WHITE,
    paddingTop: 25
  },
  headerBtnGoBack: {
    paddingBottom: 86
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
    marginHorizontal: 16,
    textTransform: 'uppercase'
  },
  item: {
    backgroundColor: COLOR.WHITE,
    borderRadius: 10,
    borderLeftWidth: 11,
    borderLeftColor: COLOR.BLACK,
    marginBottom: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemTitle: {
    paddingLeft: 12,
    color: COLOR.BLACK,
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 20,
    flex: 1
  }
});
