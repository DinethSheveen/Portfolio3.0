import gsap, { Linear } from "gsap"
import {useGSAP} from "@gsap/react"

function TechAnimation({tech_icons}) {
    
    useGSAP(()=>{
        const elements = gsap.utils.toArray(document.querySelectorAll(".icons"))

        
        elements.forEach((element,index)=>{
            let direction = index%2==0?-50:50
            gsap.fromTo(element,
            {
                y:direction,
            },
            {
                y:-direction,
                repeat:-1,
                yoyo:true,
                duration : 3,
                ease : "bounce.inOut"
            })
        })
        
    },[])

  return (
    <>
        {/* ICON WRAPPER */}
        <div className="my-10 py-20 md:my-20 md:py-20 lg:my-20 lg:py-20 xl:my-20 xl:py-20">
            {/* FLEX-CONTAINER */}
            <div className="flex justify-center flex-wrap text-white text-4xl sm:gap-4 sm:text-5xl md:text-5xl md:gap-4 lg:text-7xl xl:text-7xl xl:gap-6 icon-wrapper">
                {tech_icons.map((tech_icon)=>{
                    return ( 
                        <p className={`${tech_icon.backgroundColor} ${tech_icon.color} cursor-pointer rounded-full p-1 md:p-2 lg:p-2 xl:p-2 icons`} key={tech_icon.stack}>{tech_icon.icon}</p>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default TechAnimation