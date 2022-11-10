import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  Button: {
    width: wp(90),
    height: hp(6),
    borderRadius: 10,
    backgroundColor: '#1977F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonText: {
    fontFamily: 'Lato-Bold',
    color: '#FFFFFF',
    fontSize: 14,
  },
});
