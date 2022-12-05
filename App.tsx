import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  Button,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppMenu from "./layout/AppMenu";
import AppAvatar from "./layout/AppAvatar";
import LoginForm from "./pages/login/LoginForm";
import ListNotification from "./pages/notifications/ListNotification";
import { SafeAreaView } from "react-native";

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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={ToggleDarkMode} />
          <Stack.Screen name="Login" component={LoginForm} />
          <Stack.Screen name="ListNotification" component={ListNotification} />
          <Stack.Screen
            name="Home1"
            component={Home1}
            options={{ title: "Overview" }}
          />
          {/* <Stack.Screen
            name="AppMenu"
            component={() => <Text>App menu</Text>}
            options={{
              headerRight: (props) => <AppAvatar />,
              headerLeft: (props) => <AppMenu />,
              title: "",
            }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

function Home1() {
  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="400">
        <HStack space={2} alignItems="center">
          <Text>Home 1</Text>
        </HStack>
      </Box>
    </Center>
  );
}
