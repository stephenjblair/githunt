import React from "react";
import { Box, Image, Flex, Heading, Text } from "@chakra-ui/react";
import logo from "../img/logo.svg";

export function Brand() {
  return (
    <Flex alignItems="center">
      <Image src={logo} boxSize="100px" />
      <Box ml="10px">
        <Heading fontSize="38px">GitHunt</Heading>
        <Text color="gray.600">Most starred projects on GitHub</Text>
      </Box>
    </Flex>
  );
}
