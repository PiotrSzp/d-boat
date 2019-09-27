import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import copy from "./copy";

import Nav from './components/nav';
import IntroPage from "./components/VideoStart/Container";
import MainpageText from './components/MainpageText'
import Slider from "./components/Slider/Slider";
import FindRetailer from "./components/FindRetailer";

function App() {
    return (
        <>
            <Nav />
            <IntroPage />
            <MainpageText texts={ copy.English.mainpageText } />
            <Slider slides={ copy.English.slider } autoSlideTime={ 4000 } />
            <FindRetailer texts={ copy.English.findRetailer } />
        </>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));