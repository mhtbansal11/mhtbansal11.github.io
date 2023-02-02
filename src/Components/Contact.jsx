import {
    Box,
    Button,
    FormControl,
    Heading,
    HStack,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Stack,
    Text,
    Textarea,
    VStack,
  } from "@chakra-ui/react";
  import { Tooltip } from "@chakra-ui/react";
  import React from "react";
  import { MdMarkEmailUnread } from "react-icons/md";
  import { RiSendPlaneFill } from "react-icons/ri";
  import { BsFillTelephoneInboundFill, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
  import { FaUserTie } from "react-icons/fa";
  
  const Contact = () => {
    return (
        <>
        <VStack maxW={"100%"} m="auto" id="contact" gap="10" bgGradient="radial-gradient(circle at 27.1% 51.8%,#000000  0.5%, #44444C 94.4%)" color="#D6D6D6" pt={7} pb="12%"> 
        <Heading mb="10%">Let's get in touch</Heading>
        <Stack direction={{ base: "column", md: "row" }} justifyContent="space-evenly" alignItems={"center"} w={"100%"}>
          <HStack gap={{ base: "5", md: "10" }} my="4">
            <Tooltip hasArrow label="mhtbansal11@gmail.com" bg="#44444C" aria-label="GmailId">
              <Link href="mailto:mhtbansal11@gmail.com">
                <Icon as={MdMarkEmailUnread} w={"8"} h={"8"} color="#D6D6D6" />
              </Link>
            </Tooltip>
            <Tooltip hasArrow label="+919116443006" bg="#44444C" aria-label="Phone Numbers">
              <Link href="tel:+919116443006">
                <Icon as={BsFillTelephoneInboundFill} w={"8"} h={"8"} color="#D6D6D6" />
              </Link>
            </Tooltip>
            <Tooltip hasArrow label="mhtbansal11" bg="#44444C" aria-label="Phone Numbers">
              <Link href="https://twitter.com/mhtbansal11" target="_blank">
                <Icon as={BsTwitter} w={"8"} h={"8"} color="#D6D6D6" />
              </Link>
            </Tooltip>
            <Tooltip hasArrow label="Mohit Bansal" bg="#44444C" aria-label="Phone Numbers">
              <Link href="https://www.linkedin.com/in/mohit-bansal11/" target="_blank">
                <Icon as={BsLinkedin} w={"8"} h={"8"} color="#D6D6D6" />
              </Link>
            </Tooltip>
            <Tooltip hasArrow label="mhtbansal11" bg="#44444C" aria-label="Phone Numbers">
              <Link href="https://github.com/mhtbansal11" target="_blank">
                <Icon as={BsGithub} w={"8"} h={"8"} color="#D6D6D6" />
              </Link>
            </Tooltip>
          </HStack>
          <Box rounded={"lg"} boxShadow={"lg"} p={6} maxWidth="450px" width={"100%"}>
            <form action="https://formsubmit.co/8c5ff67ed00f933cc4eea399459d905e" method="POST">
              <Stack spacing={4}>

                <InputGroup>
                  <InputLeftElement children={<FaUserTie color="#D6D6D6" />} />
                  <Input type="text" name="name" placeholder="Enter your name" required />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement children={<MdMarkEmailUnread color="#D6D6D6" />} />
                  <Input type="text" name="email" placeholder="Enter email address" required />
                </InputGroup>
                <FormControl isRequired>
                  <Textarea name="message" placeholder="Enter your message....." />
                </FormControl>
                <Stack>
                  <Button
                    type="submit"
                    colorScheme="messenger"
                    _hover={{ bg: "#D6D6D6" , color:"#8C8C8C"}}
                    bg="#8C8C8C"
                    color="#D6D6D6"
                    rightIcon={<RiSendPlaneFill />}
                  >
                    Send Message
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
        
      </VStack>
      <Text bgGradient="radial-gradient(circle at 27.1% 51.8%,#000000  0.5%, #44444C 94.4%)" color="#D6D6D6"  >©Mohit Bansal. All rights reserved.</Text>
        </>
      
      
    );
  };
  
  export default Contact;
  