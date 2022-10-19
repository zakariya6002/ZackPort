import React from "react";
import Icon from "@chakra-ui/icon";
import { HStack } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Image } from "@chakra-ui/image";

function Socials() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <HStack spacing="20">
      <Image
        alignSelf="center"
        ml="10px"
        mt={isNotSmallerScreen ? "0" : "12"}
        mb={isNotSmallerScreen ? "0" : "12"}
        borderRadius="10%"
        npm
        st
        backgroundColor="transparent"
        boxShadow="lg"
        boxSize="100px"
        src="https://media-exp1.licdn.com/dms/image/C4D0BAQGNR875-IljEw/company-logo_100_100/0/1594029467201?e=1674086400&v=beta&t=V1McySU_9Z5mtzukOcy1K-ic_mNylOdxvK_T7TJ1__Q"
      />
      <Image
        alignSelf="center"
        ml="10px"
        mt={isNotSmallerScreen ? "0" : "12"}
        mb={isNotSmallerScreen ? "0" : "12"}
        borderRadius="10%"
        npm
        st
        backgroundColor="transparent"
        boxShadow="lg"
        boxSize="100px"
        src="https://media-exp1.licdn.com/dms/image/C4D0BAQFPgXuCn1uvnQ/company-logo_200_200/0/1659525458742?e=1674086400&v=beta&t=fjE44ZrPxhnhpC38lJ91w8RgBjyoomxQx73usfIT7eY"
      />
      <Image
        alignSelf="center"
        ml="10px"
        mt={isNotSmallerScreen ? "0" : "12"}
        mb={isNotSmallerScreen ? "0" : "12"}
        borderRadius="10%"
        npm
        st
        backgroundColor="transparent"
        boxShadow="lg"
        boxSize="100px"
        src="./Untitled-1.png"
      />
      {/* <Icon as={FaFacebookF} boxSize="50" />
      <Icon as={FaGoogle} boxSize="50" />
      <Icon as={FaShopify} boxSize="50" /> */}
    </HStack>
  );
}

export default Socials;
