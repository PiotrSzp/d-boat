import React from 'react';
import {NavLink} from "react-router-dom";

function Post(props) {

    const text = props.post.content.html;
    return (
        <main className='single-post'>
            <div className="container">
                <p className="single-post-date">{props.post.date}</p>
                <h1 className="single-post-title">{props.post.title}</h1>
            </div>
            <img src={props.post.image.url} className='single-post-image' alt="news-img"/>
            <div className='single-post-text' dangerouslySetInnerHTML={{__html: text }}/>
            <button><NavLink to='/news'>Return</NavLink></button>
        </main>
    )
}
export default Post


