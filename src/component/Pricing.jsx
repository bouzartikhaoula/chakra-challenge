import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import React from "react";

const Pricing = () => {
  return (
    <>
      <Flex>
        <Box>
          <Text fontSize="24" fontWeight="800">
            Premium PRO
          </Text>
          <Heading as="h3" fontSize="60px" mt="px">
            $329
          </Heading>
          <Text
            color="#171923"
            fontSize="18"
            fontWeight="500"
            m="auto"
            mt="8px"
          >
            billed just once
          </Text>
          <Button colorScheme="purple" size="lg" w="282px" m="auto" mt="8px">
            Get Started
          </Button>
        </Box>
        <Box>
          <Text> Access Thes features when you get this Pricing </Text>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
          </List>
        </Box>
      </Flex>
    </>
  );
};

export default Pricing;
