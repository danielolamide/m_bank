import React, { Component } from 'react';
import Home from './containers/Home/Home';
import Notifications from '../src/containers/Notifications/Notifications';
import Discover from '../src/containers/Discover/Discover';
import TopNav from '../src/components/TopNavigation/TopNav';
import Header from '../src/components/Header/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Modal from '../src/components/Modal/Modal';
import ModalTrigger from '../src/components/Modal/ModalTrigger/ModalTrigger';
import './App.css';

class App extends Component {
  state = {
    isOpen : false
  }
  onOpen= ()=>{
      this.setState({isOpen : true});
      document.querySelector('html').style.overflow = 'hidden';
  };
  onClose = ()=>{
      this.setState({isOpen : false});
      document.querySelector('html').style.overflow = 'visible';
  };
  onKeyDownHandler = (event)=>{
    return event.keyCode ===27 && this.onClose();
  }
  
  componentDidMount(){
    document.title = 'Home / memeBank';
  }
  render() {
    document.body.style.overflowX = 'hidden';
    return (
      <BrowserRouter>
        <div className="App">
          <div className = 'header'><Header pagehead='Home'/></div>
          <div className ='top-nav'><TopNav/></div>
          <Route 
            path = '/home' 
            render={(props)=> <Home onOpen = {this.onOpen}/>}
          />
          <Route path = '/discover' component={Discover}/>
          <Route path = '/notifications' component={Notifications}/>
          <Modal isOpen = {this.state} opened = {this.onOpen} closed={this.onClose} keyDownHandler = {this.onKeyDownHandler}/>
          <ModalTrigger onOpen = {this.onOpen}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
 