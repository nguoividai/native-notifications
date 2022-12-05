import React from "react";
import { Box, HamburgerIcon, Pressable, Menu, Text } from "native-base";
import {
  NavigationContext,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";

const AppMenu: React.FC = () => {
  const navigation = React.useContext(NavigationContext);

  return (
    <Menu
      trigger={(triggerProps) => {
        return (
          <Pressable accessibilityLabel="More options menu" {...triggerProps}>
            <HamburgerIcon />
          </Pressable>
        );
      }}
    >
      <Menu.Item>
        <Pressable
          accessibilityLabel="Navigate to Home1"
          onPress={() => navigation?.navigate("Home1")}
        >
          <Text> Home </Text>
        </Pressable>
      </Menu.Item>
      <Menu.Item>Home1</Menu.Item>
      <Menu.Item>App Menu</Menu.Item>
    </Menu>
  );
};

export default AppMenu;
