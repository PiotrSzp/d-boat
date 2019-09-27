import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MainpageText extends Component {
    render() {
        return (
            <section className='main-text-wrapper'>
                <h2 className='main-text-title'>{ this.props.text.title }</h2>
                {
                    this.props.text.paragraphs.map((p, idx) => <p key={ idx } className='main-text-paragraph'>{ p }</p>)
                }
            </section>
        );
    }
}

MainpageText.propTypes = {
    text: PropTypes.object.isRequired,
};

export default MainpageText;