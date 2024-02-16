import React from "react";

const InfraCard = (props) => {
    const { image } = props;
    return (
        <>
            <div className="campus_image_card">
                <img src={image} />
            </div>
        </>
    )
}

export default InfraCard;