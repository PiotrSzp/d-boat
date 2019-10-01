import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from './components/Navigation/Nav.js'
import IntroPage from "./components/VideoStart/Container";
import './styles.scss'
import copy from "./copy";
import MainpageText from './components/MainpageText'
import Slider from "./components/Slider/Slider";
import FindRetailer from "./components/FindRetailer";

function App() {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path='/'>
                    <IntroPage />
                    <MainpageText texts={ copy.English.mainpageText } />
                    <Slider slides={ copy.English.slider } autoSlideTime={ 4000 } />
                    <FindRetailer texts={ copy.English.findRetailer } />
                </Route>
                <Route path='/retailers'>
                    <h1 style={{'padding': '100px'}}>Hello world</h1>
                </Route>
            </Switch>
        </Router>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));