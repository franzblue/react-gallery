import Axios from 'axios';
import React, { Component } from 'react';

class GalleryItems extends Component {

    // state to determine whether to show image or description
    state = {
        showImage: true
    }

    // function to switch showImage state upon click
    showImageUpdate = () => {
        console.log('clicked showImageUpdate', this.state.showImage);

        // flips state.showImage boolean value
        this.setState( {
            showImage: !this.state.showImage
        })
    }

    addLike = () => {
        console.log('clicked addLike', this.props.image.likes);
        // axios PUT to change like++
        Axios.put('/gallery/like/:id', )
        .then(response => {
            console.log('response from PUT server', response);
        }).catch(error => {
            console.log('error PUT', error);
            alert('oops');
        })
    }

    render() {
        return(
            <div>
                {/* conditional rendering deciding to show image or description */}
                {this.state.showImage ? 
                <img src={this.props.image.path} 
                alt={this.props.image.description} 
                width="500" height="600"
                onClick={this.showImageUpdate}/>
                :
                <p onClick={this.showImageUpdate}>{this.props.image.description}</p>
                }
                {/* like button */}
                <p>Number of likes: {this.props.image.likes}</p>
                <button onClick={this.addLike}>Like</button>
            </div>   
        )  
    }
}

export default GalleryItems;