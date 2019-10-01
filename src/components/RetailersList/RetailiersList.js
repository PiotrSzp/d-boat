import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RetailersList extends Component {
    state = {
        input: '',
        retailers: [],
    };

    // inputHandler = e => {
    //     e.preventDefault();
    //     this.setState({ input: e.target.value });
    // };

    render() {
        return (
            <ul>
                { this.props.retailers.map(el => {
                    return <li key={ el.id }>{ el.name }</li>
                }) }
            </ul>
        );
    }
}

RetailersList.propTypes = {
    retailers: PropTypes.array.isRequired,
};

export default RetailersList;