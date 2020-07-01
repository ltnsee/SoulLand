import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../../pages/home';
import HomeDetail from '../../pages/home/detail';

const HomeNavigatorConfig = {
  Home: Home,
  HomeDetail: HomeDetail,
};

const HomeScreens = createStackNavigator(HomeNavigatorConfig, {
  initialRouteName: 'Home',
  navigationOptions: ({ navigation }) => ({
    tabBarVisible: navigation.state.index === 0
  })
});

export default HomeScreens;
