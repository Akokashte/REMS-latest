import React, { useEffect } from "react";
import FacultyCategoryCard from "../components/FacultyCategoryCard";
import "../styles/right_faculty.css";
import HeadImageLine from "../components/HeadImageLine";

const RightFaculty = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])

    return (
        <>
            <HeadImageLine headLine={"The Right Faculty"} featuredImage={'admifinal.png'} />
            <section className="faculty_class_container">
                <div className="center_faculty_class_container">
                    <FacultyCategoryCard />
                </div>
            </section>
        </>
    )
}

export default RightFaculty;


// Name :
// Experience :
// phone number :
// Qualification :
