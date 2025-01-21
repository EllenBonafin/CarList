import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CarList from "../pages/carList";
import CustomTab from "../components/CustomTab";

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={props =><CustomTab {...props} />}>
        <Tab.Screen name="CarList" component={CarList} />
    </Tab.Navigator>
  )
}