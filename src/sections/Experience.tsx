import React from 'react'
import { HoverEffect } from "../components/ui/card-hover-effect";
import { TracingBeam } from "../components/ui/tracing-beam";
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { wordsExp } from '@/constants/words';
import {exp1, exp2, exp3, exp4, exp5} from '@/constants/experience';



const Experience = () => {
  return (
    <section id="experience">
      <h1 className='heading mt-20'>Experience.</h1>
      <TypewriterEffectSmooth words={wordsExp} />
      <div className='flex justify-between items-center'>
        <TracingBeam> 
          <HoverEffect items={exp1}/>
          <HoverEffect items={exp2}/>
          <HoverEffect items={exp3}/>
          <HoverEffect items={exp4}/>
          <HoverEffect items={exp5}/>
        </TracingBeam>
      </div>
    </section>
  )
}

export default Experience