import React, { Component } from 'react';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import PropTypes from 'prop-types';
// import copy from "../../copy";

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
                    <h1>{ this.props.list.retailersPage.title }</h1>
                    <p>{ this.props.list.retailersPage.paragraph }</p>
                    <button
                        className='location-btn'
                        onClick={ this.props.getLocation }
                    ><MyLocationIcon/>{ this.props.list.retailersPage.locationBtn }</button>
                </header>
                <ul className='retailers-list'>
                    { this.props.retailers.map(el => {
                        return <RetailerItem
                            key={ el.id }
                            retailer={ el }
                            setCenter={ this.props.setCenter }
                            isExpanded={ this.props.expandedItemId === el.id }
                        />
                    }) }
                </ul>
            </section>
        );
    }
}

RetailersList.propTypes = {
    retailers: PropTypes.array.isRequired,
    getLocation: PropTypes.func.isRequired,
    setCenter: PropTypes.func.isRequired,
    expandedItemId: PropTypes.string,
    list: PropTypes.object.isRequired
};

export default RetailersList;
