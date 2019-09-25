import React, {Component} from 'react';


function IntroPage(props) {
    return (
        <header className='header-video'>
            <video autoPlay loop muted={props.muted } id="myVideo">
                <source src={props.imgSrc} type="video/mp4"/>
            </video>
        </header>

    )

}

export default IntroPage;