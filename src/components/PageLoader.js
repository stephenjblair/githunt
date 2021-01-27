import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";

export function PageLoader() {
  return (
    <Flex
      poition="fixed"
      left={0}
      right={0}
      bottom={0}
      top={0}
      aignItems="center"
      justifyContent="center"
      bg="white"
      zIndex={999}
    >
      <Spinner thickness="4px" coolor="gray.400" />
    </Flex>
  );
}
