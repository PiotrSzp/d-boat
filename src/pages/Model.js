import React, {Component} from 'react';
import PropTypes from "prop-types";
import client from "../components/ApolloClient";
import gql from "graphql-tag";
import Features from "../components/ModelComponents/Features";
import Carousel from "../components/ModelComponents/Carousel";
import light from "../assets/img/model-high.png";
import dark from "../assets/img/model-dark.png";
import header from "../assets/img/model-header.png";
import colorModel from "../assets/img/dboat-model-color.png";
import features from "../assets/img/features.png";
import insideBgc from "../assets/img/inside-color.jpg";


class Model extends Component {
    state = {
        isDataFetched: false,
        model: {
            name: '',
            url: '',
            videoFileName: '',
            highlightsEn: {
                html: ''
            },
            highlightsPl: {
                html: ''
            },
            featuresImg: {
                url: ''
            },
            featuresEn: {},
            featuresPl: {}
        },
        videoSrc: '',
        langContent: {},
    };

    updateLangContent = () => {
        this.setState((prevState, prevProps) => {
            switch (prevProps.lang) {
                case 'polish':
                    return {
                        langContent: {
                            highlights: prevState.model.highlightsPl,
                            features: prevState.model.featuresPl
                        }
                    };
                case 'english':
                    return {
                        langContent: {
                            highlights: prevState.model.highlightsEn,
                            features: prevState.model.featuresEn
                        }
                    };
                default:
                    return {
                        langContent: {
                            highlights: prevState.model.highlightsEn,
                            features: prevState.model.featuresEn
                        }
                    };
            }
        })
    };

    componentDidMount() {
        // Fetch GraphQL data and set to this.state.model
        client
        .query({
            query: gql`
                query {
                    models(where: {url: "${ this.props.modelLink }"}) {
                        name
                        url
                        videoFileName
                        highlightsEn {
                            html
                        }
                        highlightsPl {
                            html
                        }
                        featuresImg {
                            url
                        }
                        featuresEn
                        featuresPl
                    }
                }
            `
        })
        .then(res => {
            this.setState({
                model: res.data.models[0],
            });
        })
        .then(() => {
            this.setState(state => {
                const videoSrc = require('../assets/movie/' + state.model.videoFileName);
                return {videoSrc};
            })
        })
        .then(() => {
            this.updateLangContent();
        })
        .then(() => {
            this.setState({isDataFetched: true})
        })
        .catch(error => console.error(error));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.lang !== this.props.lang) {
            this.updateLangContent();
        }
    }


    render() {
        if (this.state.isDataFetched) {
            return (
                <>
                    <section className="models">
                        <section className="header-model">
                            <img src={header}/>
                        </section>
                        <section className="highlights">
                            <div className="highlights-photos">
                                <img className='first' src={dark}/>
                                <img className='sec' src={light}/>
                                <img className='third' src={dark}/>
                            </div>
                            <div className="big-text">{this.props.content.bigText}</div>
                            <div className="small-text">{this.props.content.smallText}
                                <strong>{this.props.content.special}</strong></div>
                        </section>
                        <section className="color-model">
                            <div className="white-bar"/>
                            <img src={colorModel}/>
                            <div className="white-bar"/>
                        </section>
                        <section className="features">
                            <img src={features}/>
                            <div className="specs">
                                <div className="left-side">
                                    <h1>{this.props.content.specs.Sterndrive.title}</h1>
                                    {this.props.content.specs.Sterndrive.info.map((val,i )=> {
                                       return(
                                           <div className='info-container' key={i}>
                                               {val.map((el,i)=>{
                                                   return <p key={i}>{el}</p>
                                               })}
                                           </div>
                                       )
                                    })}
                                </div>
                                <div className="right-side">
                                    <h1>{this.props.content.specs.Outboard.title}</h1>
                                    {this.props.content.specs.Outboard.info.map((val,i ) => {
                                        return(
                                            <div className='info-container' key={i}>
                                                {val.map((el,i)=>{
                                                    return <p key={i}>{el}</p>
                                                })}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </section>
                        <section className="inside">
                            <img src={insideBgc}/>
                            <div className="inside-info">
                                <h1>{this.props.content.inside.title}</h1>
                                <div className="white-bar"></div>
                                <p className="inside-text">{this.props.content.inside.text} <strong>{this.props.content.inside.standard}</strong></p>
                            </div>
                        </section>
                        <Carousel/>
                    </section>
                </>
            )
        } else {
            return <div style={{'height': '100vh'}}/>
        }
    }
}

Model.propTypes = {
    modelLink: PropTypes.string.isRequired,
    lang: PropTypes.string
};

export default Model;
