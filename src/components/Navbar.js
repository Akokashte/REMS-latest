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
                                <NavLink className="enquire_btn" to="/enquiry" style={{textDecoration:'none'}}>Enquire Now</NavLink>
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
                                <li><NavLink>About REMS <AiOutlineDown className="down" /></NavLink>
                                    <ul className="dropdown">
                                        <li><NavLink to="/principal">Principal's Desk</NavLink></li>
                                        <li><NavLink to="/chairman">Chairmen's Message</NavLink></li>
                                        {/* <li><NavLink to="#">News</NavLink></li> */}
                                        {/* <li><NavLink to="#" >Awards</NavLink></li> */}
                                        {/* <li><NavLink to="#">Social Song</NavLink></li> */}
                                        {/* <li><NavLink to="#">School Outreach</NavLink></li> */}
                                    </ul>
                                </li>
                                <li><NavLink>Academics<AiOutlineDown className="down" /></NavLink>
                                    <ul className="dropdown">
                                        <li><NavLink to="#">Teaching</NavLink></li>
                                        <li><NavLink to="#">Sports</NavLink></li>
                                        <li><NavLink to="/activity">Activities</NavLink></li>
                                        <li><NavLink to="#">Curriculum</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink>Admissions <AiOutlineDown className="down" /></NavLink>
                                    <ul className="dropdown">
                                        <li><NavLink to="/admissionprocess">Admission Process</NavLink></li>
                                        <li><NavLink to="#">Policies</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink to="/facilities">Facilities</NavLink></li>
                                <li><NavLink to="#">News/Events</NavLink></li>
                                <li><NavLink to="#">Careers</NavLink></li>
                                <li><NavLink to="#">Contact Us</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar;