import React from 'react'
import "./App.css"
import Navbar from './assets/Components/Navbar/Navbar'
import Hero from "./assets/Components/Hero/Hero"
import Projects from './assets/Components/Projects/Projects';

import Experience from './assets/Components/Experience/Experience';
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { RiAlignItemBottomFill } from "react-icons/ri";
import { RiCompassDiscoverLine } from "react-icons/ri";

import TechAnimation from './assets/Components/TechAnimation/TechAnimation';
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import Featured from './assets/Components/Featured/Featured';

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
      {icon : <FaJs/>, stack : "js" , backgroundColor:"bg-white", color : "text-amber-400"},
      {icon : <FaReact/>, stack : "react" , backgroundColor:"bg-gray-800", color : "text-sky-300"},
      {icon : <RiTailwindCssFill/>, stack : "tailwind" , backgroundColor:"bg-white", color : "text-blue-400"},
      {icon : <SiMysql/>, stack : "sql" , backgroundColor:"bg-gray-800", color : "text-blue-300"},
      {icon : <FaNodeJs/>, stack : "nodejs" , backgroundColor:"bg-white", color : "text-green-600"},
      {icon : <FaGithub/>, stack : "github" , backgroundColor:"bg-gray-800", color : ""},
      {icon : <FaGitAlt/>, stack : "git" , backgroundColor:"bg-white", color : "text-orange-500"}
    ]

    // FEATURED SECTION
    const featured_details = [
      {icon : "/icons/podium_icon.svg",title:"Excellence Driven",message:"Committed to producing outstanding results with precision and care."},
      {icon : "/icons/message_icon.svg",title:"Clarity First",message:"Sharing timely updates to keep everything aligned and transparent."},
      {icon : "/icons/clock_icon.svg",title:"Deadline-Driven Results",message:"Completing tasks efficiently with accuracy and attention to detail."}
    ]

  return (
    <>
    <Navbar/>
    <Hero heroWords={heroWords}/>
    <Experience expContents={expContents}/>
    <Projects side_projects={side_projects}/>
    <TechAnimation tech_icons={tech_icons}/>
    <Featured featured_details={featured_details}/>
    </>
  )
}

export default App