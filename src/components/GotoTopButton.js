import React from "react";
import "../styles/gototop.css";
import { FaAnglesUp } from "react-icons/fa6";

const GotoTopButton=()=>{
    const gotoTop=()=>{
        window.scrollTo({top:0, left:0, behavior:"smooth"})
    }
    return(
        <>
            <div className="goto_top_btn" onClick={gotoTop}>
               <FaAnglesUp className="up_arrow" />
            </div>
        </>
    )
}
export default GotoTopButton;