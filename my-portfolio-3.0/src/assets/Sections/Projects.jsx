import project2 from "/images/project2.png";
import { useRef } from "react";
import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import TitleHeader from "../Components/TitleHeader/TitleHeader";

function Projects({ side_projects }) {

  //REGISTERING THE SCROLLTRIGGER PLUGIN
  gsap.registerPlugin(ScrollTrigger)
  // REACT USEREF
  const scrollRef = useRef(null)

  useGSAP(()=>{
    const projects = gsap.utils.toArray(scrollRef.current.querySelectorAll(".scroll-in"))

    projects.forEach((project)=>{
      gsap.fromTo(project,{
        y:50,
        opacity:0
      },{
        y:0,
        opacity:1,
        scrollTrigger:{
          trigger : project,
          start : "top 100%",
          end : "bottom 90%",
          scrub : true
        }
      })
    })

  },[])

  return (
    <>
      <TitleHeader title="🚀 Project Overview" header="Crafted with Code"/>
      <div className="project-showcase px-10" ref={scrollRef}>
        {/* FLEX-CONTAINER */}
        <div className="flex flex-col mt-5 md:flex-row lg:flex-row gap-6">
          {/* LEFT SECTION - PROJECT 01*/}
          <div className="flex flex-col gap-6 md:pb-30 lg:pb-30">
            {/* IMAGE-CONTAINER */}
            <div className="flex flex-1">
              <img
                src={project2}
                alt="movie search web app"
                className="rounded-2xl scroll-in"
              />
            </div>
            {/* DESCRIPTION */}
            <div className="project-description scroll-in">
              <p className="text-white my-2 md:text-2xl">CineScope: A React.js and OMDb, TMDB API-powered app for fast, interactive, and mobile-friendly movie exploration.</p>
              <p className="text-gray-500">An app built with React JS and API Intergration for a fast, user-friendly experience.</p>
            </div>
          </div>
          {/* RIGHT SECTION - PROJECT 02 & 03*/}
          <div className="flex flex-col gap-6">
            {/* IMAGE-CONTAINER */}
            {side_projects.map((side_project,index) => {
              return (
                <div key={index}>
                  <img
                    loading="lazy"
                    src={side_project.image}
                    alt= {side_project.alt}
                    className="rounded-2xl scroll-in"
                  />
                  <div className="project-description scroll-in">
                    <p className="text-white my-2">
                      {side_project.title}
                    </p>
                    <p className="text-gray-500">
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
