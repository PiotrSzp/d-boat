import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FindRetailer extends Component {
    render() {
        return (
            <section className='find-retailer-wrapper'>
                <div className="find-retailer-container">
                    <form className='find-retailer-form' action="">
                        <label htmlFor="find-retailer-input">
                            <h2>{ this.props.texts.title }</h2>
                        </label>
                        <div className="input-container">
                            <input
                                id='find-retailer-input'
                                className='find-retailer-input'
                                placeholder={ this.props.texts.placeholder }
                            />
                            <button
                                className='find-retailer-submit'
                                type='submit' />
                        </div>
                    </form>
                    <button
                        className='find-retailer-btn'
                    >
                        { this.props.texts.button }
                    </button>
                </div>
            </section>
        );
    }
}

FindRetailer.propTypes = {
    text: PropTypes.object.isRequired,
};

export default FindRetailer;