import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from '../screens/Home'
import User from '../screens/User'

export const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    path: 'home',
  },
  User: {
    screen: User,
    path: 'user/:id',
  },
});

export default createAppContainer(AppNavigator);
