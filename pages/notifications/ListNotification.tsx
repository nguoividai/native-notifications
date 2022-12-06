import {
  Box,
  Center,
  Heading,
  HStack,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React from "react";
import DrawerNavigation from "../../components/drawer/DrawerNavigation";

const ListNotification = () => {
  return (
    <Center h="100%" w="100%" bg="white">
      <Box
        _dark={{
          bg: "coolGray.800",
        }}
        _light={{
          bg: "white",
        }}
        flex="1"
        safeAreaTop
        maxW="400px"
        w="100%"
        marginTop={-7}
      >
        <ScrollView showsVerticalScrollIndicator={true}>
          {[...Array(10)].map((e, i) => (
            <Box key={i} p="2" borderBottomWidth="1" borderColor="#d4d4d4">
              <HStack space={2}>
                <VStack flex="1">
                  <Heading size="sm">{i + 1}. Name Notification</Heading>
                </VStack>
                <VStack flex="1" alignItems="center">
                  <Text fontSize="xs">12/12/2022 20:12 PM</Text>
                </VStack>
              </HStack>
              <HStack space={1} mt="2">
                <Text color="#737373">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
              </HStack>
            </Box>
          ))}
        </ScrollView>
      </Box>
    </Center>
  );
};

export default React.memo(ListNotification);
