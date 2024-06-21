"use client"
import Image from 'next/image';
import React from 'react'

interface ButtonProps {
  text: string;
  img: string;
}

const Button: React.FC<ButtonProps> = ({ text, img }) => {
  return (
    <button aria-label={text}  className='w-[155px] h-[50px] border-gray-800 border-[1px] rounded-lg inline-flex gap-2 items-center justify-center hover:transform hover:scale-110 transition-transform duration-100 hover:border-0 max-lg:text-[12px] p-1 text-nowrap'> 
      <span><Image src={img} width={8} height={8} className='w-8 h-8 max-lg:w-4 max-lg:h-4' alt="skills-icon"/></span> 
      {text} 
    </button>
  )
}

export default Button