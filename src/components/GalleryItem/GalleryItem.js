import Axios from 'axios';
import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {

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
        Axios.put(`gallery/like/${this.props.image.id}`)
        .then((response) => {
            this.props.galleryGetter();
            console.log('response from PUT server', this.props.image.likes);
        }).catch((error) => {
            console.log('error PUT', error);
            alert('oops');
        })
    }

    // axios.put(`/api/profile/${id}`, body)

    render() {
        return(
            <div>
                {/* conditional rendering deciding to show image or description */}
                {this.state.showImage ? 
                <div className="image">
                    <img src={this.props.image.path} alt={this.props.image.description} onClick={this.showImageUpdate}/>
                </div>
                :
                <div onClick={this.showImageUpdate}>
                    <p className="description" >{this.props.image.description}</p>
                </div>
                }
                {/* like button */}
                <p>Number of likes: {this.props.image.likes}</p>
                <div className="button">
                    <button onClick={this.addLike}>Like</button>
                </div>
                
            </div>   
        )  
    }
}

export default GalleryItem;