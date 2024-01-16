import React from 'react'

const Resume = () => {
  return (
    <div className=' w-full md:pt-[10vh] h-[30vh] p-4 md:h-[70vh] relative '>
        <h5 className='text-4xl md:text-8xl font-extrabold p-2 text-center font-[circular] text-white md:pb-10'>Resume</h5>
        <div className='w-full p-2 h-[70%] px-4 md:px-12 py-2 flex justify-center items-center md:gap-10 '>
            <div className="left w-[50%] md:w-[30%] md:h-full h-[60%] ">
                    <div className="video w-[80%] h-[100%] mx-auto ">
                    <iframe className='w-full h-full' src="https://lottie.host/embed/8cff1224-ecd8-4227-a55d-a4ef1dbe1a2e/8HdoSdm8IV.lottie"></iframe>
                    </div>
            </div>
            <div className="right h-[5vh] w-[25%] px-2 py-1 md:w-[15%] md:h-[20%] bg-[#60A5FA] rounded-xl">
            <a href='https://drive.google.com/file/d/1PukcDuNcwvHHFI1ggolL8ybMKt4VMxmC/view?usp=sharing' className='h-full flex justify-center overflow-hidden rounded-xl items-center'><div className='text-xs md:text-2xl text-white font-semibold transition-all text-center'>View Now</div></a>
            </div>
        </div>
    </div>
  )
}

export default Resume