import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/nav'
import IntroPage from "./components/VideoStart/Container";
import video from './assets/movie/IntroCrop.mp4'
import './styles.scss'


import Slider from "./components/Slider/Slider";

function App() {
    return (
        <>
            <Nav />
            <IntroPage imgSrc={video} muted={'true'}/>
            <Slider />
        </>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));