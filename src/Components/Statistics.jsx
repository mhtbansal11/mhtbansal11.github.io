import { Heading, Image, VStack } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";


const Statistics = () => {
  return (
    <div  style={{backgroundColor:"#D6D6D6", width:"100%"}}>
    <VStack maxW="1000px"  m="auto" id="projects" p="4" gap={"6"} bg="#D6D6D6" pt="3%">
      <Heading bg="#44444C" p={2} color="#D6D6D6" w="100%" mt={{ base: "16", md: "0" }}>Statistics</Heading>
      <Image 
        src=
          "https://github-readme-stats.vercel.app/api/top-langs?username=mhtbansal11&theme=panda&show_icons=true&locale=en&layout=compact"
        
      />
      <Image
        src=
          "https://github-readme-stats.vercel.app/api?username=mhtbansal11&show_icons=true&locale=en&theme=panda"
        
      />
      {/* <Image
        src=
          "https://github-readme-streak-stats.herokuapp.com/?user=mhtbansal11&theme=onedark"
        
      /> */}
      
      <GitHubCalendar username="mhtbansal11" responsive={true} />
    </VStack>
    </div>
    
  );
};

export default Statistics;


/*
<p><img align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=mhtbansal11&show_icons=true&locale=en&layout=compact" alt="mhtbansal11" /></p>

<p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=mhtbansal11&show_icons=true&locale=en" alt="mhtbansal11" /></p>

<p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=mhtbansal11&" alt="mhtbansal11" /></p>



[![Github activity graph](https://github-readme-activity-graph.cyclic.app/graph?username=mhtbansal11&theme=rogue)](https://github.com/mhtbansal11/github-readme-activity-graph)


*/