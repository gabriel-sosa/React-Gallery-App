// react and router imports
import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch,
  matchPath
} from 'react-router-dom'
import { createBrowserHistory } from "history";
//my components imports
import SearchForm from './components/search-form.js';
import Navbar from './components/nav-bar.js';
import PhotoContainer from './components/photo-container.js';
import apikey from './config.js';
//create custom history object for the Router
const history = createBrowserHistory();

class App extends Component {
  //The states of the class, the array of images and a boolen to know whether the fetch call was made or not
  state = {
    images: [],
    finishedLoading: true
  }
  //this function takes care of making the fetch call
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
      .catch(err => console.log(err))
      .catch(() => this.setState({finishedLoading: true}));
  }
  //when the component is created first checks the url to display the correct information, 
  //then sets the history object to listen for changes in the location, this way is easier to handle the nav bars and the search bar
  componentDidMount() {
    const searchImages = loc => {
      const match = matchPath(loc.pathname, {path: "/search/:tag"}) || matchPath(loc.pathname, {path: "/:tag"});
      console.log(match);
      match && this.loadImages(match.params.tag)
    }
    searchImages(history.location);
    history.listen(searchImages);
  }
  //the render method
  render() {
    return (
      <Router history={history}>{/*the Router component is created with a custom history object*/}
        <div className="container">
          {/*the history object is passed down to the SearchForm so the component ca redirect to the search route*/}
          <SearchForm history={history} loadImages={this.loadImages} />
          <Navbar />
          <Switch>
            {/*the root path will display a friendly message, inviting the user to search for an item*/}
            <Route exact path="/" render={() => (<h3>search an Item</h3>)} />
            {/*the navigation bar routes*/}
            <Route exact path="/:tag" render={() => (<PhotoContainer images={this.state.images} finishedLoading={this.state.finishedLoading} />)} />
            {/*the search route*/}
            <Route exact path="/search/:tag" render={() => (<PhotoContainer images={this.state.images} finishedLoading={this.state.finishedLoading} />)} />
            {/*the route when the location doesn't match any other path*/}
            <Route render={() => (<h3>Error 404: this path does not exist</h3>)} />
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;