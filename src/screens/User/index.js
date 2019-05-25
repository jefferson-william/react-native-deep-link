import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import {styles} from '../../styles/main'

class User extends Component {
  static navigationOptions = {
    header: null,
    headerMode: 'none',
    path: 'user',
  }

  render() {
    const { goBack } = this.props.navigation

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={ () => goBack() }>
          <Text style={styles.text}>User</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(User)
