/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";
import { ForgotPassword } from "../../../Utils/images";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styles from "./styles";
import { TextInput } from "react-native-paper";
const ForgotScreen = () => {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ForgotPassword
        width={"60%"}
        height={"30%"}
        style={{ marginLeft: wp(20) }}
      />
      <View style={styles.WelcomeText}>
        <Text style={styles.Welcometext1}>Forgot Password</Text>
        <View style={styles.WelcomeText}>
          <Text style={styles.Welcometext2}>
            Enter registered e-mail to receive password
          </Text>
          <Text style={styles.Welcometext3}>reset instruction.</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "space-around",
          marginTop: hp(5),
          //borderWidth: 1,
          width: wp("90%"),
          marginLeft: wp(5),
          borderRadius: 10,
        }}>
        <TextInput
          mode="outlined"
          label="Email"
          placeholder="Enter your e-mail"
          activeOutlineColor="#1977F3"
          outlineStyle={{ borderRadius: 10 }}
          placeholderTextColor="#B9B9B9"
          style={{ height: hp(6) }}
        />
      </View>
      <View
        style={{
          width: wp("90%"),
          height: hp("6%"),
          alignItems: "center",
          marginLeft: hp(2.5),
          borderRadius: 10,
          marginTop: hp(6),
          backgroundColor: "#1977F3",
        }}>
        <Text
          style={{
            alignItems: "center",
            alignContent: "center",
            paddingTop: 14,
            color: "#FFFFFF",
            fontSize: 14,
            lineHeight: 16.8,
            fontFamily: "Lato-Bold",
          }}>
          Send
        </Text>
      </View>
      <TouchableOpacity>
        <Text
          style={{
            alignSelf: "center",
            marginTop: hp(29),
            color: "#1977F3",
            fontSize: 12,
          }}>
          Back To Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotScreen;
