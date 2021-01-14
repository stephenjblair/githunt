import React,  { useEffect, useState } from 'react';
import {  Button, Menu, MenuButton, MenuItem, MenuList, Select, Stack, Box } from '@chakra-ui/react';
import languages from '../data/languages.json';
import { FaCalendarAlt,  FaTable, FaList } from 'react-icons/fa';

export function Filters (props) {
    const { 
        onViewChange,
        onDateJumpChange,
        dateJump,
        language,
        onLanguageChange, 
    } = props;
    const [viewType, setViewType] = useState('grid');

    useEffect( () => {
        onViewChange(viewType);
    }, [viewType]);

    return (
        <Stack isInline mb="25px">
            <Select bg="white" value={language} onChange={(e) => onLanguageChange(e.target.value)}>
                {languages.map((language) => (
                    <option key={language.value} value={language.value}>{language.label}</option>
                ))}
            </Select>
            <Menu>
                <MenuButton 
                    textAlign="left"
                    w="250px"
                    justifyContent="flex-start"
                    as={Button} 
                    bg="white" 
                    borderWidth={1} 
                    px="15px" 
                    fontWeight={400}
                    _focus={{ boxShadow: "none"}}
                    leftIcon={<FaCalendarAlt />}
                >
                    <Box as="span" textTransform="capitalize">{ dateJump }</Box>
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => onDateJumpChange('day')}>Daily</MenuItem>
                    <MenuItem onClick={() => onDateJumpChange('week')}>Weekly</MenuItem>
                    <MenuItem onClick={() => onDateJumpChange('month')}>Monthly</MenuItem>
                    <MenuItem onClick={() => onDateJumpChange('year')}>Yearly</MenuItem>
                </MenuList>
            </Menu>

            <Stack isInline spacing={0} borderWidth={1} bg="white" rounded="5px" alignItems="center" ml="10px">
                <Button 
                    h="100%" 
                    onClick={() => setViewType('grid')}
                    fontWeight={400} 
                    roundedRight={0} 
                    bg={ viewType === 'grid' ? 'gray.200' : 'white' }
                    leftIcon={<FaTable />}
                >
                    Grid
                </Button>
                <Button 
                    h="100%" 
                    onClick={() => setViewType('list')}
                    fontWeight={400} 
                    roundedLeft={0} bg={ viewType === 'list' ? 'gray.200' : 'white' } 
                    leftIcon={<FaList />}
                >
                    List
                </Button>
            </Stack>
        </Stack>
    )
}