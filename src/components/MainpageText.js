import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MainpageText extends Component {
    render() {
        return (
            <section className='main-text-wrapper'>
                <div className="main-text-background"/>
                <div className="main-text-container">
                        <h2 className='main-text-title'>{this.props.texts.title}</h2>
                        {
                            this.props.texts.paragraphs.map((p, idx) => <p key={idx}
                                                                           className='main-text-paragraph'>{p}</p>)
                        }
                </div>
            </section>
        );
    }
}

MainpageText.propTypes = {
    texts: PropTypes.object.isRequired,
};

export default MainpageText;
