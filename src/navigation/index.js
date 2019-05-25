import Home from '../screens/Home'
import {createStackNavigator, createAppContainer} from 'react-navigation';

export const AppNavigator = createStackNavigator({
  Home,
});

export default createAppContainer(AppNavigator);
