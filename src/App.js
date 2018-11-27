import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import SearchForm from './components/search-form.js';
import Navbar from './components/nav-bar.js';
import PhotoContainer from './components/photo-container.js';
import apikey from './config.js';

class App extends Component {

  state = {
    images: [],
    finishedLoading: false,
  }

  loadImages(tag) {
    this.setState({finishedLoading: false});
    const amount = 16;
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&format=json&tags=${tag}&page=1&per_page=${amount}&nojsoncallback=1`)
      .then(data => data.json())
      .then(data => data.photos.photo)
      .then(data => this.setState({
         images: data.map(item => ({
            image: `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`,
            id: item.id
          }))
      }))
      .then(() => this.setState({finishedLoading: true}))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.loadImages(`cat`);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route path="/" render={(prop) => (<SearchForm prop={prop} />)} />
          <Navbar />
          <Switch>
            <Route exact path="/" render={() => (<PhotoContainer images={this.state.images} finishedLoading={this.state.finishedLoading} />)} />
            <Route exact path="/:tag" render={({match}) => {
              console.log(match.params.tag);
              return (<PhotoContainer images={this.state.images} finishedLoading={this.state.finishedLoading} />);
            }} />
            <Route render={() => (<h3>NOT FOUND</h3>)} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;