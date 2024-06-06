import React from "react"
import '../styles/footer.css'
import { GrYoutube, GrFacebook, GrInstagram } from 'react-icons/gr';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div id='main-footer'>
                    <div id='contact-us'>
                        <div id='contact-us-head'>
                            <h1>Contact Us</h1>
                        </div>
                        <div id='contact-us-main'>
                            <h2>Baitwadi, Bharne,Tal.khed, Dist. Ratnagiri 415709</h2>
                            <h2>Telephone : 123456789</h2>
                            <h2>Email : rems21@gmail.com</h2>
                        </div>
                    </div>
                    <div id='footer-links'>
                        <h1>Quick Links</h1>
                        <ul>
                            <li><NavLink to="/">Home </NavLink></li>
                            <li><NavLink to="/about">About Us</NavLink></li>
                            <li><NavLink to="/infrastructure">Infrastructure</NavLink></li>
                            <li><NavLink to="/gallery">Gallery</NavLink></li>
                            <li><NavLink to="/admissionpolicy">Academic Process</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div id='copyright-area'>
                    <div id='copyright-area-socialmedia'>
                        <NavLink target="__blank" to={"https://www.youtube.com/@rotaryschoolliveevent4606"}><GrYoutube className="social_icon" size={42} color='#832996' /></NavLink>
                        <NavLink target="__blank" to={"https://www.facebook.com/RotaryEMSKhed/"}><GrFacebook className="social_icon" size={32} color='#832996' /></NavLink>
                        <NavLink target="__blank" to={"https://www.instagram.com/rotaryems_khed/"}><GrInstagram className="social_icon" size={32} color='#832996' /></NavLink>
                    </div>
                    <div id='copyright-area-copy'>
                        <h2>@Copyright | Privacy Policy 2024 | Designed by SARS</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;