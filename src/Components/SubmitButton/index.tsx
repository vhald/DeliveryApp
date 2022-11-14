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

const SubmitButton = (prop: { onPress: any; name: string }) => {
  const name = prop.name;
  const onPress = prop.onPress;

  return (
    <TouchableOpacity style={styles.Button} onPress={onPress}>
      <Text style={styles.ButtonText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
