import React from 'react'
import project2 from "../../images/project2.png"

function Projects({side_projects}) {
  return (
    <>
        <div className="project-showcase py-20">
            {/* FLEX-CONTAINER */}
            <div className="flex flex-col gap-4 flex-1 max-h-screen px-10 lg:flex-row lg:justify-center lg:gap-10">
                {/* LEFT SECTION - PROJECT 01*/}
                <div className='flex flex-col gap-2 w-full lg:w-[60%]'>
                    {/* IMAGE-CONTAINER */}
                    <div className='flex flex-1 h-[2rem]'>
                      <img src={project2} alt="movie search web app" className='rounded-2xl'/>
                    </div>
                    {/* DESCRIPTION */}
                    <div className="project-description">
                      <p className="text-white text-3xl py-7 lg:text-2xl lg:py-4"></p>
                      <p className="text-[20px] text-gray-300 py-7 lg:text-[15px] lg:py-0"></p>
                    </div>
                </div>
                {/* RIGHT SECTION - PROJECT 02 & 03*/}
                <div className="flex flex-col gap-6 lg:w-[30%] justify-between">
                  {/* IMAGE-CONTAINER */}
                  {side_projects.map((side_project)=>{
                    return (
                      <div>
                        <img src={project2} alt="e-commerce web app" className='rounded-2xl'/>
                        <div className="project-description">
                          <p className="text-white text-3xl py-7 lg:text-2xl lg:py-4">{side_project.description1}</p>
                          <p className="text-[20px] text-gray-300 py-7 lg:text-[15px] lg:py-0">{side_project.description2}</p>
                        </div>
                      </div>
                    )
                  })}
                  {/* IMAGE-CONTAINER */}
                  {/* <div>
                    <img src={project2} alt="e-commerce web app" className='rounded-2xl'/>
                    <div className="project-description">
                      <p className="text-white text-3xl py-7 lg:text-2xl lg:py-4">On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde</p>
                      <p className="text-[20px] text-gray-300 py-7 lg:text-[15px] lg:py-0">An app built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience.</p>
                    </div>
                  </div> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default Projects