import React from "react";
import HeadImageLine from "../components/HeadImageLine"
import "../styles/curriculum.css";
import CurriculumCard from "../components/CurriculumCard";

const Curriculum = () => {


    return (
        <>
            <section className="curriculumSection">
                <HeadImageLine headLine={"The Right Curriculum"} featuredImage={"admifinal.png"} isAbout={false} />
                <div className="curriculum_inner_section">
                    <div className="curriculum_intro">
                        <p>Our students and teachers bring a diversity of knowledge, experiences, and accomplishments to our community. But what we all share is an intense curiosity and a love of learning. At each grade level, students are challenged academically and personally to learn and grow. From the lab to the stage, our faculty and staff guide students as they gain understanding and proficiency across all disciplines. Our academic program is designed to teach students the knowledge, skills, and attitudes that will best prepare them for success in a global society.</p>
                    </div>
                    <CurriculumCard />
                </div>
            </section>
        </>
    )
}

export default Curriculum;