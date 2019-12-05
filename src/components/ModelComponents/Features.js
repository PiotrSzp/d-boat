import React, { Component } from 'react';
import PropTypes from 'prop-types';
import featureMarker from '../../assets/icons/feature-marker.svg';

class Features extends Component {
    state = {
        activeFeature: undefined,
    };

    activateFeature = idx => {
        this.setState({ activeFeature: idx });
    };

    resetActiveFeature = () => {
        this.setState({ activeFeature: undefined });
    };

    render() {
        if (this.props.text && this.props.imgSrc) {
            return (
                <section className='features'>
                    {/*<h2 className='features-title'>Features</h2>*/}
                    {/* ======== THIS IS DEFAULT VERISON ========= */ }
                    {/*<div className='features-img-container'>*/ }
                    {/*    <div className='features-img-wrapper'>*/ }
                    {/*        <img*/ }
                    {/*            className='features-img'*/ }
                    {/*            src={ this.props.imgSrc }*/ }
                    {/*            alt="Deck view"*/ }
                    {/*        />*/ }
                    {/*        {*/ }
                    {/*            this.props.text.map((feature, idx) => {*/ }
                    {/*                const style = {*/ }
                    {/*                    'backgroundImage': `url(${ featureMarker })`,*/ }
                    {/*                    'top': feature.top,*/ }
                    {/*                    'left': feature.left*/ }
                    {/*                };*/ }
                    {/*                return <div*/ }
                    {/*                    key={ feature.title }*/ }
                    {/*                    style={ style }*/ }
                    {/*                    title={ feature.title }*/ }
                    {/*                    onMouseEnter={ () => this.activateFeature(idx) }*/ }
                    {/*                    // onMouseLeave={ this.resetActiveFeature }*/ }
                    {/*                    className={ this.state.activeFeature === idx ? 'feature-marker active' : 'feature-marker' } />*/ }
                    {/*            })*/ }
                    {/*        }*/ }
                    {/*    </div>*/ }
                    {/*</div>*/ }
                    {/* ======== end of default verison ========= */ }
                    {/* ======== THIS IS 100 VERISON ========= */ }
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
                                        onMouseEnter={ () => this.activateFeature(idx) }
                                        onMouseLeave={ this.resetActiveFeature }
                                        className={ this.state.activeFeature === idx ? 'feature-marker active' : this.state.activeFeature === undefined ? 'feature-marker' : 'feature-marker opaque' }>
                                        <div
                                            className={ this.state.activeFeature === idx ? 'marker-modal active' : 'marker-modal' }>
                                            <h2>{ feature.title }</h2>
                                            <p>{ feature.text }</p>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    {/* ======== end of 100 verison ========= */ }
                    {/* ======== THIS IS DEFAULT VERISON ========= */ }
                    {/*<div className='features-text-container'>*/ }
                    {/*    {*/ }
                    {/*        this.props.text.map((feature, idx) => {*/ }
                    {/*            return (*/ }
                    {/*                <article*/ }
                    {/*                    key={ feature.title }*/ }
                    {/*                    onMouseEnter={ () => this.activateFeature(idx) }*/ }
                    {/*                    // onMouseLeave={ this.resetActiveFeature }*/ }
                    {/*                    className={ this.state.activeFeature === idx ? 'single-feature-container active' : 'single-feature-container' }*/ }
                    {/*                >*/ }
                    {/*                    <h2>{ feature.title }</h2>*/ }
                    {/*                    <p>{ feature.text }</p>*/ }
                    {/*                </article>*/ }
                    {/*            )*/ }
                    {/*        })*/ }
                    {/*    }*/ }
                    {/*</div>*/ }
                    {/* ======== end of default verison ========= */ }
                    {/* ======== THIS IS 70:30 VERISON / Mobile part for 100 version ========= */ }
                    <div className="features-text-container single-feature-display-container">
                        <div className='nav-dots-wrapper'>
                            {
                                this.props.text.map((feature, idx) => {
                                    return (
                                        <div
                                            key={ feature.title }
                                            className={this.state.activeFeature === idx ? 'nav-dot active' : 'nav-dot'}
                                            onMouseEnter={ () => this.activateFeature(idx) }
                                            title={ feature.title }
                                            // style={ this.state.activeFeature === idx ? { "transform": "scale(1.3)" } : {} }
                                        />
                                    )
                                })
                            }
                        </div>
                        <article
                            key={ this.props.text[this.state.activeFeature] }
                            className='single-feature-container single-feature-display active'
                        >
                            <h2>{ this.state.activeFeature !== undefined ?  this.props.text[this.state.activeFeature].title : this.props.text[0].title }</h2>
                            <p>{ this.state.activeFeature !== undefined ?  this.props.text[this.state.activeFeature].text : this.props.text[0].text }</p>
                        </article>
                    </div>
                    {/*======== end of 70:30 verison / mobile part for 100 version ========= */}
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
