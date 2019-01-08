import React, {Component} from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';

type Props = {};
export default class AuthLoadingScreen extends Component<Props> {
    constructor(props) {
        super(props);
        this._InitAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _InitAsync = async () => {
        const userName = await AsyncStorage.getItem('userName');
        console.log("userName",userName)
        this.props.navigation.navigate(userName ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View>

            </View>
        );
    }
}