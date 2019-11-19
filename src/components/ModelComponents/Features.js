import React, { Component } from 'react';
import PropTypes from 'prop-types';
import featureMarker from '../../assets/icons/feature-marker.svg';

class Features extends Component {
    state = {
        activeFeature: undefined,
    };

    activateFeature = idx => {
        this.setState({activeFeature: idx});
    };

    resetActiveFeature = () => {
        this.setState({activeFeature: undefined});
    };

    render() {
        if (this.props.text && this.props.imgSrc) {
            return (
                <section className='features'>
                    <div className='features-img-container'>
                        <div className='features-img-wrapper'>
                            <img
                                className='features-img'
                                src={ this.props.imgSrc }
                                alt="Deck view"
                            />
                            {
                                this.props.text.map((feature, idx) => {
                                    const style = {
                                        'backgroundImage': `url(${ featureMarker })`,
                                        'top': feature.top,
                                        'left': feature.left
                                    };
                                    return <div
                                        key={ feature.title }
                                        style={ style }
                                        title={ feature.title }
                                        onMouseEnter={ () => this.activateFeature(idx) }
                                        onMouseLeave={ this.resetActiveFeature }
                                        className={ this.state.activeFeature === idx ? 'feature-marker active' : 'feature-marker' } />
                                })
                            }
                        </div>
                    </div>
                    <div className='features-text-container'>
                        {
                            this.props.text.map((feature, idx) => {
                                return (
                                    <article
                                        key={ feature.title }
                                        onMouseEnter={ () => this.activateFeature(idx) }
                                        onMouseLeave={ this.resetActiveFeature }
                                        className={ this.state.activeFeature === idx ? 'single-feature-container active' : 'single-feature-container' }
                                    >
                                        <h2>{ feature.title }</h2>
                                        <p>{ feature.text }</p>
                                    </article>
                                )
                            })
                        }
                    </div>
                </section>
            );
        } else return null;
    }
}

Features.propTypes = {
    text: PropTypes.array,
    imgSrc: PropTypes.string
};

export default Features;
