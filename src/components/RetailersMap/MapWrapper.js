import React from 'react'
import { render } from 'react-dom'

// Import Google Map component
import GoogleMapComponentWithMarker from './Map'

// Some default styles
const styles = {
    width: '60%',
    height: '80vh',
};

// Wrapper with Google Map componentvh
class MapWrapper extends React.PureComponent {
    render() {
        return (
            <div style={styles}>
                <GoogleMapComponentWithMarker
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=" // paste API key here
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        )
    }
}

export default MapWrapper;