import React from "react";
import "../styles/HeadImageLine.css";

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
                        : <div style={{ height: "3rem" }}></div>}                <div className="adpro1-line">
                    <div></div>
                </div>
                <div className="adpro1-image">
                    <img src={featuredImage} alt="" />
                </div>
            </div >
        </>
    )
}

export default HeadImageLine;