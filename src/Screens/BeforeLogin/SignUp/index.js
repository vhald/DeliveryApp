import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './styles';
import CreateButton from '../../../Components/CreateButton';
import {
  Group,
  Hide,
  Show,
  Select,
  Unselect,
  FaceBook,
  Google,
} from '../../../Utils/images';
// import {validName, validEmail, validPassword} from '../../../Utils/validator';
import {useNavigation} from '@react-navigation/native';

function SignUpScreen() {
  const navigation = useNavigation;

  const [state, setState] = useState({
    fullName: '',
    email: '',
    password: '',
    passwordHidden: false,
    fullNameTestFail: null,
    emailTestFail: null,
    passwordTestFail: null,
  });

  const onChangeName = text => {
    setState(prev => ({...prev, fullName: text}));
  };
  const onChangeEmail = text => {
    setState(prev => ({...prev, email: text}));
  };
  const onChangePassword = text => {
    setState(prev => ({...prev, password: text}));
  };

  const validName = name => {
    // import these in validator.js
    const fullName = String(name).trim().toLowerCase();
    const fullname_test = fullName.length < 6;
    if (fullname_test) {
      setState(prev => ({...prev, fullNameTestFail: true}));
      return;
    } else {
      setState(prev => ({...prev, fullNameTestFail: false}));
    }
  };

  const validEmail = emailId => {
    const email = String(emailId).trim().toLowerCase();
    const pattern =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var email_test = pattern.test(email); // true , false
    if (email_test === false) {
      setState(prev => ({...prev, emailTestFail: true}));
      return;
    }
    if (email_test) {
      setState(prev => ({...prev, emailTestFail: false}));
    }
  };

  const validPassword = pass => {
    const password = String(pass).trim();
    if (password.length >= 6) {
      setState(prev => ({...prev, passwordTestFail: false}));
    } else {
      setState(prev => ({...prev, passwordTestFail: true}));
      return;
    }
  };

  const submitForm = () => {
    // navigation.navigate('Login');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.Group}>
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
              activeOutlineColor={true ? '#1977F3' : '#D70F0F'} // make it dynamic
              outlineStyle={{borderRadius: 10}}
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
              activeOutlineColor={true ? '#1977F3' : '#D70F0F'} // make it dynamic
              outlineStyle={{borderRadius: 10}}
              placeholderTextColor="#B9B9B9"
              onBlur={() => validEmail(state.email)}
            />
            {state.emailTestFail === true && (
              <Text style={styles.invalidMsg}>invalid email</Text>
            )}
            <TextInput
              mode="outlined"
              label="Password"
              placeholder="Create Password"
              right={<TextInput.Icon icon={Show} />}
              onChangeText={text => onChangePassword(text)}
              value={state.password}
              secureTextEntry={state.passwordHidden}
              outlineStyle={{
                borderRadius: 10,
              }}
              // secureTextEntry={true}
              activeOutlineColor={true ? '#1977F3' : '#D70F0F'} // make it dynamic
              placeholderTextColor="#B9B9B9"
              onBlur={() => validPassword(state.password)}
            />
            {state.emailTestFail === true && (
              <Text style={styles.invalidMsg}>invalid password</Text>
            )}
          </View>
          <View style={styles.Checkbox}>
            {false ? <Select /> : <Unselect />}
            <Text style={styles.Consent}>
              By creating an account you agree with all our{'\n '}
              <Text style={styles.TextLink}>Terms of Service</Text> and our{' '}
              <Text style={styles.TextLink}>Privacy Policy</Text>.
            </Text>
          </View>
          <TouchableOpacity onPress={submitForm}>
            <CreateButton />
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
          <Text style={styles.OtherOption}>
            Already have an Account? <Text style={styles.TextLink}>Login</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default SignUpScreen;
