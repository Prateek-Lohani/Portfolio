import React, { forwardRef, useState } from 'react'
import Form from './Form';

const Socials = forwardRef(({refer},ref) => {
 
const data=[
    {
        id:0,
        icon:'github.png',
        href:'https://github.com/Prateek-Lohani',
    },{
        id:1,
        icon:'linkedin.png',
        href:'https://www.linkedin.com/in/prateeklohani/',
    },{
        id:2,
        icon:'twitter.png',
        href:'https://twitter.com/PrateekLohani4'
    }
]

 const [socials,setSocials]=useState(data);
 
    return (
    <div ref={refer} className='w-full bg-cyan-600/70 md:pb-4 md:pt-[10vh] pb-0 p-4 md:h-fit  flex flex-col items-center justify-center relative'>
        <h5 className='text-4xl text-white md:text-8xl font-extrabold p-2 font-[circular]'>Get in touch</h5>
        
        <div className="form-container md:w-[50%] w-[80vw] h-fit md:h-[70vh] ">
            <Form/>
        </div>

        <div className="md:hidden pt-6 pb-2 flex justify-center gap-4 md:gap-10 items-top">
                {socials.map((social)=>{
                    return (<div key={social.id} className='w-[6%] rounded-xl  overflow-hidden'>
                        <img onClick={()=>window.open(`${social.href}`)} className='hover:cursor-pointer hover:scale-110 transition-all w-full rounded-md overflow-hidden  h-full object-cover bg-white' src={social.icon} alt={social.icon}/>
                    </div>)
                })}
        </div>
    </div>
  )
})

export default Socials