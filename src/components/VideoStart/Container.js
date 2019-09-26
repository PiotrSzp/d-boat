import React, {Component} from 'react';
import Video from "./video";
import video from "../../assets/movie/IntroConv.mp4";



function IntroPage() {
    return (
        <header className='header-video'>
            <Video imgSrc={video} muted={'true'}/>
            <div className="header-text">
                <h4 className="header-title">Modern Luxury Boats
                    <hr/></h4>

                <h1 className="header-msg">Elevate Your Escape</h1>
            </div>

        </header>

    )

}

export default IntroPage;