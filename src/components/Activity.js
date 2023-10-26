import React from "react";
import '../styles/activity.css'
import SportsCard from "./SportsCard";

const Activity = () => {
    return (
        <>
            <section className="activity">
                <div className="activity_heading">
                    <h1>The Right Activities</h1>
                </div>
                <div className="sports_card_container">
                    <SportsCard img={'tycondo.jpg'} name={'Tycondo'}/>
                    <SportsCard img={'yoga.jpg'} name={'Yoga'}/>
                    <SportsCard img={'sketing.jpg'} name={'Sketing'}/>
                    <SportsCard img={'yoga.jpg'} name={'Yoga'}/>
                </div>
            </section>
        </>
    )
}

export default Activity;