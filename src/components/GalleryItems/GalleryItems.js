import React, { Component } from 'react';

class GalleryItems extends Component {



    render() {
        return(
            <img src={this.props.image.path} alt={this.props.image.description} width="500" height="600"/>
        )
    }
}

export default GalleryItems;