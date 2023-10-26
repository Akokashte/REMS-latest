import React from "react";

const SportsCard = (props) => {
    const {img,name} =  props
    return (
        <>
            <div className="sports_card">
                <div className="sports_name">
                    <p>{name}</p>
                </div>
                <div className="sports_img">
                    <img src={img} alt="sports_img" />
                </div>
            </div>
        </>
    )
}
export default SportsCard;