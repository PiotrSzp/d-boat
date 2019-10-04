import React, { Component } from 'react';
import PropTypes from 'prop-types';
import copy from "../../copy";

import RetailerItem from "./RetailerItem";

class RetailersList extends Component {
    state = {
        input: '',
        retailers: [],
    };

    render() {
        return (
            <section className='retailers-list-wrapper'>
                <header className='retailers-header'>
                    <h1>{ copy.English.retailersPage.title }</h1>
                    <p>{ copy.English.retailersPage.paragraph }</p>
                    <button
                        onClick={ this.props.getLocation }
                    >{ copy.English.retailersPage.locationBtn }</button>
                </header>
                <ul className='retailers-list'>
                    { this.props.retailers.map(el => {
                        return <RetailerItem key={ el.id } retailer={el}/>
                    }) }
                    {/*//dev below*/}
                    { this.props.retailers.map(el => {
                        return <RetailerItem key={ el.id } retailer={el}/>
                    }) }
                    { this.props.retailers.map(el => {
                    return <RetailerItem key={ el.id } retailer={el}/>
                }) }
                </ul>
            </section>
        );
    }
}

RetailersList.propTypes = {
    retailers: PropTypes.array.isRequired,
};

export default RetailersList;