// import React from 'react';
// import { Image, StyleSheet } from 'react-native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// // import { Bookmarks } from '~screens/bookmarks/Bookmarks';
// // import { Profile } from '~screens/profile/Profile';
// // import { News } from '~screens/search/News';
// import { Main } from '~screens/main';
// import { icons } from '~res/images/icons';
// import { COLOR } from '~res/colors';

// type TabType = {
//   title: string;
//   icon: string;
//   name: string;
//   component: any;
// };

// const Tab = createMaterialBottomTabNavigator();

// export class Tabs extends React.Component {
//   private tabs: TabType[] = [
//     { title: 'Поиск', name: 'Main', icon: 'search', component: Main }
//     // {
//     //   title: 'Закладки',
//     //   name: 'Bookmarks',
//     //   icon: 'bookmarks',
//     //   component: Bookmarks
//     // },
//     // { title: 'Новости', name: 'News', icon: 'news', component: News },
//     // { title: 'Профиль', name: 'Profile', icon: 'profile', component: Profile }
//   ];

//   private getIcon(tab: string, focused: boolean) {
//     const iconPath = `${tab}${focused}` as unknown as keyof typeof icons;
//     return <Image source={icons[iconPath]} />;
//   }

//   private getTabs() {
//     return this.tabs.map((tab, i) => (
//       <Tab.Screen
//         options={{
//           tabBarIcon: ({ focused }) => this.getIcon(tab.icon, focused),
//           title: tab.title
//         }}
//         key={`${tab.title}-${i}`}
//         name={tab.name}
//         component={tab.component}
//       />
//     ));
//   }

//   render() {
//     return (
//       <Tab.Navigator
//         inactiveColor={COLOR.GREY2}
//         shifting={false}
//         barStyle={styles.tabNavigator}
//       >
//         {this.getTabs()}
//       </Tab.Navigator>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   tabNavigator: {
//     backgroundColor: COLOR.PINKY3
//   }
// });
