import React from 'react';
import {
  ImageBackground,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { BaseView } from '~library/base/BaseView';
import { Button } from '~library/react-controls/Button';
import { ButtonToBack } from '~library/react-controls/ButtonToBack';
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

  constructor(p: Props) {
    super(p);
    this.state = { showModal: false };
  }

  private renderModal() {
    const conditions = this.props.model
      .getConditions(this.props.route.params.dirId)
      .map((cond, i) => {
        return (
          <View style={styles.modalConds} key={i}>
            <View>
              {cond.title.map((t, j) => (
                <Text key={j}>{t}</Text>
              ))}
            </View>
            <Text>{cond.count}</Text>
          </View>
        );
      });

    return (
      <Modal
        // transparent={true}
        animationType='slide'
        onRequestClose={() => this.setState({ showModal: false })}
        visible={this.state.showModal}
      >
        <View style={styles.modalCont}>{conditions}</View>
      </Modal>
    );
  }

  render() {
    const id = this.props.route.params.dirId;
    const direction = this.props.model.getDirection(id);

    if (!direction) {
      return <Text>Направление не найдено</Text>;
    }

    return (
      <ScrollView style={styles.container}>
        {this.renderModal()}
        <Text style={styles.descBlock}>{direction?.description}</Text>
        <Button
          styleBtn={{
            ...styles.condBtn,
            borderLeftColor: this.props.model.getColor(7)
          }}
          styleTxt={styles.condBtnTitle}
          title='С каким ЕГЭ можно поступить'
          onPress={() => this.setState({ showModal: true })}
        />
        <Button
          styleBtn={{
            ...styles.condBtn,
            borderLeftColor: this.props.model.getColor(3)
          }}
          styleTxt={styles.condBtnTitle}
          title='Вузы по специальности'
          onPress={() => {}}
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
  headerTitle: {
    fontWeight: '600',
    fontSize: 20,
    color: COLOR.BLACK,
    textTransform: 'uppercase',
    paddingLeft: 16
  },
  headerBtnGoBack: {
    paddingBottom: 86
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
    fontWeight: '400'
  },
  modalCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalConds: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
});
