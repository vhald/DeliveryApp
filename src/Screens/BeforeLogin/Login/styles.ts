import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
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
  invalidPop: { color: "red", fontSize: 10, paddingLeft: 10 },
  Forget: { fontFamily: "Lato-Bold", color: "#1977F3" },
  Division: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: wp(50),
    alignSelf: "center",
    marginTop: 40,
    color: "#B9B9B9",
  },
  Thinline: {
    width: 40,
    height: 0,
    borderWidth: 0.5,
    borderColor: "#B9B9B9",
  },
  divisionText: {
    color: "#555252",
    fontFamily: "Lato-Regular",
    fontSize: 12,
    bottom: 8,
  },
  socialButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: hp(8),
  },
  textFeild: {
    justifyContent: "space-around",
    height: hp(20),
    marginTop: 5,
  },
  GroupSubText: {
    fontWeight: "700",
    fontSize: 24,
    color: "#373737",
  },
  TextLink: {
    color: "#1977F3",
    fontFamily: "Lato-Regular",
    fontSize: 12,
  },
  Checkbox: {
    marginBottom: wp(7),
    alignSelf: "flex-end",
    fontFamily: "Lato-Regular",
    color: "#1977F3",
  },
  OtherOption: {
    fontFamily: "Lato-Regular",
    color: "#818181",
    fontSize: 12,
  },
  bottom: { flexDirection: "row", alignSelf: "center" },
});
