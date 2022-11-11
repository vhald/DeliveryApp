import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  GroupImage: {
    marginTop: hp(3),
    alignSelf: 'center',
  },
  content: {
    width: wp(90),
    alignSelf: 'center',
  },
  SignUpText: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: '#373737',
    paddingVertical: 10,
    marginTop: 5,
  },
  GroupText: {
    fontFamily: 'Lato-Regular',
    color: '#666666',
  },
  GroupSubText: {
    fontWeight: '700',
    fontSize: 24,
    color: '#373737',
  },
  TextLink: {
    color: '#1977F3',
  },
  Checkbox: {flexDirection: 'row', marginBottom: wp(7), marginTop: hp(3)},
});
