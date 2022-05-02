import { background, Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function RideCard({
  id,
  date,
  station_code,
  city,
  state,
  station_path,
  url,
  user,
}) {
  //calculating distance
  var station_path = station_path,
    user_station_code = user?.station_code;

  var closest = station_path?.reduce(function (prev, curr) {
    return Math.abs(curr - user_station_code) <
      Math.abs(prev - user_station_code)
      ? curr
      : prev;
  });

  return (
    <Flex
      p={"30px"}
      bg="#171717"
      rounded={"10px"}
      justifyContent="space-between"
      mb="12px"
    >
      <Flex align={""}>
        <Image
          src={url ? url : "/map-img.png"}
          width={"296px"}
          height="168px"
          style={{ borderRadius: "5px" }}
        />

        <Box ml={"44px"}>
          <Text
            fontSize={"18px"}
            fontWeight="500"
            mb="8px"
            color={"brand.gray"}
          >
            Ride Id :{" "}
            <Text as={"span"} color="white">
              {id}
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
              {station_code}
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
              {/* print array as string */}[{station_path?.toString()}]
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
              {date}
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
              {Math.abs(closest - user_station_code)}
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
            {city}
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
            {state}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default RideCard;
