import React,{useState} from 'react'

import { IoIosAddCircleOutline } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const Accordion = ({id,desc,designation,from,to,location,logo,website,company}) => {
    // const [accordionToggle,setAccordionToggle]=useState(false);
  
    return (
    <div key={id} className='flex p-4 flex-col items-center justify-center hover:cursor-pointer '>
                        <div  className='myexp w-full md:w-[80vw] h-[10vh] flex rounded-lg overflow-hidden bg-cyan-500/70 '>
                            <h2 className='w-full md:w-[90vw] h-full flex items-center justify-center text-xs md:text-2xl tracking-wide font-semibold text-white'>{designation} <span className='italic font-normal leading-9 ml-2'>{company}</span></h2>
{/*                             <div className='hidden right w-[10vw] h-full bg-blue-400 rounded-full left-[3vw] relative md:flex items-center pl-6'>
                            <IoIosAddCircleOutline size={'40px'} fontWeight={'900'} fill='white'/>
                            </div> */}

                        </div>
                         <div className='w-full h-fit md:w-[80vw] bg-slate-600/10 overflow-hidden md:h-[40vh] rounded-xl '>
                            <div className='container   md:flex p-4  w-full h-full'>
                                <div className="left w-full h-[80%] md:h-full  md:w-[80%] ">
                                    <div className='top text-right text-sm md:text-md  border-b-2 pb-2  border-cyan-500 w-full md:h-[20%] px-2 md:px-8  md:flex justify-between items-center text-white'>
                                        <h4 className='md:flex font-semibold gap-1 md:justify-center items-center'><IoLocationSharp className='hidden md:flex' fill='white'/> {location}</h4>
                                        <h4 className='font-semibold'>{from} - {to}</h4>
                                        <h4 onClick={()=>window.open(website)}>{website}</h4>
                                    </div>
                                    <div className='bottom w-full md:h-[80%] '>
                                        <div className='expDescContainer w-full md:text-lg text-sm text-white h-full md:px-4 p-4 md:py-6'>
                                            <p>{desc}</p>
                                            </div>
                                    </div>
                                </div>
                                <div className="right h-[20%] md:h-[100%]  md:w-[20%] flex items-center justify-center ">
                                    <div className='imgContainer flex items-center justify-center p-4'>
                                        <img src={logo} className='w-[40%] h-[60%] md:w-[80%] md:h-[80%] object-cover'/>
                                    </div>
                                </div>
                            </div>
                            </div>

                    </div>
  )
}

export default Accordion
