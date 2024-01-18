import React, { forwardRef, useState } from 'react'
import Accordion from './Accordion';

const Experience = forwardRef(({refer},ref) => {

    const data=[{
            id:0,
            designation:'System Engineer',
            company:' @Tata Consultancy Services',
            logo:'tcs.png',
            isOpen:false,
            from:'Jul 2021',
            to:'Present',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur repellendus ex beatae molestias hic similique fuga officia nisi ipsum, dolorem ducimus tempore id debitis soluta asperiores provident sunt facere iste voluptatum ut est velit maxime! Eligendi omnis laudantium tenetur.',
            location:'Noida, India',
            website:'https://www.tcs.com'
    },{
        id:1,
            designation:'ASE Trainee (Web Developer Intern)',
            company:' @Infosys Ltd.',
            logo:'infy.png',
            from:'Jan 2021',
            to:'May 2021',
            isOpen:false,
            desc:'',
            location:'Remote, India',
            website:'https://www.infosys.com'
    }];

    const [exp,setExp]=useState(data);

  return (
    <div ref={refer} className=' w-full h-fit p-4 relative md:pt-[10vh] '>
        <div className='w-full h-full'>
            <h1 className='text-4xl md:text-8xl font-[circular] text-white text-center'>Experience</h1>
            <div className='w-full flex justify-center'>
            <p className='text-center text-white pb-8 md:pb-12 text-sm md:text-2xl w-[40%] py-6 leading-[30px] tracking-tight font-normal'>Let's walk you through my journey. <span className='md:text-5xl text-2xl'>🧑🏻‍💻</span></p></div>
            {
                exp.map((experience)=>{
                    return <Accordion key={experience.id} {...experience}/>
                    
                    
                })
            }
        </div>
    </div>
  )
})

export default Experience