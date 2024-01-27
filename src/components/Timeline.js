import React from "react";
import "../styles/timeline.css";
import TimelineCard from "./TimelineCard";

const Timeline = () => {
    const timelines = [
        {
            old:1,
            year: "2007",
            image_url:"timeline1.png"
        },
        {
            old:2,
            year: "2009",
            image_url:"timeline2.png"
        },
        {
            old:3,
            year: "2010",
            image_url:"timeline1.png"
        },
        {
            old:4,
            year: "2011-12",
            image_url:"timeline2.png"
        },
        {
            old:5,
            year: "2013-14",
            image_url:"timeline1.png"
        },
        {
            old:6,
            year: "2015-16",
            image_url:"timeline2.png"
        },
        {
            old:7,
            year: "2016-17",
            image_url:"timeline1.png"
        },
        {
            old:8,
            year: "2018-19",
            image_url:"timeline2.png"
        },
        {
            old:9,
            year: "2020-21",
            image_url:"timeline1.png"
        },
        {
            old:10,
            year: "2022-23",
            image_url:"timeline2.png"
        },
    ]
    return (
        <>
            <section className="timeline_wrapper">
                <div className="timeline_inner_wrapper">
                    <div className="head_wrapper">
                        <h1>Timeline of rotary english medium school, Khed</h1>
                    </div>
                    <div className="timeline_cards_collection">
                        {
                            timelines.map((element, index) => {
                                return <TimelineCard key={index} year={element.year} image_url={element.image_url} old={element.old}/>
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
export default Timeline;