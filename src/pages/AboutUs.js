import React, { useEffect } from "react";
import HeadImageLine from "../components/HeadImageLine";
import "../styles/about.css"
import Counter from '../components/Counter'
import Chairman from "../components/Chairman";
import Principal from "../components/Principal";
import NewsCard from "../components/NewsCard";
import Timeline from "../components/Timeline";
import VisionAndMission from "../components/VisionAndMission";
import { motion } from "framer-motion";
const AboutUs = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])

    return (
        <>
            <HeadImageLine featuredImage={"rems.png"} headLine={"about rotary english medium school"} isAbout={true} />
            <motion.div className="about_para_wrapper"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}>
                <motion.p initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}>
                    Rotary English Medium School is a K-12 co-educational school established in 2007, with a view to offering world-class educational opportunities in the city of Khed. Rotary Education Group has, from the very beginning been focussed driven and motivated by the traditional Indian values of honesty, integrity and service.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}>
                    Our constantly growing network of education institutions includes a wide spectrum of Pre-Primary schools under the name Late lakshmibai Keropant Bendkhale, Primary and Secondary schools under the name Rotary English Medium School. The Rotary network of school also offers a wide choice of educational streams such as the Central Board of Secondary Education (CBSE) Our scholastic record, innovative learning methods and strong commitment to delivering quality through integrity has helped us scale heights that few have managed in the field of education.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}>
                    We welcome you to join theRotary family and to give your child the best when it comes to an integrated, holistic and empowering learning experience.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}>
                    The student body comprising about 1478 students, reflects the cultural diversity of India. Our teachers have rich experience at leading schools in Khed. The School has over 100 teachers including non-teaching .Every child enjoys individualised attention.
                </motion.p>
            </motion.div>
            <div className="lineAndImage">
                <div className="lineAndImageWrapper">
                    <div className="about_line">
                        <div></div>
                    </div>
                    <div className="about_students_image">
                        <img src="admifinal.png" alt="" />
                    </div>
                </div>
            </div>
            <Counter />
            <VisionAndMission />
            <Chairman />
            <Principal />
            <NewsCard />
            <Timeline />
        </>
    )
}

export default AboutUs;