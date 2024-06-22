"use client"
import React from 'react'
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import Image from 'next/image';
import {info} from '../constants/main'

const Main = () => {
  return (
    <section id="home">
    <div className='min-h-screen flex items-center justify-evenly max-lg:flex-col max-lg:items-center max-lg:ml-10 mr-10'>

      <div className='flex flex-col gap-6 max-lg:mt-20 w-full max-w-lg z-10'>
      <h1 className="text-5xl league-spartan bg-gradient-to-r from-[#ed8936] to-[#ed64a6] bg-clip-text text-transparent">
         {info.name}
      </h1>
        <p className='max-w-md text-slate-400 font-normal text-md font-mono leading-relaxed'>{info.description}
        </p>
        <div className='flex gap-5'>
        <a href={info.githubURL} target="_blank" rel="noopener noreferrer">
          <Image src={info.githubIcon} width={10} height={10} alt="social-icon" className='w-10 h-10' fetchPriority='high'
            loading='eager'/>
        </a>
        <a href={info.linkedinURL} target="_blank" rel="noopener noreferrer" >
          <Image src={info.linkedinIcon} width={10} height={10} alt="social-icon" className='w-10 h-10' fetchPriority='high'
            loading='eager'/>
        </a>
        <a href={info.leetcodeURL} target="_blank" rel="noopener noreferrer" >
          <Image src={info.leetcodeIcon} width={10} height={10} alt="social-icon" className='w-10 h-10' fetchPriority='high'
            loading='eager'/>
        </a>
        </div>
      </div>
      <div className="max-lg:my-10 flex flex-col items-center justify-center">
          <LampContainer className='absolute top-[200px] z-0 max-lg:hidden'>
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
            </motion.h1>
        </LampContainer>
          
        <Image
            src={info.imageUrl}
            width={400}
            height={400}
            alt="Profile Picture"
            className="object-cover w-[400px] h-[400px] max-lg:w-[330px] max-lg:h-[330px] animate-grayscaleToColor z-10 "
            fetchPriority='high'
            loading='eager'
          />
      </div>
     
    </div>
    </section>
  )
}

export default Main



