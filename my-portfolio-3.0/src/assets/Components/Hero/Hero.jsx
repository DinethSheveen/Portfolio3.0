import React from 'react'
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { LiaLaptopCodeSolid } from "react-icons/lia";

function Hero() {

    const array = [
        {
            word : "ideas"
        },
        {
            word : "projects"
        },
        {
            word : "code"
        }
    ]

  return (
    <div className='text-white border-white border-2 mt-32'>
        {/* FLEX-CONTAINER */}
        <div className="flex justify-between items-center px-10">
            {/* RIGHT - INTRO */}
            <div className="flex flex-col gap-2 w-md border-2 border-amber-300">
                <div>
                    <h1 className='text-2xl md:text-5xl flex gap-4 items-center'>
                        Shaping 
                        <span className='border-2 border-amber-50 overflow-hidden'>
                            <span className='flex items-center gap-2 animate'><LiaLaptopCodeSolid/>{array.map((arr)=>{return(
                                <>{arr.word}</>
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
                    <button className='bg-sky-50 px-6 py-3 text-black rounded-[10px]'><a href="#projects" className='flex items-center gap-2'>See me work <FaRegArrowAltCircleDown className='icon'/></a></button>
                </div>

            </div>
            {/* LEFT - 3D MODEL */}
        </div>
    </div>
  )
}

export default Hero