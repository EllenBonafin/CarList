import React, { useContext } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import {
  Ionicons,
  FontAwesome,
  Entypo,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import { style } from "./styles";
import { theme } from "../../global/theme";
//import {AuthContextList}   from "../../context/authContext_list";

import { NavigationProp } from "@react-navigation/native";

interface Props {
  state: { index: number };
  navigation: NavigationProp<any>;
}

export default ({ state, navigation }: Props) => {
  // const {onOpen} = useContext<any>(AuthContextList);

  const go = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={style.TabArea}>
      <TouchableOpacity style={style.TabItem} onPress={() => go("CarList")}>
        <AntDesign
          name="bars"
          style={{
            opacity: state.index === 0 ? 1 : 0.5,
            color: theme.colors.primary,
            fontSize: 32,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={style.TabItem} onPress={() => go("User")}>
        <FontAwesome
          name="user-circle-o"
          style={{
            opacity: state.index === 1 ? 1 : 0.2,
            color: theme.colors.primary,
            fontSize: 32,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
