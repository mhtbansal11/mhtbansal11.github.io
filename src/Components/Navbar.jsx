import React from "react";
import "../index.css";
import {
  chakra,
  Box,
  Flex,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  Link,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { AiOutlineDownload } from "react-icons/ai";
import { Link as ReachLink } from "react-scroll";

import resume from "../assets/fw19_1154-Mohit-Bansal-Resume.pdf";
import logo from "../assets/logo.png";

const navItem = [
  { path: "home", name: "Home" },
  { path: "about", name: "About Me" },
  { path: "skills", name: "Skills" },
  { path: "projects", name: "Projects" },
  { path: "contact", name: "Contact" },
];

// const secondryColor = "#2442d7";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1fBsuG7Db09sKUTZeuBRl9RvHamPPAGoi/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <chakra.header
      w="full"
      px={{ base: 2, sm: 4 }}
      py={4}
      shadow="md"
      pos={"sticky"}
      top="0"
      zIndex={10}
      bgGradient="radial-gradient(circle at 0.1% 100.8%, #000000 0.5%, #44444C 94.4%)"
      // bg="#211522"
      color="#D6D6D6"
    >
      <Flex justifyContent="space-between" mx="auto">
        {/* <chakra.a
          // href="/"
          title="Mohit Bansal"
          display="flex"
          alignItems="center"
        > */}
        <Link
          as={ReachLink}
          to="home"
          spy={true}
          smooth={true}
          offset={navItem.path === "skills" ? -180 : -60}
          duration={700}
          display="flex"
          alignItems="center"
        >
          <Image ml={7} w="15vh" src={logo} alt="Mohit Logo" />
        </Link>

        {/* </chakra.a> */}

        <HStack spacing={3} display={{ base: "none", md: "flex" }} gap="6">
          {navItem.map((item, i) => {
            return (
              <Link
                as={ReachLink}
                key={item.path}
                activeClass={"active"}
                to={item.path}
                spy={true}
                smooth={true}
                offset={item.path === "skills" ? -180 : -60}
                duration={700}
                fontSize="18"
                _hover={{
                  color: "#8c8c8c",
                  borderBottom: "3px solid #8c8c8c",
                  paddingBottom: "10px",
                }}
                //  _active={{
                //   color: "#8c8c8c",
                //   borderBottom: "3px solid #8c8c8c",
                //   paddingBottom: "10px",
                // }}
                className={"nav-item active"}
              >
                {item.name}
              </Link>
            );
          })}
        </HStack>
        <Link
          display={{ base: "none", md: "flex" }}
          target="_blank"
          href={resume}
          download="fw19_1154-Mohit-Bansal-Resume"
          _hover={{ textDecoration: "none" }}
        >
          <Button
            variant="solid"
            leftIcon={<AiOutlineDownload />}
            colorScheme="messenger"
            color="#D6D6D6"
            backgroundColor="#8C8C8C"
            _hover={{ backgroundColor: "#D6D6D6", color: "#8C8C8C" }}
            onClick={() => handleClick()}
          >
            Download Resume
          </Button>
        </Link>
        <Box display={{ base: "flex", md: "none" }}>
          <IconButton
            display={{ base: "flex", md: "none" }}
            fontSize="20px"
            colorScheme={"blackAlpha"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={isOpen ? onClose : onOpen}
          />
          <VStack
            pos="absolute"
            left={0}
            right={0}
            top={16}
            display={isOpen ? "flex" : "none"}
            pb="6"
            rounded="sm"
            shadow="sm"
            bgGradient="radial-gradient(circle at 0.1% 100.8%, #000000 0.5%, #44444C 94.4%);"
            // bg="#211522"
            color="#D6D6D6"
          >
            {navItem.map((item) => {
              return (
                <Link
                  fontSize="xl"
                  fontWeight="500"
                  key={item.path}
                  as={ReachLink}
                  activeClass={"active"}
                  to={item.path}
                  spy={true}
                  smooth={true}
                  offset={item.path === "skills" ? -180 : -60}
                  duration={700}
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    color: "#8c8c8c",
                    borderBottom: "3px solid #8c8c8c",
                  }}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              target="_blank"
              href={resume}
              download="fw19_1154-Mohit-Bansal-Resume"
              _hover={{ textDecoration: "none" }}
              onClick={() => handleClick()}
            >
              <Button
                variant="solid"
                leftIcon={<AiOutlineDownload />}
                color="#D6D6D6"
                backgroundColor="#8C8C8C"
                _hover={{ backgroundColor: "#D6D6D6", color: "#8C8C8C" }}
                colorScheme="messenger"
              >
                Download Resume
              </Button>
            </Link>
          </VStack>
        </Box>
      </Flex>
    </chakra.header>
  );
};

export default Navbar;
