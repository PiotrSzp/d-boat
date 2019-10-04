import React from 'react';
import APIkey from "./googleMapApiKey";

// Import Google Map component
import GoogleMapComponentWithMarker from './Map';

// Wrapper with Google Map component
class MapWrapper extends React.PureComponent {
    clickHandler = (e) => {
        // e.stopPropagation();
        // e.preventDefault();
        console.log(e);
    };

    // latitude = this.props.userPosition ? this.props.userPosition.latitude : 52.2330269;
    // longitude = this.props.userPosition ? this.props.userPosition.longitude : 20.7810081;

    render() {
        console.log(this.props.userPosition);
        return (
            <section className='retailers-map-wrapper'>
                <GoogleMapComponentWithMarker
                    googleMapURL={ `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${ APIkey }` }
                    loadingElement={ <div style={ { height: `100%` } } /> }
                    containerElement={ <div style={ { height: `100%` } } /> }
                    mapElement={ <div style={ { height: `100%` } } /> }
                    retailers={ this.props.retailers }
                    userPosition={ this.props.userPosition }
                    clickHandler={ this.clickHandler }
                />
            </section>
        );
    }
}


export default MapWrapper;