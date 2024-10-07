import "./skills.css";
import JSImage from './../../img/jsImage.png';
import ReactImage from './../../img/reactImg.png';
import NodeImage from './../../img/nodeImg.png';
import JavaImage from './../../img/javaImg.png';
import SBImage from './../../img/SBImg.png';
import AWSImage from './../../img/AWSImage.png';
import Git from "./../../img/gitImg.png";
import GitHub from "./../../img/githubImg.png";
import MySQL from "./../../img/mysqlImg.png";
import Native from "./../../img/nativeImg.png";




function Skills()
{

    return (
        <div>
            <div className="title">
                <h1>My Skills</h1>
            </div>
            <div className="skillsDiv">
                <div className="skillDiv" id="jsDiv">
                    <img src={JSImage}/>
                    <div id="jsData">Javascript</div>
                </div>
                <div className="skillDiv" id="reactDiv">
                    <img src={ReactImage}/>
                    <div>React</div>
                
                </div>
                <div className="skillDiv" id="nodeDiv" > 
                    <img src={NodeImage}/>
                    <div>Nodejs</div>
                </div>
                <div className="skillDiv" id="javaDiv">
                    <img src={JavaImage}/>
                    <div>Java</div>
                 </div>
                <div className="skillDiv" id="sbDiv">
                    <img src={SBImage}/>
                    <div>Spring Boot</div>    
                 </div>
                <div className="skillDiv" id="awsDiv">
                    <img src={AWSImage}/>
                    <div>AWS</div> 
            
                 </div>
                 <div className="skillDiv">
                    <img src={Git}/>
                    <div>Git</div>    
                 </div>
                <div className="skillDiv">
                    <img src={GitHub}/>
                    <div>GitHub</div> 
            
                 </div>
                 <div className="skillDiv">
                    <img src={MySQL}/>
                    <div>MySQL</div>    
                 </div>
                <div className="skillDiv">
                    <img src={Native}/>
                    <div>React Native</div> 
            
                 </div>
            </div>

            
        </div>
    )

}

export default Skills;