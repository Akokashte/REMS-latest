import React from "react";

const TimelineCard = (props) => {
    const {year } = props
    return (
        <>
            <div className="timeline_card">
                <div className="line_dot">
                    <div className="line">

                    </div>
                    <div className="dot"></div>
                </div>
                <div className="year_desc_of_timeline">
                    <p className="year_time">{year}</p>
                </div>
                {/* <div className="popup_image">
                    <img src={image_url} alt="timeline pic here" />
                </div> */}
            </div>
        </>
    )
}

export default TimelineCard;