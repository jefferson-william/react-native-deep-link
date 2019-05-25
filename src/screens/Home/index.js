import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import {styles} from '../../styles/main'

class Home extends Component {
  static navigationOptions = {
    header: null,
    headerMode: 'none',
    path: 'home',
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}> 
        <TouchableOpacity onPress={ () => navigate('User') }>
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(Home)
