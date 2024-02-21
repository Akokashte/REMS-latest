import React from 'react'
import HeadImageLine from '../components/HeadImageLine'
import '../styles/annualevents.css'

const Annualevents = () => {
    return (
        <>
            <div className='events-outer'>

                <div className='sports '>
                    <div className='sports-heading'>
                        <h1>Let's explore the various events at REMS</h1>
                        <h2>Sports Events</h2>
                    </div>
                    <div className='sports-dscptn'>
                        <h2>We bring forth a team of carefully selected professional coaches in particular sports fields to motivate students to participate in national and state level tournaments and develop fundamental skills such as focus, strategic thinking and leadership through the practice of sporting discipline.
                            Students are given a vast array of choices for sports including football, cricket, table tennis, carrom, yoga, skating and chess.</h2>
                    </div>
                    <div className='events-imgs'>

                        <div className='events-theatre'>
                            <h1>Volleyball</h1>
                            <img src="cricket.jpg" alt="" />
                        </div>
                        <div className='events-theatre'>
                            <h1>Cricket</h1>
                            <img src="football.jpg" alt="" />
                        </div>
                    </div>

                    <HeadImageLine featuredImage={"rems.png"} isAbout={true} />
                </div>
                <div className='cultural-events '>
                    <div className='events-heading'>
                        <h1>cultural events</h1>
                    </div>
                    <div className='events-dscptn'>
                        <h2>Students can choose from a wide variety of holistic hobby classes offered at Podar to bridge the gap between curiosity and action, empower our young learners, and motivate them to follow their passions.
                            Some cultural activities we teach at REMS:-</h2>
                    </div>
                    <div className='events-imgs'>
                        <div className='events-theatre'>
                            <h1>Theatre</h1>
                            <img src="theatre.jpg" alt="" />
                        </div>
                        <div className='events-theatre'>
                            <h1>Dance</h1>
                            <img src="dance.jpg" alt="" />
                        </div>
                        <div className='events-theatre'>
                            <h1>Music</h1>
                            <img src="piano.jpg" alt="" />
                        </div>
                    </div>
                </div>
                {/* <div className='exhibitions'>
                    <h1>exhibitions</h1>
                </div> */}
            </div>
        </>
    )
}

export default Annualevents
