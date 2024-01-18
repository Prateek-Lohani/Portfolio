import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {

  const {register,reset,handleSubmit,formState:{errors}}=useForm();

  return (
    <form className='w-full h-full bg-black/90 px-4 py-4 md:px-20 md:py-10 rounded-md md:rounded-xl'>
        <div className='md:pb-8 mb-4 container text-sm flex gap-4 md:gap-6 w-full'>
          <input type='text' className='w-[40%] h-[6vh] rounded px-2 md:px-8' placeholder='Your Name'/>
          <input type='text' className='w-[60%] h-[6vh] rounded px-2 md:px-8' placeholder='Your Email'/>
        </div>
        <textarea className='md:mb-6 text-sm mb-4 resize-none w-full h-[60%] px-2 md:px-8 py-2 rounded' placeholder='Enter Your Message' />
        <button className='w-[100%] h-[15%] bg-cyan-800 rounded-xl text-md md:text-2xl text-white' type='submit'>Send</button>
    </form>
  )
}

export default Form