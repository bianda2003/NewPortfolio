import React from "react";
import './About.css';
import theme_pattern from'../../assets/theme_pattern.svg'
import ProfilePic from '../../assets/ProfilePic.jpg'

const About =()=>{
    return(
        <div className="About">
            <div className="AboutTitle">
                <h1>About ME</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="AboutSection">
                <div className="AboutLeft">
                    {/*<img src={ProfilePic} alt="" />*/}
                </div>
                <div className="Aboutright">
                    <div className="AboutPara">
                        <p>I am an experienced Front-End Developer with over a decade of professional expertise in building dynamic, user-friendly web applications. Throughout my career, I have had the privilege of working on innovative projects that enhance user experiences and drive business growth. </p>
                        <p>I am passionate about front-end development and data visualization, creating seamless user experiences with visually compelling designs. I love transforming complex data into interactive and insightful visual representations that drive meaningful decision-making.</p>
                    </div>
                    <div className="AboutSkills">
                        <div className="AboutSkill"><p>HTML & CSS</p><hr style={{width:"70%"}}/></div>
                        <div className="AboutSkill"><p>React JS</p><hr style={{width:"65%"}}/></div>
                        <div className="AboutSkill"><p>Java Script</p><hr style={{width:"55%"}}/></div>
                        <div className="AboutSkill"><p>SQL</p><hr style={{width:"70%"}}/></div>
                        <div className="AboutSkill"><p>Mongo DB</p><hr style={{width:"50%"}}/></div>
                        <div className="AboutSkill"><p>Python</p><hr style={{width:"65%"}}/></div>
                        <div className="AboutSkill"><p>R</p><hr style={{width:"60%"}}/></div>
                        <div className="AboutSkill"><p>Power BI</p><hr style={{width:"50%"}}/></div>
                        
                        
                    </div>
                </div>
            </div>
            <div className="AboutAcievements">
                <div className="AboutAchievement">
                    <h1>3+</h1>
                    <p>YERS OF EXPERIANCE</p>
                </div>
                <hr />
                <div className="AboutAchievement">
                    <h1>10+</h1>
                    <p>COMPLETED PROJECTS</p>
                </div>    
            </div>
        </div>
    )
}
export default About