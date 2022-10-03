import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { BaseView } from '~library/base/BaseView';
import { ButtonToBack } from '~library/react-controls/ButtonToBack';
import {
  ScreenNavAndRouteProps,
  ScreenNavigationProp,
  ScreensName
} from '~library/StackNavigators';
import {
  alignItemsCenter,
  ffSF_ProDisplay_Black,
  flex1
} from '~library/base/baseStyles';
import { COLOR } from '~res/colors';
import { icons } from '~res/images/icons';
import { UniversitiesModel } from '~models/Universities';
import { Models } from '~models/Models';
import { styles as baseStyle } from './Directions';

interface Props extends ScreenNavigationProp<ScreensName.University> {
  model: UniversitiesModel;
}

export class University extends BaseView<Props> {
  static navigationOptions = (): any => {
    return {
      header: (p: ScreenNavAndRouteProps<ScreensName.University>) => {
        const university = Models.UniversitiesModel().getUniversity(
          p.route.params.id
        )!;

        return (
          <ImageBackground style={style.headerCont} source={icons.bgUnversity}>
            <ButtonToBack
              styles={baseStyle.headerBtnGoBack}
              goBack={p.navigation.goBack}
            />
            <View style={style.icons}>
              <View style={style.points}>
                <Text style={style.pointsParam}>{university.points}</Text>
                <Text style={style.pointsStaticText}>ЕГЭ</Text>
              </View>
              {university.hasMilitary && (
                <Image style={style.icon} source={icons.warfac} />
              )}
              {university.hasHostel && (
                <Image style={style.icon} source={icons.domin} />
              )}
            </View>
          </ImageBackground>
        );
      }
    };
  };

  render() {
    const university = this.props.model.getUniversity(
      this.props.route.params.id
    );

    if (!university) {
      return <Text style={ffSF_ProDisplay_Black}>Университет не найден</Text>;
    }

    return (
      <ScrollView style={style.cont}>
        <Text style={{ ...style.title, ...ffSF_ProDisplay_Black }}>
          {university.name}
        </Text>
        <Text style={{ ...style.subTitle, ...ffSF_ProDisplay_Black }}>
          {university.type ? 'Государственный' : 'Частный'}
        </Text>
        <View style={style.address}>
          <Image source={icons.vector} />
          <Text style={{ ...style.addressText, ...ffSF_ProDisplay_Black }}>
            {university.address}
          </Text>
        </View>
        <View style={style.shortInfo}>
          <View style={{ ...flex1, ...alignItemsCenter }}>
            <Text style={{ ...style.shortInfoParam, ...ffSF_ProDisplay_Black }}>
              {university.budgetPlaces}
            </Text>
            <Text style={ffSF_ProDisplay_Black}>бюджетных мест</Text>
          </View>
          <View style={{ ...flex1, ...alignItemsCenter }}>
            <Text style={{ ...style.shortInfoParam, ...ffSF_ProDisplay_Black }}>
              {university.costPerYear}
            </Text>
            <Text style={ffSF_ProDisplay_Black}>стоимость за год</Text>
          </View>
        </View>
        <View>
          <Text
            style={{ ...style.shortInfoStaticText, ...ffSF_ProDisplay_Black }}
          >
            Об учебном заведении
          </Text>
          <Text style={{ ...style.description, ...ffSF_ProDisplay_Black }}>
            {university.description}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  headerCont: {
    paddingTop: 25,
    paddingBottom: 165,
    marginBottom: 40
  },
  points: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 75 / 2,
    borderWidth: 2,
    width: 75,
    height: 75,
    backgroundColor: COLOR.WHITE
  },
  pointsParam: {
    fontSize: 20,
    color: COLOR.BLACK
  },
  pointsStaticText: {
    fontWeight: '400',
    fontSize: 11,
    color: COLOR.GREY6
  },
  icons: {
    marginLeft: 16,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    bottom: -75 / 2
  },
  icon: {
    backgroundColor: COLOR.WHITE,
    borderColor: COLOR.BLACK,
    borderWidth: 1,
    borderRadius: 23,
    width: 46,
    height: 46,
    padding: 5,
    marginLeft: 8
  },
  cont: {
    paddingHorizontal: 16,
    backgroundColor: COLOR.WHITE,
    flexDirection: 'column'
  },
  title: {
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 22,
    textTransform: 'uppercase',
    color: COLOR.BLACK
  },
  subTitle: {
    paddingTop: 12,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    textTransform: 'uppercase',
    color: COLOR.BLACK,
    opacity: 0.5
  },
  address: {
    paddingTop: 12,
    flexDirection: 'row'
  },
  addressText: {
    fontWeight: '400',
    fontSize: 14,
    paddingLeft: 8,
    lineHeight: 18,
    textDecorationLine: 'underline',
    color: COLOR.BLACK
  },
  shortInfo: {
    marginTop: 30,
    flex: 1,
    backgroundColor: COLOR.PINKY,
    boxShadow: '0px 5px 13px rgba(255, 233, 221, 0.2)',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 8,
    flexDirection: 'row'
  },
  shortInfoParam: {
    fontWeight: '800',
    fontSize: 20,
    lineHeight: 22,
    color: COLOR.BLACK
  },
  shortInfoStaticText: {
    paddingTop: 30,
    paddingBottom: 25,
    fontWeight: '900',
    fontSize: 19,
    color: COLOR.BLACK
  },
  description: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
    color: COLOR.BLACK
  }
});
