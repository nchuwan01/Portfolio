import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Link, NavLink } from 'react-router-dom';
import IntroduceMe from './../Introduction/introduceMe';
import Projects from './../Projects/projects';
import Skills from './../Skills/skills';
import Resume from './../Resume/resume';
import Contact from './../ContactMe/contact';

import './navBar.css';

function NavBar() {
  // Create refs for each section
  const aboutMeSection = useRef(null);
  const projectSection = useRef(null);
  const skillsSection = useRef(null);
  const resumeSection = useRef(null);
  const contactSection = useRef(null);

  const scrollToSection = (sectionRef) => {
    const yOffset = -100; // Change this to the offset you want (e.g., -100 for 100px above the section)
    const yPosition = sectionRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
  
    window.scrollTo({ top: yPosition, behavior: 'smooth' });  };

  return (
    <div>
      <BrowserRouter>
        <div className='mainDiv'>
          <nav className='leftNav'>
            <NavLink id='name' to="/aboutMe" onClick={() => scrollToSection(aboutMeSection)}>Narayan Chuwan |</NavLink>
            <NavLink className='navTab' to="/aboutMe" onClick={() => scrollToSection(aboutMeSection)}>About Me</NavLink>              
            <NavLink className='navTab' to="/projects" onClick={() => scrollToSection(projectSection)}>Projects</NavLink>
            <NavLink className='navTab' to="/skills" onClick={() => scrollToSection(skillsSection)}>Skills</NavLink>
            <NavLink className="hoverTab" to='/resume' onClick={() => scrollToSection(resumeSection)}>View Resume</NavLink>
          </nav>
          <nav className='rightNav'>
            <NavLink className="hoverTab" id='hireMe' to="/contactMe" onClick={() => scrollToSection(contactSection)}>Contact Me</NavLink>
          </nav>
        </div>
      </BrowserRouter>
      
      {/* Sections */}
   
      <h1 ref={aboutMeSection}> </h1>
        <IntroduceMe/>
      <h1 className='line' ref={projectSection}></h1>
      <Projects />
      <h1 className='line' ref={skillsSection}></h1>
      <Skills />
      <h1 className='line' ref={resumeSection}></h1>
      <Resume />
      <h1 className='line' ref={contactSection}></h1>
      <Contact />
    </div>
  );
}

export default NavBar;


