import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/BeforeLogin/Login";
import SignUpScreen from "../Screens/BeforeLogin/SignUp";
import WelcomeScreen from "../Screens/BeforeLogin/GetStarted";
import ForgotScreen from "../Screens/BeforeLogin/ForgotPassword";
import OtpScreen from "../Screens/BeforeLogin/OtpScreen";
import NewPassword from "../Screens/BeforeLogin/NewPassword";

const BeforeLoginStack = createNativeStackNavigator();

const BeforeLoginNavigator = () => {
  return (
    <BeforeLoginStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <BeforeLoginStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <BeforeLoginStack.Screen name="ForgotScreen" component={ForgotScreen} />
      <BeforeLoginStack.Screen name="LoginScreen" component={LoginScreen} />
      <BeforeLoginStack.Screen name="SignUpScreen" component={SignUpScreen} /> */}
      <BeforeLoginStack.Screen name="OtpScreen" component={OtpScreen} />
      <BeforeLoginStack.Screen name="NewPassword" component={NewPassword} />
    </BeforeLoginStack.Navigator>
  );
};

export default BeforeLoginNavigator;
