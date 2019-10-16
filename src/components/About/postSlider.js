import React from "react";
import {Gallery, GalleryImage} from "react-gesture-gallery";

function Slider(props) {
    const [index, setIndex] = React.useState(0);


    return (
        <Gallery
            index={index}
            onRequestChange={i => {
                setIndex(i);
            }}
        >
            {props.images.map(img => (
                <GalleryImage objectFit="cover" key={img.url} src={img.url}/>
            ))}
        </Gallery>
    )

}

export default Slider