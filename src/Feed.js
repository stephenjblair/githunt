import React from 'react';
import { Box, Flex, SimpleGrid, Button } from '@chakra-ui/react';
import { PageHeader } from './components/PageHeader';
import { GroupTitle } from './components/GroupTitle';
import { Filters } from './components/Filters';
import { Repo } from './components/Repo';


export function Feed () {
    return (
        <Box maxWidth="1200px" mx="auto">
            <PageHeader />
            <Flex alignItems="center" justifyContent="space-between">
                <GroupTitle />
                <Filters />
            </Flex>
            <SimpleGrid columns={3} spacing="15px">
               <Repo />     
               <Repo />
               <Repo />
               <Repo />
               <Repo />
               <Repo />
               <Repo />
            </SimpleGrid>
            <Flex alignItems="center" justifyContent="center" my="20px">
                <Button colorScheme="blue">Load next group</Button>
            </Flex>
        </Box>
    )
}