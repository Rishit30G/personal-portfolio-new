"use client";
import React from 'react'
import { AnimatedTooltip } from "../components/ui/animated-tooltip";

type CardProps = {
    title: string
    content: string
    project: any[]
    link: string
}

const Card = ({link, title, content, project}:CardProps) => {
  return (
    <a href={link} className="block max-w-sm p-7 bg-black border-[0.3px] border-slate-800 shadow-[4px_4px_15px_rgba(100,100,100,0.3)] hover:shadow-[6px_6px_20px_rgba(100,100,100,0.7)] group max-lg:max-w-lg">
    <h1 className="pb-5 max-w-[220px] text-5xl font-bold tracking-tight text-gray-500 league-spartan transition-colors duration-200 ease-in-out group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#ecc94b] group-hover:to-[#48bb78] bg-clip-text bg-gray-500 leading-[50px]">
        {title}
    </h1>
    <p className="font-normal text-gray-500 font-mono leading-relaxed">{content}</p>
    <div className="flex flex-row items-center justify-end mt-10">
        <AnimatedTooltip items={project} />
    </div>
</a>


  )
}

export default Card