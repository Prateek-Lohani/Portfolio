import React, { forwardRef, useState } from 'react'
import Accordion from './Accordion';

const Experience = forwardRef(({refer},ref) => {

    const data=[{
            id:0,
            designation:'Software Engineer II',
            company:' @HashedIn by Deloitte',
            logo:'hashedin-logo.png',
            isOpen:false,
            from:'Jun 2024',
            to:'Present',
            desc:'At HashedIn, I have had the privilege to work on diverse client projects across multiple industries, gaining extensive hands-on experience in creating scalable, manageable, and maintainable solutions for modernizing legacy applications. My expertise lies in leveraging React.js and its ecosystem to transform outdated systems into modern, responsive, and user-centric applications. I have successfully delivered end-to-end solutions that not only improve application performance and user experience but also ensure code maintainability, scalability, and alignment with current industry standards and best practices.',
            location:'Gurugram, India',
            website:'https://hashedin.com'
},{
            id:1,
            designation:'System Engineer',
            company:' @Tata Consultancy Services',
            logo:'tcs.png',
            isOpen:false,
            from:'Jul 2021',
            to:'May 2024',
            desc:'Demonstrated expertise in crafting a sophisticated monitoring dashboard to optimize log and failure monitoring processes for improved business efficiency. Proactively identified and implemented process improvements, reflecting a commitment to continuous enhancement. Proficient in Microsoft Azure, leveraging hands-on knowledge to enhance development and deployment processes. Adept at collaborative work, engaged with diverse teams, including designers and testers, fostering seamless communication and achieving project success.',
            location:'Noida, India',
            website:'https://www.tcs.com'
    },{
        id:2,
            designation:'ASE Trainee (Web Developer Intern)',
            company:' @Infosys Ltd.',
            logo:'infy.png',
            from:'Jan 2021',
            to:'May 2021',
            isOpen:false,
            desc:'Completed 4-month intership at Infosys in Web Developement, acquiring valuable  practical experience in web development but also honed my teamwork and collaboration skills. The highlight of my contributions was developing the front end of a responsive travel website, showcasing my ability to create user-friendly interfaces. This experience has solidified my passion for web development and equipped me with a versatile skill set for future endeavors in the field.',
            location:'Remote, India',
            website:'https://www.infosys.com'
    }];
    
    const [exp,setExp]=useState(data);

  return (
    <div ref={refer} className=' w-full h-fit p-4 relative md:pt-[10vh] '>
        <div className='w-full h-full'>
            <h1 className='text-5xl md:text-9xl text-white text-center'>Experience</h1>
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
