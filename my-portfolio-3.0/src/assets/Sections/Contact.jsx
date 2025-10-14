import React, { useRef, useState } from 'react';
import TitleHeader from '../Components/TitleHeader/TitleHeader'
import emailjs from '@emailjs/browser';
import Contact3D from '../Components/3D-Models/ContactSection/Contact3D';

function Contact(){
  const form = useRef();
  const [loading,setLoading] = useState(false)

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
      .then(
        () => {
          alert("✅ Your message has been sent! Thank you.");
          form.current.reset(); // Clear the form
          setLoading(false)
        },
        () => {
          alert("⚠️ Something went wrong. Please try again.");
          setLoading(false)
        },
      );
  };

  return (
    <>
      <TitleHeader title="💬 Ideas? I'm all Ears ✨"/>
      <div id="contact" className="text-2xl flex justify-center bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-white md:text-3xl lg:text-3xl xl:text-4xl">Feel Free to Contact</div>

      {/* CONTACT CONTAINER */}
      <div className='my-10 px-10 md:px-10 lg:px-10 xl-px-10'>
        {/* FLEX-CONTAINER */}
        <div className="flex flex-col justify-center items-center gap-10 lg:lex-row xl:flex-row">
          {/* LEFT SECTION - FORM*/}
          <div className="w-full text-white bg-gray-900 rounded-[10px] p-5 md:w-[500px] lg:w-[50%] xl:w-[50%]">
            <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
              <label>Name</label>
              <input type="text" name="name" placeholder='Your good name' className='bg-gray-700 rounded-[5px] my-[10px] py-[5px] pl-2' required/>
              <label>Email</label>
              <input type="email" name="email" placeholder='Your Email' className='bg-gray-700 rounded-[5px] my-[10px] py-[5px] pl-2' required/>
              <label>Message</label>
              <textarea name="message" rows={5} className='bg-gray-700 rounded-[5px] my-[10px] py-[5px] pl-2' placeholder='Share your thoughts or feedback…'/>
              <input type="submit" value={loading?"Sending Message...": "Send Message"} className='bg-gray-400 py-3 px-6 rounded-[5px] cursor-pointer transition-[1s] hover:bg-gray-800'/>
            </form>
            </div>
          {/* RIGHT SECTION - 3D MODEL*/}
          <div className='w-full h-[300px] lg:w-[50%] xl:w-[50%] md:h-[500px] lg:h-[500px] xl:h-[500px] overflow-x-hidden'>
            <Contact3D/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;