import React, { useEffect, useState } from "react";
import "../styles/timeline.css";
import TimelineCard from "./TimelineCard";
import { IoCloseCircleOutline } from "react-icons/io5";
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

    console.log(showModal)
    const closePopup = () => {
        popup && setPopup("")
        showModal && setShowModal(false)
    }

    const timelines = [
        {
            year: "2007",
            content: [
                {
                    head: "JEE",
                    desc: `hi this is my 2007 timeline Contrary to popular belief,Contrary Contrary to popular belief, Contra Contrary to popular belief,ry to popular belief, to popular belief,Contrary to popular belief,Contrary to popular belief,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
                },
                {
                    head: "NEET",
                    desc: `hi this is my 2007 NEET timeline Contrary to popular belief,Contrary Contrary to popular belief, Contra Contrary to popular belief,ry to popular belief, to popular belief,Contrary to popular belief,Contrary to popular belief,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
                },
            ]
        },
        {
            year: "2009",
            content: [
                {
                    head: "JEE",
                    desc: `hi this is my 2007 timeline Contrary to popular belief,Contrary Contrary to popular belief, Contra Contrary to popular belief,ry to popular belief, to popular belief,Contrary to popular belief,Contrary to popular belief,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
                },
                {
                    head: "NEET",
                    desc: `hi this is my 2007 NEET timeline Contrary to popular belief,Contrary Contrary to popular belief, Contra Contrary to popular belief,ry to popular belief, to popular belief,Contrary to popular belief,Contrary to popular belief,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
                },
            ]        },
        {
            year: "2010",
            content: [
                {
                    head: "JEE",
                    desc: `hi this is my 2007 timeline Contrary to popular belief,Contrary Contrary to popular belief, Contra Contrary to popular belief,ry to popular belief, to popular belief,Contrary to popular belief,Contrary to popular belief,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
                },
                {
                    head: "NEET",
                    desc: `hi this is my 2007 NEET timeline Contrary to popular belief,Contrary Contrary to popular belief, Contra Contrary to popular belief,ry to popular belief, to popular belief,Contrary to popular belief,Contrary to popular belief,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
                },
            ]
        },
        {
            year: "2011-12",
            content: [
                {
                    head: "JEE",
                    desc: `hi this is my 2007 timeline Contrary to popular belief,Contrary Contrary to popular belief, Contra Contrary to popular belief,ry to popular belief, to popular belief,Contrary to popular belief,Contrary to popular belief,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
                },
                {
                    head: "NEET",
                    desc: `hi this is my 2007 NEET timeline Contrary to popular belief,Contrary Contrary to popular belief, Contra Contrary to popular belief,ry to popular belief, to popular belief,Contrary to popular belief,Contrary to popular belief,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
                },
            ]
        },
        {
            year: "2013-14",
            content: [
                {
                    head: "JEE",
                    desc: `hi this is my 2007 timeline Contrary to popular belief,Contrary Contrary to popular belief, Contra Contrary to popular belief,ry to popular belief, to popular belief,Contrary to popular belief,Contrary to popular belief,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
                },
                {
                    head: "NEET",
                    desc: `hi this is my 2007 NEET timeline Contrary to popular belief,Contrary Contrary to popular belief, Contra Contrary to popular belief,ry to popular belief, to popular belief,Contrary to popular belief,Contrary to popular belief,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
                },
            ]
        },
        {
            year: "2015-16",
            content: [
                {
                    head: "JEE",
                    desc: `hi this is my 2007 timeline Contrary to popular belief,Contrary Contrary to popular belief, Contra Contrary to popular belief,ry to popular belief, to popular belief,Contrary to popular belief,Contrary to popular belief,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
                },
                {
                    head: "NEET",
                    desc: `hi this is my 2007 NEET timeline Contrary to popular belief,Contrary Contrary to popular belief, Contra Contrary to popular belief,ry to popular belief, to popular belief,Contrary to popular belief,Contrary to popular belief,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
                },
            ]
        },
        {
            year: "2016-17",
            content: [
                {
                    head: "JEE",
                    desc: `hi this is my 2007 timeline Contrary to popular belief,Contrary Contrary to popular belief, Contra Contrary to popular belief,ry to popular belief, to popular belief,Contrary to popular belief,Contrary to popular belief,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
                },
                {
                    head: "NEET",
                    desc: `hi this is my 2007 NEET timeline Contrary to popular belief,Contrary Contrary to popular belief, Contra Contrary to popular belief,ry to popular belief, to popular belief,Contrary to popular belief,Contrary to popular belief,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
                },
            ]
        },
        {
            year: "2018-19",
            content: [
                {
                    head: "JEE",
                    desc: `hi this is my 2007 timeline Contrary to popular belief,Contrary Contrary to popular belief, Contra Contrary to popular belief,ry to popular belief, to popular belief,Contrary to popular belief,Contrary to popular belief,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
                },
                {
                    head: "NEET",
                    desc: `hi this is my 2007 NEET timeline Contrary to popular belief,Contrary Contrary to popular belief, Contra Contrary to popular belief,ry to popular belief, to popular belief,Contrary to popular belief,Contrary to popular belief,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
                },
            ]
        },
        {
            year: "2020-21",
            content: [
                {
                    head: "JEE",
                    desc: `hi this is my 2007 timeline Contrary to popular belief,Contrary Contrary to popular belief, Contra Contrary to popular belief,ry to popular belief, to popular belief,Contrary to popular belief,Contrary to popular belief,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
                },
                {
                    head: "NEET",
                    desc: `hi this is my 2007 NEET timeline Contrary to popular belief,Contrary Contrary to popular belief, Contra Contrary to popular belief,ry to popular belief, to popular belief,Contrary to popular belief,Contrary to popular belief,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
                },
            ]
        },
        {
            year: "2022-23",
            content: [
                {
                    head: "JEE",
                    desc: `hi this is my 2007 timeline Contrary to popular belief,Contrary Contrary to popular belief, Contra Contrary to popular belief,ry to popular belief, to popular belief,Contrary to popular belief,Contrary to popular belief,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
                },
                {
                    head: "NEET",
                    desc: `hi this is my 2007 NEET timeline Contrary to popular belief,Contrary Contrary to popular belief, Contra Contrary to popular belief,ry to popular belief, to popular belief,Contrary to popular belief,Contrary to popular belief,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
                },
            ]
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
                            timelineData.map((element, index) => {
                                return <TimelineCard key={index} year={element.year} content={element.content} setShowModal={setShowModal} closeModal={closePopup} setTimeline={setTimeline} />
                            })
                        }
                    </div>
                    {
                        popup &&
                        <div className="popup_image_container">
                            {/* <div className="close_option_wrapper">
                                <IoCloseCircleOutline className="close_option" onClick={() => closePopup()} />
                            </div> */}
                            {/* <div className="popup_image">
                                <img src={popup} alt="timeline pic here" />
                            </div> */}
                        </div>
                    }
                </div>
            </motion.section>
            {showModal && <Modal closeModal={closePopup} timeline={timeline} />}
        </>
    )
}
export default Timeline;