import { useFocusEffect } from "@react-navigation/native";
import {
  Badge,
  Box,
  Center,
  Heading,
  HStack,
  ScrollView,
  Spinner,
  Text,
  VStack,
} from "native-base";
import React, { useCallback, useEffect, useState } from "react";
import { axiosQuery } from "../../services/axiosInceptors";

type Data = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const ListNotification = () => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const { data } = await axiosQuery.get("posts");
      setData(data);
      setLoading(false);
    };

    getPosts();
  }, []);

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
        {loading ? (
          <HStack safeArea space={2} justifyContent="center">
            <Spinner accessibilityLabel="Loading posts" />
            <Heading color="primary.500" fontSize="md">
              Loading
            </Heading>
          </HStack>
        ) : null}
        <ScrollView showsVerticalScrollIndicator={true}>
          {data.map((e, i) => (
            <Box key={e.id} p="2" borderBottomWidth="1" borderColor="#d4d4d4">
              <HStack flex={12} space={2}>
                <VStack flex={10}>
                  <Heading numberOfLines={1} size="sm">
                    {i + 1}. {e.title}
                  </Heading>
                </VStack>
                <VStack flex={2}>
                  <Text numberOfLines={1} fontSize="xs" alignItems="flex-end">
                    17:35 PM
                  </Text>
                </VStack>
              </HStack>

              <VStack space={1} mt="2">
                <Text color="#737373">{e.body}</Text>
              </VStack>
            </Box>
          ))}
        </ScrollView>
      </Box>
    </Center>
  );
};

export default React.memo(ListNotification);
