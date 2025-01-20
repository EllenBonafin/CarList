import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/theme";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  boxTop: {
    height: Dimensions.get("window").height / 3,
    width: "100%",

    alignItems: "center",
    justifyContent: "center",
  },

  boxCenter: {
    height: Dimensions.get("window").height / 4,
    width: "100%",
    paddingHorizontal: 36
  },

  boxBottom: {
    height: Dimensions.get("window").height / 3,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo:{
    width: 80,
    height: 80,
  },
  text:{
    fontWeight: 'bold',
    marginTop: 50, 
    fontSize: 18
  },

  labelInput:{
    color:themas.colors.secondary,
    fontSize: 16,
    marginTop: 20
  },
  boxInput:{
    width: '100%',
    height: '25%',
    borderWidth: 1,
    borderRadius: 50,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: themas.colors.lightGrey,
    borderColor:themas.colors.lightGrey
  },

  input:{
    width: '90%',
    height: '100%',
    borderRadius: 50,
  },

  button :{
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: themas.colors.primary,
    borderRadius: 30,
  },
  textButton:{
    fontSize: 18
  },
  error: {
    color: 'red',
    marginBottom: 10,
  }
});
