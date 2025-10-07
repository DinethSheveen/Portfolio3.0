import React from 'react'

function Experience({expContents}) {
  return (
    <>
        {/* EXPERIENCE SHOWCASE CONTAINER */}
        <div className="mt-10 px-10 text-white">
            {/* GRID-CONTAINER */}
            <div className="grid gap-10 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
                {expContents.map((expContent,index)=>{return (
                    <div className="bg-gray-900 rounded-2xl px-4 py-6 shadow-md shadow-gray-600" key={index}>
                        <h1 className='text-3xl mb-2'>{`${expContent.number}+`}</h1>
                        <p className='text-gray-300'>{expContent.wording}</p>
                    </div>
                )})}
            </div>
        </div>
    </>
  )
}

export default Experience