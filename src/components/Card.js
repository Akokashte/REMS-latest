import React from 'react';
import '../styles/card.css';
import { motion } from "framer-motion";

const Card = ({ head }) => {
    return (
        <>
            <motion.div className='carausal_outer'
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className='my_container'>
                    <div className='card_wrapper'>
                        <div className='banner_image'>
                            <figure>
                                <img src={head.img} alt='img here' ></img>
                            </figure>
                            <h2 id='heading' >{head.title}</h2>
                        </div>
                        <div className='info'>
                            <h2 id='heading2' >{head.title}</h2>
                            <p id='description'>{head.desc}</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
export default Card;