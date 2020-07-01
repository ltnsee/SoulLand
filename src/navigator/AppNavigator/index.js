import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

import { StyleSheet, Image } from 'react-native';

import HomeNavigator from '../HomeNavigator';
import Sala from '../../pages/sala';
import Publish from '../../pages/publish';
import Information from '../../pages/information';
import Mine from '../../pages/mine';



const TabNavigatorConfig = {
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ focused }) => {
        if (focused) {
          return <Image style={style.bottomTabIconStyle} source={require('../../assets/image/home-tabbar-icon.png')} />;
        }
        return <Image style={style.bottomTabIconStyle} source={require('../../assets/image/home-tabbar-icon.png')} />;
      }
    }
  },
  Sala: {
    screen: Sala,
    navigationOptions: {
      tabBarLabel: '大厅',
      tabBarIcon: ({ focused }) => {
        if (focused) {
          return <Image style={style.bottomTabIconStyle} source={require('../../assets/image/sala-tabbar-icon.png')} />;
        }
        return <Image style={style.bottomTabIconStyle} source={require('../../assets/image/sala-tabbar-icon.png')} />;
      }
    }
  },
  Publish: {
    screen: Publish,
    navigationOptions: {
      tabBarLabel: '发布',
      tabBarIcon: ({ focused }) => {
        if (focused) {
          return <Image style={style.bottomTabIconStyle} source={require('../../assets/image/publish-tabbar-icon.png')} />;
        }
        return <Image style={style.bottomTabIconStyle} source={require('../../assets/image/publish-tabbar-icon.png')} />;
      }
    }
  },
  Information: {
    screen: Information,
    navigationOptions: {
      tabBarLabel: '消息',
      tabBarIcon: ({ focused }) => {
        if (focused) {
          return <Image style={style.bottomTabIconStyle} source={require('../../assets/image/information-tabbar-icon.png')} />;
        }
        return <Image style={style.bottomTabIconStyle} source={require('../../assets/image/information-tabbar-icon.png')} />;
      }
    }
  },
  Mine: {
    screen: Mine,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({ focused }) => {
        if (focused) {
          return <Image style={style.bottomTabIconStyle} source={require('../../assets/image/mine-tabbar-icon.png')} />;
        }
        return <Image style={style.bottomTabIconStyle} source={require('../../assets/image/mine-tabbar-icon.png')} />;
      }
    }
  }
};

const TabBarComponent = props => <BottomTabBar {...props} />;

const TabScreens = createBottomTabNavigator(
  TabNavigatorConfig,
  {
    tabBarComponent: props => (
      <TabBarComponent {...props} style={{ borderTopColor: '#605F60' }} />
    ),
  }
);


class AppNavigator extends React.Component {
  render () {
    const AppContainer = createAppContainer(TabScreens);
    return <AppContainer />;
  }
}

const style = StyleSheet.create({
  bottomTabIconStyle: {
    width: 30,
    height: 30
  }
})

export default AppNavigator;