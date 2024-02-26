import React from "react";
import "../styles/HeadImageLine.css";
import { motion } from "framer-motion";

const HeadImageLine = (props) => {
    const { headLine, featuredImage, isAbout } = props
    return (
        <>
            <div className="adpro1" id={isAbout ? "about" : ""}>
                {
                    headLine ?
                        <div className="adpro1-head">
                            <h1>{headLine}</h1>
                        </div>
                        : <div style={{ height: "3rem" }}></div>
                }
                <div className="adpro1-line">
                    <div></div>
                </div>
                <motion.div className="adpro1-image"
                    initial={{ opacity: 0, scale:0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={featuredImage} alt="" />
                </motion.div>
            </div>
        </>
    )
}

export default HeadImageLine;