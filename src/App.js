import React, { Component } from 'react';
// import Feed from './containers/Feed/Feed';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className ='top-nav'>Navigation</div>
        <div className ='trends-wrapper'>Trends</div>
        <div className='feed-wrapper'>Feed</div>
        <div className='advertisment-wrapper'>Ads</div>
      </div>
    );
  }
}

export default App;
