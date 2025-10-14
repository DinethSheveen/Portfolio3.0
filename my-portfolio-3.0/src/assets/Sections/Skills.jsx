import React from 'react'
import TitleHeader from '../Components/TitleHeader/TitleHeader'
import { useRef } from 'react'
import gsap, { Linear } from "gsap"
import {useGSAP} from "@gsap/react"
import { ScrollTrigger } from 'gsap/all'

function Skills({tech_icons}) {

    gsap.registerPlugin(ScrollTrigger)

    const scrollRef = useRef(null)

    useGSAP(()=>{
        const elements = gsap.utils.toArray(scrollRef.current.querySelectorAll("div"))

        elements.forEach((element)=>{
            gsap.fromTo(element,{
                xPercent:-100,
                opacity:0
            },{
                xPercent : 0,
                opacity:1,
                duration : 1,
                ease : "power1.inOut",
                scrollTrigger : {
                    trigger : element,
                    start:"top 99%",
                    end : "bottom 80%",
                    scrub:true
                }
            })
        })
    },[])

  return (
    <>
        <TitleHeader  title="⚡ What I Bring To The Table ⚡"/>
        {/* Header */}
        <div className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-200 flex justify-center md:text-3xl lg:text-4xl">Contributary Tech-Skills</div>

        {/* SKILL SHOWCASE */}
        <div className="grid grid-cols-1 gap-10 justify-center items-center max-w-[80%] mx-auto m-10 md:grid-cols-2 md:gap-10 lg:grid-cols-4" ref={scrollRef}>
            {tech_icons.map((tech_icon,index)=>{
                return (
                    // CONDITONAL RENDERING THE FEATURED ONLY
                    index<4 &&
                    <div key={index} className='flex bg-gray-900 rounded-full justify-center items-center gap-5 p-3 hover:bg-gray-800 w-full'>
                        <div className={`${tech_icon.color} text-3xl md:text-5xl lg:text-7xl`}>{tech_icon.icon}</div>
                        <div className='text-white'>{tech_icon.skill}</div>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Skills