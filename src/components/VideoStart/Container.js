import React from 'react';
import Video from "./Video";
import video from "../../assets/movie/IntroConv.mp4";
import copy from "../../copy";



function IntroPage() {
    return (
        <header className='header-video'>
            <Video imgSrc={video} muted={true}/>
            <div className="gradient"></div>
            <div className="header-text">
                <h4 className="header-title">{copy.English.header.title}
                    <hr/></h4>
                <h1 className="header-msg">{copy.English.header.msg}</h1>
            </div>
        </header>

    )

}

export default IntroPage;