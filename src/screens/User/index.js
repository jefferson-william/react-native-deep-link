import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import {styles} from '../../styles/main'

class User extends Component {
  static navigationOptions = {
    header: null,
    headerMode: 'none',
  }

  static path = 'user/:id'

  render() {
    const { goBack, getParam } = this.props.navigation
    const id = getParam('id') ? getParam('id') : null

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={ () => goBack() }>
          <Text style={styles.text}>User {id}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(User)
