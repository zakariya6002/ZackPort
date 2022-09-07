import { VStack, Flex, Heading, Spacer } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { IconButton } from "@chakra-ui/button";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Socials from "./components/Socials";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontweight="semibold" color="cyan.400">
          Zack
        </Heading>
        <Spacer></Spacer>

        <IconButton
          ml={2}
          icon={<FaInstagram />}
          isRounded={true}
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaGithub />}
          isRounded={true}
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaFacebook />}
          isRounded={true}
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRounded={true}
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
      <Header></Header>
      <Socials></Socials>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
