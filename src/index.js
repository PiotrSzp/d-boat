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
    state = {
        language: english,
        langName: 'english'
    };


    languageChange = (lang) => {
        this.setState({
            language: lang === 'polish' ? polish : english,
            langName: lang === 'polish' ? 'polish' : 'english'
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
                            <Footer links={this.state.language.footer} color='black'/>
                        </Route>
                        <Route path='/retailers'>
                            <Nav language={this.languageChange} list={this.state.language} color='white'/>
                            <Retailers list={this.state.language}/>
                            <Footer links={this.state.language.footer}/>
                        </Route>
                        <Route path='/news'>
                            <Nav language={this.languageChange} list={this.state.language} color='white'/>
                            <NewsSection language={this.state.language === polish ? 'pl' : 'eng'}/>
                            <Footer links={this.state.language.footer}/>
                        </Route>
                        <Route path='/about'>
                            <Nav language={this.languageChange} list={this.state.language} color='white'/>
                            <About content={this.state.language.history}/>
                            <Footer links={this.state.language.footer}/>
                        </Route>
                        <Route path='/contact'>
                            <Nav language={this.languageChange} list={this.state.language} color='white'/>
                            <ContactForm language={this.state.language}
                                         select={this.state.language === polish ? 'pl' : 'eng'}/>
                            <Footer links={this.state.language.footer}/>
                        </Route>
                        {
                            this.state.language.menu[0].submenu.map(model => {
                                return <Route
                                    path={model.link}
                                    key={model.id}
                                >
                                    <Nav language={this.languageChange} list={this.state.language} color='black'/>
                                    <Model modelLink={model.link} lang={this.state.langName}/>
                                    <Footer links={this.state.language.footer}/>
                                </Route>
                            })
                        }
                    </ScrollTop>
                </Switch>
            </Router>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));
