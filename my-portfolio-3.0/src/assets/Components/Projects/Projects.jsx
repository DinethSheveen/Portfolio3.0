import React, { useRef } from "react";
import project2 from "/images/project2.png";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap"
import {useGSAP} from "@gsap/react"

function Projects({ side_projects }) {

  // REGISTERING THE SCROLLTRIGGER PLUGIN
  gsap.registerPlugin(ScrollTrigger);
  const scrollRef = useRef(null)

  // USING THE SCROLLTRIGGER IN USEGSAP
  useGSAP(()=>{
    const cards = gsap.utils.toArray(scrollRef.current.querySelectorAll("div"))

    cards.forEach((card)=>{
      gsap.fromTo(card,{
        y:40,
        opacity:0
      },{
        y:0,
        opacity:1,
        scrollTrigger : {
          trigger : card,
          start : "top bottom",
          end : "top 30%",
          scrub:true
        }
      }
    )
    })
  },[])

  return (
    <>
      <div className="project-showcase py-20" ref={scrollRef}>
        {/* FLEX-CONTAINER */}
        <div className="flex flex-col gap-4 flex-1 max-h-screen px-10 lg:flex-row lg:justify-center lg:gap-10">
          {/* LEFT SECTION - PROJECT 01*/}
          <div className="flex flex-col gap-2 w-full lg:w-[60%]">
            {/* IMAGE-CONTAINER */}
            <div className="flex flex-1 h-[2rem]">
              <img
                src={project2}
                alt="movie search web app"
                className="rounded-2xl"
              />
            </div>
            {/* DESCRIPTION */}
            <div className="project-description">
              <p className="text-white text-3xl py-7 lg:text-2xl lg:py-4">CineScope: A React.js and OMDb, TMDB API-powered app for fast, interactive, and mobile-friendly movie exploration.</p>
              <p className="text-[20px] text-gray-300 py-7 lg:text-[15px] lg:py-0">An app built with React JS and API Intergration for a fast, user-friendly experience.</p>
            </div>
          </div>
          {/* RIGHT SECTION - PROJECT 02 & 03*/}
          <div className="flex flex-col gap-6 lg:w-[30%] justify-between">
            {/* IMAGE-CONTAINER */}
            {side_projects.map((side_project,index) => {
              return (
                <div key={index}>
                  <img
                    src={side_project.image}
                    alt= {side_project.alt}
                    className="rounded-2xl"
                  />
                  <div className="project-description">
                    <p className="text-white text-3xl py-7 lg:text-2xl lg:py-4">
                      {side_project.title}
                    </p>
                    <p className="text-[20px] text-gray-300 py-7 lg:text-[15px] lg:py-0">
                      {side_project.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
