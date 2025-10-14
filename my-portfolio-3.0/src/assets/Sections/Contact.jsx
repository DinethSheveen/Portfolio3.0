import React, { useRef } from 'react';
import TitleHeader from '../Components/TitleHeader/TitleHeader'
import emailjs from '@emailjs/browser';

function Contact(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

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
            <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
              <label>Name</label>
              <input type="text" name="user_name" placeholder='Your good name' className='bg-gray-700 rounded-[5px] my-[10px] py-[5px] pl-2' required/>
              <label>Email</label>
              <input type="email" name="user_email" placeholder='Your Email' className='bg-gray-700 rounded-[5px] my-[10px] py-[5px] pl-2' required/>
              <label>Message</label>
              <textarea name="message" rows={5} className='bg-gray-700 rounded-[5px] my-[10px] py-[5px] pl-2' placeholder='Share your thoughts or feedback…'/>
              <input type="submit" value="Send" className='bg-gray-400 py-3 px-6 rounded-[5px] cursor-pointer transition-[1s] hover:bg-gray-800'/>
            </form>
            </div>
          {/* RIGHT SECTION - 3D MODEL*/}
        </div>
      </div>
    </>
  );
};

export default Contact;