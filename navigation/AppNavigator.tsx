import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { FilmScreen } from '../screens/FilmScreen';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: 'Studio Ghibli Films',
        headerBackButtonDisplayMode: 'minimal',
      },
    },
    Films: {
      screen: FilmScreen,
      options: {
        title: 'Film Details',
        headerBackButtonDisplayMode: 'minimal',
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);
