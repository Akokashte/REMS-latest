import React,{useEffect} from "react";
import "../styles/mynewspage.css";
import { useLocation } from "react-router-dom";

const News =(props)=>{
    
    const location = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])

    return(
        <>
        <div className="news_page_container">
            <div className="news_page_inner_container">
                <div className="news_thumbnail">
                    <img src={location.state.ImageSource} alt="newsImage here" />
                </div>
                <div className="news_headline_here">
                    <h2>{location.state.newsHeadline}</h2>
                </div>
                <div className="news_description_here">
                    <p>
                        {location.state.newsDescription}
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default News;