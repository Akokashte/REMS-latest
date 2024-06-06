import React from "react";
import { motion } from "framer-motion";
import '../styles/modal.css';

const Modal = (props) => {
    const { closeModal, timeline } = props

    console.log('timeline = ', timeline)
    return (
        <>
            <motion.div className="modal_external_wrapper" initial={{ opacity: 0 }} onEnded={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <div className="modal_wrapper" onClick={closeModal}></div>
                <div className="modal_container">
                    <h2>Timeline {timeline.year}</h2>
                    <div className="para_btn_container">
                        <div className="scrollbar">
                            {
                                timeline.content.map((curElem, index) => {
                                    return (
                                        <div key={index} className="head_para_of_modal_content">
                                            <h2>{curElem.head}</h2>
                                            <p>{curElem.desc}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="accept_btn" onClick={closeModal}>Close</div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Modal;