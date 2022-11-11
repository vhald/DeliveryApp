import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { TextInput } from "react-native-paper";

const OtpFeild = () => {
  return (
    <View style={styles.textFeild}>
      <TextInput
        mode="outlined"
        style={styles.textInp}
        activeOutlineColor="#1977F3"
        keyboardType="number-pad"
        maxLength={1}
      />
      <TextInput
        mode="outlined"
        style={styles.textInp}
        keyboardType="number-pad"
        activeOutlineColor="#1977F3"
        maxLength={1}
      />
      <TextInput
        mode="outlined"
        style={styles.textInp}
        keyboardType="number-pad"
        activeOutlineColor="#1977F3"
        maxLength={1}
      />
      <TextInput
        mode="outlined"
        style={styles.textInp}
        activeOutlineColor="#1977F3"
        keyboardType="number-pad"
        maxLength={1}
      />
    </View>
  );
};

export default OtpFeild;
