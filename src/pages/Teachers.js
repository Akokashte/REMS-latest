import React, { useEffect, useState } from "react";
import "../styles/teachers.css";
import TeachersCard from "../components/TeachersCard";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Teachers = () => {
    const [teachersData, setTeachersData] = useState([])

    const location = useLocation()
    const clickedSection = location.state;
    
    const getTeacherData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/teachers/fetchall',
                { params: { section: clickedSection } }
            )
            setTeachersData(response.data.data)
        } catch (err) {
            alert("something went wrong while fetching teachers data!")
        }
    }

    useEffect(() => {
        getTeacherData()
    }, [])
    
    return (
        <>
            <section className="teachers_info_section">
                <div className="teachers_info_inner_section">
                    <div className="subject_name">
                        <h1>{clickedSection} Faculty</h1>
                    </div>
                    <div className="teacher_card_wrapper">
                        {
                            teachersData.map((curElem, index) => {
                                console.log(curElem)
                                const { experience, profileImage, qualification, teacherName, subjects } = curElem;
                                return <TeachersCard
                                    key={index}
                                    name={teacherName}
                                    image={profileImage}
                                    experience={experience}
                                    qualification={qualification} 
                                    subjects={subjects}
                                    />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Teachers;