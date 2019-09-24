import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/nav'
import './styles.scss'


import Slider from "./components/Slider/Slider";

function App() {
    return (
        <>
            <Nav />
            <Slider />
        </>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));