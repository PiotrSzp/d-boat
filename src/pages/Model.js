import React, { Component } from 'react';
import copy from "../copy";
import PropTypes from "prop-types";
import Video from "../components/VideoStart/Video";
import modelVideo from "../assets/movie/IntroConv.mp4";
import client from "../components/ApolloClient";
import gql from "graphql-tag";

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
            }
        },
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
                  }
                }
               `
            })
            .then(res => {
                this.setState({
                    model: res.data.models[0],
                });
            })
            .catch(error => console.error(error));
    }


    render() {
        return (
            <>
                <section className='header-video'>
                    <Video imgSrc={ modelVideo } muted={ true } />
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
                <section className='highlights' dangerouslySetInnerHTML={ { __html: this.state.model.highlightsEn.html } } />
            </>
        )
    }
}

Model.propTypes = {
    modelLink: PropTypes.string.isRequired,
};

export default Model;
