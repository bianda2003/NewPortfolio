import React from "react";
import './Follow.css';
import ThemePattern from '../../assets/theme_pattern.svg';
import LinkedIn from '../../assets/LinkedIn.svg';
import Git from '../../assets/Git.svg';
import Insta from '../../assets/Insta.svg';
import FB from '../../assets/FB.svg';
import Whatssap from '../../assets/Whatssap.svg';
import YT from '../../assets/YT.svg';

const Follow = () => {
    return (
        <div className="Follow">
            <div className="FollowTitle">
                <h1>Follow Me</h1>
                <img src={ThemePattern} alt="" />
            </div>

            <div className="links-container">
                <div className="links">
                    <a href="https://www.linkedin.com/in/binada-pasandul-4056b029a/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedIn} alt="LinkedIn" />
                    </a>
                    <p>LinkedIn</p>
                </div>

                <div className="links">
                    <a href="https://github.com/bianda2003" target="_blank" rel="noopener noreferrer">
                        <img src={Git} alt="GitHub" />
                    </a>
                    <p>GitHub</p>
                </div>

                <div className="links">
                    <a href="https://www.instagram.com/_b_nidu_?igsh=MWRmczh0M3d5d25qYQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                        <img src={Insta} alt="Instagram" />
                    </a>
                    <p>Instagram</p>
                </div>

                <div className="links">
                    <a href="https://www.facebook.com/share/158cfM8T3C/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                        <img src={FB} alt="Facebook" />
                    </a>
                    <p>Facebook</p>
                </div>

                <div className="links">
                    <a href="https://wa.me/94740018909" target="_blank" rel="noopener noreferrer">
                        <img src={Whatssap} alt="WhatsApp" />
                    </a>
                    <p>WhatsApp</p>
                </div>

                <div className="links">
                    <a href="https://youtube.com/@rapid_demon?si=8vjQCTsORQ5pXyyU" target="_blank" rel="noopener noreferrer">
                        <img src={YT} alt="YouTube" />
                    </a>
                    <p>YouTube</p>
                </div>
            </div>
        </div>
    );
};

export default Follow;
