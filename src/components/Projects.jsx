import React,{useState} from 'react'
import data from '../utils/projectdata.js';

const Projects = () => {

 
  const [projects,setProjects]=useState(data);

  return (
    <div className='w-full h-fit p-4 relative'>
        <div className='flex justify-center items-center flex-col text-white'>
        <h5 className='text-4xl md:text-8xl font-extrabold p-2 font-[circular]'>Projects</h5>
        <p className='pb-8 md:pb-12 md:w-[50%] w-[75%] text-sm md:text-2xl py-6 leading-[30px] tracking-tight font-normal'>
            Creating Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        </div>
        <div  className='w-[90%] md:w-[80%] h-[90%] md:p-8 p-4 mx-auto bg-slate-500/20 relative border border-cyan-400 rounded-lg md:flex md:justify-center md:items-center flex-wrap md:gap-8 gap-6'>
      
    {projects.map((project)=>{
      return <div className='w-full h-[50vh] md:p-4 md:h-[80vh] bg-red-700 md:flex'>
      <div className='left h-[70%] md:w-[65%] md:h-full bg-yellow-500 flex justify-center items-center'>
          <video src={project.vidsrc} autoPlay='true' muted='true' loop className='w-full scale-y-[2] md:scale-y-[1.3] object-cover md:h-full md:object-contain'></video>
      </div>
      <div className='left md:w-[35%] flex items-center justify-center h-[30%] md:h-full bg-green-500 px-2 md:p-4'>
        <div className='w-full h-[85%] bg-purple-600'>

          </div>
      </div>
  </div>
    })}
</div>

     </div>   
  )
}

export default Projects