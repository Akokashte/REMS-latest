import React from 'react';
import '../styles/card.css';


const Card = ({ head }) => {
    return (
        <>
            <div className='carausal_outer'>
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
            </div>
        </>
    )
}
export default Card;