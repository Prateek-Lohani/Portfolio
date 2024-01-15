import React from 'react'

const Hero = () => {
  return (
    <div className='md:p-20 p-10 w-full h-screen'>
        <div className='w-full h-full rounded-lg p-10 '>
            <header>
                <h3 className='text-2xl font-semibold'>Hi</h3>
                <h1></h1>
                <video src='anim.mp4' autoPlay muted loop></video>
                <h1 className='text-white'>Love You Maanu ❤️</h1>
            </header>
        </div>
    </div>
  )
}

export default Hero