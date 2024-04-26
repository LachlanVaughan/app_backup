import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from './pages/Login/LoginScreen'
import RegisterScreen from './pages/Register/RegisterScreen'
import ForgotPasswordScreen from './pages/ForgotPassword/ForgotPasswordScreen';
import QRScanScreen from './pages/QRScan/QRScanScreen';
import GenerateQRScreen from './pages/GenerateQR/GenerateQRScreen';

const { Navigator, Screen } = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Login">
        <Screen name='Login' component={LoginScreen}></Screen>
        <Screen name='Register' component={RegisterScreen}></Screen>
        <Screen name='ForgotPassword' component={ForgotPasswordScreen}></Screen>
        <Screen name='QRScan' component={QRScanScreen}></Screen>
        <Screen name='GenerateQR' component={GenerateQRScreen}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}

export default App;