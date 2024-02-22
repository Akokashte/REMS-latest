import React from 'react'
import { useState } from 'react'
const Accordian = ({ ques, ans }) => {
    const [show, setShow] = useState(false)
    // function showdocs() {

    // }
    return (
        <>
            <div className='acc' onClick={() => setShow(!show)}>
                <h2>{ques}</h2>
            </div>
            {show && <p>{ans}</p>}
        </>
    )
}

export default Accordian
