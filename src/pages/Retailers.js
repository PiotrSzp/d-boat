import React, { Component } from 'react';
import MapWrapper from "../components/RetailersMap/MapWrapper";
import RetailersList from "../components/RetailersList/RetailiersList";
import client from "../components/ApolloClient";
import gql from "graphql-tag";

class Retailers extends Component {
    state = {
        retailers: [],
        centerPosition: {},
        zoom: 10,
        expandedItemId: undefined,
        clearfix: '60px'
    };

    getLocation = () => {
        const success = pos => {
            this.setState({ centerPosition: pos.coords, zoom: 10 });
        };

        navigator.geolocation.getCurrentPosition(success);
    };

    setCenter = (lat, lng) => {
        this.setState({ centerPosition: { latitude: lat, longitude: lng }, zoom: 13 });
    };

    markerClick = (ref, id) => {
        let list = document.getElementsByClassName('retailers-list-wrapper')[0];
        list.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
        this.setState({ expandedItemId: id });
    };

    componentDidMount() {
        // Fetch GraphQL data and set to this.state.retailers
        client
            .query({
                query: gql`
                 query{
                   dealers {
                     id
                     name
                     website
                     phone
                     mail
                     address
                     location {
                        latitude
                        longitude
                     }
                     placeId
                   }
                 }
               `
            })
            .then(res => {
                let dealers = res.data.dealers.map(dealer => ({
                    ...dealer,
                    ref: React.createRef()
                }));
                this.setState({
                    retailers: dealers
                });
            })
            .catch(error => console.error(error));


        const navBar = document.getElementsByClassName('nav')[0];
        console.log(navBar);
        if (navBar) {
            const navClearHeight = window.getComputedStyle(navBar).height;
            this.setState({ clearfix: navClearHeight })
        }
    }

    render() {
        return (
            <>
                <div style={ { 'height': this.state.clearfix } } />
                {/* menu bar clear*/ }
                <section className='retailers-wrapper' style={ { 'height': `calc(100vh - ${ this.state.clearfix }` } }>
                    <MapWrapper
                        retailers={ this.state.retailers }
                        centerPosition={ this.state.centerPosition }
                        zoom={ this.state.zoom }
                        markerClick={ this.markerClick }
                    />
                    <RetailersList
                        retailers={ this.state.retailers }
                        getLocation={ this.getLocation }
                        setCenter={ this.setCenter }
                        list={ this.props.list }
                        expandedItemId={ this.state.expandedItemId }
                    />
                </section>
            </>
        );
    }
}

export default Retailers;
