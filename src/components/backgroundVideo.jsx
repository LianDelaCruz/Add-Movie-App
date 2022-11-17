import React from "react";
import cinemavideo from '../assets/cinemavideo.mp4';

const BackgroundVid = () => {
    return (
    <div className="background-video">
        <div className="video-overlay"></div>
        <video src= {cinemavideo} autoPlay loop muted/>

    </div>)
}

export default BackgroundVid;