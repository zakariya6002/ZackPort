import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Stack, Circle, Flex, Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";

function Header() {
  const { colorMode } = useColorMode;
  const isDark = colorMode === "dark";
  const { isNotSmallerScreen } = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.800"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      ></Circle>
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="5xl">Hi, I am</Text>
          <Text
            fontSize="7xl"
            FontWeight="bold"
            bgGradient="linear(to-r,cyan.500, blue.600, purple.700)"
            bgClip="text"
          >
            Zakariya Hassan
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa
          </Text>
          <button mt={8} colorScheme="blue" onClick={() => window.open("#")}>
            Browse
          </button>
        </Box>
      </Flex>
    </Stack>
  );
}

export default Header;
