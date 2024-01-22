import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'


const Hero = () => {
  const tl=gsap.timeline();
  useGSAP(()=>{
    tl.from('.hero-text',{
      scale:0,
      opacity:0,
      delay:2,
      duration:1.2,
      stagger:0.6
    })

    tl.to('.hero-text',{
      scale:0,
      opacity:0,
      duration:.3,
      stagger:0.1
    })

    tl.from('.myintrodiv',{
      display:'hidden',
      duration:.5,
      y:-100,
      opacity:0
  })
  tl.from('.myintrodiv  h1',{
    display:'hidden',
    duration:.3,
    y:-150,
    opacity:0,
    stagger:0.2
})

tl.from('.aboutmediv',{
  opacity:0
})
  })

  return (
    <div className=' bg-[#151515] w-full h-screen flex items-center justify-center'>
       
            
            <div data-scroll data-scroll-speed="5" className="div-herotext w-full  py-8 overflow-hidden z-4 flex justify-center text-white text-[6vw] md:text-7xl">
            <h2 className="hero-text ">
                Responsive.
            </h2>
            <h2 className="hero-text">
                User-friendly.</h2>
                <h2 className="hero-text">Innovative.</h2>
                
            </div>


            <div  className="left md:pt-12 w-[85%] h-[30%] myintrodiv text-white  absolute top-[25%] md:flex flex-col justify-top  md:justify-top text-6xl md:text-6xl md:w-[60%] md:h-[60%]">
                <h2 className='font-semibold text-center mb-4 md:mb-0'>Hey There!<br/><p>I'm,</p></h2>
                
                <div className="name flex gap-3 justify-center text-[16vw] md:text-[10vw] font-cursive">
                    <h1>P</h1>
                    <h1>R</h1>
                    <h1>A</h1>
                    <h1>T</h1>
                    <h1>E</h1>
                    <h1>E</h1>
                    <h1>K</h1>
                    <div className='hidden md:flex items-end justify-end'>
                <iframe  src="https://lottie.host/embed/7df00b48-baaa-4242-b60f-814dd2a47500/ekha6wS0n4.lottie"></iframe>

                    </div>

                </div>
                
            </div>
            <div className='md:hidden absolute top-[50%]'>
                <iframe  src="https://lottie.host/embed/7df00b48-baaa-4242-b60f-814dd2a47500/ekha6wS0n4.lottie"></iframe>

                    </div>
            <div className="md:top-[70%] top-[70%] w-[80%] text-lg md:text-2xl md:w-[45%] text-white aboutmediv absolute">
              <p>I am an Engineer at <span className='hover:text-[#4A48AA] hover:cursor-pointer duration-200'>Tata Consultancy Services</span>  with a background of computer science, I am always passionate about crafting immersive and engaging experiences, playing my tiny little part in shaping the future of the web.</p>
            </div>
    </div>
  )
}

export default Hero


{/* <div className='w-full h-full rounded-lg p-10 '>
            <header className='md:flex justify-between '>
                <div className='h-[45vh]  md:h-full md:w-full text-2xl font-semibold'>
                       <h1 className=' w-full relative z-[999]  text-white/80 md:h-[60vh] h-full  text-3xl'>Hello! <br/> I'm <span className='text-5xl md:text-8xl text-cyan-600/95 md:mb-0'>Prateek Lohani.</span><br/><p className='md:text-[18vh] text-[7vh] font-bold leading-[7vh] md:leading-[18vh] md:tracking-wide uppercase '>Frontend Developer</p></h1>
                </div>
                
                <div className='w-[80vw] h-[45vh] md:w-[60%] md:h-[62vh]'>
                <iframe className='w-full h-full' src="https://lottie.host/embed/e1230349-da1c-411e-b237-45eced39c5e2/1SC1cEmtuB.lottie"></iframe>
                </div>
            </header>
        </div> */}