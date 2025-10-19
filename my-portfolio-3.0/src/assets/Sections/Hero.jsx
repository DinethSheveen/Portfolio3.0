import React from 'react'
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import {gsap} from "gsap"
import {useGSAP} from "@gsap/react"
import Hero3D from '../Components/3D-Models/HeroSection/Hero3D';
import { FaFileDownload } from "react-icons/fa";

import cv from "../../../public/Resume/Dineth_Fernando_CV.pdf"

function Hero({heroWords}) {

    useGSAP(()=>{
        gsap.fromTo(".fade-in",{
            y:100,
            opacity:0
        },{
            y:0,
            opacity:1,
            duration:1,
            stagger:0.2
        }
    )
    },[])
    

  return (
    <div className='text-white mt-32'>
        {/* FLEX-CONTAINER */}
        <div className="flex flex-col gap-10 justify-between items-center px-10 lg:flex-row xl:flex-row lg:gap-4 xl:gap-6">
            {/* LEFT - INTRO */}
            <div className="flex flex-col gap-4 lg:w-[40%]">
                <div>
                    <h1 className='fade-in text-2xl flex gap-2 items-center md:text-4xl xl:text-5xl'>
                        Shaping 
                        <span className='overflow-hidden'>
                            <span className='flex flex-col gap-12 justify-center items-center h-10 md:h-12 slider-animate'>{heroWords.map((heroWord,index)=>{return(
                                <span className="flex items-center gap-2 text-gray-400" key={index}>
                                    {heroWord.icon}
                                    {heroWord.word}
                                </span>
                            )})}
                            </span>
                        </span>
                    </h1>
                </div>
                <div>
                    <h1 className='fade-in text-2xl md:text-4xl xl:text-5xl'>into real Projects</h1>
                </div>
                <div>
                    <h1 className='fade-in text-2xl md:text-4xl xl:text-5xl'>that Inspire Change</h1>
                </div>

                {/* PARA INTRO */}
                <div>
                    <p className='fade-in text-white'>Hi, I'm Dineth Fernando. A passionate developer turning ideas into elegant solutions</p>
                </div>

                {/* BUTTON */}
                <div className='fade-in flex flex-col-reverse gap-5 justify-start items-start md:flex-row md:items-center'>
                    <a href="#projects" className='flex items-center gap-2 bg-gray-100 px-6 py-3 text-black rounded-[10px] hover:bg-gray-300 active:bg-gray-500'>See me work <FaRegArrowAltCircleDown className='arrow-animate'/></a>
                    <a href={cv} download={true} className='flex items-center gap-2 bg-gray-700 hover:bg-gray-800 active:bg-gray-900 px-6 py-3 rounded-[10px]'>Resume <FaFileDownload/></a>
                </div>

            </div>
            {/* RIGHT - 3D MODEL */}
            <div className="w-full h-[300px] lg:w-[70%] xl:w-[70%] md:h-[500px] lg:h-[500px] xl:h-[500px] overflow-x-hidden fade-in">
                <Hero3D/>
            </div>  
        </div>
    </div>
  )
}

export default Hero