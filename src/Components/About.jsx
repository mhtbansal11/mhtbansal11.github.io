import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  VStack
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import resume from "../assets/fw19_1154-Mohit-Bansal-Resume.pdf";

const About = () => {
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1fBsuG7Db09sKUTZeuBRl9RvHamPPAGoi/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <div style={{width:"100%", backgroundColor:"#8C8C8C"}} >
      <VStack
        spacing="5"
        maxW={"1000px"}
        m="auto"
        height={{ base: "100%", md: "90vh" }}
        justifyContent="center"
        alignItems="center"
        p="8"
        id="about"
        backgroundColor="#8C8C8C"
        // border={"2px solid white"}
      >
        <Heading p={2} bg="#D6D6D6" w="100%" mb="5%" fontSize="4xl">About me </Heading>
        <Link
          // display={{ base: "none", md: "flex" }}
          target="_blank"
          href={resume}
          download="fw19_1154-Mohit-Bansal-Resume"
          _hover={{ textDecoration: "none" }}
        >
          <Button
            variant="solid"
            leftIcon={<AiOutlineDownload />}
            colorScheme="messenger"
            color="#44444C"
            backgroundColor="#D6D6D6"
            _hover={{ backgroundColor: "#44444C", color: "#D6D6D6" }}
            onClick={() => handleClick()}
          >
            Download Resume
          </Button>
        </Link>
        <Flex
          flexDir={{ base: "column", md: "row" }}
          justifyContent={"center"}
          alignItems={"center"}
          gap={7}
          p={10}
        >
          <Image
            w={{ base: "column", md: "45%" }}
            src="https://camo.githubusercontent.com/4c8d92806e3c2322a2c390ffa0019c1d6f78a4d82108aa6946863ae362a763c8/68747470733a2f2f69322e77702e636f6d2f616c6c68746163636573732e696e666f2f77702d636f6e74656e742f75706c6f6164732f323031382f30332f70726f6772616d6d696e672e6769663f6669743d313238312532433731362673736c3d31"
          />
          <Text textAlign="justify" fontSize={"20px"} >
            A passionate Full-Stack Web Developer, Capable of writing
            Production- Ready Code like Single Page web application. High
            adaptability to learn new technologies quickly and pay attention to
            details. Enthusiastic and hard-working web developer.
          </Text>
        </Flex>
      </VStack>

    </div>
  );
};

export default About;
