import React, { Component } from 'react';
import copy from "../../copy";
import SlideItem from "./SlideItem";

class Slider extends Component {
    state = {
        slides_array: [...copy.English.slider],
        activeSlide: 0,
    };


    prev_slide = e => {
        e.preventDefault();
        this.setState({
            activeSlide: this.state.activeSlide - 1 < 0 ? this.state.slides_array.length - 1 : this.state.activeSlide - 1
        });
        let newSlidesArr = this.state.slides_array.map((slide, index) => ({
            ...slide,
            active: index === this.state.activeSlide
        }));
        this.setState({
            slides_array: newSlidesArr
        });
    };


    next_slide = e => {
        e.preventDefault();
        this.setState({
            activeSlide: this.state.activeSlide + 1 > this.state.slides_array.length - 1 ? 0 : this.state.activeSlide + 1
        });
        let newSlidesArr = this.state.slides_array.map((slide, index) => ({
            ...slide,
            active: index === this.state.activeSlide
        }));
        this.setState({
            slides_array: newSlidesArr
        });
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
                    this.state.slides_array.map((slide, index) => <SlideItem key={ slide.id } slide={ slide } active={ index === this.state.activeSlide }/>
                    )
                }
            </div>
        );
    }
}

export default Slider;