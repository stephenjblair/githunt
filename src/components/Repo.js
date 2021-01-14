import React from 'react';
import { Box, Flex, Image, Heading, Text, Link, Stack, Button } from '@chakra-ui/react';
import image from '../img/logo.svg'
import { FaStar } from 'react-icons/fa';
import { AiOutlineFork } from 'react-icons/ai';
import { VscIssues } from 'react-icons/vsc';

export function Repo (props) {
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
                    <Flex mb="15px" as="a" href="https://www.github.com">
                        <Image 
                        src={image} 
                        w={"35px"} 
                        h={"35px"} 
                        rounded="5px"
                    />
                <Box ml="10px">
                    <Heading fontSize="16px">Stephen Blair</Heading>
                    <Text font-size="13px">View profile</Text>
                </Box>
            </Flex>
            )}
            <Box mb="15px">
                <Box mb="10px">
                    <Flex fontSize="19px" fontWeight={700} color="purple.700" mb="3px">
                        {isListView && (
                            <>
                                <Text 
                                    as ="a" 
                                    href="http://www.github.com" 
                                    target="_blank"
                                >
                                    Stephen Blair
                                </Text>
                                &nbsp;/&nbsp;
                            </>
                        )}
                        <Text 
                            as ="a" 
                            href="http://www.github.com" 
                            target="_blank"
                        >
                            githunt
                        </Text>
                    </Flex>
                    <Text 
                        fontSize="14px"
                        color="gray.600">Built by &middot;  
                            <Link 
                                fontWeight={600}
                                href="http://www.google.com" 
                                target="_blank">Stephen Blair
                            </Link> &middot; January 13th 2021
                    </Text>
                </Box>
                <Text 
                    fontSize="14px" 
                    color="gray.900">Find the most starred projects for any date on GitHub
                </Text>
            </Box>
            <Stack isInline spacing="10px">
                <Button 
                    as="a" 
                    cursor="pointer" 
                    leftIcon={<FaStar />} 
                    variant="link" 
                    fontSize="14px" 
                    iconSpacing="4px" 
                    _hover={{textDecoration: 'none'}}>3847s
                </Button>
                <Button 
                    as="a" 
                    cursor="pointer" 
                    leftIcon={<AiOutlineFork />} 
                    variant="link" 
                    fontSize="14px" 
                    iconSpacing="4px" 
                    _hover={{textDecoration: 'none'}}>3847s
                </Button>
                <Button 
                    as="a" 
                    cursor="pointer" 
                    leftIcon={<VscIssues />} 
                    variant="link" 
                    fontSize="14px" 
                    iconSpacing="4px" 
                    _hover={{textDecoration: 'none'}}>3847
                </Button>
            </Stack>
        </Flex>
        {isListView && (
            <Image
                src={image}
                w={"105px"}
                h={"105px"}
                rounded="100%"
            />
        )}
    </Flex>
    )
}