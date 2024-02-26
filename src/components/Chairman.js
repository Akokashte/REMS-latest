import React from "react";
import "../styles/chairman.css"
import { motion } from "framer-motion";

const Chairman = () => {
    return (
        <>
            <motion.section className="main_div" id="chairman" initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}>
                <div className="innerdivof_main_div">
                    <div className="img_wrapper">
                        <img src="chairman.jpg" alt="chairman img here" />
                    </div>
                    <div className="content">
                        <div className="inner_content">
                            <h1>
                                Chairman's Message
                            </h1>
                            <div className="quote_para">
                                <img className="quote" src="quote.png" alt="quote here" />
                                <p>
                                    Dear Learner,
                                    It is my pride privilege to come before you through this message for appealing you to be a member of 'Rotary school family'. ROTARY ENGLISH MEDIUM SCHOOL is a well facilitate institution and we have understood that education over the years has undergone a metamorphosis. Children today have lot of opportunities and schools have realized that education has to become all important and focused today. Technology has become an integral part and developing each day and these changes have also made us realize that transaction of the curriculum and educational technology also needs to be updated with the changing times. We do realize that it is not enough to sit on our past laurels but as all dynamic institutions we need to create and recreate ourselves in creating a learning atmosphere in our school.
                                    Our founder parents and teachers would have noticed that the management of Rotary has been continuously improving the infrastructure and facilities in the campus and also the quality of faculty members by on going training programmes.
                                    As I walk through the portals of this institution, I am captivated by the enthusiasm of our students, the expertise of our staff and the uniqueness of what we, as a school, offer our society. I hope you will have the same sense of joyful discovery as you navigate here.
                                </p>
                            </div>
                            <div>
                                <p>
                                    Sincerely,
                                </p>
                                <span className="span_container">
                                    Mr. Bipin R. Patne
                                    Founder,
                                    Rotary English Medium School, Khed.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    )
}
export default Chairman;