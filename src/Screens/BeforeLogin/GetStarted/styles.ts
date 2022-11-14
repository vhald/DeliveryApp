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
    height: hp("35%"),
    margin: wp("15%"),
    // backgroundColor: "yellow",
    alignItems: "center",

    //borderWidth: 1,
  },
  WelcomeText: {
    marginTop: hp(2),
  },
  Welcometext1: {
    fontFamily: "Lato-Bold",
    fontSize: 24,
    color: "#373737",
    alignSelf: "center",
  },
  Welcometext2: {
    fontSize: 14,
    color: "#666666",
    fontFamily: "Lato-Regular",
  },
  Welcometext3: {
    fontSize: 14,
    color: "#666666",
    fontFamily: "Lato-Regular",
  },
  Line1: {
    borderWidth: 1,
    width: wp(20),
    marginTop: 30,
    borderColor: "#B9B9B9",
  },
  Line2: {
    borderWidth: 1,
    width: wp(20),
    marginLeft: wp(50),
    marginTop: -10,
    borderColor: "#B9B9B9",
  },
  Signup: {
    marginLeft: wp(22),
    marginTop: -10,
    alignItems: "center",
    alignContent: "center",
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
    marginLeft: wp(-14.5),
    marginTop: hp(11),
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
