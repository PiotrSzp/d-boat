import React, {Component} from 'react';
import Post from "./Post";
import client from "../ApolloClient";
import gql from 'graphql-tag';
import {Switch, Route, Link} from "react-router-dom";


class NewsSection extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        // Fetch GraphQL data and set to this.state.events
        client
            .query({
                query: gql`
          query{
            posts {
              id
              title
              content{
                html
                text
                markdown
              }
              image{
                id
                url
              }
              date
              postType{
                type
              }  
            }
          }
        `
            })
            .then(res => {
                this.setState({
                    posts: res.data.posts
                });
            })
            .catch(error => console.error(error));
    }

    textLimit = (text) => {
        const limit = 180;
        const dots = '...';
        if (text.length > limit) {
            text = text.substring(0, limit) + dots;
        }
        return text
    };

    linkFix = (link) => {
        return link.toLocaleLowerCase().replace(/ /g, '-');
    };

    render() {

        return (
            <>
                <Switch>
                    <Route exact path='/news'>
                        <div className="news-container">
                            <section className="news-section">
                                <h1 className="news-title">News & Events</h1>
                                <div className="post-container">
                                    {this.state.posts.map(el => {
                                        return (
                                            <article key={el.id} className="post">
                                                <div className="img-container">
                                                    <Link to={`/news/${this.linkFix(el.title)}`}>
                                                        <img src={el.image.url}
                                                             alt="post-img"
                                                             className="post-img"/>
                                                    </Link>
                                                </div>
                                                <p className="post-date">{el.date}</p>
                                                <h4 className="post-title">{el.title}</h4>
                                                <div className="post-text">
                                                    {this.textLimit(el.content.text)}
                                                </div>
                                                <button className="post-button">
                                                    <Link to={`/news/${this.linkFix(el.title)}`}>Read More</Link>
                                                </button>
                                            </article>
                                        )
                                    })}
                                </div>
                            </section>
                        </div>
                    </Route>
                    {this.state.posts.map((el,i) => {
                        return (
                            <Route key={el.id} path={`/news/${this.linkFix(el.title)}`} >
                                <Post key={el.id} post={el}/>
                            </Route>
                        )
                    })}
                </Switch>
            </>
        )

    }

}

export default NewsSection;