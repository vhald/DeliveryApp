/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './styles';

function LoginButton() {
  return (
    <View style={styles.Button}>
      <Text style={styles.ButtonText}>Login</Text>
    </View>
  );
}

export default LoginButton;
