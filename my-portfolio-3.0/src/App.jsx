import React from 'react'
import "./App.css"
import Navbar from './assets/Components/Navbar/Navbar'
import Hero from "./assets/Components/Hero/Hero"
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { RiAlignItemBottomFill } from "react-icons/ri";
import { RiCompassDiscoverLine } from "react-icons/ri";
import Experience from './assets/Components/Experience/Experience';

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

  return (
    <>
    <Navbar/>
    <Hero heroWords={heroWords}/>
    <Experience expContents={expContents}/>
    </>
  )
}

export default App