import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import BoatImage from

class SlideItem extends Component {
    componentDidMount() {
        window.setTimeout(() => {
            const slideItem = document.getElementsByClassName('slider-item')[0];
            const slideHeight = window.getComputedStyle(slideItem).height;
            this.props.updateParentHeight(slideHeight);
        }, 10);
    }

// <img
// className='slider-img'
//     // in copy.js only filename should be stated! src attribute adds path
// src={ require('../../assets/slider-images/' + this.props.slide.src) }
// alt={ this.props.slide.description }
// />


    render() {
        return (
            <div className={ `slider-item ${ this.props.position }` }>

                <div
                    style={ {
                        width: '80%',
                        paddingTop: '33%',
                        backgroundImage: `url(${ require('../../assets/slider-images/' + this.props.slide.src) })`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat'
                    } }
                />
                <div className='slider-text'>
                    <h3>{ this.props.slide.title }</h3>
                    <p>{ this.props.slide.description }</p>
                </div>
            </div>
        );

    }
}

SlideItem.propTypes = {
    slide: PropTypes.object.isRequired,
    position: PropTypes.string.isRequired,
    updateParentHeight: PropTypes.func.isRequired
};

export default SlideItem;