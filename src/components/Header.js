import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Stack, Flex, Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      {/* <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      /> */}
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r,blue.500, blue.500)"
            bgClip="text"
          >
            Zakariya Hassan
            <hr />
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            lorem ipsum dolor sit amet, consectetur adipiscing 🗣
          </Text>
          <Button mt={8} colorScheme="blue" onClick={() => window.open("#")}>
            Hire Me
          </Button>
        </Box>
        <Image
          alignSelf="center"
          ml="10px"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          borderRadius="full"
          npm
          st
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="100px"
          src="https://avatars.githubusercontent.com/u/79968201?s=200"
        />
      </Flex>
    </Stack>
  );
}

export default Header;
