import React from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';

class Sala extends React.Component {
  static navigationOptions = {};

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center'}}>
        <Text>大厅</Text>
      </View>
    );
  }
}

export default Sala;
