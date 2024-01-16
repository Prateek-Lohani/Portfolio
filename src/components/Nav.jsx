import React from 'react'
import { RiMenu2Fill } from "react-icons/ri";

const Nav = ({scrollToSkills,scrollToProjects,scrollToExperience,scrollToResume,scrollToSocials}) => {
  return (
    <nav className='fixed h-[8vh] text-white  w-full bg-black/90 z-[9998]'>
        <section className='z-[9999] text-[2.5vh] uppercase font-semibold h-full md:flex items-center justify-center gap-20 hidden'>
            <h4 className='hover:cursor-pointer ' onClick={scrollToSkills}>Skills</h4>
            <h4 className='hover:cursor-pointer ' onClick={scrollToProjects}>Projects</h4>
            <h4 className='hover:cursor-pointer ' onClick={scrollToExperience}>Experience</h4>
            <h5 className='hover:cursor-pointer ' onClick={scrollToResume}>Resume</h5>
            <h5 className='hover:cursor-pointer ' onClick={scrollToSocials}>Contact Me</h5>
            </section>
            <section className='md:hidden flex items-center justify-start px-4 py-2'>
            <RiMenu2Fill className='text-4xl'/>
            
            </section>
            <div className='md:hidden w-[100vw] h-[50vh] bg-red-400 absolute'>

            </div>
        
    </nav>
  )
}

export default Nav