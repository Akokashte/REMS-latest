import React from "react";
import '../styles/sports.css';
const Sports = () => {
    return (
        <>
            <section className="sports_section">
                <h1 className="main_heading">Sports</h1>
                <div className="sports_info">
                    <div className="image_box">
                        <div className="sport_img">
                            <img src="sports11.png" alt="sports_img"/>
                        </div>
                        <div className="sport_img">
                            <img src="sports12.png" alt="sports_img"/>
                        </div>
                    </div>
                    <div className="sports_textual_info">
                        <p>Our school has a state of the art playground where New Age as well as traditional sports are played. We have sports for all age groups so that children can relax and exercise at the same time with a sporting spirit. The school has appointed a trained Physical Training Master to train the children in various indoor games like chess and carom and outdoor games like football, volleyball, basketball etc. We encourage students to participate in all the sports events.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sports;