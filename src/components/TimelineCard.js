import React from "react";

const TimelineCard = (props) => {
    const { year, content, setShowModal,setTimeline } = props
    const handlePopUp =(year,desc)=>{
        setShowModal(true)
        setTimeline({year,content})
    }
    return (
        <>
            <div className="timeline_card" >
                <div className="line_dot">
                    <div className="line">
                    </div>
                    <div className="dot"></div>
                </div>
                <div className="year_desc_of_timeline">
                    <p className="year_time" onClick={()=>handlePopUp(year,content)}>{year}</p>
                </div>
            </div>
        </>
    )
}

export default TimelineCard;