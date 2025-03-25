import React from "react";
import './Projects.css';
import ThemePattern from '../../assets/theme_pattern.svg';
import Project1 from '../../assets/Project1.png';
import Project2 from '../../assets/Project2.png';
import Project3 from '../../assets/Project3.png';
import Project4 from '../../assets/Project4.png';
import Project5 from '../../assets/Project5.png';
import Arrow from'../../assets/arrow_icon.svg';

const Projects = () => {
    return (
        <div className="Projects">
            <div className="ProjectTitle">
                <h1>Latest Projects</h1>
                <img src={ThemePattern} alt="" />
            </div>
            <div className="ProjectsContainer">
                <div className="ProjectData">
                    <div className="ProjectImageContainer">
                        <img src={Project5} alt="Project 1" />
                    </div>
                </div>
                <div className="ProjectData">
                    <div className="ProjectImageContainer">
                        <img src={Project4} alt="Project 2" />
                    </div>
                </div>
                <div className="ProjectData">
                    <div className="ProjectImageContainer">
                        <img src={Project3} alt="Project 3" />
                    </div>
                </div>
                <div className="ProjectData">
                    <div className="ProjectImageContainer">
                        <img src={Project2} alt="Project 4" />
                    </div>
                </div>
                <div className="ProjectData">
                    <div className="ProjectImageContainer">
                        <img src={Project1} alt="Project 5" />
                    </div>
                </div>
                
            </div>
            <div className="ShowMore">
                    <p>ShowMore</p>
                    <img src={Arrow}alt="" />
            </div>
        </div>
    );
};

export default Projects;
