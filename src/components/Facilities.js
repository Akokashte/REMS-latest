import React from "react";
import HeroSectionImageBox from "./HeroSectionImageBox";
import { NavLink } from "react-router-dom";
import facility_cards from "./facility_cards";

const Facilities = () => {
    return (
        <>
            <HeroSectionImageBox />
            <section id="my_school_facility">
                <section className="facility_section">
                    <div className="inner_facility_section">
                        <div className="top_heading">
                            <p>WHAT ROTARY HAS TO OFFER</p>
                            <h2>Rotary's facilities include:</h2>
                        </div>
                        <div className="facility_card_container">
                            {
                                facility_cards.map((curElem, index) => (
                                    <div className="facility_card">
                                        <div className="inner_facility_card">
                                            {curElem.component}
                                            <h2>{curElem.heading}</h2>
                                            <p>{curElem.desc}</p>
                                            <NavLink className="read_more">Read More+</NavLink>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
export default Facilities;