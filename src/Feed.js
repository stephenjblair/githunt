import React, { useState } from 'react';
import { Box, Flex, SimpleGrid, Button } from '@chakra-ui/react';
import { PageHeader } from './components/PageHeader';
import { GroupTitle } from './components/GroupTitle';
import { Filters } from './components/Filters';
import { Repo } from './components/Repo';


export function Feed () {
    const [viewType, setViewType] = useState()
    return (
        <Box maxWidth="1200px" mx="auto">
            <PageHeader />
            <Flex alignItems="center" justifyContent="space-between">
                <GroupTitle />
                <Filters onViewChange={(viewType) => {
                    setViewType(viewType)
                }}/>
            </Flex>
            <SimpleGrid columns={viewType === 'list' ? 1 : 3} spacing="15px">
               <Repo isListView={true}/>     
               <Repo isListView={true} />
               <Repo isListView={true}/>
               <Repo isListView={true}/>
               <Repo isListView={true}/>
               <Repo isListView={true}/>
               <Repo isListView={true}/>
            </SimpleGrid>
            <Flex alignItems="center" justifyContent="center" my="20px">
                <Button colorScheme="blue">Load next group</Button>
            </Flex>
        </Box>
    )
}