import React, {Component} from 'react';
import Video from "./Video";
import video from "../../assets/movie/1s.mp4";
import logo from "../../assets/img/logoHeader.png";
import img from "../../assets/img/model-dark.png"
import imgC from "../../assets/img/model-high.png"

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
                {!this.state.hideNav?<Video imgSrc={video} muted={true}/>:<img className='mobile-img' src={imgC}/>}
                <div className="gradient"/>
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
