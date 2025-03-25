import React from "react";
import ProfilePic from '../../assets/ProfilePic.jpg'
import './Hero.css'

const Hero =() =>{
    return(
        <div className="Hero">
            <div className="profile_pic">
            <img src={ProfilePic} alt="Profile Picture" />
            </div>
            <h1><span>I'M Binada Niduwara,</span> Front End Developper based in Sri-Lanka</h1>
            <p>Hi, I'm Binada Niduwara, a passionate Front End Developer</p>
            <div className="HeroAction">
                <div className="HeroConnect">Connect With Me</div>
                <div className="HeroResume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero