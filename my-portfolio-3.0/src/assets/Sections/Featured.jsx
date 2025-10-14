import React from 'react'

function Featured({featured_details}) {
  return (
    <div className='my-10 mx-10'>
        {/* FLEX CONTAINER */}
        <div className="">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center'>
                {featured_details.map((featured_detail,index)=>{
                    return(
                        <div key={index} className='flex flex-col gap-3 text-white bg-gray-800 py-2 px-4 rounded-[10px]'>
                            <img className='w-[50px]' src={featured_detail.icon} alt="" />
                            <p className='flex flex-1 text-2xl'>{featured_detail.title}</p>
                            <p className='flex flex-1 text-gray-400'>{featured_detail.message}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Featured