import React from 'react'
import { faqAccordianData } from '../api/FaqAccordianData.api'
import FaqAccordian from '../components/FaqAccordian'
import '../styles/faq.css';

const Faq = () => {
    return (
        <>
            <div className='faq_main'>
                <div className='outerfaq'>
                    <div className='faq'>
                        <h1 className='faq_heading'>FAQs</h1>
                        {
                            faqAccordianData.map((curElem, index) => {
                                return (
                                    <FaqAccordian
                                        faq_accordian_question={curElem.question}
                                        faq_accordian_ans={curElem.content}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq
