import React from "react";
import "../styles/teacherCard.css";
import axios from 'axios'

const TeachersCard = ({ name, image, experience, qualification }) => {
    const TeacherInfo = async () => {
        try {
            const teacher = await axios.get("http://localhost:5000/api/v1/fetch/teachers/")
            console.log(teacher.data)

        }
        catch (error) {
            console.log(error)
        }
    }
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
                        <div className="teach_group"> <span className="headtext">Experience</span><span className="qualification_text">{experience}</span></div>
                        <div className="teach_group"><span className="headtext">Qualification</span><span className="qualification_text">{qualification.slice(0, 20)}{qualification.length > 20 ? "..." : ""}</span> </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TeachersCard;