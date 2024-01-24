import React, { useState } from 'react'


const Skills = () => {

    const skillsdata=[{
        id:0,
        name:'HTML',
        img:'html.png'
    }
    ,{
        id:1,
        name:'CSS',
        img:'css.png'
    },{
        id:2,
        name:'JavaScript',
        img:'js.png'
    },{
        id:3,
        name:'TailwindCSS',
        img:'tailwind.png'
    },{
        id:4,
        name:'React',
        img:'react.png'
    },{
        id:5,
        name:'Redux',
        img:'redux.png'
    },{
        id:6,
        name:'Vite',
        img:'vite.svg'
    },{
        id:7,
        name:'Microsoft Azure',
        img:'azure.png'
    },{
        id:8,
        name:'Framer Motion',
        img:'framer.svg'
    },{
        id:9,
        name:'Jira',
        img:'jira.png'
    },{
        id:10,
        name:'Git',
        img:'git.png'
    },{
        id:11,
        name:'GSAP',
        img:'gsap.svg'
    },{
        id:12,
        name:'Netlify',
        img:'netlify.png'
    },{
        id:13,
        name:'Python',
        img:'python.png'
    },{
        id:14,
        name:'Jest',
        img:'jest.png'
    }
]

    const [skills,setSkills]=useState(skillsdata);

 
    return (
    <div  className=' w-full md:pt-[10vh] h-fit p-4 relative'>
       
        <div className='flex justify-center items-center flex-col text-white'>
        <h5 className='text-4xl md:text-9xl font-[900] p-2 '>Skills</h5>
        
        <p className='pb-8 md:pb-12 md:w-[50%] w-[80%] text-center text-[4vw] md:text-2xl py-6  font-normal'>
            You can't box these skills into a simple list, they are an explosion display of talent in action. But for the sake of formality, check the skills below.
        </p>


        </div>
        <div  className=' w-[100%] md:w-[100%] h-[90%] md:p-6  mx-auto bg-[#151515] relative  rounded-lg md:flex md:justify-start md:items-center md:gap-8 gap-3'>

        <div className="left h-fit gap-2 md:w-[80%] w-[100%] md:gap-4 grid grid-cols-3 px-4 bg-red-500 md:flex flex-wrap items-center justify-center ">
        {skills.map((skill)=>{
            return <div key={skill.id}  className='hover:scale-[99%] p-4 bottom-0 w-[100%] border border-gray-100/30 md:w-[9vw] hover:border-[#4A48AA] duration-500 h-[12vh] md:h-[9vw] bg-[#100F10] rounded-lg hover:cursor-pointer flex flex-col justify-center items-center gap-3 md:gap-6'>
                <div className='w-[85%] md:w-[50%] md:h-[50%] h-[60%] overflow-hidden'><img className='object-contain md:object-cover w-full h-full rounded-lg' src={skill.img} alt="logo" /></div>
                <div className='w-full md:w-fit h-[20%]  text-center text-white text-xs md:text-[0.7vw] font-semibold'>{skill.name}</div>
            </div>
            
        })}
        </div>
        <div className='right w-[40%] h-[60vh] hidden md:flex'>
        <iframe className='w-full h-full object-cover' src="https://lottie.host/embed/28540dca-ac94-448f-9088-91dbf0fbbb06/iO8ZE7aB3f.lottie"></iframe>
        </div>

        </div>
       
    </div>
  )
};

export default Skills





