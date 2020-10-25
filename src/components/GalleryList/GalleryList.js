import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

class GalleryList extends Component {

    render() {
        return(
            <div className="gallery">
                    {/* pass mapped out galleryArray down to GalleryItem */}
                    {this.props.galleryArray.map((image) => {
                    return <GalleryItem image={image} key={image.id} galleryGetter={this.props.galleryGetter}/>
                    })}
            </div>
        );
    }
}

export default GalleryList;