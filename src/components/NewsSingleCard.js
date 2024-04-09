import React from "react";

const NewsSingleCard =()=>{
    return(
        <>
            <div className="newsCardContainer">
            <div className="newsImageWrapper">
                <img src="admi2.png" alt="admissionImage"/>
            </div>
            <div className="paraLinkContainer">
                <div className="newsHeadline">
                Here first news headline comes and this is dummy one
                </div>
                <div className="readMoreLink">
                    read more
                </div>
            </div>
        </div>
        </>
    )
}

export default NewsSingleCard;