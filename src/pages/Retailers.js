import React, { Component } from 'react';
import MapWrapper from "../components/RetailersMap/MapWrapper";
import RetailersList from "../components/RetailersList/RetailiersList";
import client from "../components/ApolloClient";
import gql from "graphql-tag";
import { ScrollTo } from 'react-scroll-to'

class Retailers extends Component {
    state = {
        retailers: [],
        centerPosition: {},
        zoom: 10,
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

    markerClick = (ref) => {
        console.log(ref.current);
        // ScrollTo({ref: ref.current});
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
    }

    render() {
        return (
            <ScrollTo>
                <div style={ { 'height': '60px' } } />
                {/* menu bar clear*/ }
                <section className='retailers-wrapper'>
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
                    />
                </section>
            </ScrollTo>
        );
    }
}

export default Retailers;