import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/BeforeLogin/Login";
import SignUpScreen from "../Screens/BeforeLogin/SignUp";
import Slider from "../Screens/BeforeLogin/GetStarted";
import OtpScreen from "../Screens/BeforeLogin/OtpScreen";
import NewPassword from "../Screens/BeforeLogin/NewPassword";

const BeforeLoginStack = createNativeStackNavigator();

function BeforeLoginNavigator(props) {
  return (
    <BeforeLoginStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={SignUpScreen}>
      {/* <BeforeLoginStack.Screen name="SplashScreen" component={Slider} /> */}
      {/* <BeforeLoginStack.Screen name="LoginInScreen" component={LoginScreen} /> */}
      {/* <BeforeLoginStack.Screen name="SignUpScreen" component={SignUpScreen} /> */}
      {/* <BeforeLoginStack.Screen name="OtpScreen" component={OtpScreen} /> */}
      <BeforeLoginStack.Screen name="NewPassword" component={NewPassword} />
    </BeforeLoginStack.Navigator>
  );
}

export default BeforeLoginNavigator;
