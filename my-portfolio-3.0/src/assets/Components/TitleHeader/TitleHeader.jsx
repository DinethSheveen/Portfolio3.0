import React from 'react'

function TitleHeader({title}) {

  return (
    <div className="flex justify-center items-center">
        <p className="text-gray-300 mt-5 mb-3 py-2 px-6 bg-gray-700 rounded-[20px]">{title}</p>
    </div>
  )
}

export default TitleHeader