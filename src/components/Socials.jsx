import React, { useState } from 'react'

const Socials = () => {
 
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
    <div className=' w-full md:pt-[10vh] p-4 h-[30vh] md:h-fit  flex flex-col items-center justify-center relative'>
        <h5 className='text-4xl md:text-8xl font-extrabold p-2 text-center font-[circular] text-white pb-10'>Socials</h5>
        
        <div className="w-[90%] h-[80%]  p-2 flex justify-center gap-8 md:gap-40 items-top">
                {socials.map((social)=>{
                    return (<div key={social.id} className='md:w-[8%] h-[45%] md:h-[80%] rounded-xl  overflow-hidden'>
                        <img onClick={()=>window.open(`${social.href}`)} className='hover:cursor-pointer hover:scale-110 transition-all w-full rounded-md overflow-hidden  h-full object-cover bg-white' src={social.icon} alt={social.icon}/>
                    </div>)
                })}
        </div>
    </div>
  )
}

export default Socials