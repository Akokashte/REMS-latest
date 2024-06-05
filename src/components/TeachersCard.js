import React from "react";
import "../styles/teacherCard.css";

const TeachersCard = ({ name, image, experience, qualification, subjects }) => {
    return (
        <>
            <div className="teachers_card">
                <div className="teacher_profile">
                    <img src={image} alt="teacherProfileImage"></img>
                </div>
                <div className="teacher_info">
                    <div className="name">
                        {name}
                    </div>
                    <div className="teacherexperience">
                        <div className="teach_group"> <span className="headtext">Experience</span><span className="qualification_text">{experience}</span></div>
                        <div className="teach_group"><span className="headtext">Qualification</span><span className="qualification_text">{qualification.slice(0, 20)}{qualification.length > 20 ? "..." : ""}</span> </div>
                        <div className="teach_group"><span className="headtext">Subject</span><span className="qualification_text">{subjects}</span> </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TeachersCard;