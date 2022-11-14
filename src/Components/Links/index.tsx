import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Google, FaceBook } from "../../Utils/images";
const Links = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Google}>
        <Google />
      </TouchableOpacity>
      <TouchableOpacity style={styles.FaceBook}>
        <FaceBook />
      </TouchableOpacity>
    </View>
  );
};

export default Links;
