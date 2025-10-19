import React from 'react'

function Navbar() {
  return (
    <nav className='fixed top-0 w-full z-10 bg-transparent backdrop-blur-2xl'>
        <div className='md:mx-8 md:my-6'>
            {/* FLEX CONTAINER */}
            <div className="text-white flex justify-between items-center bg-gray-900 px-8 py-4 md:rounded-2xl">
                {/* LOGO */}
                <p className='text-white font-bold cursor-pointer'><a href="#">Dineth | DSF</a></p>
                {/* MENY ITEMS */}
                <div className='hidden md:flex gap-4'>
                    <a href="#projects" className='transition-all hover:font-bold hover:tracking-wider'>Projects</a>
                    <a href="#skills" className='transition-all hover:font-bold hover:tracking-wider'>Skills</a>
                    <a href="#experience" className='transition-all hover:font-bold hover:tracking-wider'>Qualifications</a>
                </div>
                {/* BUTTON */}
                <a href='#contact' className='cursor-pointer transition-all bg-gray-700 px-4 py-2 rounded-[10px] hover:bg-transparent hover:border-white hover:border-1'>Contact me</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar