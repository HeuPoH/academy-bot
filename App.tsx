/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Header } from '~screens/Header';
import { Directions as DirectionsScreen } from '~screens/Directions';
import { Direction as DirectionScreen } from '~screens/Direction';
import {
  RootStack,
  ScreensName
} from '~library/StackNavigators';
import { Models } from '~models/Models';
import { COLOR } from '~res/colors';
import { Main } from '~screens/main';

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <View style={styles.rootContainer}>
          <RootStack.Navigator initialRouteName={ScreensName.Main}>
            <RootStack.Group screenOptions={{ header: () => <Header /> }}>
              <RootStack.Screen name={ScreensName.Main} component={Main} />
            </RootStack.Group>
            <RootStack.Screen
              name={ScreensName.Directions}
              options={DirectionsScreen.navigationOptions}
            >
              {(p) => <DirectionsScreen model={Models.DirectionsModel()} {...p} />}
            </RootStack.Screen>
            <RootStack.Screen
              name={ScreensName.Direction}
              options={DirectionScreen.navigationOptions}
            >
              {(p) => <DirectionScreen model={Models.DirectionsModel()} {...p} />}
            </RootStack.Screen>
          </RootStack.Navigator>
        </View>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: COLOR.ORANGE2,
    flex: 1
  }
});
