/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BeforeLoginNavigator from './beforeLoginNavigator';

const Stack = createNativeStackNavigator();
function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={BeforeLoginNavigator} />
        {/* <BeforeLoginNavigator /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
