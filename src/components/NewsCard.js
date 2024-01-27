import React from "react";
import "../styles/newsCard.css"
import NewsSingleCard from "./NewsSingleCard";
import Footer from "./Footer"
const NewsCard = () => {
    return (
        <>
            <div className="newsCardOuterContainer" id="news">
                <div className="newsCardInnerContainer">
                    <NewsSingleCard />
                    <NewsSingleCard />
                    <NewsSingleCard />
                    <NewsSingleCard />
                </div>
            </div>
        </>
    )
}
export default NewsCard;