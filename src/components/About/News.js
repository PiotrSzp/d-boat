import React, {Component} from 'react';
import client from "../ApolloClient";
import gql from 'graphql-tag';
import Slider from "./postSlider";


class NewsSection extends Component {
    state = {
        posts: [],
        activeModal: null
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
              subinfo
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
              gallery { 
                url 
              }  
            }
          }
        `
            })
            .then(res => {
                console.log(res.data.posts);
                this.setState({
                    posts: res.data.posts,
                });
            })
            .catch(error => console.error(error));
    }

    modalSlide = (id) => {
        this.setState({
            activeModal: id
        })
    };

    render() {

        return (
            <>
                <div className="news-container">
                    <section className="news-section">
                        <h1 className="news-title">News & Events</h1>
                        <div className="post-container">
                            {this.state.posts.map(el => {
                                return (
                                    <article key={el.id}
                                             onClick={() => this.modalSlide(el.id)}
                                             className={`post ${this.state.activeModal === el.id ? 'active' : ''}`}
                                             style={{backgroundImage: `url(${el.image.url})`}}>
                                        <div className={`filter ${this.state.activeModal === el.id ? 'active' : ''}`}>
                                            <p className="post-date">{el.date}</p>
                                            <h4 className="post-title">{el.title}</h4>
                                            <div className="bar"/>
                                            <p className="post-text">{el.subinfo}
                                            </p>

                                        </div>
                                        {this.state.activeModal === el.id ? <div className="post-content">
                                            <div className="content-details">
                                                <p className="content-date">{el.date}</p>
                                                <h1 className="content-title">{el.title}</h1>
                                                <div className="bar"/>
                                                <div className="content-text" dangerouslySetInnerHTML={{__html:el.content.html}} />
                                            </div>
                                            <div className="gallery">
                                                {el.gallery?<Slider images={el.gallery}/>:null}
                                            </div>
                                        </div> : null}
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