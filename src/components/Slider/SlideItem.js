import React, { Component } from 'react';

class SlideItem extends Component {
    render() {
        return (
            <div className={`sider-item`} style={this.props.slide.active ? {} : {display: 'none'}}>
                <img className='slider-img' src={this.props.slide.src} alt={this.props.slide.description} />
                <div className='slider-text'>
                    <h5>{this.props.slide.title}</h5>
                    <p>{this.props.slide.description}</p>
                </div>
            </div>
        );
    }
}

export default SlideItem;