import React, { Component } from 'react';

class SlideItem extends Component {


    render() {
        return (
            <div className='slider-item' style={this.props.active ? {} : {display: 'none'}}>
                <img
                    className='slider-img'
                    /* in copy.js only filename should be stated! src attribute adds path */

                    src={require('../../assets/slider-images/' + this.props.slide.src)}
                    alt={this.props.slide.description} />
                <div className='slider-text'>
                    <h3>{this.props.slide.title}</h3>
                    <p>{this.props.slide.description}</p>
                </div>
            </div>
        );
    }
}

export default SlideItem;