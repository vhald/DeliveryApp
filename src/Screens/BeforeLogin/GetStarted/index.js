import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Circletwo, Welcome, Circleone} from '../../../Utils/images';
import CreateButton from '../../../Components/CreateButton';
import Links from '../../../Components/Links';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Welcome}>
        <Welcome style={styles.WelcomeImage} />
        <View style={styles.WelcomeText}>
          <Text style={styles.Welcometext1}>Welcome to the App!</Text>
          <View style={styles.WelcomeText}>
            <Text style={styles.Welcometext2}>
              Create a free account and to get fastest &
            </Text>
            <Text style={styles.Welcometext3}>safest delivery.</Text>
          </View>
        </View>
        <CreateButton />
        <View style={styles.Line1} />
        <Text style={styles.Signup}>Or Sign up With</Text>
        <View style={styles.Line2} />
        <Links />
        <View style={styles.Bottom}>
          <Circletwo style={styles.circle2} />
          <TouchableOpacity style={styles.BottomText}>
            <Text style={styles.text2}>Already have an account? </Text>
            <Text style={styles.text1}>Login</Text>
          </TouchableOpacity>
          <Circleone style={styles.circle1} />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default WelcomeScreen;
