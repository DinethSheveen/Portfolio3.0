import React from 'react'
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import {gsap} from "gsap"
import {useGSAP} from "@gsap/react"

function Hero({heroWords}) {

    useGSAP(()=>{
        gsap.fromTo(".fade-in",{
            y:100,
            opacity:0
        },{
            y:0,
            opacity:1,
            duration:2,
            stagger:0.5
        }
    )
    },[])
    

  return (
    <div className='text-white mt-32'>
        {/* FLEX-CONTAINER */}
        <div className="flex justify-between items-center px-10">
            {/* LEFT - INTRO */}
            <div className="flex flex-col gap-4 w-md">
                <div>
                    <h1 className='fade-in text-2xl md:text-5xl flex gap-2 items-center'>
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
                    <h1 className='fade-in text-2xl md:text-5xl'>into real Projects</h1>
                </div>
                <div>
                    <h1 className='fade-in text-2xl md:text-5xl'>that Inspire Change</h1>
                </div>

                {/* PARA INTRO */}
                <div>
                    <p className='text-white'>Hi, I'm Dineth. Passionate developer turning ideas into elegant solutions</p>
                </div>

                {/* BUTTON */}
                <div>
                    <button className='bg-gray-100 px-6 py-3 text-black rounded-[10px] hover:bg-gray-300 active:bg-gray-500'><a href="#projects" className='flex items-center gap-2'>See me work <FaRegArrowAltCircleDown className='arrow-animate'/></a></button>
                </div>

            </div>
            {/* RIGHT - 3D MODEL */}
        </div>
    </div>
  )
}

export default Hero