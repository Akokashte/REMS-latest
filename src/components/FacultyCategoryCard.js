import React from "react";
import { GiChemicalDrop } from "react-icons/gi";
import { FaDesktop } from "react-icons/fa6";
import { FaEarthAmericas } from "react-icons/fa6";
import { TbMathSymbols } from "react-icons/tb";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { RiEnglishInput } from "react-icons/ri";
import { CiCalculator1 } from "react-icons/ci";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { MdPsychologyAlt } from "react-icons/md";
import { GiDna2 } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const FacultyCategoryCard = () => {
    const navigate = useNavigate();

    const Faculty = [
        {
            expertise: "physics",
            categoryIcon: <FaEarthAmericas />,
            desc: "Welcome to the Physics Faculty, where the fundamental principles of the physical world are explored and understood. Our faculty is dedicated to unraveling the mysteries of the universe, from the tiniest particles to the vastness of space"
        },
        {
            expertise: "chemistry",
            categoryIcon: <GiChemicalDrop />,
            desc: "Welcome to the fascinating world of chemistry! Chemistry is the science that explores the composition, structure, properties, and reactions of matter. From the tiniest atoms to complex molecules, chemistry delves into the building blocks of everything around us, from the air we breathe to the food we eat and the materials that make up our world."
        },
        {
            expertise: "mathematics",
            categoryIcon: <TbMathSymbols />,
            desc: "Welcome to the fascinating world of mathematics! In this subject, we explore the language of patterns, shapes, quantities, and structures that underlie the universe. From solving equations to understanding the intricacies of calculus, mathematics provides the tools to analyze, interpret, and solve real-world problems"
        },
        {
            expertise: "biology",
            categoryIcon: <GiDna2 />,
            desc: "Welcome to the fascinating world of biology! In this subject, we explore the intricate mechanisms of life, from the tiniest single-celled organisms to the complexities of ecosystems. Through the lens of biology, we uncover the marvels of genetics, evolution, ecology, and much more. Join us as we delve into the wonders of the natural world and uncover the secrets of life itself."
        },
        {
            expertise: "architecture",
            categoryIcon: <HiOutlineBuildingOffice2 />,
            desc: "Welcome to the fascinating world of architecture! In this subject, we explore the art and science of designing and constructing buildings and structures that shape the world around us. From ancient marvels to modern skyscrapers, architecture reflects the cultural, social, and technological advancements of civilizations throughout history."
        },
        {
            expertise: "english",
            categoryIcon: <RiEnglishInput />,
            desc: "Welcome to the exciting world of English! In this subject, we delve into the beauty and power of language, exploring its intricacies, nuances, and endless possibilities. From classic literature to contemporary communication, from grammar fundamentals to creative expression, English offers a rich tapestry of learning experiences."
        },
        {
            expertise: "commerce",
            categoryIcon: <CiCalculator1 />,
            desc: "Welcome to the exciting world of commerce, where business meets opportunity! In this subject, we explore the intricate dynamics of trade, finance, and entrepreneurship. From understanding the fundamentals of economics to delving into the complexities of global markets, commerce opens doors to a multitude of career paths. "
        },
        {
            expertise: "physical education",
            categoryIcon: <MdOutlineSportsGymnastics />,
            desc: "Welcome to Physical Education! In this dynamic subject, we explore the vital connection between physical activity, health, and overall well-being. Through a blend of theory and practical application, we delve into various aspects of fitness, sports, and lifestyle choices. Get ready to move, learn, and discover the keys to a healthier, more active lifestyle!"
        },
        {
            expertise: "information technology",
            categoryIcon: <FaDesktop />,
            desc: "Welcome to the fascinating world of Information Technology (IT), where innovation meets functionality to shape the digital landscape of our modern world. In this dynamic field, we explore the vast realm of computing technologies, digital systems, and data management solutions that power our interconnected society."
        },
        {
            expertise: "councelling",
            categoryIcon: <MdPsychologyAlt />,
            desc: "Welcome to the world of counseling, where understanding meets empathy and guidance merges with support. Counseling is a transformative journey where individuals explore their thoughts, feelings, and experiences in a safe and non-judgmental environment."
        }
    ]

    const openTeacherInfo = (expertise) => {
        navigate("/teachers", { state: expertise })
    }
    return (
        <>
            {
                Faculty.map((curElem, index) => {
                    const { expertise, categoryIcon, desc } = curElem;
                    return (
                        <div key={index} className="faculty_category_card" onClick={() => openTeacherInfo(expertise)}>
                            <div className="category_icon_text">
                                {categoryIcon}
                                <h2>{expertise}</h2>
                            </div>
                            <div className="category_description">
                                <p>
                                    {desc.slice(0, 200) + "..."}
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