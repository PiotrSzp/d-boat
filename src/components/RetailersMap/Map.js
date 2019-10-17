import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import mapMarker from '../../assets/icons/marker.svg';
import styles from './GoogleMapStyles.json';

const GoogleMapComponentWithMarker = withScriptjs(
    withGoogleMap(props => {
        let defaultCenter = {
            lat: 52.2285735,
            lng: 21.004782
        };

        return (<GoogleMap
            zoom={ props.zoom }
            center={ {
                lat: props.centerPosition.latitude ? props.centerPosition.latitude : defaultCenter.lat,
                lng: props.centerPosition.longitude ? props.centerPosition.longitude : defaultCenter.lng
            } }
            defaultOptions={ {
                disableDefaultUI: true, // disable default map UI
                draggable: true, // make map draggable
                keyboardShortcuts: false, // disable keyboard shortcuts
                scaleControl: true, // allow scale control
                scrollwheel: true, // allow scroll wheel
                styles: styles // change default map styles
            } }
        >
            { props.retailers.map(retailer => {
                return (
                    <Marker
                        key={ retailer.id }
                        icon={ { url: mapMarker } }
                        position={ {
                            lat: retailer.location.latitude, // latitude to position the marker
                            lng: retailer.location.longitude // longitude to position the marker
                        } }
                        onClick={ () => props.markerClick(retailer.ref, retailer.id) }
                        title={ retailer.name }
                    />
                )
            }) }
        </GoogleMap>);
    })
);

export default GoogleMapComponentWithMarker;