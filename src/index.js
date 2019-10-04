import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Nav from './components/Navigation/Nav.js'
import IntroPage from "./components/VideoStart/Container";
import './styles.scss'
import copy from "./copy";
import MainpageText from './components/MainpageText'
import Slider from "./components/Slider/Slider";
import NewsSection from "./components/About/News";
import FindRetailer from "./components/FindRetailer";
import Retailers from "./pages/Retailers";


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
                    <Retailers/>
                </Route>
                <Route path='/news'>
                    <NewsSection/>
                </Route>
            </Switch>
        </Router>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));