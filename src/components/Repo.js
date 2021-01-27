import React from "react";
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Link,
  Stack,
  Button,
} from "@chakra-ui/react";

import { FaStar } from "react-icons/fa";
import { AiOutlineFork } from "react-icons/ai";
import { VscIssues } from "react-icons/vsc";
import moment from "moment";

export function Repo(props) {
  const { isListView = false, repo } = props;
  return (
    <Flex
      borderWidth={1}
      bg="white"
      p="15px"
      rounded="5px"
      alignItems="flex-start"
    >
      <Flex flex={1} flexDir="column">
        {!isListView && (
          <Flex mb="15px" as="a" href={repo.owner.html_url}>
            <Image
              src={repo.owner.avatar_url}
              w={"35px"}
              h={"35px"}
              rounded="5px"
            />
            <Box ml="10px">
              <Heading fontSize="16px">{repo.owner.login}</Heading>
              <Text font-size="13px">View profile</Text>
            </Box>
          </Flex>
        )}
        <Box mb="15px" flex={1}>
          <Box mb="10px">
            <Flex fontSize="19px" fontWeight={700} color="purple.700" mb="3px">
              {isListView && (
                <>
                  <Text as="a" href={repo.owner.html_url} target="_blank">
                    {repo.owner.login}
                  </Text>
                  &nbsp;/&nbsp;
                </>
              )}
              <Text as="a" href={repo.owner.html_url} target="_blank">
                {repo.name}
              </Text>
            </Flex>
            <Text fontSize="14px" color="gray.600">
              <Box as={"span"} d={["none", "none", "inline", "inline"]}>
                Built by &middot; {""}
                <Link
                  fontWeight={600}
                  href={repo.owner.html_url}
                  target="_blank"
                >
                  {repo.owner.login}
                </Link>{" "}
                &middot;
              </Box>
              {moment(repo.created_at).format("MMM D, YYYY")}
            </Text>
          </Box>
          <Text fontSize="14px" color="gray.900">
            {repo.description}
          </Text>
        </Box>
        <Stack isInline spacing="10px">
          <Button
            as="a"
            href={`${repo.html_url}/stargazers`}
            cursor="pointer"
            leftIcon={<FaStar />}
            variant="link"
            fontSize="14px"
            iconSpacing="4px"
            _hover={{ textDecoration: "none" }}
          >
            {repo.stargazers_count}
          </Button>
          <Button
            as="a"
            href={`${repo.html_url}/network/members`}
            cursor="pointer"
            leftIcon={<AiOutlineFork />}
            variant="link"
            fontSize="14px"
            iconSpacing="4px"
            _hover={{ textDecoration: "none" }}
          >
            {repo.forks}
          </Button>
          <Button
            as="a"
            cursor="pointer"
            href={`${repo.html_url}/issues`}
            leftIcon={<VscIssues />}
            variant="link"
            fontSize="14px"
            iconSpacing="4px"
            _hover={{ textDecoration: "none" }}
          >
            {repo.open_issues_count}
          </Button>
        </Stack>
      </Flex>
      {isListView && (
        <Image
          src={repo.owner.avatar_url}
          w={"105px"}
          h={"105px"}
          rounded="100%"
        />
      )}
    </Flex>
  );
}
