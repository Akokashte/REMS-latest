import React from "react";
import "../styles/chairman.css"
import { motion } from "framer-motion";

const Principal = () => {
    return (
        <>
            <motion.section className="main_div" id="principal" initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}>
                <div className="innerdivof_main_div">
                    <div className="img_wrapper">
                        <img src="principal.png" alt="principal img here" />
                    </div>
                    <div className="content">
                        <div className="inner_content">
                            <h1>
                                "education is the mother of leadership"
                            </h1>
                            <div className="quote_para">
                                <img className="quote" src="quote.png" alt="quote here" />
                                <p>
                                    Dear Parents,
                                    REMS is striving to prepare global citizen with aesthetic sensibilities to meet the relentlessly changing challenges around them. As part of the society that stands for educational leadership ,scholarly accomplishment and a progressive approach, we combine the doctrine of a traditional value based system with global trade and a superlative infrastructure. We focus on child centred pedagogy giving priority to child interest, experiences and their active participation. Special attention is given to each individual and an open environment is provided to them for holistic development of their personality. We are proud to provide our students the best facilities of learning. Great –stress is laid by the school on the teaching-learning process. It will be ensured that teaching is a stimulating and inspiring process. Students will receive ample opportunities for interaction and 'learning by Doing' will be encouraged.
                                    Education, for us is not an end but a journey of sighting, a journey full of optimism ,promise and continuous potential. We are looking at innovative children who are eager to learn, positive and geared up to take challenges of life. We are focused towards providing globally competitive students to the society.
                                    Once students join REMS, they can be rest assured that they have a secure and hurdle free path to success.
                                </p>
                            </div>
                            <div>
                                <p>
                                    Sincerely,
                                </p>
                                <span className="span_container">
                                    Mrs. Bhumita Patel (M.A.B.Ed.)
                                    Principal,
                                    Rotary English Medium School, Khed
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    )
}
export default Principal;