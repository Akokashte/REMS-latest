import React from "react";
import HeroSectionCarousel from "./HeroSectionCarousel";
import { HiMiniBuildingLibrary } from 'react-icons/hi2';
import { GiRobotGolem } from 'react-icons/gi';
import { FaLaptop } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { SlChemistry } from 'react-icons/sl';
import { NavLink } from "react-router-dom";

const Facilities = () => {
    return (
        <>
            <section id="my_school_facility">
                <HeroSectionCarousel />
                <section className="facility_section">
                    <div className="inner_facility_section">
                        <div className="top_heading">
                            <p>WHAT TRINITY HAS TO OFFER</p>
                            <h2>Trinity's facilities include:</h2>
                        </div>
                        <div className="facility_card_container">
                            <div className="facility_card">
                                <div className="inner_facility_card">
                                    <HiMiniBuildingLibrary className="library" />
                                    <h2>Library services and facilities</h2>
                                    <p>Rotary is a community of readers. The libraries across our 3 campuses deliver a range of programmes</p>
                                    <NavLink className="read_more">Read More+</NavLink>
                                </div>
                            </div>
                            <div className="facility_card">
                                <div className="inner_facility_card">
                                    <GiRobotGolem className="library" />
                                    <h2>Library</h2>
                                    <p>Rotary is a community of readers. The libraries across our 3 campuses deliver a range of programmes</p>
                                    <NavLink className="read_more">Read More+</NavLink>
                                </div>
                            </div>
                            <div className="facility_card">
                                <div className="inner_facility_card">
                                    <FaLaptop className="library" />
                                    <h2>Information Communication Technology</h2>
                                    <p>Rotary is a community of readers. The libraries across our 3 campuses deliver a range of programmes</p>
                                    <NavLink className="read_more">Read More+</NavLink>
                                </div>
                            </div>
                            <div className="facility_card">
                                <div className="inner_facility_card">
                                    <GiTeacher className="library" />
                                    <h2>Counceling</h2>
                                    <p>Rotary is a community of readers. The libraries across our 3 campuses deliver a range of programmes</p>
                                    <NavLink className="read_more">Read More+</NavLink>
                                </div>
                            </div>
                            <div className="facility_card">
                                <div className="inner_facility_card">
                                    <SlChemistry className="library" />
                                    <h2>Science Laboratory</h2>
                                    <p>Roatary is a community of readers. The libraries across our 3 campuses deliver a range of programmes</p>
                                    <NavLink className="read_more">Read More+</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
export default Facilities;