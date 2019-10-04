import React, { Component } from 'react';

import MapWrapper from "../components/RetailersMap/MapWrapper";
import RetailersList from "../components/RetailersList/RetailiersList";
import client from "../components/ApolloClient";
import gql from "graphql-tag";

const styles = {
    'height': '60px'
};

class Retailers extends Component {
    state = {
        retailers: [],
        userPosition: {}
    };

    getLocation = () => {
        const success = pos => {
            this.setState({userPosition: pos.coords});
            console.log(pos);
        };

        navigator.geolocation.getCurrentPosition(success);
    };

    componentDidMount() {
        // Fetch GraphQL data and set to this.state.events
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
                this.setState({
                    retailers: res.data.dealers
                });
            })
            .catch(error => console.error(error));
    }

    render() {
        return (
            <>
                <div style={ styles } />
                <section className='retailers-wrapper'>
                    <MapWrapper
                        retailers={ this.state.retailers }
                        userPosition={ this.state.userPosition }
                    />
                    <RetailersList
                        retailers={ this.state.retailers }
                        getLocation={this.getLocation}
                    />
                </section>
            </>
        );
    }
}

export default Retailers;