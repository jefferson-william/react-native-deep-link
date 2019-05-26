import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from '../screens/Home'
import User from '../screens/User'

export const AppNavigator = createStackNavigator({
  Home,
  User,
});

export default createAppContainer(AppNavigator);
