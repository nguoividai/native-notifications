import React from "react";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import ListNotification from "../../pages/notifications/ListNotification";
import LoginForm from "../../pages/login/LoginForm";
import AppAvatar from "../../layout/AppAvatar";
import { Box, VStack, Text, HStack, Divider, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();
type CustomDrawerContentProps = DrawerContentComponentProps;

const CustomDrawerContent: React.FC<CustomDrawerContentProps> = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <HStack space={2} alignItems="center">
        <VStack w="10" space={4} my="2" mx="1">
          <Box px="4">
            <AppAvatar />
          </Box>
        </VStack>
        <VStack flex={2} space={8} my="2" mx="1">
          <Box px="4">
            <Text bold color="gray.700">
              Mail
            </Text>
            <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
              john_doe@gmail.com
            </Text>
          </Box>
        </VStack>
      </HStack>
      <VStack safeArea>
        <DrawerItem
          icon={() => (
            <MaterialIcons name="dashboard" size={18} color="black" />
          )}
          label={() => (
            <Text color="gray.700" fontWeight="500">
              Dashboard
            </Text>
          )}
          onPress={() => props.navigation.navigate("Notifications")}
        />
        <Divider my="2" />
      </VStack>

      <VStack safeArea>
        <Text fontWeight="500" fontSize="14" px="5" color="gray.500">
          Notifications
        </Text>

        <DrawerItem
          label={() => (
            <Text color="gray.700" fontWeight="500" marginLeft={5}>
              Today
            </Text>
          )}
          onPress={() => props.navigation.navigate("Notifications")}
        />
        <DrawerItem
          label={() => (
            <Text color="gray.700" fontWeight="500" marginLeft={5}>
              Yesterday
            </Text>
          )}
          onPress={() => props.navigation.navigate("Notifications")}
        />
        <DrawerItem
          label={() => (
            <Text color="gray.700" fontWeight="500" marginLeft={5}>
              Search
            </Text>
          )}
          onPress={() => props.navigation.navigate("Notifications")}
        />
        <Divider my="2" />
        <DrawerItem
          icon={() => <MaterialIcons name="logout" size={18} color="black" />}
          label="Logout"
          onPress={() => props.navigation.navigate("Login")}
        />
      </VStack>
    </DrawerContentScrollView>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Notifications" component={ListNotification} />
      <Drawer.Screen
        name="Login"
        component={LoginForm}
        options={{ headerShown: false, drawerItemStyle: { height: 0 } }}
      />
    </Drawer.Navigator>
  );
};

export default React.memo(DrawerNavigation);
