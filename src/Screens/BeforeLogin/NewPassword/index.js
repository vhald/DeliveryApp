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
import { Login, Hide, Show, FaceBook, Google } from "../../../Utils/images";
import { validEmail, validPassword } from "../../../Utils/validator";
import SubmitButton from "../../../Components/SubmitButton";

function NewPassword({ navigation, route, params }) {
  const [state, setState] = useState({
    email: "",
    password: "",
    passwordHidden: false,
    emailTestFail: null,
    passwordTestFail: null,
  });

  const onChangeEmail = text => {
    setState(prev => ({ ...prev, email: text }));
  };
  const onChangePassword = text => {
    setState(prev => ({ ...prev, password: text }));
  };

  const validEmail = emailId => {
    const email = String(emailId).trim().toLowerCase();
    const pattern =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var email_test = pattern.test(email); // true , false
    if (email_test === false) {
      setState(prev => ({ ...prev, emailTestFail: true }));
      return;
    }
    if (email_test) {
      setState(prev => ({ ...prev, emailTestFail: false }));
    }
  };

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
    // navigation.navigate('Login')
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Group}>
        <Login style={styles.GroupImage} height={hp(24)} width={wp(100)} />
        <View style={styles.content}>
          <Text style={styles.SignUpText}>Create New Password</Text>
          <Text style={styles.GroupText}>
            Enter registered e-mail & password to login your account
          </Text>
          <View style={styles.textFeild}>
            <TextInput
              mode="outlined"
              label="Email"
              placeholder="Enter your e-mail"
              onChangeText={text => onChangeEmail(text)}
              value={state.email}
              activeOutlineColor="#1977F3"
              outlineStyle={{ borderRadius: 10 }}
              placeholderTextColor="#B9B9B9"
              onBlur={() => validName(state.email)}
            />
            {/* {state.emailTestFail === true && ( */}
            <Text style={styles.invalidPop}>invalid email</Text>
            {/* )} */}
            <TextInput
              mode="outlined"
              label="Password"
              placeholder="Create Password"
              right={<TextInput.Icon icon={Show} />}
              onChangeText={text => onChangePassword(text)}
              value={state.password}
              secureTextEntry={state.passwordHidden}
              outlineStyle={{ borderRadius: 10 }}
              activeOutlineColor="#1977F3"
              placeholderTextColor="#B9B9B9"
              onBlur={() => validName(state.password)}
            />
            {/* {state.emailTestFail === true && ( */}
            <Text style={styles.invalidPop}>invalid password</Text>
            {/* )} */}
          </View>
          <View style={styles.Checkbox}>
            <Text style={styles.Forget}>Forgot Password?</Text>
          </View>
          <TouchableOpacity onPress={submitForm}>
            <SubmitButton name="Log In" />
          </TouchableOpacity>
          <View style={styles.Division}>
            <View style={styles.Thinline} />
            <Text style={styles.divisionText}>Or Login With</Text>
            <View style={styles.Thinline} />
          </View>
          <View style={styles.socialButton}>
            <TouchableOpacity>
              <Google width={wp(40)} />
            </TouchableOpacity>
            <TouchableOpacity>
              <FaceBook width={wp(40)} />
            </TouchableOpacity>
          </View>
          <Text style={styles.OtherOption}>
            Don't have an Account? <Text style={styles.TextLink}>SignUp</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default NewPassword;
