import { HiMiniBuildingLibrary } from 'react-icons/hi2';
import { GiRobotGolem } from 'react-icons/gi';
import { FaLaptop } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { SlChemistry } from 'react-icons/sl';

const facility_cards = [
    {
        component: <GiRobotGolem className="facility_icon" />,
        heading: "Atal Tinkering Lab",
        desc: "ATL (Atal Tinkering Lab) is a work space where young minds can give shape to their ideas through hands on do-it-yourself mode",
        link: '#'
    },
    {
        component: <HiMiniBuildingLibrary className="facility_icon" />,
        heading: "Library Services",
        desc: "A library is a place in the school where vast collections of academics books are kept",
        link: '#'
    },
    {
        component: <FaLaptop className="facility_icon" />,
        heading: "Information Communication Technology",
        desc: "We are making our students digitally strong by teaching them different programming languages like Java, Python etc.",
        link: '#'
    },
    {
        component: <GiTeacher className="facility_icon" />,
        heading: "Counceling",
        desc: "School counsellor helps individual students to deal with their academic, emotional and social concerns.",
        link: '#'
    },
    {
        component: <SlChemistry className="facility_icon" />,
        heading: "Science Laboratory",
        desc: "Rotary school combines classroom teaching with laboratory experiments to ensure that their students grasp each and every concept thoroughly.",
        link: '#'
    }]

export default facility_cards;