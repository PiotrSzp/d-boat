import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


import Nav from './components/Navigation/Nav.js'
import IntroPage from "./components/VideoStart/Container";
import './styles.scss'
import copy from "./copy";
import MainpageText from './components/MainpageText'
import Slider from "./components/Slider/Slider";
import NewsSection from "./components/About/News";
import FindRetailer from "./components/FindRetailer";
import Retailers from "./pages/Retailers";
import About from "./components/About/About";
import ContactForm from "./components/Contact/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

const polish = copy.Polski;
const english = copy.English;

function App() {
    return (
        <Router>
            <Switch>
                <ScrollTop>
                    <Route exact path='/'>
                        <Nav color='black'/>
                        <IntroPage/>
                        <MainpageText texts={copy.English.mainpageText}/>
                        <Slider slides={copy.English.slider} autoSlideTime={4000}/>
                        <FindRetailer texts={copy.English.findRetailer}/>
                        <Footer links={english.footer}/>
                    </Route>
                    <Route path='/retailers'>
                        <Nav color='white'/>
                        <Retailers/>
                        <Footer links={english.footer}/>
                    </Route>
                    <Route path='/news'>
                        <Nav color='white'/>
                        <NewsSection/>
                        <Footer links={english.footer}/>
                    </Route>
                    <Route path='/about'>
                        <Nav color='white'/>
                        <About/>
                        <Footer links={english.footer}/>
                    </Route>
                    <Route path='/contact'>
                        <Nav color='white'/>
                        <ContactForm/>
                        <Footer links={english.footer}/>
                    </Route>
                </ScrollTop>
            </Switch>
        </Router>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'));
