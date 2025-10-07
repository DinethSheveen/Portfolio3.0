import React from 'react'

function Experience() {
  return (
    <>
        {/* EXPERIENCE SHOWCASE CONTAINER */}
        <div className="mt-10 px-10 text-white">
            {/* GRID-CONTAINER */}
            <div className="grid gap-10 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
                <div className="bg-gray-900 rounded-2xl px-4 py-6">
                    <h1 className='text-3xl mb-2'>2+</h1>
                    <p className='text-gray-300'>Years of Experience</p>
                </div>
                <div className="bg-gray-900 rounded-2xl px-4 py-6">
                    <h1 className='text-3xl mb-2'>8+</h1>
                    <p className='text-gray-300'>Developer Toolkits</p>
                </div>
                <div className="bg-gray-900 rounded-2xl px-4 py-6">
                    <h1 className='text-3xl mb-2'>20+</h1>
                    <p className='text-gray-300'>Completed Projects</p>
                </div>
                <div className="bg-gray-900 rounded-2xl px-4 py-6">
                    <h1 className='text-3xl mb-2'>1000+</h1>
                    <p className='text-gray-300'>Git Commits</p>
                </div>                
            </div>
        </div>
    </>
  )
}

export default Experience