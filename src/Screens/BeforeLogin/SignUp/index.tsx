import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styles from "./styles";
import SubmitButton from "../../../Components/SubmitButton";
import {
  Group,
  Hide,
  Show,
  Select,
  Unselect,
  FaceBook,
  Google,
} from "../../../Utils/images";
// import {validName, validEmail, validPassword} from '../../../Utils/validator';
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const navigation = useNavigation();

  interface stateprops {
    fullName: string;
    email: string;
    password: string;
    passwordHidden: boolean;
    fullNameTestFail: boolean | null;
    emailTestFail: boolean | null;
    passwordTestFail: boolean | null;
  }

  const [toggle, setToggle] = useState(true);
  const [check, setCheck] = useState(true);
  const [state, setState] = useState<stateprops>({
    fullName: "",
    email: "",
    password: "",
    passwordHidden: false,
    fullNameTestFail: null,
    emailTestFail: null,
    passwordTestFail: null,
  });

  const onChangeName = (text: string) => {
    setState(prev => ({ ...prev, fullName: text }));
  };
  const onChangeEmail = (text: string) => {
    setState(prev => ({ ...prev, email: text }));
  };
  const onChangePassword = (text: string) => {
    setState(prev => ({ ...prev, password: text }));
  };

  const toggleFunction = () => {
    setToggle(!toggle);
  };

  const toggleCheckbox = () => {
    setCheck(!check);
  };

  const validName = (name: string) => {
    const fullName = String(name).trim().toLowerCase();
    const fullname_test = fullName.length < 6;
    if (fullname_test) {
      setState(prev => ({ ...prev, fullNameTestFail: true }));
      return;
    } else {
      setState(prev => ({ ...prev, fullNameTestFail: false }));
    }
  };

  const validEmail = (emailId: string) => {
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

  const validPassword = (pass: string) => {
    const password = String(pass).trim();
    if (password.length >= 6) {
      setState(prev => ({ ...prev, passwordTestFail: false }));
    } else {
      setState(prev => ({ ...prev, passwordTestFail: true }));
      return;
    }
  };

  const submitForm = () => {
    // navigation.navigate("LoginScreen");
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Group style={styles.GroupImage} height={hp(24)} width={wp(100)} />
        <View style={styles.content}>
          <Text style={styles.SignUpText}>Sign Up</Text>
          <Text style={styles.GroupText}>
            Create a free account and join us!
          </Text>
          <View style={styles.InputFeild}>
            <TextInput
              mode="outlined"
              label="Your Name"
              placeholder="Enter your Name"
              onChangeText={text => onChangeName(text)}
              value={state.fullName}
              activeOutlineColor={true ? "#1977F3" : "#D70F0F"} // make it dynamic
              outlineStyle={{ borderRadius: 10 }}
              placeholderTextColor="#B9B9B9"
              onBlur={() => validName(state.fullName)}
            />
            {state.fullNameTestFail === true && (
              <Text style={styles.invalidMsg}>
                Invalid Name! Min 6 characters required.
              </Text>
            )}
            <TextInput
              mode="outlined"
              label="Email"
              placeholder="Enter your e-mail"
              onChangeText={text => onChangeEmail(text)}
              value={state.email}
              activeOutlineColor={true ? "#1977F3" : "#D70F0F"} // make it dynamic
              outlineStyle={{ borderRadius: 10 }}
              placeholderTextColor="#B9B9B9"
              onBlur={() => validEmail(state.email)}
              keyboardType="email-address"
            />
            {state.emailTestFail === true && (
              <Text style={styles.invalidMsg}>invalid email</Text>
            )}
            <TextInput
              mode="outlined"
              label="Password"
              placeholder="Create Password"
              right={
                <TextInput.Icon
                  onPress={toggleFunction}
                  icon={toggle ? Hide : Show}
                />
              }
              onChangeText={text => onChangePassword(text)}
              value={state.password}
              outlineStyle={{ borderRadius: 10 }}
              secureTextEntry={toggle}
              activeOutlineColor={true ? "#1977F3" : "#D70F0F"} // make it dynamic
              placeholderTextColor="#B9B9B9"
              onBlur={() => validPassword(state.password)}
            />
            {state.emailTestFail === true && (
              <Text style={styles.invalidMsg}>invalid password</Text>
            )}
          </View>
          <View style={styles.Checkbox}>
            <TouchableOpacity onPress={() => toggleCheckbox()}>
              {check ? <Select /> : <Unselect />}
            </TouchableOpacity>
            <Text style={styles.Consent}>
              By creating an account you agree with all our{"\n "}
              <Text style={styles.TextLink}>Terms of Service</Text> and our{" "}
              <Text style={styles.TextLink}>Privacy Policy</Text>.
            </Text>
          </View>
          <TouchableOpacity onPress={submitForm}>
            <SubmitButton name="Create Account" />
          </TouchableOpacity>
          <View style={styles.Division}>
            <View style={styles.ThinLine} />
            <Text style={styles.DivisionText}>Or Sign up With</Text>
            <View style={styles.ThinLine} />
          </View>
          <View style={styles.socialButton}>
            <TouchableOpacity>
              <Google width={wp(40)} />
            </TouchableOpacity>
            <TouchableOpacity>
              <FaceBook width={wp(40)} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.OtherOption}>
              Already have an Account?{" "}
              <Text style={styles.TextLink}>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
