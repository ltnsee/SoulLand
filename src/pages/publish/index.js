import React from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';

class Publish extends React.Component {
  static navigationOptions = {};

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
        <Text>发布</Text>
      </View>
    );
  }
}

export default Publish;
