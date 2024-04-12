import React, { useEffect, useState } from "react";
import "../styles/newsCard.css"
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import NewsSingleCard from "./NewsSingleCard";
import axios from "axios";

const NewsCard = () => {

    const [newsData, setNewsData] = useState([])
    const [newsCount, setNewsCount] = useState(0)

    useEffect(() => {
        getNewsData()
    }, [newsCount])

    const getNewsData = async () => {
        try {
            const newsRes = await axios.get(
                "http://localhost:5000/api/v1/news/getall",
                {
                    params: {
                        newsCount,
                        limit: 4,
                    }
                }
            )
            if (newsRes.status === 204) {
                setNewsCount(0)
            }

            if (!newsRes) {
                alert("Server Error !")
            }

            if(newsRes.status===200){
                setNewsData(newsRes.data.data)
                console.log(newsData)
            }
        } catch (err) {
            alert('server error !')
        }
    }

    return (
        <>
            <div className="newsCardOuterContainer" id="news">
                <div className="newsCardInnerContainer">
                    {
                        newsData.map((curElem, index, arr) => {
                            return (
                                <NewsSingleCard key={index} ImageSource={curElem.newsThumbnailUrl} newsHeadline={curElem.newsHeadline} newsDescription={curElem.newsDescription} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="next_prev_btn_container">
                {
                    newsCount>0
                        ?
                        <div className="next_btn" onClick={() => setNewsCount(newsCount - 4)}>
                            <FaRegArrowAltCircleLeft size={30} className="left_arrow_icon" />

                            <div >
                                prev
                            </div>
                        </div>
                        :
                        null
                    }
                <div className="next_btn" onClick={() => setNewsCount(newsCount + 4)}>
                    <div>
                        next
                    </div>
                    <FaRegArrowAltCircleRight size={30} className="right_arrow_icon" />
                </div>
            </div>
        </>
    )
}
export default NewsCard;