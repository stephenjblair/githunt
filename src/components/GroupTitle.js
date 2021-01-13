import React from 'react';
import { Text } from '@chakra-ui/react';

export function GroupTitle () {
    return (
        <Text fontSize="24px" fontWeight={700}>
            This week <Text fontSize="15px" fontWeight={500} color="gray.500" ml="5px" as="span"> 11th January 2021 - 18th January 2021</Text>
        </Text>
    )
}