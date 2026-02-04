import project2 from "/images/project2.png";
import { useRef } from "react";
import gsap from "gsap"
import { TbExternalLink } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
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
      <TitleHeader title="🚀 Project Overview" header="Signature Crafts"/>
      <div className="project-showcase px-10" ref={scrollRef}>
        {/* FLEX-CONTAINER */}
        <div className="flex flex-col mt-5 text-center md:text-left md:flex-row lg:flex-row gap-6">
          {/* LEFT SECTION - PROJECT 01*/}
          <div className="flex flex-col justify-center gap-6 md:pb-30 lg:pb-30">
            {/* IMAGE-CONTAINER */}
            <div className="flex">
              <img
                src={project2}
                alt="movie search web app"
                className="rounded-2xl scroll-in"
              />
            </div>
            {/* DESCRIPTION */}
            <div className="project-description scroll-in">
              <p className="text-white my-2 md:text-2xl">SkillSync-AI :  MERN Stack + Gemini API. (In-Progress)</p>
              <p className="text-gray-500">An AI-powered Resume Builder developed to help users create professional, resumes with the assistance of AI-driven content suggestions and optimizations.</p>

              <div className="links my-2">
                <a href="https://skill-sync-ai-phi.vercel.app/" className="inline-flex items-center text-sm text-gray-900 bg-gray-500 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-gray-900 hover:text-gray-500 mx-2" target="_blank"><TbExternalLink/>Live Link</a>
                <a href="" className="text-sm text-gray-900 bg-gray-500 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-gray-900 hover:text-gray-500">
                      <div className="inline-flex items-center gap-1">
                        Github
                        <FaGithub className="text-lg" />
                      </div>
                    </a>
              </div>
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
                    <p className="text-gray-500 my-2">
                      {side_project.description}
                    </p>
                    <a href={side_project.gitHub} className="text-sm text-gray-900 bg-gray-500 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-gray-900 hover:text-gray-500">
                      <div className="inline-flex items-center gap-1">
                        Github
                        <FaGithub className="text-lg" />
                      </div>
                    </a>
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
