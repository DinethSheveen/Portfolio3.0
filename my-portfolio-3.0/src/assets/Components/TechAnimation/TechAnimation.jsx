import gsap from "gsap"
import {useGSAP} from "@gsap/react"

function TechAnimation({tech_icons}) {

    useGSAP(()=>{

        const elements = gsap.utils.toArray(document.querySelectorAll(".icons"))
        
        elements.forEach((element,index)=>{

            let direction = index%2==0?-50:50

            gsap.fromTo(element,
            {
                y:direction,
                stagger:1
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
        <div className="my-20 py-20">
            {/* FLEX-CONTAINER */}
            <div className="flex gap-2 justify-center text-white text-3xl flex-wrap xl:text-7xl xl:gap-6 lg:text-5xl lg:gap-4 icon-wrapper">
                {tech_icons.map((tech_icon)=>{
                    return ( 
                            <p className={`${tech_icon.backgroundColor} ${tech_icon.color} cursor-pointer rounded-full p-2 icons`} key={tech_icon.stack}>{tech_icon.icon}</p>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default TechAnimation