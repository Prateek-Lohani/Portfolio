import React from 'react'
import { RiMenu2Fill } from "react-icons/ri";

const Nav = () => {
  return (
    <nav className='fixed h-[8vh] text-white  w-full bg-black/90 z-[9998]'>
        <section className='z-[9999] text-[2.5vh] uppercase font-semibold h-full md:flex items-center justify-center gap-20 hidden'>
            <h4>Skills</h4>
            <h4>Projects</h4>
            <h4>Experience</h4>
            <h5>Resume</h5>
            <h5>Socials</h5>
            </section>
            <section className='md:hidden flex items-center justify-start px-4 py-2'>
            <RiMenu2Fill className='text-4xl'/>
            </section>
        
    </nav>
  )
}

export default Nav