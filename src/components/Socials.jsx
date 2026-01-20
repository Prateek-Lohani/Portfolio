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
    },{
        id:3,
        icon:'gmail.png',
        href:'mailto:prateeklohani@gmail.com'
    }
]

 const [socials,setSocials]=useState(data);
 
    return (
    <div ref={refer} className='w-full  md:pb-4 md:pt-[10vh] pb-0 p-4 md:h-fit  flex flex-col items-center justify-center relative'>
        <h5 className='text-3xl md:text-9xl font-[900] text-white p-2'>Let's Build Something Amazing</h5>
        
        <div className="form-container md:w-[50%] w-[90vw] h-fit md:h-[70vh] ">
            <Form/>
        </div>

        <div className="md:hidden pt-8 pb-3 flex justify-center gap-3  items-top">
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
