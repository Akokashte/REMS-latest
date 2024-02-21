import React from "react";
import "../styles/teachers.css";
import TeachersCard from "../components/TeachersCard";
import { teachers } from "../components/teachers";
import { useLocation } from "react-router-dom";

const Teachers = () => {
    const location = useLocation()
    const clickedExpertise = location.state;
    console.log(clickedExpertise)
    return (
        <>
            <section className="teachers_info_section">
                <div className="teachers_info_inner_section">
                    <div className="subject_name">
                        <h1>{clickedExpertise} Faculty</h1>
                    </div>
                    <div className="teacher_card_wrapper">
                        {
                            teachers.map((curElem, index) => {
                                const { name, image, experience, qualification, expertise } = curElem;
                                console.log(expertise)
                                return expertise === clickedExpertise &&
                                    <TeachersCard
                                        key={index}
                                        name={name}
                                        image={image}
                                        experience={experience}
                                        qualification={qualification} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Teachers;