import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Login from "../pages/login";
import CarList from "../pages/carList";
import BottomRoutes from "./bottom.routes";

export default function Routes() {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false , cardStyle:{backgroundColor: "#fff"}}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CarList" component={BottomRoutes} />
    </Stack.Navigator>
  )
}