import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  Button,
  TouchableOpacity,
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
  // FaceBook,
  // Google,
} from '../../../Utils/images';

function SignUpScreen({navigation, route, params}) {
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

  const submitForm = () => {
    const fullName = String(state.fullName).trim().toLowerCase();
    const fullname_test = fullName.length > 2;
    if (fullName.length === 0) {
      setState(prev => ({...prev, fullNameTestFail: true}));
      return;
    } else {
      setState(prev => ({...prev, fullNameTestFail: false}));
    }

    // email validation starts here //
    const email = String(state.email).trim().toLowerCase();
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

    // password validation starts here //
    const password = String(state.password).trim();
    if (password.length >= 6) {
      setState(prev => ({...prev, passwordTestFail: false}));
    } else {
      setState(prev => ({...prev, passwordTestFail: true}));
      return;
    }
    // navigation.navigate('Login')
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Group}>
        <Group style={styles.GroupImage} height={hp(24)} width={wp(100)} />
        <View style={styles.content}>
          <Text style={styles.SignUpText}>Sign Up</Text>
          <Text style={styles.GroupText}>
            Create a free account and join us!
          </Text>
          <View
            style={{
              justifyContent: 'space-around',
              height: hp(28),
              marginTop: 5,
            }}>
            <TextInput
              mode="outlined"
              label="Your Name"
              placeholder="Enter your Name"
              onChangeText={text => onChangeName(text)}
              value={state.fullname}
              activeOutlineColor={false ? '#1977F3' : '#D70F0F'} // make it dynamic
              outlineStyle={{borderRadius: 10}}
              placeholderTextColor="#B9B9B9"
              style={{height: 40}}

              // outlineStyle={{ when validation false -> red}}
            />
            {/* {state.fullnameTestFail === true && ( */}
            <Text style={{color: 'red', fontSize: 10, paddingLeft: 10}}>
              invalid name. Min 3 characters required
            </Text>
            {/* )} */}
            <TextInput
              mode="outlined"
              label="Email"
              placeholder="Enter your e-mail"
              onChangeText={text => onChangeEmail(text)}
              value={state.email}
              activeOutlineColor="#1977F3"
              outlineStyle={{borderRadius: 10}}
              placeholderTextColor="#B9B9B9"
              style={{height: 40}}
            />
            {/* {state.emailTestFail === true && ( */}
            <Text style={{color: 'red', fontSize: 10, paddingLeft: 10}}>
              invalid email
            </Text>
            {/* )} */}
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
              activeOutlineColor="#1977F3"
              placeholderTextColor="#B9B9B9"
              style={{height: 40, justifyContent: 'center'}}
            />
            {/* {state.emailTestFail === true && ( */}
            <Text style={{color: 'red', fontSize: 10, paddingLeft: 10}}>
              invalid password
            </Text>
            {/* )} */}
          </View>
          <View style={styles.Checkbox}>
            {false ? <Select /> : <Unselect />}
            <Text style={{fontFamily: 'Lato-Regular', marginLeft: 9}}>
              By creating an account you agree with all our{'\n '}
              <Text style={styles.TextLink}>Terms of Service</Text> and our{' '}
              <Text style={styles.TextLink}>Privacy Policy</Text>.
            </Text>
          </View>
          <TouchableOpacity onPress={submitForm}>
            <CreateButton />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: wp(50),
              alignSelf: 'center',
              marginTop: 20,
              color: '#B9B9B9',
            }}>
            <View
              style={{
                width: 40,
                height: 0,
                borderWidth: 0.5,
                borderColor: '#B9B9B9',
              }}
            />
            <Text
              style={{
                color: '#555252',
                fontFamily: 'Lato-Regular',
                fontSize: 12,
                bottom: 8,
              }}>
              Or Sign up With
            </Text>
            <View
              style={{
                width: 40,
                height: 0,
                borderWidth: 0.5,
                borderColor: '#B9B9B9',
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              // backgroundColor: 'yellow',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Google width={wp(40)} />
            </TouchableOpacity>
            <TouchableOpacity>
              <FaceBook width={wp(40)} />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontFamily: 'Lato-Regular',
              color: '#818181',
              fontSize: 12,
              alignSelf: 'center',
              marginTop: hp(3),
            }}>
            Already have an Account? <Text style={styles.TextLink}>Login</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SignUpScreen;
