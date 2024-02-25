import React, { useState } from "react";
import "../styles/timeline.css";
import TimelineCard from "./TimelineCard";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Timeline = () => {

    const [popup, setPopup] = useState("")

    const closePopup = () => {
        popup && setPopup("")
    }

    const timelines = [
        {
            year: "2007",
            image_url: "timeline1.png"
        },
        {
            year: "2009",
            image_url: "timeline2.png"
        },
        {
            year: "2010",
            image_url: "timeline1.png"
        },
        {
            year: "2011-12",
            image_url: "timeline2.png"
        },
        {
            year: "2013-14",
            image_url: "timeline1.png"
        },
        {
            year: "2015-16",
            image_url: "timeline2.png"
        },
        {
            year: "2016-17",
            image_url: "timeline1.png"
        },
        {
            year: "2018-19",
            image_url: "timeline2.png"
        },
        {
            year: "2020-21",
            image_url: "timeline1.png"
        },
        {
            year: "2022-23",
            image_url: "timeline2.png"
        },
    ]
    return (
        <>
            <motion.section className="timeline_wrapper" initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}>
                <div className="timeline_inner_wrapper">
                    <div className="head_wrapper">
                        <h1>Timeline of rotary english medium school, Khed</h1>
                    </div>
                    <div className="timeline_cards_collection">
                        {
                            timelines.map((element, index) => {
                                return <TimelineCard key={index} year={element.year} image_url={element.image_url} setPopup={setPopup} />
                            })
                        }
                    </div>
                    {
                        popup &&
                        <div className="popup_image_container">
                            <div className="close_option_wrapper">
                                <IoCloseCircleOutline className="close_option" onClick={() => closePopup()} />
                            </div>
                            <div className="popup_image">
                                <img src={popup} alt="timeline pic here" />
                            </div>
                        </div>
                    }
                </div>
            </motion.section>
        </>
    )
}
export default Timeline;