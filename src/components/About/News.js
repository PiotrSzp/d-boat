import React, {Component} from 'react';
import Nav from "../Navigation/Nav";
import client from "../ApolloClient";
import gql from 'graphql-tag';

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
                console.log(res.data.posts);
                this.setState({
                    posts: res.data.posts
                });
            })
            .catch(error => console.error(error));
    }

    render() {

        return (
            <>
                <Nav/>
                <div className="news-container">
                    <section className="news-section">
                        <h1 className="news-title">News & Events</h1>
                        <div className="post-container">
                            {this.state.posts.map(el => {
                                return (
                                    <article key={el.id} className="post">
                                        <div className="img-container">
                                        <img src={el.image.url} alt="picture" className="post-img"/>
                                        </div>
                                        <p className="post-date">{el.date}</p>
                                        <h4 className="post-title">{el.title}</h4>
                                        <div className="post-text">
                                            {el.content.text}
                                        </div>
                                        <button className="post-button">Read More</button>
                                    </article>
                                )
                            })}
                        </div>
                    </section>
                </div>
            </>
        )

    }

}

export default NewsSection;