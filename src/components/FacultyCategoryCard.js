import React from "react";
import { useNavigate } from "react-router-dom";

const FacultyCategoryCard = () => {
    const navigate = useNavigate();

    const Faculty = [
        { 
            section: "nursery",
            sectionImage: "https://media.istockphoto.com/id/1402700264/photo/teacher-with-a-group-of-elementary-students-playing-with-toy-blocks.webp?b=1&s=170667a&w=0&k=20&c=pC8b5jyKPBJoOr0_kjHFMEtKARgjPrF_HUkvpoPF8pw=",
            desc:"Nursery school teachers play a crucial role in shaping the early learning experiences of young children. With patience and enthusiasm, they create nurturing environments where curiosity is encouraged and imagination flourishes. Through engaging activities and gentle guidance, they foster social, emotional, and cognitive development in their students. These dedicated educators understand the importance of individualized attention, tailoring their teaching approaches to suit each child's unique needs. Ultimately, nursery school teachers lay the foundation for a lifetime of learning and growth."
        },
        {
            section: "primary",
            sectionImage: "https://cdn.create.vista.com/api/media/small/17140195/stock-photo-diligent-pupils",
            desc:"Hello, young learners! Welcome to our classroom where fun and learning come together. Together, we'll explore exciting new ideas and discover the wonders of the world around us. Let's work hard, ask questions, and always remember: mistakes are just opportunities to learn! With kindness and curiosity, we'll grow into amazing scholars. Get ready for a journey filled with laughter, friendship, and endless possibilities"
        },
        {
            section: "secondary",
            sectionImage: "https://images.ctfassets.net/ktcrve6hht2u/6kn9ZnwlPxBCzJoHU3u6Bq/772162c44ae833552000c06530a464a8/39.png?w=1904&h=1428&q=50&fm=png",
            desc:"As secondary school teachers, we play a vital role in shaping young minds. Our dedication to fostering critical thinking, creativity, and a love for learning is paramount. Through engaging lessons and personalized support, we empower students to reach their full potential. We strive to create inclusive and supportive environments where every student feels valued and respected. Together, let's inspire the next generation to become confident, compassionate, and lifelong learners."
        },
        {
            section: "senior secondary",
            sectionImage: "https://t4.ftcdn.net/jpg/05/39/10/47/360_F_539104776_BchIZKRhIUXDY0ZaVHxaoIDvRa2eAG3d.jpg",
            desc:"Senior secondary school teachers play a pivotal role in shaping the academic and personal development of their students. With expertise in their subject matter, they guide learners towards deeper understanding and critical thinking. Their mentorship extends beyond the classroom, fostering a supportive environment for growth and success. Through innovative teaching methods and tailored approaches, they empower students to reach their full potential. Dedicated to excellence, senior secondary school teachers inspire a love for learning that lasts a lifetime."
        },
    ]

    const openTeacherInfo=(section)=>{
        navigate("/teachers",{state:section})
    }
    return (
        <>
            {
                Faculty.map((curElem, index) => {
                    const { section, sectionImage,desc } = curElem;
                    return (
                        <div key={index} className="faculty_category_card" onClick={()=>openTeacherInfo(section)}>
                            <div className="category_icon_text">
                                <div className="section_image_wrapper">
                                <img src={sectionImage} />
                                </div>
                                <h2>{section}</h2>
                            </div>
                            <div className="category_description">
                                <p>
                                {desc.slice(0,200)+"..."}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default FacultyCategoryCard;