import "./gesture-handler";
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import Routes from "./src/routes";
import Login from "./src/pages/login";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";
import { AuthProvider } from "./src/contexts/authContext";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [token, setToken] = useState<string | null>(null);
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        const storedToken = await AsyncStorage.getItem("token");
        setToken(storedToken);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AuthProvider defaultToken={token}>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
