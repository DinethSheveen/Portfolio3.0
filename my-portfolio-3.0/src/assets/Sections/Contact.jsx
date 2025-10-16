import React, {useRef, useState } from 'react';
import TitleHeader from '../Components/TitleHeader/TitleHeader'
import emailjs from '@emailjs/browser';
import Contact3D from '../Components/3D-Models/ContactSection/Contact3D';
import { FaWindowClose } from "react-icons/fa"

function Contact(){
  const form = useRef();
  const [loading,setLoading] = useState(false)
  const [alertMsg,setAlertMsg] = useState({
    status:null,
    message : "",
  })


  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY
  const templateId = import.meta.env.VITE_TEMPLATE_ID

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      // IF SUCCESSFULL
      .then(
        () => {
          setAlertMsg({status:true,message:"✅ Form Submitted Successfully"})
          form.current.reset(); // CLEARING THE FORM
          setLoading(false)
          
          // HIDE THE ALERT BOX AFTER 3 SECONDS
          setTimeout(()=>{
            setAlertMsg({status:null})
          },3000)
        },
        // IF UNSUCCESSFULL 
        () => {
          form.current.reset();
          setAlertMsg({status:false,message:"❌ Oops! Something went wrong. Try again later"})
          setLoading(false)
          
          // HIDE THE ALERT BOX AFTER 3 SECONDS
          setTimeout(()=>{
            setAlertMsg({status:null})
          },3000)
        },
      );
  };

  return (
    <>
      <TitleHeader title="💬 Ideas? I'm all Ears ✨" header="Feel Free to Contact"/>

      {/* CONTACT CONTAINER */}
      <div id='contact' className='my-10 px-10 md:px-10 lg:px-10 xl-px-10'>
        {/* FLEX-CONTAINER */}
        <div className="flex flex-col justify-center items-center gap-10 md:flex-row lg:flex-row xl:flex-row">
          {/* LEFT SECTION - FORM*/}
          <div className="w-full text-white bg-gray-900 rounded-[10px] p-5 md:w-[40%] lg:w-[40%] xl:w-[50%]">
            <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
              <label>Name</label>
              <input type="text" name="name" placeholder='Your good name' className='bg-gray-700 rounded-[5px] my-[10px] py-[5px] pl-2' required/>
              <label>Email</label>
              <input type="email" name="email" placeholder='Your Email' className='bg-gray-700 rounded-[5px] my-[10px] py-[5px] pl-2' required/>
              <label>Message</label>
              <textarea name="message" rows={5} className='bg-gray-700 rounded-[5px] my-[10px] py-[5px] pl-2' placeholder='Share your thoughts or feedback…'/>
              <input type="submit" value={loading?"Sending Message...": "Send Message"} className='bg-gray-400 py-3 px-6 rounded-[5px] cursor-pointer transition-[1s] hover:bg-gray-800 active:bg-gray-900'/>
            </form>
            </div>
          {/* RIGHT SECTION - 3D MODEL*/}
          <div className='w-full h-[300px] md:w-[60%] lg:w-[50%] xl:w-[50%] md:h-[500px] lg:h-[500px] xl:h-[500px] overflow-x-hidden'>
            <Contact3D/>
          </div>
        </div>

        {/* ALERT MESSAGES - FORM STATUS */}
        <div className={`fixed bottom-20 transition-all ${alertMsg.status===null?`right-[-100%]`:`right-0`}`}>
          <div className={`sg w-[300px] h-[100px] bg-transparent backdrop-blur-3xl rounded-2xl p-3 flex justify-center items-center ${alertMsg.status===true?`text-green-400`:`text-red-500`}`}>{alertMsg.message}</div>
        </div>
      </div>
    </>
  );
};

export default Contact;