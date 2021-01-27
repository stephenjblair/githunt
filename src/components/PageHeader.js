import React from "react";
import { Brand } from "../components/Brand";
import { Button, Flex, Stack } from "@chakra-ui/react";
import { FaGithub, FaChrome, FaTwitter } from "react-icons/fa";

export function PageHeader() {
  return (
    <Flex justifyContent="space-between" alignItems="center" pt="15px">
      <Brand />
      <Stack isInline d={["none", "none", "flex", "flex"]}>
        <Button
          as="a"
          href="https://github.com/stephenjblair/githunt"
          target="_blank"
          leftIcon={<FaGithub />}
          bg="gray.700"
          color="white"
          _hover={{ bg: "gray.900" }}
        >
          View Source
        </Button>
        <Button
          as="a"
          href="https://chrome.google.com/webstore/detail/githunt/khpcnaokfebphakjgdgpinmglconplhp"
          target="_blank"
          leftIcon={<FaChrome />}
          colorScheme="red"
        >
          Use Extension
        </Button>
        <Button
          as="a"
          href="https://twitter.com/intent/tweet?text=GitHunt%20%E2%80%93%20Most%20starred%20projects%20on%20Github%20by%20@stephenjohnbla4%20https://github.com/stephenjblair/githunt"
          leftIcon={<FaTwitter />}
          background="#1DA1F2"
          color="#fff"
        >
          Tweet
        </Button>
      </Stack>
    </Flex>
  );
}
