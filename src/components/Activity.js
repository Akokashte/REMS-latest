import React from "react";
import '../styles/activity.css'
import SportsCard from "./SportsCard";

const Activity = () => {
    return (
        <>
            <section className="activity">
                <div className="activity_heading">
                    <h1>Co-Curricular Activities</h1>
                </div>
                <div className="sports_card_container">
                    <SportsCard img={'tycondo.jpg'} name={'Taekwondo'}/>
                    <SportsCard img={'primary.png'} name={'Fun Activities'}/>
                    <SportsCard img={'yoga.jpg'} name={'Yoga'}/>
                    <SportsCard img={'sketing.jpg'} name={'Skating'}/>
                </div>
            </section>
        </>
    )
}

export default Activity;