import React from 'react'
import "./App.css"
import Navbar from './assets/Components/Navbar/Navbar'
import Hero from "./assets/Components/Hero/Hero"
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { RiAlignItemBottomFill } from "react-icons/ri";
import { RiCompassDiscoverLine } from "react-icons/ri";
import Experience from './assets/Components/Experience/Experience';

function App() {

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

  return (
    <>
    <Navbar/>
    <Hero heroWords={heroWords}/>
    <Experience/>
    </>
  )
}

export default App