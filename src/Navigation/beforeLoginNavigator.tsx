import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../Screens/BeforeLogin/Login';
import SignUpScreen from '../Screens/BeforeLogin/SignUp';
import WelcomeScreen from '../Screens/BeforeLogin/GetStarted';
import ForgotScreen from '../Screens/BeforeLogin/ForgotPassword';
const BeforeLoginStack = createNativeStackNavigator();
const BeforeLoginNavigator = () => {
  return (
    <BeforeLoginStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={WelcomeScreen}>
      <BeforeLoginStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <BeforeLoginStack.Screen name="LoginInScreen" component={LoginScreen} />
      <BeforeLoginStack.Screen name="SignUpScreen" component={SignUpScreen} />
      <BeforeLoginStack.Screen name="ForgotScreen" component={ForgotScreen} />
    </BeforeLoginStack.Navigator>
  );
};

export default BeforeLoginNavigator;
