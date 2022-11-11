import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styles from "./styles";

const SubmitButton = (prop: { name: string }) => {
  const name = prop.name;

  return (
    <View style={styles.Button}>
      <Text style={styles.ButtonText}>{name}</Text>
    </View>
  );
};

export default SubmitButton;
