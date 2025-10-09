import React from 'react'

function TitleHeader({title}) {

  return (
    <div className="flex justify-center items-center">
        <p className="text-white m-10 py-2 px-6 bg-gray-600 rounded-[20px]">{title}</p>
    </div>
  )
}

export default TitleHeader