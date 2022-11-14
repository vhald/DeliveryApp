import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  WelcomeText: {
    alignContent: 'center',
    alignItems: 'center',
  },
  Welcometext1: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: '#373737',
    marginRight: wp(46),
  },
  Welcometext2: {
    fontSize: 14,
    color: '#666666',
    fontFamily: 'Lato-Bold',
    marginRight: wp(22),
    paddingTop: hp(1),
  },
  Welcometext3: {
    fontSize: 14,
    color: '#666666',
    fontFamily: 'Lato-Bold',
    marginRight: wp(64),
    paddingTop: hp(0.5),
  },
});
