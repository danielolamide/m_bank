import React, { Component } from 'react';
import Feed from './containers/Feed/Feed';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Feed/>
      </div>
    );
  }
}

export default App;
