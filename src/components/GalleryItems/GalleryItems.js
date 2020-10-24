import React, { Component } from 'react';

class GalleryItems extends Component {

    // state to determine whether to show image or description
    state = {
        showImage: true
    }

    // function to switch showImage state upon click
    showImageUpdate = () => {
        console.log('clicked', this.state.showImage);

        this.setState( {
            showImage: !this.state.showImage
        })
    }

    render() {
        return(
            <div>
                {this.state.showImage ? 
                <img src={this.props.image.path} 
                alt={this.props.image.description} 
                width="500" height="600"
                onClick={this.showImageUpdate}/>
                :
                <p onClick={this.showImageUpdate}>{this.props.image.description}</p>
                }
            </div>   
        )  
    }
}

export default GalleryItems;