import React from "react";
import Icon from "@chakra-ui/icon";
import { HStack } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";

import { FaFacebookF, FaGoogle, FaSpotify, FaShopify } from "react-icons/fa";

function Socials() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <HStack
      spacing="24"
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Icon as={FaFacebookF} boxSize="50" />
      <Icon as={FaGoogle} boxSize="50" />
      <Icon as={FaShopify} boxSize="50" />
    </HStack>
  );
}

export default Socials;
