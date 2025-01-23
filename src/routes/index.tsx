import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CarList from "../pages/carList";
import Checklist from "../pages/checklist";
import ChecklistDetails from "../pages/details";
import Login from "../pages/login";
import { useAuth } from "../contexts/authContext";

export default function StackRoutes() {
  const Stack = createStackNavigator();
  const { isAuthenticated } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#fff" },
      }}
    >
      {!isAuthenticated ? (
        <Stack.Screen name="login" component={Login} />
      ) : (
        <>
          <Stack.Screen name="CarList" component={CarList} />
          <Stack.Screen name="Checklist" component={Checklist} />
          <Stack.Screen name="ChecklistDetails" component={ChecklistDetails} />
        </>
      )}
    </Stack.Navigator>
  );
}
