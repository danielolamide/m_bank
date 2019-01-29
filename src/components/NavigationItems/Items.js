import React from 'react';
import Item from './NavigationItem/Item';
import SearchBar from '../SearchBar/SearchBar';
import User from '../User/User';
import Logo from '../Logo/Logo';
import './Items.css';
import '../../assets/Fonts/FontAwesome/FA/css/all.min.css';

const items = (props)=>(
    <ul className= 'nav-ul'>
        <Item link ='/home'><i className ='fal fa-home'></i></Item>
        <Item link ='/discover'><i className ="fal fa-search"></i></Item>
        <Item link ='/notifications'><i className ="fal fa-bell"></i></Item>
        <li><Logo/></li>
        <li><SearchBar placeholder ='Search memeBank 😂'/></li>
        <Item link ='/'><User/></Item>
    </ul>
)


export default items;