import React from "react";
import './NavBar.css';

const NavBar =()=>{
    return(
        <div className="NavBar">
            {/* <img src={Logo} alt="" /> */}
            <ul className="NavMenu">
                <li>Home</li>
                <li>About Me</li>
                <li>Services</li>
                <li>Projects</li>
            </ul>

            <div className="NavConnect">Connect With Me</div>

        </div>
    )
}

export default NavBar