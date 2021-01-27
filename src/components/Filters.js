import React from "react";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Stack,
  Box,
} from "@chakra-ui/react";
import languages from "../data/languages.json";
import { FaCalendarAlt, FaTable, FaList } from "react-icons/fa";

export function Filters(props) {
  const {
    onViewChange,
    viewType,
    onDateJumpChange,
    dateJump,
    language,
    onLanguageChange,
  } = props;

  return (
    <Stack isInline mt={["15px", "15px", "!5px", 0]}>
      <Select
        bg="white"
        value={language}
        onChange={(e) => onLanguageChange(e.target.value)}
      >
        {languages.map((language) => (
          <option key={language.value} value={language.value}>
            {language.label}
          </option>
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
          _focus={{ boxShadow: "none" }}
          leftIcon={<FaCalendarAlt />}
        >
          <Box as="span" textTransform="capitalize">
            {dateJump}
          </Box>
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => onDateJumpChange("day")}>Daily</MenuItem>
          <MenuItem onClick={() => onDateJumpChange("week")}>Weekly</MenuItem>
          <MenuItem onClick={() => onDateJumpChange("month")}>Monthly</MenuItem>
          <MenuItem onClick={() => onDateJumpChange("year")}>Yearly</MenuItem>
        </MenuList>
      </Menu>

      <Stack
        d={["none", "none", "none", "flex"]}
        isInline
        spacing={0}
        borderWidth={1}
        bg="white"
        rounded="5px"
        alignItems="center"
        ml="10px"
      >
        <Button
          h="100%"
          onClick={() => onViewChange("grid")}
          fontWeight={400}
          roundedRight={0}
          bg={viewType === "grid" ? "gray.200" : "white"}
          leftIcon={<FaTable />}
          _focus={{ boxShadow: "none" }}
        >
          Grid
        </Button>
        <Button
          h="100%"
          onClick={() => onViewChange("list")}
          fontWeight={400}
          roundedLeft={0}
          bg={viewType === "list" ? "gray.200" : "white"}
          leftIcon={<FaList />}
          _focus={{ boxShadow: "none" }}
        >
          List
        </Button>
      </Stack>
    </Stack>
  );
}
