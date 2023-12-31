import React from "react"
import '../styles/footer.css'
import { GrYoutube, GrFacebook, GrInstagram } from 'react-icons/gr';

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
                            <h2>Baitwadi,Bharne,Tal.khed,Dist. Ratnagiri 415709</h2>
                            <h2>Telephone : 123456789</h2>
                            <h2>Email : abs@gmail.com</h2>
                        </div>
                    </div>
                    <div id='footer-links'>
                        <h1>Quick Links</h1>
                        <ul>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Career</a></li>
                            <li><a href="/">Gallery</a></li>
                            <li><a href="/">Message</a></li>
                        </ul>
                    </div>
                </div>
                <div id='copyright-area'>
                    <div id='copyright-area-socialmedia'>
                        <GrYoutube size={42} color='#832996' />
                        <GrInstagram size={32} color='#832996' />
                        <GrFacebook size={32} color='#832996' />
                    </div>
                    <div id='copyright-area-copy'>
                        <h2>@Copyright | Privacy Policy | Designed by SARS</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;