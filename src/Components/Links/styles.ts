import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  container: {
    padding: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: hp(3.5),
  },
  Google: {
    margin: wp(1),
  },
  FaceBook: {
    margin: 10,
  },
});