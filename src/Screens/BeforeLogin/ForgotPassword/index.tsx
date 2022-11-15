/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ForgotPassword} from '../../../Utils/images';
import type from '../../../Model/types';
import styles from './styles';
import {TextInput} from 'react-native-paper';

const ForgotScreen = (props: type) => {
  const [inputs, setInputs] = useState({
    email: '',
  });
  const [errors, setErrors] = useState({email: ''});
  const validate = async (email: string) => {
    //Keyboard.dismiss();

    let isValid = true;

    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (
      !inputs.email.match(
        /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
      )
    ) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    } else {
      handleError('', 'email');
      isValid = false;
    }
  };

  const handleOnchange = (text: string, input: string) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error: string | null, input: string) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  const Welcomescreen = () => {
    props.navigation.navigate('LoginScreen');

  };

  return (
    <View style={styles.container}>
      <ForgotPassword width={'100%'} height={'30%'} />
      <View style={styles.WelcomeText}>
        <Text style={styles.Welcometext1}>Forgot Password</Text>
        <View style={styles.WelcomeText}>
          <Text style={styles.Welcometext2}>
            Enter registered e-mail to receive password
          </Text>
          <Text style={styles.Welcometext3}>reset instruction.</Text>
        </View>
      </View>
      <View style={styles.InputView}>
        <TextInput
          mode="outlined"
          label="Email"
          placeholder="Enter your e-mail"
          onFocus={() => handleError(null, 'email')}
          onChangeText={text => handleOnchange(text, 'email')}
          activeOutlineColor="#373737"
          outlineStyle={{borderRadius: 10}}
          placeholderTextColor="#B9B9B9"
          style={styles.TextIn}
        />
      </View>
      {<Text style={styles.forgotPass}>{errors.email}</Text>}
      <TouchableOpacity
        style={styles.Send}
        onPress={() => {
          validate(inputs.email);
          props.navigation.navigate('OtpScreen');
        }}>
        <Text style={styles.SendText}>Send</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Welcomescreen()}>
        <Text style={styles.Back}>Back To Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotScreen;
