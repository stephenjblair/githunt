import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { PageHeader } from './components/PageHeader';
import { GroupTitle } from './components/GroupTitle';
import { Filters } from './components/Filters';


export function Feed () {
    return (
        <Box maxWidth="1200px" mx='auto'>
            <PageHeader />
            <Flex alignItems="center" justifyContent="space-between">
                <GroupTitle />
                <Box>
                    <Filters />
                </Box>
            </Flex>
        </Box>
    )
}