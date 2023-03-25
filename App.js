import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/home';
import { colors } from './settings/colors';
//import DetailsScreen from './screens/DetailsScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);

// Settings for homescreen
HomeScreen.navigationOptions = {
  headerShown: false,
};

//Colors for this app
//https://www.schemecolor.com/light-red-and-purple.php