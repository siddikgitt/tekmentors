import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Flex
        backgroundColor={"white"}
        position={"fixed"}
        top={0}
        zIndex={1}
        w={"100%"}
        padding={2.5}
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Box>
          <Heading color={"crimson"}>Tekmentors</Heading>
        </Box>
        <Flex w="50%" justifyContent={"space-around"} alignItems="center">
          <Text
            color={"crimson"}
            fontWeight={"bold"}
            fontSize={"1.25rem"}
            cursor={"pointer"}
            onClick={() => navigate("/problem1")}
          >
            P1
          </Text>
          <Text
            color={"crimson"}
            fontWeight={"bold"}
            fontSize={"1.25rem"}
            cursor={"pointer"}
            onClick={() => navigate("/problem2")}
          >
            P2
          </Text>
        </Flex>
      </Flex>
    </div>
  );
};

export default Navbar;
