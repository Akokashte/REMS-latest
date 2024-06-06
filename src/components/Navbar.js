import React, { useState } from "react";
import '../styles/navbar.css';
import { HiOutlineDownload } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineDown } from 'react-icons/ai';
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

    const [showHamburger,setShowHamburger] = useState(false)


    const afterLinkClick=()=>{
        setShowHamburger(false)
    }
    return (
        <>
            <header>
                <div className="head1">
                    <div className="innerhead_part">
                        <div className="download_section">
                            <HiOutlineDownload className="download_icon" />
                            <NavLink to='#' className="brochure" >Download Brochure</NavLink>
                        </div>
                        <div className="searchgroup">
                            <div className="search_container">
                                <input type="search" className='search' placeholder='Search Rotary English Medium School near you' />
                                <BiSearch className="search_icon" />
                            </div>
                            <div>
                                <NavLink className="enquire_btn" to="/enquiry" style={{ textDecoration: 'none' }}>Enquire Now</NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                {/* second head part */}
                <div className="head2">
                    <div className="head2_inner_container">
                        <div className="logo_container">
                                <img src="remslogo.png" alt="logo here" />
                        </div>
                        <nav className={!showHamburger ? "navbar mobile_navbar" :"navbar"}>
                            <ul>
                            {showHamburger &&
                                <div className="cross_icon"><IoMdClose onClick={()=>setShowHamburger(!showHamburger)} /></div>
                            }
                                <li onClick={afterLinkClick}><NavLink to="/">Home</NavLink></li>
                                <li onClick={afterLinkClick}><NavLink to="/about">About</NavLink></li>
                                <li><NavLink>Academics <AiOutlineDown className="down" /></NavLink>
                                    <ul className="dropdown">
                                        <li onClick={afterLinkClick}><NavLink to="/curriculum">The Right Curriculum</NavLink></li>
                                        <li onClick={afterLinkClick}><NavLink to="/rightfaculty">The Right Faculty</NavLink></li>
                                        <li onClick={afterLinkClick}><NavLink to="/activity">Activities</NavLink></li>
                                        {/* <li><NavLink to="#">Councelling</NavLink></li> */}
                                    </ul>
                                </li>
                                <li><NavLink>Admission <AiOutlineDown className="down" /></NavLink>
                                    <ul className="dropdown">
                                        <li onClick={afterLinkClick}><NavLink to="/admissionprocess">Admission Process</NavLink></li>
                                        <li onClick={afterLinkClick}><NavLink to="/admissionpolicy">Policies</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink>Events <AiOutlineDown className="down" /></NavLink>
                                    <ul className="dropdown">
                                        <li onClick={afterLinkClick}><NavLink to="annualevents">Annual Events</NavLink></li>
                                        <li onClick={afterLinkClick}><NavLink to="achievements">Achievements</NavLink></li>
                                        <li onClick={afterLinkClick}><NavLink to="gallery">Gallery</NavLink></li>
                                    </ul>
                                </li>
                                <li onClick={afterLinkClick}><NavLink to="/infrastructure">Infrastructure</NavLink></li>
                                {/* <li><NavLink to="/facilities">Facilities</NavLink></li> */}
                            </ul>
                        </nav>
                        
                        <div className="hamburger_menu">
                            <GiHamburgerMenu className="hamburger" onClick={()=>{setShowHamburger(!showHamburger)}} />
                        </div>

                    </div>
                </div>

            </header>
        </>
    )
}

export default Navbar;