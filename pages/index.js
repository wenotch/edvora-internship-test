import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
import RideTab from "../components/RideTab";

function index({ user, rides }) {
  //filters the array for past rides
  const pastRides = rides.filter((ride) => new Date() > new Date(ride.date));

  //sorts the past rides from most recent past to oldest
  const sortedPastedRides = pastRides.sort((a, b) => {
    var dateA = new Date(a.date),
      dateB = new Date(b.date);
    return dateB - dateA;
  });

  //filters the array for future rides
  const futureRides = rides.filter((ride) => new Date() < new Date(ride.date));

  //sorts the future rides from most recent to oldest
  const sortedfutureRides = futureRides.sort((a, b) => {
    var dateA = new Date(a.date),
      dateB = new Date(b.date);
    return dateB - dateA;
  });

  // create array of rides with the distances inside in each object
  const detailedRide = rides.map((ride) => {
    //calculating distance
    var station_path = ride.station_path,
      user_station_code = user?.station_code;

    var closest = station_path?.reduce(function (prev, curr) {
      return Math.abs(curr - user_station_code) <
        Math.abs(prev - user_station_code)
        ? curr
        : prev;
    });

    return { ...ride, distance: Math.abs(closest - user_station_code) };
  });

  const nearestRides = detailedRide.sort((a, b) => {
    return a.distance - b.distance;
  });

  return (
    <Box
      bg="brand.background"
      maxH={"100vh"}
      h={"100vh"}
      maxW="100%"
      w={"100%"}
      overflow="scroll"
    >
      <Navbar user={user} />
      <RideTab
        pastRides={sortedPastedRides}
        futureRides={sortedfutureRides}
        nearestRides={nearestRides}
        rides={rides}
        user={user}
      />
    </Box>
  );
}

export default index;

export async function getServerSideProps() {
  //fetches user
  const userRes = await fetch("https://assessment.api.vweb.app/user");
  const user = await userRes.json();

  //fetches rides
  const ridesRes = await fetch("https://assessment.api.vweb.app/rides");
  const rides = await ridesRes.json();
  return { props: { user, rides } };
}
