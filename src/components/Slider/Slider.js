import React, { Component } from 'react';
import SlideItem from "./SlideItem";

let slides_array = [
    {
        id: 1,
        src: 'https://via.placeholder.com/150',
        title: 'Slide 1',
        description: 'This is desc of slide 1',
        active: true
    },
    {
        id: 2,
        src: 'https://via.placeholder.com/150',
        title: 'Slide 2',
        description: 'This is desc of slide 2',
        active: false
    },
    {
        id: 3,
        src: 'https://via.placeholder.com/150',
        title: 'Slide 3',
        description: 'This is desc of slide 3',
        active: false
    },

];

class Slider extends Component {
    slides_array = [...slides_array];

    next_slide = e => {
        e.preventDefault();
        console.log('next');
    };

    prev_slide = e => {
        e.preventDefault();
        console.log('prev');
    };

    
    render() {
        return (<div className='slider-wrapper'>
                <div className='slider-nav left'>
                    <button className='slider-button prev' id='slider-button-left' onClick={ this.prev_slide }>LEWO</button>
                </div>
                <div className='slider-nav right'>
                    <button className='slider-button next' id='slider-button-right' onClick={ this.next_slide }>PRAWO</button>
                </div>
                {
                    this.slides_array.map(slide => <SlideItem key={ slide.id } slide={ slide } />
                    )
                }
            </div>
        );
    }
}

export default Slider;