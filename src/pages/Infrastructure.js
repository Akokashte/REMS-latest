import React from "react";
import "../styles/infrastructure.css";
import HeadImageLine from "../components/HeadImageLine";
import InfraCard from "../components/InfraCard";

const Infrastructure = () => {

    return (
        <>
            <HeadImageLine
                headLine={"School Infrastructure"}
                featuredImage={"rems.png"}
            />
            <div className="infrastructure_container">
                <div className="infrastructure_inner_container">
                    <div className="infra_info_container">
                        Our school has around 14769 sq. mt. campus area, in that total built up area is 4454.72sq.mt. and playground 4000 sq.mt. Our school building contains total 58 rooms in that 15 digital classrooms, 9 laboratories, 5 Activity rooms, 1 Library,1 assembly hall,1 yoga hall etc.
                        Our campus is Wi-Fi enabled and under CCTV surveillance with boundary wall.
                    </div>
                    <div className="library_container">
                        <div className="head_of_library">
                            <h2>
                                Library
                            </h2>
                        </div>
                        <div className="library_inner_wrapper">
                            <div className="library_image">
                                <div className="img_card">
                                    <img src="lib2.jpg" />
                                </div>
                                <div className="img_card">
                                    <img src="library.jpg" />
                                </div>
                            </div>
                            <div className="library_content">
                                <h1 className="library_heading">
                                    "A library is a place in the school where vast collections of academics books are kept"
                                </h1>
                                <p className="library_desc" >
                                    Our library encourages curiosity in innovations and problem solving in students. It is the central hub for learning and thinking. Why Library is important ? A library is an important source of knowledge to young minds in schools. It develops the important habit of reading among the students. School library helps to impact positively on the academic achievement of the students. Students can perform better during examination by reading various books. Our library contains around 12,560 books. In our library there are 3996 reference books, 8564 study reference books. The Library also has 10 periodicals and 8 newspapers available. Reading room facility is available for students.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="laboratory_container">
                        <h1>
                            Laboratory
                        </h1>
                        <div className="campus_image_card_container">
                            <div className="campus_image_card">
                                <img src="physics.png" />
                            </div>
                            <div className="campus_image_card">
                                <img src="chemistry.jpg" />
                            </div>
                            <div className="campus_image_card">
                                <img src="physics.png" />
                            </div>
                        </div>
                        <div className="laboratory_inner_container">
                            <p>
                                Science is different from any other subject. In order to understand its concepts, one has to look beyond the books and conventional classroom teaching. Effective teaching and learning of science involves seeing, handling, and manipulating real objects and materials. The knowledge that kids attain in classrooms would be ineffectual unless they actually observe the process and understand the relationship between action and reaction.
                            </p>
                            <p>
                                Effective teaching and learning of science involves a perpetual state of show and tell. Rotary school combines classroom teaching with laboratory experiments to ensure that their students grasp each and every concept thoroughly. It is also believed that laboratory teaching and experiments that are being conducted there help encourage deep understanding in children. Children are able to retain the knowledge for longer when they see the experiments being performed in front of their eyes.
                            </p>
                            <p>
                                Science lab equipment allows students to interact directly with the data gathered. They get a first-hand learning experience by performing various experiments on their own. Our Students are made to use the models and understand different scientific theories and concepts.. There are several scientific theories and concepts that are difficult to explain directly from the books. Anatomy models, physics science kits, and chemistry science kits for instance make it easy to understand the otherwise complex theories of science.
                            </p>
                            <p>
                                By virtue of equipping themselves with the latest and the advanced materials and supplies, Rotary schools is able to contribute a lot in the scientific advances yet to come. The advances and developments in the field of medical science and technology would not take place if schools did not prepare brilliant and dedicated scientists and researchers. Children develop interest in scientific research in science labs. When they observe various things and carry out different experiments, their reasoning skills are honed and they start thinking deeply on those theories and concepts. Our School thus play a vital role in bringing up the next generation of engineers and doctors.
                            </p>
                        </div>
                    </div>
                    <div className="laboratory_container">
                        <h1>
                            Classrooms
                        </h1>
                        <div className="campus_image_card_container">
                            <div className="campus_image_card">
                                <img src="class.jpeg" />
                            </div>
                            <div className="campus_image_card">
                                <img src="class1.jpg" />
                            </div>
                        </div>
                        <div className="laboratory_inner_container">
                            <p>
                                The school building of Rotary English Medium School has been specially designed to give it a contemporary, stylish and international look. The classrooms are well ventilated with white boards and flannel boards to provide an ideal sanctum for academic progress to take place.
                            </p>
                            <p>
                                Each classroom is equipped with a projector and ExtraMarks software . Certain topics are taught with the help of this technology so as to make learning an interactive and immersive experience for the students.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Infrastructure;