import React from 'react';
import { Box, Button, Image, Flex, Stack, Heading, Text } from '@chakra-ui/react';
import logo from './img/logo.svg';
import { FaGithub, FaChrome, FaTwitter } from 'react-icons/fa';


export function Feed () {
    return (
        <Box maxWidth="1200px" mx='auto'>
            <Flex justifyContent="space-between" alignItems="center" pt="15px">
                <Flex alignItems="center">
                    <Image src={logo}  boxSize="100px"/>
                    <Box ml="10px">
                        <Heading fontSize="24px">GitHunt</Heading>
                        <Text color="gray.600">Most starred projects on GitHub</Text>
                    </Box>
                </Flex>
                <Stack isInline>
                    <Button leftIcon={<FaGithub />}>View Source</Button>
                    <Button leftIcon={<FaChrome />} colorScheme="red">Use Extension</Button>
                    <Button leftIcon={<FaTwitter />} colorScheme="purple">Tweet</Button>
                </Stack>
            </Flex>
        </Box>
    )
}