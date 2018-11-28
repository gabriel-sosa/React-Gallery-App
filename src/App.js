import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch,
  matchPath
} from 'react-router-dom'
import SearchForm from './components/search-form.js';
import Navbar from './components/nav-bar.js';
import PhotoContainer from './components/photo-container.js';
import apikey from './config.js';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class App extends Component {

  state = {
    images: [],
    finishedLoading: true
  }

  loadImages = tag => {
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
    history.listen((loc) => {
      const match = matchPath(loc.pathname, {path: "/:tag"});
      match && this.loadImages(match.params.tag)
    });
  }

  render() {
    return (
      <Router history={history}>
        <div className="container">
          <Route path="/" render={({history}) => (<SearchForm history={history} loadImages={this.loadImages} />)} />
          <Navbar loadImages={this.loadImages} />
          <Switch>
            <Route exact path="/" render={() => (<h3>search an Item</h3>)} />
            <Route exact path="/:tag" render={() => (<PhotoContainer images={this.state.images} finishedLoading={this.state.finishedLoading} />)} />
            <Route render={() => (<h3>NOT FOUND</h3>)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;