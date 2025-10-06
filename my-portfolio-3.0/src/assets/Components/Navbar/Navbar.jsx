import React from 'react'

function Navbar() {
  return (
    <nav className='fixed top-0 w-full'>
        <div className='md:mx-8 md:my-4'>
            {/* FLEX CONTAINER */}
            <div className="text-white flex justify-between items-center bg-gray-900 px-8 py-4 rounded-2xl">
                {/* LOGO */}
                <p className='text-white font-bold cursor-pointer'><a href="">Dineth | DSF</a></p>
                {/* MENY ITEMS */}
                <div className='hidden md:flex gap-4'>
                    <a href="" className='transition-all hover:font-bold hover:tracking-wider'>Work</a>
                    <a href="" className='transition-all hover:font-bold hover:tracking-wider'>Skills</a>
                    <a href="" className='transition-all hover:font-bold hover:tracking-wider'>Experience</a>
                    <a href="" className='transition-all hover:font-bold hover:tracking-wider'>Projects</a>
                </div>
                {/* BUTTON */}
                <button className='cursor-pointer transition-all bg-sky-200 text-black px-4 py-2 rounded-[10px] hover:text-white hover:bg-transparent hover:border-white border-1'>Contact me</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar