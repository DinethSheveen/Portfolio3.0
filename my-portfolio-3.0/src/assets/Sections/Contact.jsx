import React from 'react'
import TitleHeader from '../Components/TitleHeader/TitleHeader'

function Contact() {
  return (
    <>
      <TitleHeader title="💬 Questions? Ideas? I'm all Ears ✨"/>
      <div id="contact" className="text-2xl flex justify-center bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-white md:text-3xl lg:text-3xl xl:text-4xl">Feel Free to Contact</div>
    
      {/* CONTACT CONTAINER */}
      <div className='my-10 px-10'>
        {/* FLEX-CONTAINER */}
        <div className="flex justify-center items-center gap-10">
          {/* LEFT SECTION - FORM*/}
          <div className="w-full text-white bg-gray-900 rounded-[10px] p-5 md:w-[70%] lg:w-[50%] xl:w-[40%]">
            <form action="" className='flex flex-col'>
              {/* NAME */}
              <label htmlFor="name">Name : </label>
              <input type="text" name="name" id="name" placeholder='Your good name' className='bg-gray-700 rounded-[5px] my-[10px] py-[5px] pl-2' required/>
              
              {/* EMAIL */}
              <label htmlFor="email">Email :</label>
              <input type="email" name="email" id="email" placeholder='Your Email' className='bg-gray-700 rounded-[5px] my-[10px] py-[5px] pl-2' required/>
              
              {/* MESSAGE */}
              <label htmlFor="message">Message :</label>
              <textarea name="" id="" rows={5} placeholder='Share your thoughts or feedback…' className='bg-gray-700 rounded-[5px] my-[10px] py-[5px] pl-2'></textarea>
           
              {/* BUTTON */}
              <button className='bg-gray-400 py-3 px-6 rounded-[5px] cursor-pointer'>Submit</button>
            </form>
          </div>

          {/* RIGHT SECTION - 3D MODEL*/}
        </div>
      </div>
    </>
  )
}

export default Contact