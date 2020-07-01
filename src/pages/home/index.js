import React from 'react';

import { StyleSheet, View, Text, Image, Button, } from 'react-native';

class Home extends React.Component {
  static navigationOptions = {
    title: '首页',
    headerLeft: () => <Button title="设置" onPress={() => alert('设置')} />,
    headerRight: () => <Button title="扫一扫" onPress={() => alert('扫一扫')} />
  };

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: 'cyan', justifyContent: 'center', alignItems: 'center' }}>
        <Text>首页</Text>
        <Button title="查看详情" onPress={() => this.props.navigation.navigate('HomeDetail')} />
      </View>
    );
  }
}

export default Home;
