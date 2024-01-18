import React from "react"
import '../styles/quicklinks.css'
import { quick_links } from './links_data';

const QuickLinks = () => {
    return (
        <>
            <div className='home6'>
                <div className='home6info'>
                    <div className='info'>
                        <h1>Quick Links</h1>
                    </div>
                    <div className='links'>
                        {
                            quick_links.map((curElem, index) => (
                                <div className='basicinfo' key={index}>
                                    <div className='basicinfoimg'>
                                        {curElem.image}
                                    </div>
                                    <div className='basicinfohead'>
                                        <h1>{curElem.title}</h1>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuickLinks;