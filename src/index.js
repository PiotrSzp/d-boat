import React, {Component} from 'react';
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
import Model from "./pages/Model"
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

const polish = copy.Polski;
const english = copy.English;


class App extends Component {
    state={
      language:english
    };


    languageChange =(lang) => {
      this.setState({
          language: lang==='polish'?polish:english
      })
    };

    render() {
        return (
            <Router>
                <Switch>
                    <ScrollTop>
                        <Route exact path='/'>
                            <Nav language={this.languageChange} list={this.state.language} color='black'/>
                            <IntroPage/>
                            <MainpageText texts={this.state.language.mainpageText}/>
                            <Slider slides={this.state.language.slider} autoSlideTime={4000}/>
                            <FindRetailer texts={this.state.language.findRetailer}/>

                        </Route>
                        <Route path='/retailers'>
                            <Nav language={this.languageChange} list={this.state.language} color='white'/>
                            <Retailers/>
                        </Route>
                        <Route path='/news'>
                            <Nav language={this.languageChange} list={this.state.language} color='white'/>
                            <NewsSection language={this.state.language===polish?'pl':'eng'}/>
                        </Route>
                        <Route path='/about'>
                            <Nav language={this.languageChange} list={this.state.language} color='white'/>
                            <About content={this.state.language.history}/>
                        </Route>
                        <Route path='/contact'>
                            <Nav language={this.languageChange} list={this.state.language} color='white'/>
                            <ContactForm language={this.state.language} select={this.state.language===polish?'pl':'eng'}/>
                        </Route>
                        {
                            copy.English.menu[0].submenu.map(model => {
                                return <Route
                                    path={model.link}
                                    key={model.id}
                                >
                                    <Nav language={this.languageChange} list={this.state.language} color='black'/>
                                    <Model modelLink={model.link}/>
                                </Route>
                            })
                        }
                        <Footer links={this.state.language.footer}/>
                    </ScrollTop>
                </Switch>
            </Router>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));
