import React, { Component } from 'react';
import PropTypes from "prop-types";
import Video from "../components/VideoStart/Video";
import client from "../components/ApolloClient";
import gql from "graphql-tag";
import Features from "../components/ModelComponents/Features";

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
                    return { videoSrc };
                })
            })
            .then(() => {
                this.updateLangContent();
            })
            .then(() => {
                this.setState({ isDataFetched: true })
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
                    <section className='header-video'>
                        <Video imgSrc={ this.state.videoSrc } muted={ true } />
                        <div className="header-text">
                            <h4 className="header-title">
                                Model
                                <hr />
                            </h4>
                            <h1 className="header-msg">
                                { this.state.model.name }
                            </h1>
                        </div>
                    </section>
                    <section className='highlights'
                             dangerouslySetInnerHTML={ { __html: this.state.langContent.highlights.html } }
                    />
                    <Features
                        text={ this.state.langContent.features.features }
                        imgSrc={ this.state.model.featuresImg.url }
                    />
                </>
            )
        } else return null;
    }
}

Model.propTypes = {
    modelLink: PropTypes.string.isRequired,
    lang: PropTypes.string
};

export default Model;
