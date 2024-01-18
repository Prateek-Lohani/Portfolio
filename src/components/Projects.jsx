import React,{useState,useRef, forwardRef} from 'react'
import data from '../utils/projectdata.js';
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from 'framer-motion';

const Projects = forwardRef(({refer},ref) => {

 
  const [projects,setProjects]=useState(data);


  return (
    <div ref={refer} className='w-full h-fit md:pt-[10vh] p-4 relative'>
        <div className='flex justify-center items-center flex-col text-white'>
        <h5 className='text-4xl md:text-8xl font-extrabold p-2 font-[circular]'>Projects</h5>
        <p className='text-center pb-8 md:pb-12 md:w-[50%] w-[75%] text-sm md:text-2xl py-6 leading-[30px] tracking-tight font-normal'>
            Creating Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        </div>
        <div  className='w-[90%] md:w-[80%] h-[90%] md:p-8 p-4 mx-auto bg-slate-500/20 relative border border-cyan-400 rounded-lg flex md:justify-center md:items-center md:flex-wrap md:gap-8 gap-6 overflow-x-auto md:overflow-hidden' id='projectscroll'>
      
    {projects.map((project)=>{
      return <div key={project.id} className='w-full h-[60vh] md:p-4 md:h-[80vh]  md:flex shrink-0'>
      <div className='left  h-[60%] md:w-[65%] md:h-full flex justify-center items-center'>
          <video src={project.vidsrc} autoPlay muted loop className='w-full scale-y-[2] md:scale-y-[1.3] object-cover md:h-full md:rounded-lg md:object-contain'></video>
      </div>
      <div className='right   md:w-[35%] flex md:items-center justify-center h-[40%] md:h-full px-2 md:p-4'>
        <div className='w-full text-white  rounded-xl md:p-2 h-[85%]'>
            <div className='flex  md:gap-2 flex-col w-full  md:h-[40%] '>
              <h4 className='font-bold text-center text-sm underline md:text-[4.2vh] md:leading-[4.2vh] py-1 text-cyan-300/60 font-[circular] uppercase'>{project.projectName}</h4>
              <p className='text-sm px-2 md:text-xl md:p-2'>{project.projectDesc}</p>
              </div>
              <div  className='p-2 w-full md:h-[40%]  flex flex-wrap gap-2'>
              {project.tech.map((tech, index) => (
              <motion.p dragConstraints={{ left: '5px', right: '5px' }} drag dragSnapToOrigin className='w-fit bg-slate-500/70 hover:bg-slate-500/30 text-xs md:text-lg hover:cursor-pointer h-fit px-2 py-1  rounded-lg' key={index}>{tech}</motion.p>
            ))}
           
                </div>
                <div className='md:h-[20%] h-fit flex justify-start items-end pr-6'>
                <button onClick={()=>window.open(project.weburl)} className='pt-1 flex items-center justify-center'> <span className='underline px-2 text-sm md:text-[3vh] font-semibold capitalize'>Visit Site</span><FaExternalLinkAlt size={'1.9vh'} color='white'/></button>

                </div>
          </div>
      </div>
  </div>
    })}
</div>

     </div>   
  )
})

export default Projects