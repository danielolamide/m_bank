import React, { Component } from 'react';
import Posts from './containers/Posts/Posts';
import TopNav from '../src/components/TopNavigation/TopNav';
import Header from '../src/components/Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = 'header'><Header pagehead='Home'/></div>
        <div className ='top-nav'><TopNav/></div>
        <div className ='trends-wrapper'>Trends</div>
        <div className='feed-wrapper'><Posts/></div>
        <div className='advertisment-wrapper'>Ads</div>
        <div>
          <button className='post-button'><i className ='fal fa-pen-alt'></i></button>
        </div>
      </div>
    );
  }
}

export default App;
 