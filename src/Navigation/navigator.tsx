/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BeforeLoginNavigator from "./beforeLoginNavigator";

const Navigator = () => {
  return (
    <NavigationContainer>
      <BeforeLoginNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
