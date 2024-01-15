import { useState } from 'react'
import './App.css'
import Skills from './components/Skills'
import Hero from './components/Hero'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full bg-[#100F10]'>
      <Hero/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App
