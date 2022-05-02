import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
import RideTab from "../components/RideTab";

function index() {
  return (
    <Box
      bg="brand.background"
      maxH={"100vh"}
      h={"100vh"}
      maxW="100%"
      w={"100%"}
    >
      <Navbar />
      <RideTab />
    </Box>
  );
}

export default index;
