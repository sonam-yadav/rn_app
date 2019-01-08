
import { createStackNavigator,createAppContainer , createSwitchNavigator } from 'react-navigation';

import LoginScreen from './component/login';
import SearchScreen from './component/search';
import DetailScreen from './component/Details';
import AuthLoadingScreen from './AuthLoadingScreen'

const AppStackNav = createStackNavigator({
    SearchScreen: {
        screen: SearchScreen,
        navigationOptions: {
            header: null
        }
    },
    DetailScreen: {
        screen: DetailScreen,
        navigationOptions: {
            header: null
        }
    }
});
const AuthStack = createStackNavigator({

    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    }
});

const RouteCompo = createAppContainer(createSwitchNavigator({
    AuthLoading:AuthLoadingScreen,
    App:AppStackNav,
    Auth:AuthStack
},
    {
        initialRouteName:'AuthLoading'
    }));

export default RouteCompo;