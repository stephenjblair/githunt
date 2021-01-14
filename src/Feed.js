import React, { useState, useEffect } from 'react';
import { Box, Flex, SimpleGrid, Button } from '@chakra-ui/react';
import { PageHeader } from './components/PageHeader';
import { GroupTitle } from './components/GroupTitle';
import { Filters } from './components/Filters';
import { Repo } from './components/Repo';
import moment from 'moment';
import useFetch from 'use-http';


function transformFilters({ startDate, endDate, language}) {
    const transformedFilters = {};

    const languageQuery = language ? `language=${language}` : "";
    const dateQuery = `created:${startDate}..${endDate}`;

    transformedFilters.q = languageQuery + dateQuery;
    transformedFilters.sort = "stars";
    transformedFilters.order = "desc";

    return transformedFilters;
    


}
export function Feed () {
    const { loading, error, get} = useFetch('https://api.github.com');

    const [viewType, setViewType] = useState('grid');
    const [dateJump, setDateJump] = useState('day');
    const [language, setLanguage]= useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState(moment().subtract(1, 'day').format());
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
       const endDate =  moment().subtract(1, 'day').format();
       const startDate = moment(endDate).subtract(1, dateJump).format();
       
       setEndDate(endDate);
       setStartDate(startDate);

       setRepositories([]);
    }, [dateJump, language]);

    useEffect(() => {
        if (!startDate) {
            return
        }

        const filters = transformFilters({ language, startDate, endDate });
        const filtersQuery = new URLSearchParams(filters).toString();
        get(`/search/repositories?${filtersQuery}`).then((res) => {
            setRepositories([
                ...repositories,
                {
                    startDate,
                    endDate,
                    items: res.items,
                }
            ])
        })
    }, [startDate]);
    return (
        <Box maxWidth="1200px" mx="auto">
            <PageHeader />
            <Flex alignItems="center" justifyContent="space-between">
                <GroupTitle startDate={startDate} endDate={endDate} />
                <Filters 
                    viewType={viewType}
                    onViewChange={setViewType}
                    dateJump={dateJump}
                    onDateJumpChange={setDateJump}
                    language={language}
                    onLanguageChange={setLanguage}
                />
            </Flex>

            {repositories.map((repoGroup, counter) => {
                const groupTitle = counter > 0 && (
                    <GroupTitle p="25px"
                            startDate={repoGroup.startDate}
                            endDate={repoGroup.endDate}
                    />
                )
                return (
                    <Box> 
                        { groupTitle }
                    <SimpleGrid columns={viewType === 'list' ? 1 : 3} spacing="15px">
                        {repoGroup.items.map(repo => <Repo isListView={viewType === 'list'} repo={repo} /> )}       
                    </SimpleGrid>
                    </Box>
                )
            })}
   
            <Flex alignItems="center" justifyContent="center" my="20px" >
                <Button 
                    isLoading={loading} 
                    onClick={() => {
                        setEndDate(startDate);
                        setStartDate(moment(startDate).subtract(1, dateJump).format())
                    }}
                colorScheme="blue">Load next group</Button>
            </Flex>
        </Box>
    )
}