import React from "react";
import FacultyCategoryCard from "../components/FacultyCategoryCard";
import "../styles/right_faculty.css";

const RightFaculty = () => {
    return (
        <>
            <section className="faculty_class_container">
            <div className="faculty_head_container">
                <h1>The Right Faculty</h1>
            </div>
                <div className="center_faculty_class_container">
                    <FacultyCategoryCard />
                </div>
            </section>
        </>
    )
}

export default RightFaculty;


// Name :
// phone number :
// Classes :
// Experience :
// Degree Earned :