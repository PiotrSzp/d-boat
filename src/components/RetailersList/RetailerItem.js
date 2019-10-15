import React, { Component } from 'react';

import copy from "../../copy";

class RetailerItem extends Component {
    state = {
        expanded: false,
    };

    clickOnItem = () => {
        let newState = !this.state.expanded;
        this.setState({ expanded: newState });
        if (!this.state.expanded) {
            this.props.setCenter(this.props.retailer.location.latitude, this.props.retailer.location.longitude)
        }
    };

    clickOnLink = e => {
        e.stopPropagation();
    };


    render() {
        return (
            <li className={ this.state.expanded ? 'retailer-list-item expanded' : 'retailer-list-item' }
                onClick={ this.clickOnItem }
                ref={ this.props.retailer.ref }
            >
                <header className="retailer-header">
                    <h2>{ this.props.retailer.name }</h2>
                    <a
                        className='link link-phone'
                        href={ `tel:${ this.props.retailer.phone }` }
                        onClick={ this.clickOnLink }
                    >
                        { this.props.retailer.phone }
                    </a>
                    <p>{ this.props.retailer.address }</p>
                    <div className={ this.state.expanded ? 'dropdown-btn expanded' : 'dropdown-btn' } />
                </header>
                <section
                    className={ this.state.expanded ? 'retailer-btns expanded' : 'retailer-btns' }
                >
                    <a
                        className='link link-btn'
                        href={ `https://www.google.com/maps/search/?api=1&query=${ this.props.retailer.location.latitude },${ this.props.retailer.location.longitude }&query_place_id=${ this.props.retailer.placeId }` }
                        target='_blank'
                        rel="noopener noreferrer"
                        onClick={ this.clickOnLink }
                    >
                        { copy.English.retailersPage.mapsButton }
                    </a>
                    { this.props.retailer.website ?
                        <a
                            className='link link-btn'
                            href={ this.props.retailer.website }
                            target='_blank'
                            rel="noopener noreferrer"
                            onClick={ this.clickOnLink }
                        >
                            { copy.English.retailersPage.webButton }
                        </a> : null
                    }
                    {
                        this.props.retailer.mail ?
                            <a
                                className='link link-btn'
                                href={ `mailto: ${ this.props.retailer.mail }` }
                                target='_blank'
                                rel="noopener noreferrer"
                                onClick={ this.clickOnLink }
                            >
                                { copy.English.retailersPage.mailButton }
                            </a> : null
                    }
                </section>
            </li>
        );
    }
}

export default RetailerItem;