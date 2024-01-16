import React from 'react'

const Resume = () => {
  return (
    <div className=' w-full h-fit md:pt-[10vh] p-4 relative'>
      <div className='flex justify-center items-center flex-col text-white'>
        <h5 className='text-4xl md:text-8xl font-extrabold p-2 font-[circular]'>Resume</h5>
        <div className='w-full md:w-[70vh] h-[20vh] md:h-[30vh] flex'>
              <div className="left w-[50%] ">
               <iframe className='w-full h-full' src="https://lottie.host/embed/8cff1224-ecd8-4227-a55d-a4ef1dbe1a2e/8HdoSdm8IV.lottie"></iframe>
              </div>
              <div className="right w-[50%]  flex items-center justify-center">
                <button onClick={()=>window.open('https://drive.google.com/file/d/1PukcDuNcwvHHFI1ggolL8ybMKt4VMxmC/view')} className='bg-cyan-500 w-fit px-4 py-2 h-fit rounded'>View Resume</button>
              </div>
        </div>
        </div>
   </div>
  )
}

export default Resume


// https://drive.google.com/file/d/1PukcDuNcwvHHFI1ggolL8ybMKt4VMxmC/view?usp=sharing