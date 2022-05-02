import {
  Button,
  Icon,
  Menu,
  MenuButton,
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

function RideTab({ pastRides, futureRides, nearestRides, user, rides }) {
  const [filterNearestRides, setFilterNearestRides] =
    React.useState(nearestRides);
  const [filterFutureRides, setFilterFutureRides] = React.useState(futureRides);
  const [filterPastRides, setFilterPastRides] = React.useState(pastRides);

  const handleFilter = (e) => {
    if (e.target.value === "all") {
      setFilterNearestRides(nearestRides);
      setFilterFutureRides(futureRides);
      setFilterPastRides(pastRides);
    } else {
      //filters the array for near rides
      const filteredNear = filterNearestRides.filter((ride) => {
        ride.city || ride.state === e.target.value;
      });
      setFilterNearestRides(filteredNear);

      //filters the array for future rides
      const filteredFuture = filterFutureRides.filter((ride) => {
        ride.city || ride.state === e.target.value;
      });
      setFilterFutureRides(filteredFuture);

      //filters the array for past rides
      const filteredPast = filterPastRides.filter((ride) => {
        ride.city || ride.state === e.target.value;
      });
      setFilterPastRides(filteredPast);
    }
  };

  // filter all cities and remove duplicates
  const cities = rides.filter((item, index) => rides.indexOf(item) === index);

  // filter all states and remove duplicates
  const states = rides.filter((item, index) => rides.indexOf(item) === index);
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
          Upcoming rides ({filterFutureRides.length})
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
          Past rides ({filterPastRides.length})
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
              icon={<IoMdArrowDropdown />}
              onChange={handleFilter}
              _placeholder={{ color: "black", backgroundColor: "white" }}
            >
              <option
                style={{ color: "black", backgroundColor: "white" }}
                value={"all"}
              >
                All States
              </option>{" "}
              {states
                .sort((a, b) => a - b)
                .map((state) => (
                  <option
                    style={{ color: "black", backgroundColor: "white" }}
                    value={state.state}
                  >
                    {state.state}
                  </option>
                ))}
            </Select>
            <Select
              mt={"20px"}
              fontSize="17px"
              color={"white"}
              bg="#232323"
              onChange={handleFilter}
              border="none"
              icon={<IoMdArrowDropdown />}
              _placeholder={{ color: "black", backgroundColor: "white" }}
            >
              <option
                style={{ color: "black", backgroundColor: "white" }}
                value="all"
              >
                All Cities
              </option>
              {cities
                .sort((a, b) => a - b)
                .map((city) => (
                  <option
                    style={{ color: "black", backgroundColor: "white" }}
                    value={city.city}
                  >
                    {city.city}
                  </option>
                ))}
            </Select>
          </MenuList>
        </Menu>
      </TabList>

      <TabPanels>
        <TabPanel p="0">
          {filterNearestRides.length > 0 &&
            filterNearestRides.map((ride) => (
              <RideCard
                key={ride.id + Math.random()}
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
            <Text color={"white"}>No Nearest Ride</Text>
          )}
        </TabPanel>
        <TabPanel p="0">
          {filterFutureRides.length > 0 &&
            filterFutureRides.map((ride) => (
              <RideCard
                key={ride.id + Math.random()}
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

          {filterFutureRides.length === 0 && (
            <Text color={"white"}>No Future Ride</Text>
          )}
        </TabPanel>
        <TabPanel p="0">
          {filterPastRides.length > 0 &&
            filterPastRides.map((ride) => (
              <RideCard
                key={ride.id + Math.random()}
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
          {filterPastRides.length === 0 && (
            <Text color={"white"}>No Past Ride</Text>
          )}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default RideTab;
