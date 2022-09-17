import {
  createStackNavigator,
  StackNavigationProp
} from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export enum ScreensName {
  Directions = 'Directions',
  Direction = 'Direction'
}

export type RootStackParams = {
  [ScreensName.Directions]: { id: number; name: string };
  [ScreensName.Direction]: { dirId: number };
};

export type ScreenNavAndRouteProps<T extends keyof RootStackParams> = {
  route: ScreenRouteProp<T>;
  navigation: ScreenNavigationProp<T>;
};

type ScreenNavigationProp<T extends keyof RootStackParams> =
  StackNavigationProp<RootStackParams, T>;

type ScreenRouteProp<T extends keyof RootStackParams> = RouteProp<
  RootStackParams,
  T
>;

export const RootStack = createStackNavigator<RootStackParams>();

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
