import {FaLocationDot,FaIndianRupeeSign,FaWpforms,FaEnvelopeOpenText} from 'react-icons/fa6'
import { FaBusSimple,FaHandshakeSimple,FaPersonChalkboard,FaChildReaching } from 'react-icons/fa6'


const iconStyle = {color:"purple",fontSize:"2.2rem"}
const quickIconStyle = {color:"purple",fontSize:"2.5rem"}

const links_data = [
    {
        img:<FaWpforms style={iconStyle} />,
        headline:"Admission Process",
        link:"admissionprocess"
    },
    {
        img:<FaIndianRupeeSign style={iconStyle}/>,
        headline:"Fee Structure",
        link:"admissionpolicy"
    },
    {
        img:<FaLocationDot style={iconStyle}/>,
        headline:"Location",
        link:"infrastructure"
    },
    {
        img:<FaEnvelopeOpenText style={iconStyle}/>,
        headline:"Enquiry Form",
        link:"enquiry"
    },
]

const quick_links = [
    {
        image:<FaPersonChalkboard style={quickIconStyle}/>,
        title:"About Us"
    },
    {
        image:<FaHandshakeSimple style={quickIconStyle} />,
        title:"REMS Initiatives"
    },
    {
        image:<FaBusSimple style={quickIconStyle}/>,
        title:"Transport Facility"
    },
    {
        image:<FaChildReaching style={quickIconStyle}/>,
        title:"Careers"
    },
]

export {links_data, quick_links};