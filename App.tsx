/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Header } from '~screens/Header';
import { Directions as DirectionsScreen } from '~screens/Directions';
import { Direction as DirectionScreen } from '~screens/Direction';
import {
  RootStack,
  ScreenNavAndRouteProps,
  ScreensName
} from '~library/StackNavigators';
import { row } from '~library/base/baseStyles';
import { Models } from '~models/Models';
import { COLOR } from '~res/colors';
import { Main } from '~screens/main';

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <View style={styles.rootContainer}>
          <Header />
          <RootStack.Navigator initialRouteName={ScreensName.Main}>
            <RootStack.Screen name={ScreensName.Main} component={Main} />
            <RootStack.Screen
              name={ScreensName.Directions}
              initialParams={{ id: 1, name: 'УПРАВЛЕНИЯ и ЭКОНОМИКИ' }}
              options={{
                header: (p: ScreenNavAndRouteProps<ScreensName.Directions>) => (
                  <View>
                    <Text style={{ color: COLOR.BLACK }}>СПЕЦИАЛЬНОСТИ</Text>
                    <View style={row}>
                      <Text>в сфере </Text>
                      <Text>{p.route.params?.name}</Text>
                    </View>
                  </View>
                )
              }}
            >
              {(p) => <DirectionsScreen model={Models.DirectionsModel()} {...p} />}
            </RootStack.Screen>
            <RootStack.Screen
              name={ScreensName.Direction}
              initialParams={{ dirId: 1 }}
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
