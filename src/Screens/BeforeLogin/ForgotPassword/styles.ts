import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  WelcomeText: {
    alignContent: "center",
    alignItems: "center",
  },
  Welcometext1: {
    fontFamily: "Lato-Bold",
    fontSize: 24,
    color: '#373737',
    marginRight: wp(40),
  },
  Welcometext2: {
    fontSize: 14,
    color: '#666666',
    fontFamily: 'Lato-Bold',
    marginRight: wp(16),
    paddingTop: hp(1),
  },
  Welcometext3: {
    fontSize: 14,
    color: '#666666',
    fontFamily: 'Lato-Bold',
    marginRight: wp(59),
    paddingTop: hp(0.5),
  },
  forgotPass: {
    color: 'red',
    fontSize: 12,
    paddingLeft: 22,
  },
  InputView: {
    justifyContent: 'space-around',
    marginTop: hp(5),
    //borderWidth: 1,
    width: wp(90),
    marginLeft: wp(5),
    borderRadius: 10,
  },
  TextIn: {
    height: hp(6),
  },
  Send: {
    width: wp(90),
    height: hp(6),
    alignItems: 'center',
    marginLeft: hp(2.5),
    borderRadius: 10,
    marginTop: hp(2),
    backgroundColor: '#1977F3',
  },
  SendText: {
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: 14,
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 16.8,
    fontFamily: 'Lato-Bold',
  },
  Back: {
    alignSelf: 'center',
    marginTop: hp(29),
    color: '#1977F3',
    fontSize: 12,
  },
});

