import React, { Component } from 'react';

class GalleryList extends Component {

    // need a function to map through array from above
    // this.props.image.path to src="image"
    
    render() {
        return(
            <>
                <p>Gallery goes here</p>
                <img src="images/goat_small.jpg" alt="small goat"/>
                {/* <img src={this.props.galleryArray.path} alt="small goat"/> */}
            </>
        );
    }
}

export default GalleryList;
