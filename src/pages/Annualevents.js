import React from 'react'
import HeadImageLine from '../components/HeadImageLine'
import '../styles/annualevents.css'

const Annualevents = () => {
    return (
        <>
            <HeadImageLine featuredImage={"rems.png"} headLine={"Annual Events"} isAbout={true} />
            <div className='events-outer'>

                <div className='cultural-events '>
                    <h1>Cultural events</h1>
                </div>
                <div className='sports '>
                    <h1>Annual Sports</h1>
                </div>
                <div className='exhibitions'>
                    <h1>exhibitions</h1>
                </div>
            </div>
        </>
    )
}

export default Annualevents
