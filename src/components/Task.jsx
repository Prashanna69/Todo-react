import {
  Accordion,
  AccordionButton,
  AccordionItem,
  Box,
  AccordionIcon,
  AccordionPanel,
  Button,
  HStack,
  Spacer,
  Flex,
  Text,
} from "@chakra-ui/react";

export default function Task() {
  return (
    <>
      <Accordion allowMultiple styleConfig="none" mt="2rem">
        <AccordionItem>
          <h2>
            <AccordionButton
              bg="#1f1f1f"
              p="1rem 2rem"
              borderRadius="1rem 1rem 0rem 0rem"
            >
              <Flex alignItems="center">
                <Box as="span" textAlign="left" color="white" fontSize={"lg"}>
                  <Text>Task 1</Text>
                </Box>
              </Flex>
              <Spacer />
              <HStack>
                <Text color="white">Priority: High</Text>
                <AccordionIcon color="white" />
              </HStack>
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            maxW="35rem"
            bg="#1f1f1f"
            color="white"
            borderRadius="0rem 0rem 1rem 1rem"
            p="1rem 2rem"
          >
            <HStack>
              <Button colorScheme="whatsapp">Complete</Button>
              <Button colorScheme="red">Delete</Button>
            </HStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
