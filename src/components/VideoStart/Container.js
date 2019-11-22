import React from 'react';
import Video from "./Video";
import video from "../../assets/movie/1s.mp4";
import logo from "../../assets/img/logoHeader.png";

import copy from "../../copy";



function IntroPage() {

    return (
        <header className='header-video'>
            <Video imgSrc={video} muted={true}/>
            <div className="gradient"></div>
            <div className="header-text">
                <img src={logo} alt="" className="header-logo"/>
                    <hr/>
                <h1 className="header-msg">{copy.English.header.msg}</h1>
            </div>
        </header>

    )

}

export default IntroPage;
