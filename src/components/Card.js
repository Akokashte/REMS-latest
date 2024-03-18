import React from 'react';
import '../styles/card.css';

const Card = ({ head }) => {
    return (
        <>
            <div className='card_outer'>
                <div className='my_container'>
                    <img src={head.img} alt="" />
                    <div className='card_info'>
                        <h1 className='title'>{head.title}</h1>
                        <h2 className='sub_title'>{head.subtitle}</h2>
                        <p className='c_info'>{head.desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;

