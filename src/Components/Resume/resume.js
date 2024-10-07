import React from 'react';
import {Button} from 'react-bootstrap';
import ResumeImg from "./../../img/Resume.jpg";
import "./../Resume/resume.css";

function Resume() {
  return (
    <div>
        <div className='title'> <h1>Resume</h1></div>
        <a href='https://storage.googleapis.com/resume-hosting/67045b850a288.pdf' target='_blank'> 
          <div className='mainIntroBodyRes'>
            <img id="ResumeSize" src={ResumeImg}/>
          
          </div>
        </a>
        
        </div>

  );
}

export default Resume;