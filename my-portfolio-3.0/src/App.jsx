import React from 'react'
import "./App.css"
import Navbar from './assets/Sections/Navbar'
import Hero from "./assets/Sections/Hero"
import Experience from './assets/Sections/Experience';
import Projects from './assets/Sections/Projects';
import TechAnimation from './assets/Sections/TechAnimation';
import Featured from './assets/Sections/Featured';
import Skills from './assets/Sections/Skills';
import Contact from './assets/Sections/Contact';
import Footer from './assets/Sections/Footer';

import { LiaLaptopCodeSolid } from "react-icons/lia";
import { RiAlignItemBottomFill } from "react-icons/ri";
import { RiCompassDiscoverLine } from "react-icons/ri";

import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import Qualifications from './assets/Sections/Qualifications';


function App() {

  // ANIMATION WORDS AND ICONS FOR THE HERO SECTION
  const heroWords = [
    {
        word : "ideas",
        icon : <RiCompassDiscoverLine/>
    },
    {
        word : "products",
        icon : <RiAlignItemBottomFill/>
    },
    {
        word : "code",
        icon : <LiaLaptopCodeSolid/>
    },
            {
        word : "concepts",
        icon : <RiCompassDiscoverLine/>
    },
    {
        word : "designs",
        icon : <RiAlignItemBottomFill/>
    },
    {
        word : "visions",
        icon : <LiaLaptopCodeSolid/>
    },
  ]

  //NUMBERS AND WORDS FOR THE EXPERIENCE SHOWCASE
  const expContents = [
    {
      number : 2,
      wording : "Years of Experience"
    },
    {
      number : 8,
      wording : "Developer Toolkits"
    },
    {
      number : 20,
      wording : "Completed Projects"
    },
    {
      number : 1000,
      wording : "Git Commits"
    }
  ]

  // SIDE PROJECTS OF THE PROJECT SECTION
  const side_projects = [
    {
      image : "/images/project2.png",
      alt: "gsap-landing-page",
      title : "A visually appealing page built with React JS, TailwindCSS, and GSAP for a fluid user experience.",
      description : "A 3d Landing page powered with GSAP, React JS and TailwindCSS ", 
    },
    {
      image : "/images/project3.png",
      alt : "e-commerce web app",
      title : "E-Commerce Web App built with the use of React JS, CSS",
      description : "A seamless, user-friendly online-store ", 
    }
  ]

  // TECH ICONS TO THE TECH MARQUEE
    const tech_icons = [
      {icon : <RiTailwindCssFill/>, stack : "tailwind" , backgroundColor:"bg-white", color : "text-blue-400",skill:"Responsive Design"},
      {icon : <FaReact/>, stack : "react" , backgroundColor:"bg-gray-800", color : "text-sky-300", skill:"React Development"},
      {icon : <FaGitAlt/>, stack : "git" , backgroundColor:"bg-white", color : "text-orange-500",skill:"Project Management"},
      {icon : <FaNodeJs/>, stack : "nodejs" , backgroundColor:"bg-gray-800", color : "text-green-600",skill:"Backend Devlepment"},
      {icon : <FaJs/>, stack : "js" , backgroundColor:"bg-white", color : "text-amber-400"},
      {icon : <FaGithub/>, stack : "github" , backgroundColor:"bg-gray-800", color : ""},
      {icon : <SiMysql/>, stack : "sql" , backgroundColor:"bg-white", color : "text-blue-300"}
    ]

    // FEATURED SECTION
    const featured_details = [
      {icon : "/icons/podium_icon.svg",title:"Excellence Driven",message:"Committed to producing outstanding results with precision and care."},
      {icon : "/icons/message_icon.svg",title:"Clarity First",message:"Sharing timely updates to keep everything aligned and transparent."},
      {icon : "/icons/clock_icon.svg",title:"Deadline-Driven Results",message:"Completing tasks efficiently with accuracy and attention to detail."}
    ]

    // EDUCATION SECTION
    const education_details = [
      {
        name : "Leeds International School",year:"2010 - 2021",study_type:"Ordinary Level Examinations",results:"9A's",textColor:"text-purple-500",country:"Colombo-LK"
      },
      {
        name:"Informatics Institute of Technology",year:"2021 - 2022",study_type:"Foundation Certificate for Higher Education",results:"Distinction Pass",textColor:"text-red-500",country:"Colombo-LK"
      },
      {
        name:"University of Westminster",year:"2023 - Present",study_type:"BEng Software Engineering",results:"... To be graudated in 2027",textColor:"text-amber-500",country:"London-UK"  
      }
    ]

  return (
    <>
    <Navbar/>
    <Hero heroWords={heroWords}/>
    <Experience expContents={expContents}/>
    <Projects side_projects={side_projects}/>
    <TechAnimation tech_icons={tech_icons}/>
    <Featured featured_details={featured_details}/>
    <Skills tech_icons={tech_icons}/>
    <Qualifications education_details={education_details}/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App