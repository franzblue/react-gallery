import React, { Component } from 'react';
import GalleryItems from '../GalleryItems/GalleryItems';

class GalleryList extends Component {

    render() {
        return(
            <>
                <p>Gallery goes here</p>
                    {/* pass mapped out galleryArray down to GalleryItems */}
                    {this.props.galleryArray.map((image) => {
                    return <GalleryItems image={image} key={image.id} likes={this.props.likes}/>
                    })}

            </>
        );
    }
}

export default GalleryList;


                        {/* do not need below code anymore */}
                {/* <img src="images/goat_small.jpg" alt="small goat"/> */}
                {/* <img src={this.image.path} alt="small goat"/> */}