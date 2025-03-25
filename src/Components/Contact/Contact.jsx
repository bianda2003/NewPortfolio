import React from "react";
import './Contact.css'
import ThemePattern from '../../assets/theme_pattern.svg';
import Mail from '../../assets/mail_icon.svg';
import Location from '../../assets/location_icon.svg';
import Call from '../../assets/call_icon.svg';



const Contact =()=>{
    return(
        <div className="Contact">
            <div className="ContactTitle">
                <h1>Get in Touch</h1>
                <img src={ThemePattern} alt="" />
            </div>
            <div className="ContactSection">
                <div className="ContactLeft">
                    <h1>Let's Talk</h1>
                    <p>Im Available</p>
                    <div className="ContactDetail">
                        <div className="ContactDetails">
                            <img src={Mail} alt="" />
                            <p>binadaofficial@gmail.com</p>
                        </div>
                    </div>

                    <div className="ContactDetail">
                        <div className="ContactDetails">
                            <img src={Call} alt="" />
                            <p>+94740018909</p>
                        </div>
                    </div>

                    <div className="ContactDetail">
                        <div className="ContactDetails">
                            <img src={Location}alt="" />
                            <p>131/1,Malinda,Kapugoda,Gampaha,Sri-Lanka</p>
                        </div>
                    </div>  
                </div>
                <form
             className="ContactRight">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder="Enter Your name" name = 'name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder="Enter Your Email" name='email'/>
                <label htmlFor="">Your Message</label>
                <textarea name="message" rows={8} placeholder="Enter Your Message"></textarea>
                <button type='submit'className="ContactButton">
                    Submit Now
                </button>
             </form>
            </div>
            

        </div>
    )
}

export default Contact