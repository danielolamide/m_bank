import React, { Component } from 'react';
import Home from './containers/Home/Home';
import Notifications from '../src/containers/Notifications/Notifications';
import Discover from '../src/containers/Discover/Discover';
import TopNav from '../src/components/TopNavigation/TopNav';
import Header from '../src/components/Header/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Modal from '../src/components/Modal/Modal';
import './App.css';

class App extends Component {
  render() {
    document.body.style.overflowX = 'hidden';
    return (
      <BrowserRouter>
        <div className="App">
          <div className = 'header'><Header pagehead='Home'/></div>
          <div className ='top-nav'><TopNav/></div>
          <Route path = '/home' component={Home}/>
          <Route path = '/discover' component={Discover}/>
          <Route path = '/notifications' component={Notifications}/>
          <Modal/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
 