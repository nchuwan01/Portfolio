import React, { useEffect, useState } from 'react';
import './projects.css';
import {Button} from 'react-bootstrap';
import LoginPage from "./../../img/LoginPage.jpg";
import Messaging from "./../../img/Messaging.jpg";
import RegistrationPage from "./../../img/RegistrationPage.jpg";
import ReportForm from "./../../img/ReportForm.jpg";
import FilledOutForm from "./../../img/filledoutForm.jpg";
import ReportsPage from "./../../img/ReportsPage.jpg";
import GitHub from "./../../img/githubImg.png";




function Projects() {

    const[num, setNum] = useState(0);
    const imagesLoc = 
    [
        LoginPage,
        RegistrationPage,
        ReportForm,
        FilledOutForm,
        Messaging,
        ReportsPage


    ]


    useEffect(() =>{

        const interval = setInterval(() => {
            setNum(num + 1);
            console.log(num);

            if(num == imagesLoc.length-1)
            {
                setNum(0);
            }

        }, 3000);
        return () => clearInterval(interval);

    })
   
   
  
    


  return (
    <div>
        <div>
            <div className="title"><h1>Mobile and Web Projects</h1></div>
            <div>
                <div className='ProjectDiv'>
                        {/* <div>
                            Project 1: Report A Problem. Contains mobile and web portion.
                            Mobile portion is to sign up, sign in, report problems, send messages and keep track of report status.
                            Web portion is for school administrators to manage tickets by updating status, leaving notes, and redirecting ticket.
                        </div> */}
                        <div className='showProjectDiv'>
                            <div id='imageDiv'>
                                <img className="projectImage" src={imagesLoc[num]} />
                            </div>
                            <div className='divText'>
                            The final capstone project is a mobile application designed to assist Aurora University students in reporting campus issues. 
                            This app allows users to sign up and log in, complete a report form, send messages, 
                            and check the status of their submitted tickets. Key features include the ability to upload images, utilize Firebase for authentication, 
                            and leverage React Native for development. The app uses PostgreSQL for database queries
                            and CockroachDB for data storage.

                             </div>
                            <a href='https://github.com/Nookol/AU-Alert' target='_blank'><img src={GitHub}/></a>

            
                        </div>
                            
                        <div className='showProjectDiv'>
                            <div>
                                <video controls autoPlay muted loop>
                                    <source src="/finalWebVideo.mp4" type="video/mp4" />
                                </video>

                            </div>
                          
                            <div className='divText'>
                            The second component of the final capstone project is a web application
                             that enables school staff to review and manage tickets submitted through the mobile app. 
                             Staff members can view the ticket descriptions, images, and locations provided by students.
                              They can also leave notes for other reviewers and update the ticket status. 
                            Any changes made will be reflected in the mobile application.                      
                             </div>
                             <a href='https://github.com/nchuwan01/AUAdminReport/tree/master/src' target='_blank'><img src={GitHub}/></a>

                        </div>    

                </div>
                
            </div>
           

        </div>          
        
    </div>

  );
}

export default Projects;