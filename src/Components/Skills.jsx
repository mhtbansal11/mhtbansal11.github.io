import { Heading, HStack, Image, VStack } from "@chakra-ui/react";
import React from "react";
 import {skillsdata} from "./skilldata.js"


const Skills = () => {
  console.log(skillsdata)
  let skills = skillsdata.map((item) => {
    return (
      <VStack
        key={item.name}
        shadow={"md"}
        py="6"
        px="3"
        width="120px"
        height={"120px"}
        justifyContent="center"
        
        boxShadow="0px 5px 10px 0px rgba(0, 0, 0, 0.5)"
        rounded={"lg"}
        _hover={{
        //   transform: "translateY(-5px)",
            // transform:"scale(1.4)",
            transform:"rotate(360deg) scale(1.5)",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, #44444C 0px -12px 30px, #44444C 0px 4px 6px,#44444C 0px 12px 13px, #44444C 0px -3px 5px",
        //   transform: "-rotate(360deg)",
            transitionDuration : "3s"
        }}
        bg="#D6D6D6"
        color="black"
        id="skills"
        
      >
        <Image src={item.icon} size={"xl"} height="80%" />
        <Heading size={"sm"}>{item.name}</Heading>
      </VStack>
    );
  });

  return (
    <VStack
      p="8"
      height={{ base: "100%", md: "90vh" }}
      alignItems={"center"}
      bgGradient="radial-gradient(circle at 27.1% 51.8%,#000000  0.5%, #44444C 94.4%);"
      color="#D6D6D6"
    >
      <Heading my={6}>My Tools & Skills </Heading>
      <HStack flexWrap={"wrap"} gap="3" maxW={"850px"} justifyContent="center">
        {skills}
      </HStack>
    </VStack>
  );
};

export default Skills;
