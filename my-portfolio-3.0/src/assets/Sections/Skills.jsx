import React from 'react'
import TitleHeader from '../Components/TitleHeader/TitleHeader'

function Skills({tech_icons}) {
  return (
    <>
        <TitleHeader  title="⚡ What I Bring To The Table ⚡"/>
        {/* Header */}
        <div id="skills" className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-200 flex justify-center md:text-3xl lg:text-4xl">Contributary Tech-Skills</div>

        {/* SKILL SHOWCASE */}
        <div className="grid grid-cols-1 gap-10 justify-center items-center max-w-[70%] mx-auto m-10 md:grid-cols-2 md:gap-10 lg:grid-cols-2">
            {tech_icons.map((tech_icon,index)=>{
                return (
                    // CONDITONAL RENDERING THE FEATURED ONLY
                    index<4?
                    <div className='flex bg-gray-800 rounded-full justify-center items-center gap-5 p-3'>
                        <div className={`${tech_icon.color} text-5xl md:text-7xl lg:text-9xl`}>{tech_icon.icon}</div>
                        <div className='text-white'>{tech_icon.skill}</div>
                    </div>:
                    ""
                )
            })}
        </div>
    </>
  )
}

export default Skills