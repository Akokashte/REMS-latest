import React from "react";
import '../styles/sports.css';
const Sports = () => {
    return (
        <>
            <section className="sports_section">
                <div className="sports_image_content">
                    <h1 className="sport_head">Sports Day</h1>
                    <div className="line"></div>
                    <div className="sports_img_div">
                        <img src="sports.avif" alt="sports_img here"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sports;
