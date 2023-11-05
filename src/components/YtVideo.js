import React from "react";
import ReactPlayer from 'react-player/lazy'

const YtVideo = () => {
    const playOption = true
    return (
        <>
            <div className='player-wrapper'>
               <ReactPlayer className='player' light={true} controls={true} playing={playOption} height={"90%"} width={"90%"} url='https://youtu.be/uSuRwGoN4YU?si=qioKHxXGE9eciEjM' />
            </div>
        </>
    )
}

export default YtVideo