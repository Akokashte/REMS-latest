import React from "react";

const TimelineCard = (props) => {
    const { year, image_url,setPopup } = props
    const handlePopUp =(image_url)=>{
        console.log(image_url)
        setPopup(image_url)
    }
    return (
        <>
            <div className="timeline_card" onClick={()=>handlePopUp(image_url)}>
                <div className="line_dot">
                    <div className="line">

                    </div>
                    <div className="dot"></div>
                </div>
                <div className="year_desc_of_timeline">
                    <p className="year_time">{year}</p>
                </div>
            </div>
        </>
    )
}

export default TimelineCard;