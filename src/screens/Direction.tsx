import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Modal from 'react-native-modal';

import {
  ff14SF_ProDisplay_Black,
  ff17SF_ProDisplay_Black,
  ff20SF_ProDisplay_Black,
  ffSF_ProDisplay_Black
} from '~library/base/baseStyles';
import { BaseView } from '~library/base/BaseView';
import { Button } from '~library/react-controls/Button';
import { ButtonToBack } from '~library/react-controls/ButtonToBack';
import {
  ScreenNavAndRouteProps,
  ScreenNavigationProp,
  ScreensName
} from '~library/StackNavigators';
import { Models } from '~models/Models';
import { COLOR } from '~res/colors';
import { icons } from '~res/images/icons';

interface Props extends ScreenNavigationProp<ScreensName.Direction> {}

interface State {
  showModal: boolean;
}

export class Direction extends BaseView<Props, State> {
  static navigationOptions = (): any => {
    return {
      header: (p: ScreenNavAndRouteProps<ScreensName.Direction>) => {
        const dir = Models.DirectionsModel().getDirection(p.route.params.dirId);

        return (
          <ImageBackground style={styles.headerCont} source={icons.bgDirection}>
            <ButtonToBack
              styles={styles.headerBtnGoBack}
              goBack={p.navigation.goBack}
            />
            <Text style={styles.headerTitle}>{dir?.name}</Text>
            <Text style={styles.headerSubTitle}>{dir?.code}</Text>
          </ImageBackground>
        );
      }
    };
  };

  protected model = Models.DirectionsModel();

  constructor(p: Props) {
    super(p);
    this.state = { showModal: false };
  }

  private onCloseModel = () => {
    this.setState({ showModal: false });
  };

  private renderModal() {
    const conditions = this.model
      .getConditions(this.props.route.params.dirId)
      .map((cond, i) => {
        return (
          <View style={styles.modalConds} key={i}>
            <View>
              {cond.title.map((t, j) => (
                <Text style={styles.modalCondsText} key={j}>
                  {t}
                </Text>
              ))}
            </View>
            <View>
              <Text style={styles.modalCondsText}>{cond.count}</Text>
            </View>
          </View>
        );
      });

    return (
      <Modal
        onBackButtonPress={this.onCloseModel}
        isVisible={this.state.showModal}
        animationIn='slideInRight'
        animationOut='slideOutRight'
      >
        <View style={styles.modalCont}>{conditions}</View>
      </Modal>
    );
  }

  private onNavigateTo(name: string) {
    this.props.navigation.navigate(ScreensName.Universities, {
      direction: name
    });
  }

  render() {
    const id = this.props.route.params.dirId;
    const direction = this.model.getDirection(id);
    if (!direction) {
      return <Text style={ffSF_ProDisplay_Black}>Направление не найдено</Text>;
    }

    return (
      <ScrollView style={styles.container}>
        {this.renderModal()}
        <Text style={styles.descBlock}>{direction.description}</Text>
        <Button
          styleBtn={{
            ...styles.condBtn,
            borderLeftColor: COLOR.GREEN2
          }}
          styleTxt={styles.condBtnTitle}
          title='С каким ЕГЭ можно поступить'
          onPress={() => this.setState({ showModal: true })}
        />
        <Button
          styleBtn={{
            ...styles.condBtn,
            borderLeftColor: COLOR.ORANGE4
          }}
          styleTxt={styles.condBtnTitle}
          title='Вузы по специальности'
          onPress={() => this.onNavigateTo(direction.name)}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16
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
    color: COLOR.BLACK,
    textTransform: 'uppercase',
    paddingLeft: 16,
    ...ff20SF_ProDisplay_Black
  },
  headerSubTitle: {
    fontWeight: '500',
    color: COLOR.BLACK,
    opacity: 0.5,
    marginVertical: 10,
    marginHorizontal: 16,
    ...ff14SF_ProDisplay_Black
  },
  descBlock: {
    fontWeight: '400',
    color: COLOR.BLACK,
    fontSize: 16,
    lineHeight: 21,
    marginBottom: 30,
    textAlign: 'justify',
    paddingTop: 30
  },
  condBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderLeftWidth: 10,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: COLOR.WHITE,
    marginVertical: 6,
    borderRadius: 10
  },
  condBtnTitle: {
    fontSize: 17,
    textTransform: 'uppercase',
    color: COLOR.GREY6,
    fontWeight: '400',
    ...ffSF_ProDisplay_Black
  },
  modalCont: {
    backgroundColor: COLOR.WHITE,
    paddingVertical: 22,
    paddingHorizontal: 38,
    borderRadius: 20
  },
  modalConds: {
    flexDirection: 'row',
    lineHeight: 22,
    paddingVertical: 12,
    marginRight: 32
  },
  modalCondsText: {
    fontWeight: '500',
    color: COLOR.BLACK,
    ...ff17SF_ProDisplay_Black
  }
});
