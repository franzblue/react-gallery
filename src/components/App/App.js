import React, { Component } from 'react';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

class App extends Component {

  state = {
    galleryArray: []
  }

  // function to GET data on page load
  componentDidMount() {
      console.log('hello world');
      this.galleryGetter()
  }

  // function to GET data from gallery.data module
  galleryGetter = () => {
      Axios.get('/gallery')
          .then((response) => {
              console.log('GET gallery', response.data);
              this.setState({
                  galleryArray: response.data
                })
          }).catch((error) => {
              console.log('GET error', error);
          })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">George Michael, a cat in six acts</h1>
        </header>
        <br/>
        {JSON.str}
        <main>
          {/* send galleryArray to GalleryList component
          also send along galleryGetter for page refresh */}
          <GalleryList galleryArray={this.state.galleryArray} galleryGetter={this.galleryGetter}/>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
