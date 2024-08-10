import { PhoneIcon, UnlockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Flex, Grid, GridItem, Icon, Text } from "@chakra-ui/react";
import React from "react";

const footer = () => {
  return (
    <>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
        ms="20%"
        me="20%"
        mt="15px"
        justifyItems="center"
        gap={6}
      >
        <GridItem w="100%" h="10">
          {" "}
          <Flex alignItems="center">
            <ViewIcon boxSize={6} color="#6B46C1" />{" "}
            <Text ms="13px">Lorem ipsum dolor sit amet, consectetur </Text>
          </Flex>{" "}
        </GridItem>
        <GridItem w="100%" h="10">
          {" "}
          <Flex alignItems="center">
            <ViewOffIcon boxSize={6} color="#6B46C1" />{" "}
            <Text ms="13px">Lorem ipsum dolor sit amet, consectetur </Text>
          </Flex>{" "}
        </GridItem>
        <GridItem w="100%" h="10">
          <Flex alignItems="center">
            {" "}
            <UnlockIcon boxSize={6} color="#6B46C1" />{" "}
            <Text ms="13px">Lorem ipsum dolor sit amet, consectetur </Text>
          </Flex>{" "}
        </GridItem>
      </Grid>
    </>
  );
};

export default footer;
