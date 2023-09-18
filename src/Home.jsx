import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import DateInfo from "./components/dateInfo";
import MenuItems from "./components/MenuItem";
import { BsListNested } from "react-icons/bs";
import { useState } from "react";
import Task from "./components/Task";

export default function Home() {
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const taskValue = task;
    setTask("");
  };
  return (
    <>
      <Box bg="#111" minH="100vh" padding="2rem 3rem">
        <Flex justify="center">
          <Heading color="#FFA500">React Todo</Heading>
        </Flex>
        <Flex mt="2rem" gap="1rem" flexWrap="wrap" justify="center">
          <Box
            bg="#4b4b4b"
            minH="20rem"
            minW="40rem"
            borderRadius="2rem"
            p="2rem 3rem"
          >
            <Flex align="center" color="whiteAlpha.700" flexDir="column">
              <DateInfo />
            </Flex>
            <form onSubmit={handleSubmit}>
              <Flex mt="2rem" gap="1rem" align="center">
                <InputGroup>
                  <InputLeftElement>
                    <BsListNested color="gray" />
                  </InputLeftElement>

                  <Input
                    type="text"
                    value={task}
                    onChange={(e) => {
                      setTask(e.target.value);
                    }}
                    borderRadius="1rem"
                    placeholder="Add your task..."
                    border="none"
                    bg="#1f1f1f"
                    color="white"
                  />
                </InputGroup>
                <MenuItems />
              </Flex>
            </form>
            <Task />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
