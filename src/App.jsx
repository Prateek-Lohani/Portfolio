import React, { Suspense, lazy } from 'react';
import './App.css';
import Loading from './components/Loading';


const Hero = lazy(() => import('./components/Hero'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Resume = lazy(() => import('./components/Resume'));
const Socials = lazy(() => import('./components/Socials'));


function App() {
  return (
    <Suspense fallback={<Loading />}>
      <div className='w-full bg-[#100F10]'>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Socials />
      </div>
    </Suspense>
  );
}


export default App;