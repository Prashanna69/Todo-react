import React from "react";
import { useState } from "react";
import {
  Button,
  Divider,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { BsFillCircleFill } from "react-icons/bs";

export default function MenuItems() {
  const [value, setValue] = useState("0");

  let colorScheme = "white";

  console.log(value);

  if (value === "0") {
    colorScheme = "whiteAlpha";
  } else if (value === "1") {
    colorScheme = "red";
  } else if (value === "2") {
    colorScheme = "yellow";
  } else {
    colorScheme = "whatsapp";
  }
  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          borderRadius="1rem"
          rightIcon={<ChevronDownIcon ml="1rem" />}
          colorScheme={colorScheme}
        >
          Priority
        </MenuButton>
        <MenuList bg="#1f1f1f">
          <MenuGroup>
            <MenuItem
              color="white"
              icon={<BsFillCircleFill color="red" />}
              bg="#1f1f1f"
              _hover={{ bg: "#4b4b4b" }}
              onClick={() => handleValueChange("1")}
            >
              High
            </MenuItem>
            <Divider />
            <MenuItem
              color="white"
              icon={<BsFillCircleFill color="yellow" />}
              bg="#1f1f1f"
              _hover={{ bg: "#4b4b4b" }}
              onClick={() => handleValueChange("2")}
            >
              Medium
            </MenuItem>
            <Divider />
            <MenuItem
              color="white"
              icon={<BsFillCircleFill color="green" />}
              bg="#1f1f1f"
              _hover={{ bg: "#4b4b4b" }}
              onClick={() => handleValueChange("3")}
            >
              Low
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </>
  );
}
