import React, { Component } from 'react';

class GalleryList extends Component {

    render() {
        return(
            <>
                <p>George Michael, a cat in six acts</p>

                    {this.props.galleryArray.map((image) => {
                    return <img src={image.path} alt={image.description} width="500" height="600"/>
                    })}
                        {/* do not need below code anymore */}
                {/* <img src="images/goat_small.jpg" alt="small goat"/> */}
                {/* <img src={this.image.path} alt="small goat"/> */}
            </>
        );
    }
}

export default GalleryList;
