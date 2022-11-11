import React, { useState, useRef } from "react";
import { Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import styles from "./styles";
import SubmitButton from "../../../Components/SubmitButton";
import { Otp } from "../../../Utils/images";
import OtpFeild from "../../../Components/OtpFeilds";

const OtpScreen = () => {
  const [state, setState] = useState({});

  const onChangeEmail = (text: any) => {
    setState(prev => ({ ...prev, email: text }));
  };

  const submitForm = () => {
    // navigation.navigate('Login')
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Otp style={styles.GroupImage} height={hp(24)} width={wp(100)} />
        <View style={styles.content}>
          <Text style={styles.SignUpText}>OTP Verification</Text>
          <Text style={styles.GroupText}>
            Please enter the 4 digit code sent to {"\n"} abc@gmail.com
          </Text>
          <OtpFeild />
          <TouchableOpacity onPress={submitForm}>
            <SubmitButton name="Verify" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.resend}>
            <Text style={styles.resendText}>Resend Code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OtpScreen;
