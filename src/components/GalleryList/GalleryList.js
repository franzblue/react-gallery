import React, { Component } from 'react';
import GalleryItems from '../GalleryItems/GalleryItems';

class GalleryList extends Component {

    render() {
        return(
            <>
                <p>George Michael, a cat in six acts</p>
                    {/* pass mapped out galleryArray down to GalleryItems */}
                    {this.props.galleryArray.map((image) => {
                    return <GalleryItems image={image} key={image.id} galleryGetter={this.props.galleryGetter}/>
                    })}

            </>
        );
    }
}

export default GalleryList;