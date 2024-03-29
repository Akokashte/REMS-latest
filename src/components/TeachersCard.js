import React from "react";
import "../styles/teacherCard.css";

const TeachersCard = ({ name, image, experience, qualification }) => {
    return (
        <>
            <div className="teachers_card">
                <div className="teacher_profile">
                    <img src={image}></img>
                </div>
                <div className="teacher_info">
                    <div className="name">
                        Mr. {name}
                    </div>
                    <div className="teacherexperience">
                        <div className="teach_group"> <span className="headtext">Experience</span><span>{experience}</span></div>
                        <div className="teach_group"><span className="headtext">Qualification</span><span>{qualification.slice(0, 20)}{qualification.length > 20 ? "..." : ""}</span> </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TeachersCard;