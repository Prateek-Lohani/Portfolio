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
    <div ref={refer} className='w-full bg-cyan-600/70 md:pt-[10vh] p-4 md:h-fit  flex flex-col items-center justify-center relative'>
        
        <div className="form-container md:w-[60%] w-[80vw] h-[60vh] md:h-[70vh] bg-yellow-500">
            <Form/>
        </div>

        <div className="w-[90%] h-[80%]  p-2 flex justify-center gap-8 md:gap-10 items-top">
                {socials.map((social)=>{
                    return (<div key={social.id} className=' md:w-[3%] h-[45%] md:h-[80%] rounded-xl  overflow-hidden'>
                        <img onClick={()=>window.open(`${social.href}`)} className='hover:cursor-pointer hover:scale-110 transition-all w-full rounded-md overflow-hidden  h-full object-cover bg-white' src={social.icon} alt={social.icon}/>
                    </div>)
                })}
        </div>
    </div>
  )
})

export default Socials