import React from 'react'

function TitleHeader({title, header}) {

  return (
    <>
    <div className="flex justify-center items-center">
        <p className="text-gray-300 mt-5 mb-3 py-2 px-6 bg-gray-700 rounded-[20px]">{title}</p>
    </div>
    <div className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-200 flex justify-center md:text-3xl lg:text-4xl">{header}</div>
    </>
  )
}

export default TitleHeader