import React from 'react';
import {StyleSheet, Text, SafeAreaView, View, Image} from 'react-native';
import {Welcome} from '../../../Utils/images';
import styles from './styles';
function Slider({navigation, route, params}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Welcome}>
        <Welcome style={styles.WelcomeImage} />
        <View style={styles.WelcomeText}>
          <Text style={styles.Welcometext}>Welcome to the App!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default Slider;
