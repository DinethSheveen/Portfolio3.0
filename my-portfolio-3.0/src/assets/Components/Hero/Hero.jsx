import React from 'react'
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { RiAlignItemBottomFill } from "react-icons/ri";
import { RiCompassDiscoverLine } from "react-icons/ri";

function Hero() {

    const array = [
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
            word : "code",
            icon : <LiaLaptopCodeSolid/>
        },
    ]

  return (
    <div className='text-white mt-32'>
        {/* FLEX-CONTAINER */}
        <div className="flex justify-between items-center px-10">
            {/* RIGHT - INTRO */}
            <div className="flex flex-col gap-4 w-md">
                <div>
                    <h1 className='text-2xl md:text-5xl flex gap-2 items-center'>
                        Shaping 
                        <span className='overflow-hidden'>
                            <span className='flex flex-col gap-12 justify-center items-center h-10 md:h-12 slider-animate'>{array.map((arr)=>{return(
                                <span className="flex items-center gap-2">
                                    {arr.icon}
                                    {arr.word}
                                </span>
                            )})}
                            </span>
                        </span>
                    </h1>
                </div>
                <div>
                    <h1 className='text-2xl md:text-5xl'>into real Projects</h1>
                </div>
                <div>
                    <h1 className='text-2xl md:text-5xl'>that Deliver Results</h1>
                </div>

                {/* PARA INTRO */}
                <div>
                    <p className='text-white'>Hi, I'm Dineth. Passionate developer turning ideas into elegant solutions</p>
                </div>

                {/* BUTTON */}
                <div>
                    <button className='bg-sky-50 px-6 py-3 text-black rounded-[10px] hover:bg-sky-100 active:bg-sky-200'><a href="#projects" className='flex items-center gap-2'>See me work <FaRegArrowAltCircleDown className='arrow-animate'/></a></button>
                </div>

            </div>
            {/* LEFT - 3D MODEL */}
        </div>
    </div>
  )
}

export default Hero