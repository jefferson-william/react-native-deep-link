import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../styles/main'

class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
    headerMode: 'none',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
      </View>
    );
  }
}

export default HomeScreen