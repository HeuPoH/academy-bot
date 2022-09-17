import {
  createNativeStackNavigator,
  NativeStackScreenProps
} from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export enum ScreensName {
  Main = 'Main',
  Directions = 'Directions',
  Direction = 'Direction'
}

export type RootStackParams = {
  [ScreensName.Main]: undefined;
  [ScreensName.Directions]: { id: number; name: string };
  [ScreensName.Direction]: { dirId: number };
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

// type RouteArgs = {
//   name: ScreensName;
//   component: <T extends keyof RootStackParams>(
//     p: ScreenNavAndRouteProps<T>
//   ) => JSX.Element;
//   initialParams: RootStackParams[keyof RootStackParams];
//   options: ScreenOptions;
// };

// export const routes: RouteArgs[] = [
//   {
//     name: ScreensName.Directions,
//     component: (p: ScreenNavAndRouteProps<ScreensName.Directions>) => (
//       <DirectionsScreen model={Models.DirectionsModel()} {...p} />
//     ),
//     initialParams: { id: 1, name: 'УПРАВЛЕНИЯ и ЭКОНОМИКИ' },
//     options: {
//       header: (p: StackHeaderProps) => {
//         return (
//           <View>
//             <Text style={{ color: COLOR.BLACK }}>СПЕЦИАЛЬНОСТИ</Text>
//             <View style={row}>
//               <Text>в сфере </Text>
//               <Text>{p.route.params?.name}</Text>
//             </View>
//           </View>
//         );
//       }
//     }
//   },
//   {
//     name: ScreensName.Direction,
//     component: (p: ScreenNavAndRouteProps<ScreensName.Direction>) => (
//       <DirectionScreen model={Models.DirectionsModel()} {...p} />
//     ),
//     initialParams: {},
//     options: {
//       header: (p: StackHeaderProps) => {
//         return (
//           <View>
//             <Text style={{ color: COLOR.BLACK }}>СПЕЦИАЛЬНОСТИ</Text>
//             <View style={row}>
//               <Text>в сфере </Text>
//               <Text>{p.route.params?.name}</Text>
//             </View>
//           </View>
//         );
//       }
//     }
//   }
// ];
