import React from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';

class Information extends React.Component {
  static navigationOptions = {};

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'purple', justifyContent: 'center', alignItems: 'center'}}>
        <Text>消息</Text>
      </View>
    );
  }
}

export default Information;
