import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsFilterLeft } from "react-icons/bs";
import RideCard from "./RideCard";
import { IoMdArrowDropdown } from "react-icons/io";

function RideTab({ pastRides, futureRides, user }) {
  return (
    <Tabs
      px="43px"
      pt="29px"
      justify="center"
      variant={"unstyled"}
      color="white"
    >
      <TabList justify="center" alignContent={"center"} pb="24px">
        <Tab
          p={"0"}
          fontSize="18px"
          fontWeight={400}
          color="brand.gray"
          mr="44px"
          _selected={{
            color: "white",
            fontWeight: 700,
            borderBottom: "2px solid white",
          }}
          _focus={{
            border: "none",
            outline: "none",
          }}
        >
          Nearest rides
        </Tab>
        <Tab
          p={"0"}
          fontSize="18px"
          fontWeight={400}
          color="brand.gray"
          mr="44px"
          _selected={{
            color: "white",
            fontWeight: 700,
            borderBottom: "2px solid white",
          }}
          _focus={{
            border: "none",
            outline: "none",
          }}
        >
          Upcoming rides ({futureRides.length})
        </Tab>
        <Tab
          p={"0"}
          fontSize="18px"
          fontWeight={400}
          color="brand.gray"
          mr="44px"
          _selected={{
            color: "white",
            fontWeight: 700,
            borderBottom: "2px solid white",
          }}
          _focus={{
            border: "none",
            outline: "none",
          }}
        >
          Past rides ({pastRides.length})
        </Tab>
        <Menu pos="relative">
          <MenuButton
            as={Button}
            _active={{ bg: "brand.black", color: "white" }}
            pos="absolute"
            right="43px"
            bg="transparent"
            fontSize={"16px"}
            fontWeight="500"
            _hover={{
              bg: "brand.black",
            }}
            leftIcon={
              <Icon
                as={BsFilterLeft}
                color="rgba(255, 255, 255, 0.8)"
                fontSize={"18px"}
              />
            }
          >
            Filter
          </MenuButton>
          <MenuList
            bg="brand.black"
            border={"none"}
            px="30px"
            py="23px"
            w={"228px"}
          >
            <Text
              fontSize={"20px"}
              fontWeight="300"
              pl={"12px"}
              borderBottom="1px solid #CBCBCB"
              pb={"12px"}
            >
              Filter
            </Text>
            <Select
              mt={"20px"}
              fontSize="17px"
              color={"white"}
              bg="#232323"
              border="none"
              placeholder={"Select"}
              icon={<IoMdArrowDropdown />}
            >
              <option>anambra</option>
            </Select>
            <Select
              mt={"20px"}
              fontSize="17px"
              color={"white"}
              bg="#232323"
              border="none"
              placeholder={"City"}
              icon={<IoMdArrowDropdown />}
            >
              <option>anambra</option>
            </Select>
          </MenuList>
        </Menu>
      </TabList>

      <TabPanels>
        <TabPanel p="0">
          <RideCard />
        </TabPanel>
        <TabPanel p="0">
          {futureRides.length > 0 &&
            futureRides.map((ride) => (
              <RideCard
                id={ride.id}
                date={ride.date}
                station_code={ride.origin_station_code}
                state={ride.state}
                city={ride.city}
                station_path={ride.station_path}
                url={ride.map_url}
                user={user}
              />
            ))}

          {futureRides.length === 0 && (
            <Text color={"white"}>No Future Ride</Text>
          )}
        </TabPanel>
        <TabPanel p="0">
          {pastRides.length > 0 &&
            pastRides.map((ride) => (
              <RideCard
                id={ride.id}
                date={ride.date}
                station_code={ride.origin_station_code}
                state={ride.state}
                city={ride.city}
                station_path={ride.station_path}
                url={ride.map_url}
                user={user}
              />
            ))}{" "}
          {pastRides.length === 0 && (
            <Text color={"white"}>No Future Ride</Text>
          )}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default RideTab;
