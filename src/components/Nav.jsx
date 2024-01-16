import React,{useState} from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";

const Nav = ({scrollToSkills,scrollToProjects,scrollToExperience,scrollToResume,scrollToSocials}) => {
 
    const [menuOpen,setMenuOpen]=useState(false);
 
    return (
    <nav className='fixed h-[8vh] text-white  w-full bg-black/90 z-[9998]'>
        <section className='z-[9999] text-[2.5vh] uppercase font-semibold h-full md:flex items-center justify-center gap-20 hidden'>
            <h4 className='hover:cursor-pointer ' onClick={scrollToSkills}>Skills</h4>
            <h4 className='hover:cursor-pointer ' onClick={scrollToProjects}>Projects</h4>
            <h4 className='hover:cursor-pointer ' onClick={scrollToExperience}>Experience</h4>
            <h5 className='hover:cursor-pointer ' onClick={scrollToResume}>Resume</h5>
            <h5 className='hover:cursor-pointer ' onClick={scrollToSocials}>Contact Me</h5>
            </section>
            
            {
                menuOpen ? <>
                <section className='md:hidden flex items-center justify-start px-4 py-2'>
            <RiCloseFill onClick={()=>setMenuOpen(!menuOpen)} className='text-4xl'/>
            
            </section>
                <div className='md:hidden flex flex-col gap-4 items-center w-[100%] py-6 p-4 h-fit bg-black/90 absolute'>
                <h4 className='hover:cursor-pointer text-xl uppercase font-bold' onClick={scrollToSkills}>Skills</h4>
                <h4 className='hover:cursor-pointer text-xl uppercase font-bold' onClick={scrollToProjects}>Projects</h4>
                <h4 className='hover:cursor-pointer text-xl uppercase font-bold' onClick={scrollToExperience}>Experience</h4>
                <h5 className='hover:cursor-pointer text-xl uppercase font-bold' onClick={scrollToResume}>Resume</h5>
                <h5 className='hover:cursor-pointer text-xl uppercase font-bold' onClick={scrollToSocials}>Contact Me</h5>
                
                </div>
                </>
                :
                <div className='md:hidden flex justify-start items-center px-4'>
                <RiMenu2Fill onClick={()=>setMenuOpen(!menuOpen)} className='text-4xl'/>
                </div>
            }
        
    </nav>
  )
}

export default Nav