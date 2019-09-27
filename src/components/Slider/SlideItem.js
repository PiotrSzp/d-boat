import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SlideItem extends Component {
    render() {
        return (
            <div className={ `slider-item ${ this.props.position }` }>
                <div className='slide-image'
                     style={ {
                         backgroundImage: `url(${ require('../../assets/slider-images/' + this.props.slide.src) })`,
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
};

export default SlideItem;