import React, { Component } from 'react';
// import Feed from './containers/Feed/Feed';
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
        <div className='feed-wrapper'>Feed</div>
        <div className='advertisment-wrapper'>Ads</div>
      </div>
    );
  }
}

export default App;
