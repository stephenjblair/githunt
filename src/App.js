import React from "react";
import { Box } from "@chakra-ui/react";
import { Feed } from "./Feed";

export function App() {
  return (
    <Box width="100vw" minHeight={"100vh"} bg="gray.100" py="30px">
      <Feed />
    </Box>
  );
}
