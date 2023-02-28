import { Flex, Heading, VStack, Image, Icon,Link, Stack } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsFillTelephoneInboundFill, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import React from "react";
import Typewriter from "typewriter-effect";
import profilePic from "../assets/profile pic.png";

const Home = () => {



  return (
    <>
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="flex-end"
      gap="5%"
      minH={"90vh"}
      bgGradient="radial-gradient(circle at 24.1% 51.8%,#000000  0.5%, #44444C 100.4%);"
      // bg="black"
      color="#D6D6D6"
      id="home"
      p={"10%"}
    >
      <Image  _hover={{transform:"scale(1.1)",transitionDuration : "1s"}} w="2xs" border="2px solid #D6D6D6"  borderRadius='full' src={profilePic} alt="profile Image" />
      <VStack alignItems={"center"} spacing="5" w={{ base: "70%", md: "60%" }} mt={4}>
        <Heading>Hey!👋</Heading>
        <Heading>I am Mohit Bansal</Heading>
        <Heading pb={6} fontSize="2xl">
          <Typewriter
            options={{
              strings: ["Full Stack Web Developer.", "Writing clean & simple code."],
              autoStart: true,
              loop: true,
              delay: 80,
              deleteSpeed: 50,
            }}
          />
        </Heading>
      </VStack>
      <Stack direction={['row', 'column']} gap={{ base: "5", md: "10" }} >
            <Tooltip hasArrow label="mhtbansal11@gmail.com" bg="#44444C" aria-label="GmailId">
              <Link href="mailto:mhtbansal11@gmail.com">
                <Icon as={MdMarkEmailUnread} w={"8"} h={"8"} color="#8C8C8C" _hover={{transform:"scale(1.5)",transitionDuration : "1s"}} />
              </Link>
            </Tooltip>
            <Tooltip hasArrow label="+919116443006" bg="#44444C" aria-label="Phone Numbers">
              <Link href="tel:+919116443006">
                <Icon as={BsFillTelephoneInboundFill} w={"8"} h={"8"} color="#8C8C8C"  _hover={{transform:"scale(1.5)",transitionDuration : "1s"}}/>
              </Link>
            </Tooltip>
            <Tooltip hasArrow label="mhtbansal11" bg="#44444C" aria-label="Phone Numbers">
              <Link href="https://twitter.com/mhtbansal11" target="_blank">
                <Icon as={BsTwitter} w={"8"} h={"8"} color="#8C8C8C" _hover={{transform:"scale(1.5)",transitionDuration : "1s"}} />
              </Link>
            </Tooltip>
            <Tooltip hasArrow label="Mohit Bansal" bg="#44444C" aria-label="Phone Numbers">
              <Link href="https://www.linkedin.com/in/mohit-bansal11/" target="_blank">
                <Icon as={BsLinkedin} w={"8"} h={"8"} color="#8C8C8C" _hover={{transform:"scale(1.5)",transitionDuration : "1s"}} />
              </Link>
            </Tooltip>
            <Tooltip hasArrow label="mhtbansal11" bg="#44444C" aria-label="Phone Numbers">
              <Link href="https://github.com/mhtbansal11" target="_blank">
                <Icon as={BsGithub} w={"8"} h={"8"} color="#8C8C8C" _hover={{transform:"scale(1.5)",transitionDuration : "1s"}} />
              </Link>
            </Tooltip>
          </Stack>
    </Flex>
    
    </>
    
  );
};

export default Home;
