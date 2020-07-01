import React from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';

class Mine extends React.Component {
  static navigationOptions = {};

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center'}}>
        <Text>我的</Text>
      </View>
    );
  }
}

export default Mine;
