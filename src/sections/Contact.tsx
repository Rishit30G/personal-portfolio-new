"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { GlobeDemo } from "../components/GlobeDemo";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import { wordsContact } from "@/constants/words";

const Contact = () => {

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

   
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });

    if(form.current){
      if(process.env.NEXT_PUBLIC_SERVICE_ID && process.env.NEXT_PUBLIC_TEMPLATE_NAME && process.env.NEXT_PUBLIC_PUBLIC_KEY)
        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_NAME, form.current, {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY
        }).then(() => {
      if(form.current){
        form.current.reset();
      }
      Toast.fire({
        icon: "success",
        title: "Message Sent Successfully!"
      });
    }).catch((e) => {
      console.log(e);
      Toast.fire({
        icon: "error",
        title: "Message failed to send!"
      });
    });
  }
  else{
    Toast.fire({
      icon: "error",
      title: "Message failed to send!"
    });
  }
    
  };

  return (
    <section id="contact">
       <h1 className="heading max-lg:ml-7 max-lg:mr-7">
         Get in Touch.
      </h1>
      <TypewriterEffectSmooth words={wordsContact} className="max-lg:ml-7 max-lg:mr-7" />
      <div className='flex max-lg:flex-col justify-around items-start max-lg:items-center '>
        <form className='max-xl:w-4/5 w-1/3 flex flex-col gap-10 max-lg:ml-7 max-lg:mr-7' ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Name" className="w-full p-2 bg-transparent border-[1px] border-slate-800 focus:outline-none rounded-lg focus:border-white" required autoComplete="off" />
          <input type="email" name="email_sender" placeholder="Email" className="w-full p-2 bg-transparent border-[1px] border-slate-800 focus:outline-none rounded-lg focus:border-white" required/>
          <input type="text" name="subject_sender" placeholder="Subject" className="w-full p-2 bg-transparent border-[1px] border-slate-800 focus:outline-none rounded-lg focus:border-white" required autoComplete="off"/>
          <textarea name="message_sender" placeholder="Message" className="w-full p-2 bg-transparent border-[1px] border-slate-800 focus:outline-none rounded-lg h-32 focus:border-white" required autoComplete="off"></textarea>
          <div className="flex justify-end m-0 p-0">
          <button type="submit" value="Send" className=" text-white p-[2px] rounded-lg w-[100px] h-[40px] bg-gradient-to-r from-[#ed8936] to-[#ed64a6]" aria-label='send-button'>
            <span className="bg-[#000000] rounded-md w-full h-full flex items-center justify-center">
              Send
            </span>
          </button>
          </div>
        </form>
        <div className="max-xl:w-full max-xl:h-full w-2/3 mt-[-200px] max-lg:mt-0">
        <GlobeDemo/>
        </div>
      </div>

     </section>
  )
}

export default Contact