import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: { backgroundColor: "white" },
  GroupImage: {
    marginTop: hp(3),
    alignSelf: "center",
  },
  content: {
    width: wp(90),
    alignSelf: "center",
  },
  SignUpText: {
    fontFamily: "Lato-Bold",
    fontSize: 24,
    color: "#373737",
    paddingVertical: 10,
    marginTop: 5,
  },
  GroupText: {
    fontFamily: "Lato-Regular",
    color: "#666666",
  },
  GroupSubText: {
    fontWeight: "700",
    fontSize: 24,
    color: "#373737",
  },
  TextLink: {
    color: "#1977F3",
  },
  Checkbox: { flexDirection: "row", marginBottom: wp(6), marginTop: hp(1) },
  OtherOption: {
    fontFamily: "Lato-Regular",
    color: "#818181",
    fontSize: 12,
    alignSelf: "center",
    marginTop: hp(5),
  },
  socialButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  ThinLine: {
    width: 40,
    height: 0,
    borderWidth: 0.5,
    borderColor: "#B9B9B9",
  },
  DivisionText: {
    color: "#555252",
    fontFamily: "Lato-Regular",
    fontSize: 12,
    bottom: 8,
  },
  Division: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: wp(50),
    alignSelf: "center",
    marginTop: 20,
    color: "#B9B9B9",
  },
  Consent: { fontFamily: "Lato-Regular", marginLeft: 9 },
  invalidMsg: { color: "red", fontSize: 10, paddingLeft: 10 },
  InputFeild: {
    justifyContent: "space-around",
    height: hp(28),
    marginTop: 5,
  },
});
