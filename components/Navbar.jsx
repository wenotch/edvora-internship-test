import { Avatar, Flex, Text } from "@chakra-ui/react";
import React from "react";

function Navbar() {
  return (
    <Flex
      align={"center"}
      w="100%"
      justify={"space-between"}
      px="43px"
      py={"20px"}
      bg="brand.black"
    >
      <Text color={"white"} fontSize="36px" fontWeight={"700"}>
        Edvora
      </Text>
      <Flex align={"center"}>
        <Text color={"white"} mr="25px" fontSize="20px" fontWeight={"700"}>
          Dhruv Singh
        </Text>
        <Avatar src="/user.png" name="Dhruv Singh" />
      </Flex>
    </Flex>
  );
}

export default Navbar;
