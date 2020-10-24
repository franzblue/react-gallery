import React, { Component } from 'react';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

class App extends Component {

  state = {
    galleryArray: []
  }

  componentDidMount() {
      console.log('hello world');
      this.galleryGetter()
  }

  galleryGetter = () => {
      Axios.get('/gallery')
          .then(response => {
              console.log('GET gallery', response.data);
              this.setState({
                  galleryArray: response.data
                })
          }).catch(error => {
              console.log('GET error', error);
          })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>ugly array splat</p>
        <p>{JSON.stringify(this.state.galleryArray)}</p>
        <GalleryList galleryArray={this.state.galleryArray} />
      </div>
    );
  }
}

export default App;
