import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import mapMarker from '../../assets/icons/marker.svg';
import styles from './GoogleMapStyles.json'

// import client from "../ApolloClient";
// import gql from 'graphql-tag';


const Map = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={ 5 }
            defaultCenter={ {
                lat: 52.2330269, // latitude for the center of the map
                lng: 20.7810081 // longitude for the center of the map
            } }
            defaultOptions={ {
                disableDefaultUI: true, // disable default map UI
                draggable: true, // make map draggable
                keyboardShortcuts: false, // disable keyboard shortcuts
                scaleControl: true, // allow scale controle
                scrollwheel: true, // allow scroll wheel
                styles: styles // change default map styles
            } }
        >
            <Marker
                icon={ { url: mapMarker } }
                position={ {
                    lat: 52.2330269, // latitude to position the marker
                    lng: 20.7810081 // longitude to position the marker
                } }
            />
        </GoogleMap>
    ))
);

export default Map;