import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FindRetailer extends Component {
    state = {
        inputVal: '',
    };

    changeHandler = (e) => {
        e.preventDefault();
        this.setState({inputVal: e.target.value});
    };

    submitHandler = e => {
        e.preventDefault();
        console.log("Submit wow wow" + this.state.inputVal);
    };

    render() {
        return (
            <section className='find-retailer-wrapper'>
                <div className="find-retailer-container">
                    <form className='find-retailer-form' action="" onSubmit={this.submitHandler}>
                        <label htmlFor="find-retailer-input">
                            <h2>{ this.props.texts.title }</h2>
                        </label>
                        <div className="input-container">
                            <input
                                id='find-retailer-input'
                                className='find-retailer-input'
                                placeholder={ this.props.texts.placeholder }
                                value={this.state.inputVal}
                                onChange={this.changeHandler}
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
    texts: PropTypes.object.isRequired,
};

export default FindRetailer;