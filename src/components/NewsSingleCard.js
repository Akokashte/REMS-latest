import React from "react";
import { useNavigate } from "react-router-dom";

const NewsSingleCard =({ImageSource,newsHeadline,newsDescription})=>{
    const navigate = useNavigate()

    return(
        <>
            <div className="newsCardContainer">
            <div className="newsImageWrapper">
                <img src={ImageSource} alt="admissionImage"/>
            </div>
            <div className="paraLinkContainer">
                <div className="newsHeadline">
                {
                    newsHeadline.slice(0,65)
                }
                    ...
                </div>
                <div className="readMoreLink" onClick={()=>navigate("/newspage",{state:{ImageSource,newsHeadline,newsDescription}})}>
                    read more
                </div>
            </div>
        </div>
        </>
    )
}

export default NewsSingleCard;