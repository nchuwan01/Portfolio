import React, {useEffect, useRef} from 'react';
import './introduceMe.css';
import { useLocation } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import portfolioImage from "./../../img/profolio.jpg";
import Linkedln from "./../../img/linkedln.png";
import Github from "./../../img/githubImg.png";
import Projects from '../Projects/projects';
import Skills from '../Skills/skills';
import Resume from '../Resume/resume';
import Contact from '../ContactMe/contact';


function IntroduceMe() {

  const section1Ref = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  // useEffect(()=>{

  //   console.log(location.pathname);

  // }, location);

  return (
    <div>

        <div className='mainIntroBody'>
          <div id="extraInfo">
            <h1> Hello! I am Narayan Chuwan</h1>
            <p> Hello! I recently graduated from Aurora University with a Bachelor of Science in Computer Science, 
            where I spent four years learning about computers and building mobile and web applications using a variety of programming languages and tools.
            During my time at AU, I focused on designing and developing projects that address real-world challenges, 
            both independently and as part of collaborative teams. Now, as an aspiring software developer, 
            I’m eager to launch my career in an entry-level role where I can apply the knowledge and skills
            I’ve gained through coursework and personal projects to make a meaningful impact in the tech world.


            </p>
           

         
           
          </div>
          <div id="imageDiv">
              <img id = "pfpImage" src={portfolioImage} alt="Logo" />
            </div>
            <div id="imgsAbout">
              <a href='https://www.linkedin.com/in/narayanchuwan/' target='_blank'><img src={Linkedln}/> </a>
              <a href='https://github.com/nchuwan01' target='_blank'><img src={Github}/></a>

            </div>
           
        
        </div>
        


        </div>

  );
}

export default IntroduceMe;