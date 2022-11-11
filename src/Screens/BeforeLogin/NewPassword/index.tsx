import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styles from "./styles";
import { NewPass } from "../../../Utils/images";
import { validEmail, validPassword } from "../../../Utils/validator";
import SubmitButton from "../../../Components/SubmitButton";
import { useNavigation } from "@react-navigation/native";

function NewPassword() {
  const navigation = useNavigation();
  const [state, setState] = useState({
    password: "",
    passwordConfirm: "",
    passwordHidden: false,
    emailTestFail: null,
    passwordTestFail: null,
  });

  const onChangePassword = text => {
    setState(prev => ({ ...prev, password: text }));
  };
  const onChangePassConfirm = text => {
    setState(prev => ({ ...prev, passwordConfirm: text }));
  };

  // const validEmail = emailId => {
  //   const email = String(emailId).trim().toLowerCase();
  //   const pattern =
  //     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  //   var email_test = pattern.test(email); // true , false
  //   if (email_test === false) {
  //     setState(prev => ({ ...prev, emailTestFail: true }));
  //     return;
  //   }
  //   if (email_test) {
  //     setState(prev => ({ ...prev, emailTestFail: false }));
  //   }
  // };

  const validPassword = pass => {
    const password = String(pass).trim();
    if (password.length >= 6) {
      setState(prev => ({ ...prev, passwordTestFail: false }));
    } else {
      setState(prev => ({ ...prev, passwordTestFail: true }));
      return;
    }
  };

  const submitForm = () => {
    // navigation.navigate("LoginInScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Group}>
        <NewPass style={styles.GroupImage} height={hp(24)} width={wp(100)} />
        <View style={styles.content}>
          <Text style={styles.SignUpText}>Create New Password</Text>
          <Text style={styles.GroupText}>
            Your new password must be different from {"\n"} previously used
            password
          </Text>
          <View style={styles.textFeild}>
            <TextInput
              mode="outlined"
              label="New Password"
              placeholder="Create Password"
              onChangeText={text => onChangePassword(text)}
              value={state.email}
              activeOutlineColor="#1977F3"
              outlineStyle={{ borderRadius: 10 }}
              placeholderTextColor="#B9B9B9"
            />
            <TextInput
              mode="outlined"
              label="Confirm Password"
              placeholder="Re-enter Password"
              onChangeText={text => onChangePassConfirm(text)}
              value={state.password}
              outlineStyle={{ borderRadius: 10 }}
              activeOutlineColor="#1977F3"
              placeholderTextColor="#B9B9B9"
            />
          </View>

          <TouchableOpacity onPress={submitForm} style={styles.submit}>
            <SubmitButton name="Save" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default NewPassword;
