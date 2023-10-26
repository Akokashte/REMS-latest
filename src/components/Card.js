import React from 'react';
import '../styles/card.css';


const Card = ({ head }) => {
    return (
        <>
            <div className='my_container'>
                <div className='card_wrapper'>
                    <div className='banner_image'>
                        <figure>
                            <img src='nda2.jpg' alt='img here' ></img>
                        </figure>
                        <h2 id='heading' >{head}</h2>
                    </div>
                    <div className='info'>
                        <h2 id='heading2' >{head}</h2>
                        <p id='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, ullam.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;