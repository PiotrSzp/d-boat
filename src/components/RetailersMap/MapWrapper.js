import React from 'react';
import APIkey from "./googleMapApiKey";

// Import Google Map component
import GoogleMapComponentWithMarker from './Map';

// Wrapper with Google Map component
class MapWrapper extends React.PureComponent {
    // clickHandler = (e) => {
    //     e.stopPropagation();
    //     e.preventDefault();
    // };

    latitude = this.props.centerPosition ? this.props.centerPosition.latitude : 52.2330269;
    longitude = this.props.centerPosition ? this.props.centerPosition.longitude : 20.7810081;

    render() {
        return (
            <section className='retailers-map-wrapper'>
                <GoogleMapComponentWithMarker
                    googleMapURL={ `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${ APIkey }` }
                    loadingElement={ <div style={ { height: `100%` } } /> }
                    containerElement={ <div style={ { height: `100%` } } /> }
                    mapElement={ <div style={ { height: `100%` } } /> }
                    retailers={ this.props.retailers }
                    centerPosition={ this.props.centerPosition }
                    zoom={ this.props.zoom }
                    clickHandler={ this.clickHandler }
                    markerClick={this.props.markerClick}
                />
            </section>
        );
    }
}


export default MapWrapper;