import React from 'react';
import '../styles/card.css';
// import { motion } from "framer-motion";

const Card = ({ examApiData }) => {
    return (
        <>
            <div className='carausal_outer'
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className='card_outer'>
                    <div className='my_container'>
                        <img src={examApiData.thumbnail} alt="" />
                        <div className='card_info'>
                            <h1 className='title'>{examApiData.title}</h1>
                            <h2 className='sub_title'>{examApiData.subTitle}</h2>
                            <p className='c_info'>{examApiData.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;

