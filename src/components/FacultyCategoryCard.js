import React from "react";
import { GiChemicalDrop } from "react-icons/gi";
import { FaDesktop } from "react-icons/fa6";
import { FaEarthAmericas } from "react-icons/fa6";
import { TbMathSymbols } from "react-icons/tb";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { RiEnglishInput } from "react-icons/ri";
import { CiCalculator1 } from "react-icons/ci";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { GiDna2 } from "react-icons/gi";

const FacultyCategoryCard = () => {
    const Faculty = [
        {
            expertise: "Physics",
            categoryIcon: <FaEarthAmericas />
        },
        {
            expertise: "Chemistry",
            categoryIcon: <GiChemicalDrop />
        },
        {
            expertise: "Mathematics",
            categoryIcon: <TbMathSymbols />
        },
        {
            expertise: "Biology",
            categoryIcon: <GiDna2 />
        },
        {
            expertise: "Architecture",
            categoryIcon: <HiOutlineBuildingOffice2 />
        },
        {
            expertise: "English",
            categoryIcon: <RiEnglishInput />
        },
        {
            expertise: "Commerce",
            categoryIcon: <CiCalculator1 />
        },
        {
            expertise: "Physical Education",
            categoryIcon: <MdOutlineSportsGymnastics />
        },
        {
            expertise: "Information Technology",
            categoryIcon: <FaDesktop />
        }
    ]
    return (
        <>
            {
                Faculty.map((curElem, index) => {
                    const { expertise, categoryIcon } = curElem;
                    return (
                        <div key={index} className="faculty_category_card">
                            <div className="category_icon_text">
                                {categoryIcon}
                                <h2>{expertise}</h2>
                            </div>
                            <div className="category_description">
                                <p>
                                    Welcome to the Physics Faculty, where the fundamental principles of the physical world are explored and understood. Our faculty is dedicated to unraveling the mysteries of the universe, from the tiniest particles to the vastness of space
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