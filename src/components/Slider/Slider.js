import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SlideItem from "./SlideItem";

class Slider extends Component {
    state = {
        slides_array: [...this.props.slides],
        activeSlide: 0,
        prevSlide: [...this.props.slides].length - 1,
        nextSlide: 1,
        sliderHeight: false,
        autoSlideIntervalID: '',
    };

    prev_slide = e => {
        e.preventDefault();
        e.stopPropagation();

        window.clearInterval(this.state.autoSlideIntervalID);

        this.setState(prevState => ({
            activeSlide: prevState.activeSlide - 1 < 0 ? prevState.slides_array.length - 1 : prevState.activeSlide - 1,
            prevSlide: prevState.prevSlide - 1 < 0 ? prevState.slides_array.length - 1 : prevState.prevSlide - 1,
            nextSlide: prevState.activeSlide
        }));

    };

    next_slide = e => {
        e.preventDefault();
        e.stopPropagation();

        window.clearInterval(this.state.autoSlideIntervalID);

        this.setState(prevState => ({
            activeSlide: prevState.activeSlide + 1 > prevState.slides_array.length - 1 ? 0 : prevState.activeSlide + 1,
            prevSlide: prevState.activeSlide,
            nextSlide: prevState.nextSlide + 1 > prevState.slides_array.length - 1 ? 0 : prevState.nextSlide + 1
        }));
    };

    auto_slide = () => {
        this.setState({
            autoSlideIntervalID: window.setInterval(() => {
                this.setState(prevState => ({
                    activeSlide: prevState.activeSlide + 1 > prevState.slides_array.length - 1 ? 0 : prevState.activeSlide + 1,
                    prevSlide: prevState.activeSlide,
                    nextSlide: prevState.nextSlide + 1 > prevState.slides_array.length - 1 ? 0 : prevState.nextSlide + 1
                }));
            }, this.props.autoSlideTime)
        });
    };

    determinePosition = (index) => {
        if (index === this.state.activeSlide) {
            return 'current'
        } else if (index === this.state.prevSlide) {
            return 'prev'
        } else if (index === this.state.nextSlide) {
            return 'next'
        } else return ''
    };

    render() {
        const { activeSlide, nextSlide, prevSlide } = this.state;

        return (
            <section
                className='slider-wrapper'
                style={ { height: `${ this.state.sliderHeight }` } }
                onMouseEnter={ () => window.clearInterval(this.state.autoSlideIntervalID) }
                onMouseLeave={ () => this.auto_slide() }
            >
                <h2 className='slider-title'>SLIDER TITLE HARDCODED</h2>
                <div className='slider-nav prev' onClick={ this.prev_slide }>
                    <button
                        className='slider-button prev'
                        id='slider-button-left'
                        onClick={ this.prev_slide } />
                </div>
                <div className='slider-nav next' onClick={ this.next_slide }>
                    <button
                        className='slider-button next'
                        id='slider-button-right'
                        onClick={ this.next_slide } />
                </div>
                {
                    this.state.slides_array.map((slide, index) => {
                        if (index === activeSlide || index === nextSlide || index === prevSlide) {
                            return <SlideItem
                                key={ slide.id }
                                slide={ slide }
                                position={ this.determinePosition(index) }
                                updateParentHeight={ this.updateHeight }
                            />
                        } else return null;
                    })
                }
            </section>
        );
    }
}

Slider.propTypes = {
    slides: PropTypes.array.isRequired,
    autoSlideTime: PropTypes.number.isRequired
};

export default Slider;