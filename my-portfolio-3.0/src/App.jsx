import React from 'react'
import "./App.css"
import Navbar from './assets/Components/Navbar/Navbar'
import Hero from "./assets/Components/Hero/Hero"
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { RiAlignItemBottomFill } from "react-icons/ri";
import { RiCompassDiscoverLine } from "react-icons/ri";
import Experience from './assets/Components/Experience/Experience';
import Projects from './assets/Components/Projects/Projects';

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
        title : "A modern and responsive e-commerce web application.",
        description : "A seamless online-store built with React and Css", 
      }
  ]

  return (
    <>
    <Navbar/>
    <Hero heroWords={heroWords}/>
    <Experience expContents={expContents}/>
    <Projects side_projects={side_projects}/>
    </>
  )
}

export default App