import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React,{useState} from 'react'


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

tl.from('.mobcat',{
  opacity:0,
  duration:0.2
})

tl.from('.aboutmediv,.scrollbtn',{
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


            <div  className="left md:pt-12 w-[85%] h-[30%] myintrodiv text-white  absolute top-[22vh] md:top-[21vh] md:flex flex-col justify-top  md:justify-top text-4xl md:text-6xl md:w-[60%] md:h-[60%]">
                <h2 className='md:font-[900] uppercase text-center mb-4 md:mb-0'>Hey there!<br/><p className='md:mt-4'>I'm,</p></h2>
                
                <div className=" name flex md:gap-3 justify-center text-[20vw] gap-1 mt-10 md:mt-2 md:text-[10vw] font-cursive">
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
            <div className='mobcat md:hidden absolute top-[45vh]'>
                <iframe  src="https://lottie.host/embed/7df00b48-baaa-4242-b60f-814dd2a47500/ekha6wS0n4.lottie"></iframe>

                    </div>
            <div className=" md:flex md:justify-center md:tracking-wide font-semibold md:top-[75vh] top-[60vh] p-5 md:p-0 text-[4vw] md:text-[2.3vh] md:w-full text-white aboutmediv absolute">
              <p className='md:w-[60%] md:px-4 md:text-center'> 
               <span className='hover:text-[#605ecd] font-thin hover:cursor-pointer duration-500'>4.5+ years</span>  of transforming complex ideas into elegant, performant web applications. Specializing in React, Redux, and modern frontend architecture with a passion for creating interfaces that users love.
              </p>
            </div>
            <div className='scrollbtn hidden md:flex md:absolute top-[90vh] left-[50vw]  -translate-x-[50%] w-[2.5vw] h-[2.5vw]'>
            <iframe className='w-full h-full object-cover' src="https://lottie.host/embed/d198cba3-4305-4774-b0d3-572a5d4a2cd5/bJDk4jNYPH.lottie"></iframe>
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
