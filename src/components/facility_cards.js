import { HiMiniBuildingLibrary } from 'react-icons/hi2';
import { GiRobotGolem } from 'react-icons/gi';
import { FaLaptop } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { SlChemistry } from 'react-icons/sl';

const facility_cards = [
    {
        component: <GiRobotGolem className="facility_icon" />,
        heading: "Atal Tinkering Lab",
        desc: "Rotary is a community of readers. The libraries across our 3 campuses deliver a range of programmes",
        link: '#'
    },
    {
        component: <HiMiniBuildingLibrary className="facility_icon" />,
        heading: "Library services and facilities",
        desc: "Rotary is a community of readers. The libraries across our 3 campuses deliver a range of programmes",
        link: '#'
    },
    {
        component: <FaLaptop className="facility_icon" />,
        heading: "Information Communication Technology",
        desc: "Rotary is a community of readers. The libraries across our 3 campuses deliver a range of programmes",
        link: '#'
    },
    {
        component: <GiTeacher className="facility_icon" />,
        heading: "Counceling",
        desc: "Rotary is a community of readers. The libraries across our 3 campuses deliver a range of programmes",
        link: '#'
    },
    {
        component: <SlChemistry className="facility_icon" />,
        heading: "Science Laboratory",
        desc: "Rotary is a community of readers. The libraries across our 3 campuses deliver a range of programmes",
        link: '#'
    }]

export default facility_cards;