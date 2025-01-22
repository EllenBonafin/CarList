import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CarList from "../pages/carList";
import Checklist from "../pages/checklist";
import CustomTab from "../components/CustomTab";

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={props =><CustomTab {...props} />}>
        <Tab.Screen name="CarList" component={CarList} />
        <Tab.Screen name="Checklist" component={Checklist} />
    </Tab.Navigator>
  )
}