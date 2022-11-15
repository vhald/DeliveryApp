import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  Button: {
    width: wp(90),
    height: hp(6),
    alignItems: 'center',
    marginLeft: hp(-2.5),
    borderRadius: 10,
    marginTop: hp(6),
    backgroundColor: '#1977F3',
  },
  Button2: {
    width: wp(90),
    height: hp(6),
    borderWidth: 1,
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: hp(-2.5),
    borderRadius: 10,
    marginTop: hp(3),
    backgroundColor: '#FFFFFF',
    borderColor: '#1977F3',
  },
  ButtonText: {
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: 14,
    color: '#FFFFFF',
    fontSize: 14,
    //lineHeight: 16.8,
    fontFamily: 'Lato-Bold',
  },
  ButtonText2: {
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: 14,
    color: '#1977F3',
    fontSize: 14,
    //lineHeight: 16.8,
    fontFamily: 'Lato-Bold',
  },
});