import {
  createNativeStackNavigator,
  NativeStackScreenProps
} from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export enum ScreensName {
  Main = 'Main',
  Directions = 'Directions',
  Direction = 'Direction',
  Universities = 'Universities',
  University = 'University'
}

export type RootStackParams = {
  [ScreensName.Main]: undefined;
  [ScreensName.Directions]: { id: number };
  [ScreensName.Direction]: { dirId: number };
  [ScreensName.Universities]: { direction: string };
  [ScreensName.University]: { id: number };
};

export type ScreenNavAndRouteProps<T extends keyof RootStackParams> =
  ScreenRouteProp<T> & ScreenNavigationProp<T>;

export type ScreenNavigationProp<T extends keyof RootStackParams> =
  NativeStackScreenProps<RootStackParams, T>;

export type ScreenRouteProp<T extends keyof RootStackParams> = RouteProp<
  RootStackParams,
  T
>;

export const RootStack = createNativeStackNavigator<RootStackParams>();
