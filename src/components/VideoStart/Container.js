import React, {Component} from 'react';
import Video from "./Video";
import video from "../../assets/movie/1s.mp4";
import logo from "../../assets/img/logoHeader.png";
import image from "../../assets/img/history.jpg";

import copy from "../../copy";


class IntroPage extends Component {
    state = {
        hideNav: null
    };

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize () {
        let currentHideNav = (window.innerWidth <= 760);
        if (currentHideNav !== this.state.hideNav) {
            this.setState({hideNav: currentHideNav});
        }
    }

    render() {
        return (
            <header className='header-video'>
                {!this.state.hideNav?<Video imgSrc={video} muted={true}/>:null}
                {!this.state.hideNav?<div className="gradient"/>:null}
                <div className="header-text">
                    <img src={logo} alt="" className="header-logo"/>
                    <div className='hr'/>
                    <h1 className="header-msg">{copy.English.header.msg}</h1>
                </div>
            </header>

        )
    }
}

export default IntroPage;
