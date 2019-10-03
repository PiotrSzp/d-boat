import React from 'react';
import {NavLink} from "react-router-dom";

function Post(props) {


    return (
        <main className='single-post'>
            <img src={props.post.image.url} className='single-post-image' alt="image"/>
            <h1 className="single-post-title">{props.post.title}</h1>
            <p className="single-post-date">{props.post.date}</p>
            <p>{props.post.content.text}</p>
            <button><NavLink to='/news'>Return</NavLink></button>
        </main>
    )
}

export default Post


