import React, { useState } from "react";
import "../styles/myaccordian.css";
import { IoIosArrowDropdown } from "react-icons/io";
import { motion } from 'framer-motion';

const MyAccordian = (props) => {
    const { accordian_head, accordian_content } = props;

    const [trigger, setTrigger] = useState(false);

    const RaseTrigger = () => {
        trigger ? setTrigger(false) : setTrigger(true);
    }

    return (
        <>
            <div className="my_accordian" onClick={() => RaseTrigger()}>
                <div className="accordian_head">
                    <span>{accordian_head}</span>
                    <IoIosArrowDropdown className="accordian_dropdown_icon" style={{ transform: trigger ? "rotate(180deg)" : null }} />
                </div>
                {accordian_content.map((curElem, index) => {
                    return (
                        <motion.div
                            key={index} className={trigger ? "accordian_content_click" : "accordian_content"} >
                            <div className="accordian_content_head">
                                {curElem.content_head}
                            </div>
                            <div className="accordian_content_description">
                                {curElem.content_description}
                            </div>
                        </motion.div>
                    )
                })
                }
            </div>
        </>
    )
}

export default MyAccordian;