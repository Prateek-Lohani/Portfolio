import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React,{useState} from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";


const Nav = ({scrollToSkills,scrollToProjects,scrollToExperience,scrollToResume,scrollToSocials}) => {
 
    const [menuOpen,setMenuOpen]=useState(false);
    
    const tl=gsap.timeline();
    useGSAP(()=>{

        tl.from('nav',{
            y:-100,
            duration:.7
        })

        tl.from('nav h2',{
            y:-100,
            duration:0.6,
            stagger:.2
        })

       

       

        
    })


    return (
    <nav className='fixed h-[8vh] text-white  w-full bg-[#151515] z-[9998]'>
        <section className='z-[9999] px-6 text-[2.5vh] uppercase font-semibold h-full flex items-center justify-between md:gap-20 '>
            {/* <h4 className='hover:cursor-pointer ' onClick={scrollToSkills}>Skills</h4>
            <h4 className='hover:cursor-pointer ' onClick={scrollToProjects}>Projects</h4>
            <h4 className='hover:cursor-pointer ' onClick={scrollToExperience}>Experience</h4>
            <h5 className='hover:cursor-pointer ' onClick={scrollToResume}>Resume</h5>
            <h5 className='hover:cursor-pointer ' onClick={scrollToSocials}>Contact Me</h5> */}
<div className="left flex items-center">
    <h2 className='text-2xl md:text-3xl'>𐌐𐌋</h2>
</div>
<div className="right hidden md:flex justify-center items-center text-sm gap-6">
    {/* <h2 className='hover:cursor-pointer'>About</h2>
    <h2 className='hover:cursor-pointer'>Projects</h2>
    <h2 className='hover:cursor-pointer'>Contact Me</h2> */}
    <h2 onClick={()=>window.open('https://drive.google.com/file/d/1PukcDuNcwvHHFI1ggolL8ybMKt4VMxmC/view')} className='bg-[#4A48AA] text-white font-bold hover:cursor-pointer px-2 py-[0.2vh] rounded'>Resume</h2>
    {/* <h2 className='md:text-2xl hover:cursor-pointer'><TiThMenu/></h2> */}
</div>
<div className='mob-right md:hidden text-3xl flex gap-4'>
<h3 onClick={()=>window.open('https://drive.google.com/file/d/1PukcDuNcwvHHFI1ggolL8ybMKt4VMxmC/view')} className='bg-[#4A48AA] text-white text-sm hover:cursor-pointer px-2 py-1 rounded'>Resume</h3>

{/* <h3 className='hover:cursor-pointer' onClick={()=>setMenuOpen(!menuOpen)}><TiThMenu/></h3> */}

</div>
            
            </section>


            {
                menuOpen && <section className='overflow-hidden flex items-center flex-col w-[100vw] h-[80vh] bg-red-600 absolute right-0'>
                                <h2>About</h2>
                                <h2>Projects</h2>
                                <h2>Skills</h2>
                                <h2>Contact Me</h2>
                </section>
}
            {/* {
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
                <div className='w-full h-full md:hidden flex justify-start items-center px-4'>
                <RiMenu2Fill onClick={()=>setMenuOpen(!menuOpen)} className='text-4xl'/>
                </div>
            } */}
        
    </nav>
  )
}

export default Nav
