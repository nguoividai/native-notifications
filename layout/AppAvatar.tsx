import { Avatar, Menu, Pressable } from "native-base";
import React from "react";

const AppAvatar = () => {
  return (
    <>
      <Menu
        w="160"
        placement="bottom right"
        trigger={(triggerProps) => {
          return (
            <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <Avatar
                size="sm"
                bg="green.500"
                source={{
                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                }}
              >
                AJ
              </Avatar>
            </Pressable>
          );
        }}
      >
        <Menu.Item>Profile</Menu.Item>
        <Menu.Item>Logout</Menu.Item>
      </Menu>
    </>
  );
};

export default React.memo(AppAvatar);
