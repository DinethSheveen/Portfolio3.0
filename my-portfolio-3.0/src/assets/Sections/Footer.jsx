import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

function Footer() {
  return (
    <>
        <div className="footer py-6 bg-gray-900">
            {/* FLEX-CONTAINER */}
            <div className="flex justify-between items-center px-6 text-white md:flex-row lg:flex-row xl:flex-row">
                {/* YEAR AND NAME */}
                <div>
                    &copy;2025 | DINETH
                </div>

                {/* SOCIAL-MEDIA */}
                <div className='flex justify-center items-center gap-2'>
                    <a href="https://www.linkedin.com/in/dineth-fernando-b94b68295/" target='_blank' className='text-2xl hover:scale-[1.1] hover:bg-white hover:text-black'><FaLinkedin/></a>
                    <a href="https://github.com/DinethSheveen" target='_blank' className='text-2xl hover:scale-[1.1] hover:bg-white hover:text-black'><FaSquareGithub/></a>
                </div>

                {/* COPYRIGHTS */}
                <div>
                    All rights reserved
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer