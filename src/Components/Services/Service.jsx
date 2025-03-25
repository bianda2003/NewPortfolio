import React from "react";
import './Services.css';
import theme_pattern from'../../assets/theme_pattern.svg'

const Services=()=>{
    return(
        <div className="Services">
            <div className="ServicesTitle">
                <h1>My Services</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="ServiceContainer">
                <div className="ServisesData"> <h2>UI UXDesign</h2></div>
                <div className="ServisesData"> <h2>Web Development</h2></div>
                <div className="ServisesData"> <h2>Full-Stack Development</h2></div>
                <div className="ServisesData"> <h2>ML Models</h2></div>
                <div className="ServisesData"> <h2>Data Analysis</h2></div>
                <div className="ServisesData"> <h2>Data Visualizing</h2></div>
            </div>
        </div>
    )
}

export default Services