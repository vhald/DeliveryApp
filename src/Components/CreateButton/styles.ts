import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Welcome: {
    width: wp(80),
    height: hp(32),
    margin: wp(10),
    //borderWidth: 1,
  },
  WelcomeText: {
    alignContent: "center",
    alignItems: "center",
    marginTop: hp(2),
  },
  Welcometext1: {
    fontFamily: "Lato-Bold",
    fontSize: 24,
    color: "#373737",
  },
  Welcometext2: {
    fontSize: 13,
    color: "#666666",
    fontFamily: "Lato-Bold",
  },
  Welcometext3: {
    fontSize: 14,
    color: "#666666",
    fontFamily: "Lato-Bold",
    alignSelf: "center",
  },
  Line1: {
    borderWidth: 1,
    width: wp(20),
    marginTop: hp(5),
    borderColor: "#B9B9B9",
    marginLeft: wp(4),
  },
  Line2: {
    borderWidth: 1,
    width: wp(20),
    marginLeft: wp(55),
    marginTop: hp(-1),
    borderColor: "#B9B9B9",
  },
  Signup: {
    marginTop: hp(-1.5),
    alignSelf: "center",
    color: "#555252",
    fontFamily: "Lato-Bold",
  },
  Bottom: {
    flexDirection: "row",
  },
  circle1: {
    marginLeft: wp(8),
    marginTop: hp(2),
  },
  circle2: {
    marginLeft: wp(-11),
    marginTop: hp(12),
  },
  BottomText: {
    alignItems: "center",
    marginTop: hp(15),
    marginLeft: wp(5),
    fontFamily: "Lato-Bold",
    flexDirection: "row",
  },
  text1: {
    color: "#1977F3",
    fontFamily: "Lato-Bold",
  },
  text2: {
    color: "#818181",
    fontFamily: "Lato-Bold",
  },
});
