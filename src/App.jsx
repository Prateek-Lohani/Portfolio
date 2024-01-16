import { useState } from 'react'
import './App.css'
import Skills from './components/Skills'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Socials from './components/Socials'
import Resume from './components/Resume'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full bg-[#100F10]'>
      <Hero/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Resume/>
      <Socials/>
    </div>
  )
}

export default App
