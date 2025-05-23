/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Header } from '~screens/Header';
import { Main } from '~screens/main';
import { Directions as DirectionsScreen } from '~screens/Directions';
import { Direction as DirectionScreen } from '~screens/Direction';
import { Universities as UniversitiesScreen } from '~screens/Universities';
import { University as UniversityScreen } from '~screens/University';
import {
  RootStack,
  ScreensName
} from '~library/StackNavigators';

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
              component={DirectionsScreen}
            />
            <RootStack.Screen
              name={ScreensName.Direction}
              options={DirectionScreen.navigationOptions}
              component={DirectionScreen}
            />
            <RootStack.Screen
              name={ScreensName.Universities}
              options={UniversitiesScreen.navigationOptions}
              component={UniversitiesScreen}
            />
            <RootStack.Screen
              name={ScreensName.University}
              options={UniversityScreen.navigationOptions}
              component={UniversityScreen}
            />
          </RootStack.Navigator>
        </View>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  }
});
