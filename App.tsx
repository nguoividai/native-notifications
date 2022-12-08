import React from "react";
import { NativeBaseProvider, extendTheme, Button } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./components/drawer/DrawerNavigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListNotification from "./pages/notifications/ListNotification";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <DrawerNavigation />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
