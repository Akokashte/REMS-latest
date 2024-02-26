import React, { useState } from "react";
import "../styles/myaccordian.css";
import { IoIosArrowDropdown } from "react-icons/io";

const FaqAccordian = (props) => {
    const { faq_accordian_question, faq_accordian_ans } = props;

    const [trigger, setTrigger] = useState(false);

    const RaseTrigger = () => {
        trigger ? setTrigger(false) : setTrigger(true);
    }

    return (
        <>
            <div className="my_accordian" onClick={() => RaseTrigger()} style={{ width: "80%" }}>
                <div className="accordian_head">
                    <span>{faq_accordian_question}</span>
                    <IoIosArrowDropdown className="accordian_dropdown_icon" style={{ transform: trigger ? "rotate(180deg)" : null }} />
                </div>
                <div className={trigger ? "accordian_content_click" : "accordian_content"} >
                    <div className="accordian_content_head" style={{width:"4%"}}>
                        Ans :
                    </div>
                    <div className="accordian_content_description" style={{width:"96%"}}>
                        {faq_accordian_ans}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FaqAccordian;