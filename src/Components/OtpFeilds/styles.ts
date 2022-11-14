import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  textFeild: {
    flexDirection: "row",
    height: hp(15),
    justifyContent: "space-around",
    marginBottom: hp(2),
  },
  textInp: {
    height: 60,
    width: 60,
    fontSize: 25,
    alignSelf: "center",
    paddingLeft: wp(2),
  },
});
