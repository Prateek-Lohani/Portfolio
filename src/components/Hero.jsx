import React from 'react'

const Hero = () => {
  return (
    <div className='pt-[12vh]  md:p-20 w-full h-screen '>
        <div className='w-full h-full rounded-lg p-10 '>
            <header className='md:flex justify-between '>
                <div className='h-[45vh]  md:h-full md:w-full text-2xl font-semibold'>
                       <h1 className=' w-full relative z-[999]  text-white/80 md:h-[60vh] h-full  text-3xl'>Hello! <br/> I'm <span className='text-5xl md:text-8xl text-cyan-600/95 md:mb-0'>Prateek Lohani.</span><br/><p className='md:text-[18vh] text-[7vh] font-bold leading-[7vh] md:leading-[18vh] md:tracking-wide uppercase '>Frontend Developer</p></h1>
                </div>
                
                <div className='w-[80vw] h-[45vh] md:w-[60%] md:h-[62vh]'>
                <iframe className='w-full h-full' src="https://lottie.host/embed/e1230349-da1c-411e-b237-45eced39c5e2/1SC1cEmtuB.lottie"></iframe>
                </div>
            </header>
        </div>
    </div>
  )
}

export default Hero


