import { Avatar, Flex, Text } from "@chakra-ui/react";
import React from "react";

function Navbar({ user }) {
  return (
    <Flex
      align={"center"}
      w="100%"
      justify={"space-between"}
      px="43px"
      py={"20px"}
      bg="brand.black"
      pos={"sticky"}
      top={"0"}
      zIndex="1"
    >
      <Text color={"white"} fontSize="36px" fontWeight={"700"}>
        Edvora
      </Text>
      <Flex align={"center"}>
        <Text color={"white"} mr="25px" fontSize="20px" fontWeight={"700"}>
          {user.name}
        </Text>
        <Avatar src={user.url} name={user.name} />
      </Flex>
    </Flex>
  );
}

export default Navbar;
