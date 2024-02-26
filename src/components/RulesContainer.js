import React from "react";
import "../styles/RulesContainer.css";
import { FaArrowRight } from "react-icons/fa6";

const RulesContainer = (props) => {
    const { heading,arrayOfRulesToDisplay } = props

    return (
        <>
            <div className="rules_outer_wrapper">
                <h1 className="rules_heading">{heading}</h1>
                <div className="rules">
                    <ul>
                        {
                            arrayOfRulesToDisplay.map((curElem, index) => {
                                return (
                                    <li>
                                        <div className='icon_here'><FaArrowRight /></div>
                                        <div className='rules_here'>
                                            {curElem}
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default RulesContainer;