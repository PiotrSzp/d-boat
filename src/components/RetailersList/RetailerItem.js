import React, { Component } from 'react';

import copy from "../../copy";

class RetailerItem extends Component {
    render() {
        return (
            <li className='retailer-list-item'>
                <h2>{ this.props.retailer.name }</h2>
                <a
                    className='link link-phone'
                    href={ `tel:${ this.props.retailer.phone }` }
                >
                    { this.props.retailer.phone }
                </a>
                <p>{ this.props.retailer.address }</p>
                <a
                    className='link link-btn'
                    href={ `https://www.google.com/maps/search/?api=1&query=${ this.props.retailer.location.latitude },${ this.props.retailer.location.longitude }&query_place_id=${ this.props.retailer.placeId }` }
                    target='_blank'
                    rel="noopener noreferrer"
                >
                    { copy.English.retailersPage.mapsButton }
                </a>
                <a
                    className='link link-btn'
                    href={ this.props.retailer.website }
                    target='_blank'
                    rel="noopener noreferrer"
                >
                    { copy.English.retailersPage.webButton }
                </a>
                <a
                    className='link link-btn'
                    href={ `mailto: ${ this.props.retailer.mail }` }
                    target='_blank'
                    rel="noopener noreferrer"
                >
                    { copy.English.retailersPage.mailButton }
                </a>
            </li>
        );
    }
}

export default RetailerItem;