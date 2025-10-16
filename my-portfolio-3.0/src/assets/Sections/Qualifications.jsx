import React, { useRef } from 'react'
import TitleHeader from '../Components/TitleHeader/TitleHeader'
import codingMan from "/images/coding.gif"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


function Qualifications({education_details}) {

  gsap.registerPlugin(ScrollTrigger)
  const scrollRef = useRef(null)

  useGSAP(()=>{

    const elements = gsap.utils.toArray(scrollRef.current.querySelectorAll(".education-card"))

    elements.forEach((element)=>{
      gsap.fromTo(element,
      {
        opacity : 0,
        yPercent : 50
      },
      {
        opacity : 1,
        yPercent : 0,
        scrollTrigger : {
          trigger : element,
          start : "top 99%",
          end : "bottom 90%",
          scrub: true
        }
      })
    })

    gsap.fromTo(".timeline-animation",{
      scaleY : 0
    },{
      scaleY:1,
      ease : "back.inOut",
      duration:1,
      scrollTrigger : {
        trigger : ".timeline",
        start :"top 95%",
        end : "bottom bottom",
        scrub : true,
      }
    })
  },[])

  return (
    <>
        <TitleHeader title="🛠️ Education Overview ⚙️" header="Academic Milestones"/>

        {/* TIMELINE */}
        <div className="timeline my-10">
          
          <div ref={scrollRef} className='flex justify-between'>

            <div className="hidden w-[50%] md:flex md:justify-center md:items-center">
              <div className="education-card w-[80%]">
                <img loading='lazy' src={codingMan} className='w-[100%]' alt="A man coding" />
              </div>
            </div>

            <div className="timeline-animation mx-5 bg-gradient-to-b from-purple-500 via-red-500 to-green-500 w-[5px] h-[110vh] md:mx-auto md:h-[125vh] lg:h-[115vh] origin-top scale-y-0"></div>

            {/* COLUMN THREE */}
            <div className="flex flex-col gap-5 justify-center items-start w-full px-5 text-white md:left-[45%] md:w-[50%] md:gap-15">
              {education_details.map((education_detail)=>{
                return(
                  <div key={education_detail.name} className='bg-gray-800 px-6 py-3 w-full rounded-[10px] education-card'>
                    <p className={`text-1xl md:text-2xl ${education_detail.textColor}`}>{education_detail.emoji} {education_detail.name} ({education_detail.country})</p>
                    <p className='text-gray-300 text-[15px]'>{education_detail.year}</p>          
                    <p className='my-2 font-bold'>{education_detail.study_type}</p>
                    <p className='my-2 font-bold'>{education_detail.results}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
    </>
  )
}

export default Qualifications