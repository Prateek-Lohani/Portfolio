import React, { useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";

const Experience = () => {

    const data=[{
            id:0,
            designation:'System Engineer',
            company:' @ Tata Consultancy Services',
            logo:'tcs.png',
            isOpen:false,
            from:'Jul 2021',
            to:'Present',
            desc:'',
            location:'Noida, India',
            website:'https://www.tcs.com/'
    },{
        id:1,
            designation:'ASE Trainee (Web Developer Intern)',
            company:' @ Infosys Ltd.',
            logo:'infy.png',
            from:'Jan 2021',
            to:'May 2021',
            isOpen:false,
            desc:'',
            location:'Remote, India',
            website:'https://www.infosys.com/'
    }];

    const [exp,setExp]=useState(data);

  return (
    <div className='w-full md:h-[90vh] h-[70vh] relative pt-[15vh]'>
        <div className='w-full h-full'>
            <h1 className='text-4xl md:text-8xl font-[circular] text-white text-center'>Experience</h1>
            <div className='w-full flex justify-center'>
            <p className='text-center text-white pb-8 md:pb-12 text-sm md:text-2xl w-[40%] py-6 leading-[30px] tracking-tight font-normal'>Let's walk you through my journey. <span className='md:text-5xl text-2xl'>🧑🏻‍💻</span></p></div>
            {
                exp.map((experience)=>{
                    return <div key={experience.id} className='flex p-4 flex-col items-center justify-center hover:cursor-pointer'>
                        <div className='w-full md:w-[80vw] h-[10vh] flex rounded-lg overflow-hidden bg-slate-500/20 hover:bg-cyan-400/50 md:hover:bg-slate-500/20'>
                            <h2 className='w-full md:w-[90vw] h-full flex items-center justify-center text-xs md:text-2xl tracking-wide font-semibold text-white'>{experience.designation} <span className='italic font-normal leading-9 ml-2'>{experience.company}</span></h2>
                            <div className='hidden right w-[10vw] h-full bg-blue-400 rounded-full left-[3vw] relative md:flex items-center pl-6'>
                            <IoIosAddCircleOutline size={'40px'} fontWeight={'900'} fill='white'/>
                            </div>
                        </div>
                    </div>
                    
                })
            }
        </div>
    </div>
  )
}

export default Experience