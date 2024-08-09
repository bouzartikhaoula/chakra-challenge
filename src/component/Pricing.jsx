import { CalendarIcon, CheckIcon } from "@chakra-ui/icons";
import { Box, Heading, List, ListIcon, Text, Button, Flex, HStack, Icon, ListItem, Center, Stack } from "@chakra-ui/react";
import {

  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import React from "react";


const Pricing = () => {
  return (
    <Box  w="60%" m="auto"  mt="-150px" >
      <Flex   bg='white' rounded='md'>
        <Box textAlign='center'  p="15px" bg='#F0EAFB' rounded='md' >
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
        <Box m="15px">
          <Text noOfLines={2}> Access Thes features when you get this Pricing  you get this Pricing</Text>
          <List  mt="20px "spacing={3}>
            <ListItem>
              <ListIcon as={CheckIcon} color="#6B46C1" rounded='md' bg={"white"} />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
            <ListItem>
              <ListIcon  as={CheckIcon} color="#6B46C1" rounded='md' bg={"white"} />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="#6B46C1" rounded='md' bg={"white"} />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="#6B46C1" rounded='md' bg={"white"} />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
          </List>
        </Box>
      </Flex>
    </Box>
  );
};

export default Pricing;
