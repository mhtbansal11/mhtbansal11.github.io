import { Heading, VStack } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "./projectData";


const Projects = () => {
  return (
    <div style={{backgroundColor:"#8C8C8C"}}>
    <VStack maxW="1000px" m="auto" id="projects" p="4" gap={"6"} bg="#8C8C8C" pb="5%" pt="4%">
      <Heading p={2} bg="#D6D6D6" mb={4} w="100%" mt={{ base: "16", md: "0" }}>My Projects</Heading>
      {projectsData.map((project) => {
        return <ProjectCard  key={project.id} {...project} />;
      })}
    </VStack>
    </div>
    
  );
};

export default Projects;
