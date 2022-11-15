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
import { validPassword } from "../../../Utils/validator"; // left
import SubmitButton from "../../../Components/SubmitButton";
import { useNavigation } from "@react-navigation/native";

const NewPassword = () => {
  const navigation = useNavigation();

  interface stateprops {
    password: string;
    passwordConfirm: string;
    passwordHidden: boolean;
    emailTestFail: boolean | null;
    passwordTestFail: boolean | null;
  }

  const [state, setState] = useState<stateprops>({
    password: "",
    passwordConfirm: "",
    passwordHidden: false,
    emailTestFail: null,
    passwordTestFail: null,
  });

  const onChangePassword = (text: string) => {
    setState(prev => ({ ...prev, password: text }));
  };
  const onChangePassConfirm = (text: string) => {
    setState(prev => ({ ...prev, passwordConfirm: text }));
  };

  const submitForm = () => {
    // navigation.navigate("LoginInScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
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
              value={state.password}
              activeOutlineColor="#1977F3"
              outlineStyle={{ borderRadius: 10 }}
              placeholderTextColor="#B9B9B9"
            />
            <TextInput
              mode="outlined"
              label="Confirm Password"
              placeholder="Re-enter Password"
              onChangeText={text => onChangePassConfirm(text)}
              value={state.passwordConfirm}
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
};

export default NewPassword;
