// import logo from "../assets/logo.png";

import cartofMach from "../ProjectsSnaps/Machine_Tools/cart.png";
import checkoutofMach from "../ProjectsSnaps/Machine_Tools/checkout.png";
import homeofMach from "../ProjectsSnaps/Machine_Tools/home.png";
import productofMach from "../ProjectsSnaps/Machine_Tools/product.png";
import signInofMach from  "../ProjectsSnaps/Machine_Tools/signIn.png";
import signUpofMach from "../ProjectsSnaps/Machine_Tools/signUp.png"

import home1ofZee from "../ProjectsSnaps/Zee5_HiFi/home1.png";
import home2ofZee from "../ProjectsSnaps/Zee5_HiFi/home2.png";
import home3ofZee from "../ProjectsSnaps/Zee5_HiFi/home3.png";
import home4ofZee from "../ProjectsSnaps/Zee5_HiFi/home4.png";
import home5ofZee from "../ProjectsSnaps/Zee5_HiFi/home5.png";
import home6ofZee from "../ProjectsSnaps/Zee5_HiFi/home6.png";
import loginofZee from "../ProjectsSnaps/Zee5_HiFi/login.png";
import signupofZee from "../ProjectsSnaps/Zee5_HiFi/signup.png";

import home1ofMenti from "../ProjectsSnaps/Mentimeter/home1.png";
import presentationofMenti from "../ProjectsSnaps/Mentimeter/presentation.png";
import pricingofMenti from "../ProjectsSnaps/Mentimeter/pricing.png";
import qnaofMenti from "../ProjectsSnaps/Mentimeter/qna.png";
import qna2ofMenti from "../ProjectsSnaps/Mentimeter/qna2.png";
import qna3ofMenti from "../ProjectsSnaps/Mentimeter/qna3.png";
import qna4ofMenti from "../ProjectsSnaps/Mentimeter/qna4.png";
import templateofMenti from "../ProjectsSnaps/Mentimeter/template1.png";

import home1ofCoshe from "../ProjectsSnaps/CoSchedule/home1.png";
import home2ofCoshe from "../ProjectsSnaps/CoSchedule/home2.png";
import home3ofCoshe from "../ProjectsSnaps/CoSchedule/home3.png";
import marketing1ofCoshe from "../ProjectsSnaps/CoSchedule/marketing1.png";
import marketing2ofCoshe from "../ProjectsSnaps/CoSchedule/marketing2.png";
import marketing3ofCoshe from "../ProjectsSnaps/CoSchedule/marketing3.png";
import pricingofCoshe from "../ProjectsSnaps/CoSchedule/pricing.png";
import stories1ofCoshe from "../ProjectsSnaps/CoSchedule/stories1.png";
import stories2ofCoshe from "../ProjectsSnaps/CoSchedule/stories2.png";

const projectsData = [
  { 
    id:1,
    title: "Machine&Tools",
    description: "We are one-of-its-kind online platform, featuring an exclusive range of utility products for all industrial purposes.",
    techStack: ["ReactJs", "HTML", "JavaScript", "CSS", "Chakra UI", "React-Redux", "Rest API"],
    deployedURL: "https://machine-and-tools.netlify.app",
    githubURL: "https://github.com/mhtbansal11/Steady-pancake-873",
    images: [
      cartofMach,homeofMach,checkoutofMach,productofMach,signInofMach,signUpofMach
    ],
  },
  {
    id:2,
    title: "Zee5 Hi-Fi",
    description: "It is India's own OTT platform for streaming movies and TV series in 12+ languages",
    techStack: ["ReactJs", "HTML", "JavaScript", "CSS", "Chakra UI"],
    deployedURL: "https://zee5hifi.netlify.app",
    githubURL: "https://github.com/mhtbansal11/Zee5-HiFi",
    images: [
      home1ofZee,home2ofZee,home3ofZee,home4ofZee,home5ofZee, home6ofZee, loginofZee,signupofZee
    ],
  },
  {
    id:3,
    title: "Mentimeter",
    description: "Mentimeter helps build interactive presentation with its online editor. Mentimeter is a great tool for student and working professionals.",
    techStack: ["HTML", "JavaScript", "CSS"],
    deployedURL: "https://luxury-gnome-1827a2.netlify.app/",
    githubURL: "https://github.com/mhtbansal11/Mentimeter-clone",
    images: [
      home1ofMenti, presentationofMenti, pricingofMenti, qnaofMenti, qna2ofMenti, qna3ofMenti, qna4ofMenti, templateofMenti
    ],
  },
  {
    id:4,
    title: "Co-Schedule",
    description: "This basically provides calendar to marketers, to plan, execute, and manage their marketing projects. ",
    techStack: ["HTML", "JavaScript", "CSS"],
    deployedURL: "https://coschedule-avinash.netlify.app/",
    githubURL: "https://github.com/mhtbansal11/Co-Schedule-Clone",
    images: [
      home1ofCoshe,home2ofCoshe,home3ofCoshe,marketing1ofCoshe,marketing2ofCoshe, marketing3ofCoshe,pricingofCoshe,stories1ofCoshe, stories2ofCoshe
    ],
  },
];

export default projectsData;
