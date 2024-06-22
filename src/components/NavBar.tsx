"use client"

import { useState } from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Image from "next/image";

const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div className="flex justify-around items-center max-lg:justify-between max-lg:p-10">
      <h1 className="text-white league-spartan text-4xl max-lg:text-3xl">
      {'< Portfolio / >'}
      </h1>
      <ul className="flex gap-10 my-10 max-lg:hidden">
      <a href="#home" className="group relative">
        <li className="text-white">Home</li>
        <div className="navbar-item"></div>
      </a>
      <a href="#experience" className="group relative">
        <li className="text-white">Experience</li>
        <div className="navbar-item"></div>
      </a>
      <a href="#skills" className="group relative">
        <li className="text-white">Skills</li>
        <div className="navbar-item"></div>
      </a>
      <a href="#projects" className="group relative">
        <li className="text-white">Projects</li>
        <div className="navbar-item"></div>
      </a>
      <a href="#contact" className="group relative">
        <li className="text-white">Contact</li>
        <div className="navbar-item"></div>
      </a>
      </ul>
      <div className="lg:hidden block">
         <Image src="/assets/hamburger.svg" alt="hamburger" width={10} height={10} className="w-10 h-10"  onClick={toggleMenu}/>
      </div>
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black flex flex-col justify-start items-center z-50">
          <button className="text-white text-2xl underline underline-offset-4 my-4 z-10" onClick={toggleMenu} aria-label="close-button">Close</button>
          <a href="#home" className="navbar-responsive-item" onClick={toggleMenu}>Home</a>
          <a href="#experience" className="navbar-responsive-item" onClick={toggleMenu}>Experience</a>
          <a href="#skills" className="navbar-responsive-item" onClick={toggleMenu}>Skills</a>
          <a href="#projects" className="navbar-responsive-item" onClick={toggleMenu}>Projects</a>
          <a href="#contact" className="navbar-responsive-item" onClick={toggleMenu}>Contact</a>
          <BackgroundBeams/>
        </div>
      )}
    </div>
  )
}

export default NavBar