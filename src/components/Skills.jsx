import React, { forwardRef,useRef,useState } from 'react'
import { motion } from "framer-motion"



const Skills = forwardRef(({refer}, ref) => {

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
    }
]

    const [skills,setSkills]=useState(skillsdata);

    const reference=useRef();
    return (
    <div ref={refer} className=' w-full md:pt-[10vh] h-fit p-4 relative'>
        <div className='flex justify-center items-center flex-col text-white'>
        <h5 className='text-4xl md:text-8xl font-extrabold p-2 font-[circular]'>Skills</h5>
        <p className='pb-8 md:pb-12 md:w-[50%] w-[75%] text-center text-sm md:text-2xl py-6 leading-[30px] tracking-tight font-normal'>
            You can't box these skills into a simple list, they are an explosion display of talent in action. But for the sake of formality, check the skills below.
        </p>


        </div>
        <div ref={reference} className='w-[90%] md:w-[80%] h-[90%] md:p-8 p-6 mx-auto bg-slate-500/20 relative border border-cyan-400 rounded-lg grid grid-cols-2 md:flex md:justify-center md:items-center flex-wrap md:gap-8 gap-6'>


        {skills.map((skill)=>{
            return <motion.div key={skill.id} dragConstraints={reference} whileDrag={{ scale: 1.2 }} dragTransition={{ bounceStiffness: 800, bounceDamping: 40 }} dragElastic={0.2} drag className='hover:scale-[99%] p-4 bottom-0 w-[100%] shadow-[0px_0px_2px_3px_rgba(109,40,217)] shadow-cyan-400/50 md:w-[200px] h-[17vh] md:h-[200px] bg-[#100F10] rounded-lg hover:cursor-pointer flex flex-col justify-center items-center gap-4'>
                <div className='w-[85%] md:w-[60%] md:h-[60%] h-[60%] overflow-hidden'><img className='object-contain md:object-cover w-full h-full rounded-lg' src={skill.img} alt="logo" /></div>
                <div className='w-full md:w-fit h-[20%]  text-center text-white text-xs md:text-xl font-semibold'>{skill.name}</div>
            </motion.div>
            
        })}

        </div>
    </div>
  )
});

export default Skills

