import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import mapMarker from '../../assets/icons/marker.svg';
import styles from './GoogleMapStyles.json';

const GoogleMapComponentWithMarker = withScriptjs(
    withGoogleMap(props => {
        return (<GoogleMap
            defaultZoom={ 9 }
            defaultCenter={ {
                lat: 52.2330269, // latitude for the center of the map
                lng: 20.7810081 // longitude for the center of the map
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
                        onClick={ () => console.log(retailer) }
                        title={ retailer.name }
                    />
                )
            }) }
        </GoogleMap>);
    })
);

export default GoogleMapComponentWithMarker;