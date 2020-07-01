import React from 'react';

import { StyleSheet, View, Text, Image, Button } from 'react-native';

class HomeDetail extends React.Component {
  static navigationOptions = {};

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: 'cyan', justifyContent: 'center', alignItems: 'center' }}>
        <Text>详情</Text>
      </View>
    );
  }
}

export default HomeDetail;
