import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {

  const {register,reset,handleSubmit,formState:{errors}}=useForm();

  const handleForm=(e)=>{
    e.preventDefault();
    reset();
  }

  return (
    <form netlify className='w-full h-fit bg-black/70 px-4 py-4 md:px-20 md:py-10 rounded-md md:rounded-xl'>
        <div className='md:pb-2 mb-4 container text-xs md:text-sm flex gap-4 md:gap-6 w-full'>
          <input  name='userName' type='text' className='w-[40%] h-[6vh] rounded px-2 md:px-8' placeholder='Your Name'/>
          
          <input name='Email' type='text' className='w-[60%] h-[6vh] rounded px-2 md:px-8' placeholder='Your Email'/>
        </div>
        <textarea  name='Message' className='md:mb-4 text-xs md:text-sm resize-none w-full h-[40vh] mb-4 px-2 md:px-8 py-2 rounded' placeholder='Enter Your Message' />
        <button className='w-[100%] h-[8vh] bg-cyan-800 rounded-xl text-md md:text-2xl text-white' type='submit'>Send</button>
    </form>
  )
}

export default Form
