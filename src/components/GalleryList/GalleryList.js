import React, { Component } from 'react';

class GalleryList extends Component {
    
    render() {
        return(
            <>
                <p>Gallery goes here</p>
                <img src="images/goat_small.jpg" alt="small goat"/>
                {/* <img src={this.props.path} alt="small goat"/> */}
            </>
        )
    }
}

export default GalleryList;