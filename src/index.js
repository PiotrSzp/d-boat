import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Navigation/Nav.js'
import IntroPage from "./components/VideoStart/Container";
import './styles.scss'
import copy from "./copy";
import MainpageText from './components/MainpageText'
import Slider from "./components/Slider/Slider";

function App() {
    return (
        <>
            <Nav />
            <IntroPage/>
            <MainpageText text={copy.English.mainpageText}/>
            <Slider slides={copy.English.slider} autoSlideTime={4000}/>
        </>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));