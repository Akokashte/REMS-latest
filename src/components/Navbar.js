import React from "react";
import '../styles/navbar.css';
import { HiOutlineDownload } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineDown } from 'react-icons/ai';
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
                            <img src="mainlogo.jpg" alt="logo here" />
                            <div className="logo_title">
                                <h1>Rotary</h1>
                                <span>English Medium School</span>
                            </div>
                        </div>
                        <nav className="navbar">
                            <ul>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink>Academics <AiOutlineDown className="down" /></NavLink>
                                    <ul className="dropdown">
                                        <li><NavLink to="/curriculum">The Right Curriculum</NavLink></li>
                                        <li><NavLink to="/rightfaculty">The Right Faculty</NavLink></li>
                                        <li><NavLink to="/activity">Activities</NavLink></li>
                                        {/* <li><NavLink to="#">Councelling</NavLink></li> */}
                                    </ul>
                                </li>
                                <li><NavLink>Admission <AiOutlineDown className="down" /></NavLink>
                                    <ul className="dropdown">
                                        <li><NavLink to="/admissionprocess">Admission Process</NavLink></li>
                                        <li><NavLink to="/admissionpolicy">Policies</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink>Events <AiOutlineDown className="down" /></NavLink>
                                    <ul className="dropdown">
                                        <li><NavLink to="#">Annual Events</NavLink></li>
                                        <li><NavLink to="#">Achievements</NavLink></li>
                                        <li><NavLink to="#">Gallery</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink to="/infrastructure">Infrastructure</NavLink></li>
                                <li><NavLink to="/facilities">Facilities</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar;