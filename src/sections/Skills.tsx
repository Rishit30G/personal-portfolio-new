"use client";
import { FlipWords } from '@/components/ui/flip-word'
import { SparklesCore } from "../components/ui/sparkles";
import React, {useState, useEffect} from 'react'
import Button from '@/components/Button';
import { skills } from '@/constants/skills';
import { images } from '@/constants/images';
import {techstack} from '@/constants/techstack';
import Image from 'next/image';

const Skills = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
  }, 4000);

  return () => clearInterval(interval)
}, [currentImageIndex])

  return (
    <section className="relative margin-y" id="skills">
       <h1 className='heading mb-10'>Skills.</h1>
       <SparklesCore 
              background="transparent"
              minSize={0.2}
              maxSize={1}
              particleDensity={120}
              className='absolute z-10 h-full w-full top-20'
              particleColor="#c5c5c5"
        />
       <div className='flex max-lg:flex-col gap-2 justify-evenly items-center'>
       <div className='flex flex-col gap-6 max-lg:max-w-sm'>
      {techstack.map((skillRow, rowIndex) => (
        <div className='flex z-20' key={rowIndex}>
          {rowIndex % 2 === 0 ? (
            <button className='w-[50px] h-[50px] border-gray-800 border-[1px] rounded-r-lg inline-flex gap-2 items-center justify-center border-l-0' aria-label={'half button'}></button>
          ) : null}
          
          {skillRow.map((skill, index) => (
            <Button key={index} text={skill.text} img={skill.img} />
          ))}
          
          {rowIndex % 2 !== 0 ? (
            <button className='w-[50px] h-[50px] border-gray-800 border-[1px] rounded-l-lg inline-flex gap-2 items-center justify-center border-r-0' aria-label={'half button'}></button>
          ) : null}
        </div>
      ))}
    </div>
          <div className='flex flex-col gap-0 items-center justify-center'>
            <Image src={images[currentImageIndex]} alt="skills"  width={400} height={380} className='object-contain w-[400px] h-[380px] max-lg:w-[330px] max-lg:h-[330px] filter grayscale hover:filter-none transition duration-300 ease-in-out z-10 ' />
           <span className='text-xl font-bold font-mono tracking-tight'><FlipWords words={skills}/></span>
          </div>
       </div>
    </section>
  )
}

export default Skills