import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Navigation/Nav.js'
import IntroPage from "./components/VideoStart/Container";
import './styles.scss'


import Slider from "./components/Slider/Slider";

function App() {
    return (
        <>
            <Nav />
            <IntroPage/>
            <Slider />
        </>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));