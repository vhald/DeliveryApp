import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './styles';
import {Google, FaceBook} from '../../Utils/images';
const Links = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Google}>
        <Google />
      </TouchableOpacity>
      <TouchableOpacity style={styles.FaceBook}>
        <FaceBook />
      </TouchableOpacity>
    </View>
  );
};

export default Links;
