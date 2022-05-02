import { background, Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function RideCard() {
  return (
    <Flex
      p={"30px"}
      bg="#171717"
      rounded={"10px"}
      justifyContent="space-between"
    >
      <Flex align={""}>
        <Image src="/map-img.png" width={"296px"} height="148px" />
        <Box ml={"44px"}>
          <Text
            fontSize={"18px"}
            fontWeight="500"
            mb="8px"
            color={"brand.gray"}
          >
            Ride Id :{" "}
            <Text as={"span"} color="white">
              002
            </Text>
          </Text>
          <Text
            fontSize={"18px"}
            fontWeight="500"
            mb="8px"
            color={"brand.gray"}
          >
            Origin Station :{" "}
            <Text as={"span"} color="white">
              002
            </Text>
          </Text>
          <Text
            fontSize={"18px"}
            fontWeight="500"
            mb="8px"
            color={"brand.gray"}
          >
            station_path :{" "}
            <Text as={"span"} color="white">
              002
            </Text>
          </Text>
          <Text
            fontSize={"18px"}
            fontWeight="500"
            mb="8px"
            color={"brand.gray"}
          >
            Date :{" "}
            <Text as={"span"} color="white">
              002
            </Text>
          </Text>
          <Text
            fontSize={"18px"}
            fontWeight="500"
            mb="8px"
            color={"brand.gray"}
          >
            Distance :{" "}
            <Text as={"span"} color="white">
              002
            </Text>
          </Text>
        </Box>
      </Flex>
      <Flex>
        <Box
          bg="black"
          rounded={"full"}
          h="23px"
          p={"4px 10px"}
          display="flex"
          justifyContent={"center"}
          alignItems="center"
          ml={"24px"}
        >
          <Text fontSize="12px" fontWeight={500}>
            City Name
          </Text>
        </Box>

        <Box
          bg="black"
          rounded={"full"}
          h="23px"
          p={"4px 10px"}
          display="flex"
          justifyContent={"center"}
          alignItems="center"
          ml={"24px"}
        >
          <Text fontSize="12px" fontWeight={500}>
            State Name
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default RideCard;
