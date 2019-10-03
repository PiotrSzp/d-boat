import React, { Component } from 'react';

// import copy from "../../copy";

class RetailerItem extends Component {
    render() {
        return (
            <li className='retiler-item'>
                <h3>{ this.props.retailer.name }</h3>
                <a href={ `tel:${ this.props.retailer.phone }` }>{ this.props.retailer.phone }</a>
                <p>{ this.props.retailer.address }</p>
                <a
                    href={ `https://www.google.com/maps/search/?api=1&query=${ this.props.retailer.location.latitude },${ this.props.retailer.location.longitude }&query_place_id=${ this.props.retailer.placeId }` }
                    target='_blank'
                >
                    See on Google Maps
                </a>
                <a
                    href={ this.props.retailer.website }
                    target='_blank'
                >
                    Visit website
                </a>
                <a href={ `mailto: ${ this.props.retailer.mail }` }>Write to retailer</a>
            </li>
        );
    }
}

export default RetailerItem;