import React, {Component, PropTypes} from 'react';
import arrow from '../../assets/img/select-arrow.png';

class LanguageChange extends Component {
    state = {
        langValue: 'EN',
        isClicked: false
    };

    handleOnLang = (language, e) => {
        this.props.language(language);
        this.setState({
            langValue: e.currentTarget.getAttribute('data-lang'),
            isClicked: false
        })
    };

    handleOnClick = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    };


    render() {
        return (
            <div  className="select-wrapper">
                <div className="lang-value" onClick={this.handleOnClick}>
                    {this.state.langValue}
                    <img src={arrow}/>
                </div>
                <div className="language-list"
                     style={this.state.isClicked ? {visibility: 'visible', opacity: '1'} : null}>
                    <span data-lang='PL' onClick={(e) => this.handleOnLang('polish', e)}>Polski</span>
                    <span data-lang='EN' onClick={(e) => this.handleOnLang('english', e)}>English</span>
                </div>
            </div>
        )
    }
}

export default LanguageChange;