import React, { Component } from 'react';
import copy from "../../copy";
import PropTypes from "prop-types";
import {Phone, Directions, Link, Mail} from '@material-ui/icons';


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

    componentDidUpdate(prevProps) {
        if (this.props.isExpanded !== prevProps.isExpanded) {
            this.setState({expanded: this.props.isExpanded})
        }
    }

    render() {
        return (
            <li className={ this.state.expanded ? 'retailer-list-item expanded' : 'retailer-list-item' }
                onClick={ this.clickOnItem }
                ref={ this.props.retailer.ref }
            >
                <header className="retailer-header">
                    <h2>{ this.props.retailer.name }</h2>
                    <p>{ this.props.retailer.address }</p>
                    <a
                        className='link link-phone'
                        href={ `tel:${ this.props.retailer.phone }` }
                        onClick={ this.clickOnLink }
                    >
                        <Phone/>
                        { this.props.retailer.phone }
                    </a>
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
                        <Directions/>
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
                            <Link/>
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
                                <Mail/>
                                { copy.English.retailersPage.mailButton }
                            </a> : null
                    }
                </section>
            </li>
        );
    }
}

RetailerItem.propTypes = {
    retailer: PropTypes.object.isRequired,
    isExpanded: PropTypes.bool.isRequired,
};

export default RetailerItem;