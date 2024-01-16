import React from 'react'

const Hero = () => {
  return (
    <div className='md:p-20 w-full h-screen '>
        <div className='w-full h-full rounded-lg p-10 '>
            <header className='md:flex justify-between '>
                <div className='h-[45vh]  md:h-full md:w-full text-2xl font-semibold'>
                    <h1 className='text-white text-center p-3 md:text-5xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus esse tempore quasi id quia obcaecati est minus sit unde, saepe, deserunt rerum soluta, at ipsa nesciunt. Adipisci ullam eius in.</h1>
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


