import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Welcome: {
    width: wp('70%'),
    height: hp('35%'),
    margin: wp('15%'),
    //borderWidth: 1,
  },
  WelcomeImage: {
    width: wp(273.49),
    height: hp(163.08),
    //paddingTop: hp(50.75),
  },
  WelcomeText: {
    width: wp(226),
    height: hp(29),
    paddingLeft: wp(5),
    marginTop: hp(3),
  },
  Welcometext: {
    fontWeight: '700',
    fontSize: 24,
    color: '#373737',
  },
});
