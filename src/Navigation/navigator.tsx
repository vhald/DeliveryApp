import React from "react";
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
