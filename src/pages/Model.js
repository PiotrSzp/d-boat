import React, { Component } from 'react';
import PropTypes from "prop-types";
import Video from "../components/VideoStart/Video";
import client from "../components/ApolloClient";
import gql from "graphql-tag";
import Features from "../components/ModelComponents/Features";

class Model extends Component {
    state = {
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
                }, () => {
                    this.setState(() => {
                        const videoSrc = require('../assets/movie/' + this.state.model.videoFileName);
                        return { videoSrc };
                    })
                });
            })
            .catch(error => console.error(error));
    }


    render() {
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
                         dangerouslySetInnerHTML={ { __html: this.state.model.highlightsEn.html } } />
                {
                    this.state.model.featuresEn ? <Features
                        text={ this.state.model.featuresEn.features }
                        imgSrc={ this.state.model.featuresImg.url }
                    /> : null
                }
            </>
        )
    }
}

Model.propTypes = {
    modelLink: PropTypes.string.isRequired,
};

export default Model;
