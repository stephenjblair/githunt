import React, { useState, useEffect } from 'react';
import { Box, Flex, SimpleGrid, Button } from '@chakra-ui/react';
import { PageHeader } from './components/PageHeader';
import { GroupTitle } from './components/GroupTitle';
import { Filters } from './components/Filters';
import { Repo } from './components/Repo';
import moment from 'moment';


export function Feed () {
    const [viewType, setViewType] = useState('grid');
    const [dateJump, setDateJump] = useState('day');
    const [language, setLanguage]= useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState(moment().subtract(1, 'day').format());

    useEffect(() => {
       const endDate =  moment().subtract(1, 'day').format();
       const startDate = moment(endDate).subtract(1, dateJump).format();
       
       setEndDate(endDate);
       setStartDate(startDate);
    }, [dateJump])
    return (
        <Box maxWidth="1200px" mx="auto">
            <PageHeader />
            <Flex alignItems="center" justifyContent="space-between">
                <GroupTitle />
                <Filters 
                    viewType={viewType}
                    onViewChange={setViewType}
                    dateJump={dateJump}
                    onDateJumpChange={setDateJump}
                    language={language}
                    onLanguageChange={setLanguage}
                />
            </Flex>
            <SimpleGrid columns={viewType === 'list' ? 1 : 3} spacing="15px">
               <Repo isListView={viewType === 'list'}/>     
               <Repo isListView={viewType === 'list'}/>  
               <Repo isListView={viewType === 'list'}/>  
               <Repo isListView={viewType === 'list'}/>  
               <Repo isListView={viewType === 'list'}/>  
               <Repo isListView={viewType === 'list'}/>  
               <Repo isListView={viewType === 'list'}/>  
            </SimpleGrid>
            <Flex alignItems="center" justifyContent="center" my="20px">
                <Button colorScheme="blue">Load next group</Button>
            </Flex>
        </Box>
    )
}