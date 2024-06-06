import React, { useEffect, useState } from "react";
import "../styles/timeline.css";
import TimelineCard from "./TimelineCard";
import { motion } from "framer-motion";
import Modal from "./Modal";
import axios from "axios";

const Timeline = () => {

    const [popup, setPopup] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [timeline, setTimeline] = useState({})
    const [timelineData,setTimelineData] = useState([])
    
    useEffect(()=>{
       getTimeline()
    },[timelineData])

    const getTimeline=async()=>{
        try {
            const timelines =  await axios.get("http://localhost:5000/api/v1/timeline/getdata")
            if(!timelines){
              alert("error while fetching data from backend")
            }
            setTimelineData(timelines.data.data)
        } catch (error) {
            alert("something went wrong while fetching data from backend !")
        }
    }

    const closePopup = () => {
        popup && setPopup("")
        showModal && setShowModal(false)
    }

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
                            timelineData.map((element, index) => {
                                return <TimelineCard key={index} year={element.year} content={element.content} setShowModal={setShowModal} setTimeline={setTimeline} />
                            })
                        }
                    </div>
                    {
                        popup &&
                        <div className="popup_image_container">
                        </div>
                    }
                </div>
            </motion.section>
            {showModal && <Modal closeModal={closePopup} timeline={timeline} />}
        </>
    )
}
export default Timeline;