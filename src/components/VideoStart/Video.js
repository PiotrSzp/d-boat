import React from 'react';


function Video(props) {
    return (
        <video autoPlay loop muted={ props.muted } id="myVideo" key={ props.imgSrc }>
            <source src={ props.imgSrc } type="video/mp4" />
        </video>
    )
}

export default Video;
