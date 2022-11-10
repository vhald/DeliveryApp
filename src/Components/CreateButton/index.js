/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
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

const CreateButton = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.ButtonText}>Create New Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button2}>
        <Text style={styles.ButtonText2}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateButton;
