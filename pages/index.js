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
