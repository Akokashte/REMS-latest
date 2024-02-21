import React from "react";
import { FaSchool } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { IoIosSchool } from "react-icons/io";

const CurriculumCard = () => {
    const AllCurriculum = [
        {
            icon: <FaSchool />,
            headText: "PRIMARY SCHOOL( I - V )",
            subHeadText: "We forge meaningful relationships with students, with the goal of each student being personally supported and known.",
            para1: `We offer the CBSE curriculum.Our learner-centric pedagogy focuses on each student, based on their individual needs in terms of their academic, physical, emotional, spiritual and intellectual growth.
            Our innovative teaching methods place emphasis on both curricular academia and essential life lessons and skills.
            In the ensuing years of Primary School, our curriculum focuses on the knowledge that children need to interact efficiently in a complex and changing world.
            The student's intellectual, aesthetic, physical and cultural growth is strengthened.
            Throughout these crucial, formative academic years, our consistent effort is to prepare students for the real world. Hence, project work, field trips and other activities are conducted to enhance classroom instruction, where students are encouraged to question, analyze and be creative.`,
            para2: "Various competitions, activities and celebrations are held in our school that boost the students knowledge and consolidate their learning."

        },
        {
            icon: <FaBookOpen />,
            headText: "MIDDLE SCHOOL(VI - VIII)",
            subHeadText: "Academic success and healthy personal development",
            para1: `At Rotary English Medium School, academic success and healthy personal development go hand in hand. We strive to provide a relevant, challenging, and interdisciplinary academic curriculum that is developmentally appropriate for our student body. We know that academic success in middle school depends on meeting student's developmental needs as well. Our faculty and staff create learning environments that are respectful, supportive, and inclusive, and where students can connect with others who share their interests.`,
            para2: `Our school culture help students develop critical thinking, creativity, curiosity, and the ability to connect with others; nurture healthy development of brain and body, and social-emotional intelligence; and ensure that students have the ability to communicate self-correct, manage their time, and set and achieve goals.`
        },
        {
            icon: <FaBookReader />,
            headText: "SECONDARY SCHOOL (IX AND X)",
            subHeadText: "Learning is a treasure that will follow its owner everywhere.",
            para1: `At Rotary English Medium School, academic success and healthy personal development go hand in hand. We strive to provide a relevant, challenging, and interdisciplinary academic curriculum that is developmentally appropriate for our student body. We know that academic success in middle school depends on meeting student's developmental needs as well. Our faculty and staff create learning environments that are respectful, supportive, and inclusive, and where students can connect with others who share their interests.`,
            para2: `Our school culture help students develop critical thinking, creativity, curiosity, and the ability to connect with others; nurture healthy development of brain and body, and social-emotional intelligence; and ensure that students have the ability to communicate self-correct, manage their time, and set and achieve goals.`
        },
        {
            icon: <IoIosSchool />,
            headText: "SENIOR SECONDARY SCHOOL",
            subHeadText: "High challenge, high support",
            para1: `Rotary English Medium School academic program reflects our belief in the importance of broad study in the liberal arts and fostering global understanding. Our faculty foster rigorous, collaborative learning environments where students can develop their critical thinking, take creative and intellectual risks, and deeply engage in the content.`,
            para2: ''
        }
    ]
    return (
        <>
            {
                AllCurriculum.map((curElem, index) => {
                    const { headText, subHeadText, icon, para1, para2 } = curElem;
                    return <div key={index} className="students_standards_container">
                        <div className="head_div">
                            <h1>{headText}</h1>
                            <h3>{subHeadText}</h3>
                        </div>
                        <div className="paragraph_div">
                            <div className="icon">
                                {icon}
                            </div>
                            <div className="paragraph_container">
                                <p>{para1}</p>
                                <p>{para2}</p>
                            </div>
                        </div>
                    </div>
                })
            }
        </>
    )
}

export default CurriculumCard;