import React, { Component } from 'react';

class GalleryList extends Component {

    render() {
        return(
            <>
                <p>Gallery goes here</p>

                    {this.props.galleryArray.map((image) => {
                    return <img src={image.path} alt={image.description}/>
                    })}
                        {/* do not need below code anymore */}
                {/* <img src="images/goat_small.jpg" alt="small goat"/> */}
                {/* <img src={this.image.path} alt="small goat"/> */}
            </>
        );
    }
}

export default GalleryList;
