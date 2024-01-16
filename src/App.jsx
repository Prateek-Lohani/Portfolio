import React, { Suspense, lazy ,useEffect,useRef} from 'react';
import './App.css';
import Loading from './components/Loading';
import Nav from './components/Nav';

const Hero = lazy(() => import('./components/Hero'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Resume = lazy(() => import('./components/Resume'));
const Socials = lazy(() => import('./components/Socials'));


function App() {

const skillRef=useRef(null);
const porjectRef=useRef(null);
const experienceRef=useRef(null);
const resumeRef=useRef(null);
const socailsRef=useRef(null);


const scrollToSkills=()=>{
  skillRef.current.scrollIntoView({behavior: 'smooth'});
}
const scrollToResume=()=>{
  resumeRef.current.scrollIntoView({behavior: 'smooth'});
}
const scrollToProjects=()=>{
  porjectRef.current.scrollIntoView({behavior: 'smooth'});
}
const scrollToExperience=()=>{
  experienceRef.current.scrollIntoView({behavior: 'smooth'});
}
const scrollToSocials=()=>{
  socailsRef.current.scrollIntoView({behavior: 'smooth'});
}

  return (
    <Suspense fallback={<Loading />}>
      <div className='w-full bg-[#100F10]'>
        <Nav scrollToSkills={scrollToSkills} scrollToExperience={scrollToExperience} scrollToResume={scrollToResume} scrollToProjects={scrollToProjects} scrollToSocials={scrollToSocials}/>
        <Hero />
        <Skills refer={skillRef}/>
        <Projects refer={porjectRef}/>
        <Experience refer={experienceRef}/>
        <Resume refer={resumeRef}/>
        <Socials refer={socailsRef}/>
      </div>
    </Suspense>
   
  );
}


export default App;