import React from 'react';
import Item from './NavigationItem/Item';
import SearchBar from '../SearchBar/SearchBar';
import User from '../User/User';
import Logo from '../Logo/Logo';
import './Items.css';
import '../../assets/Fonts/FontAwesome/FA/css/all.min.css';

// let input = document.getElementById('home-search')
// let faceValues = ['😂','🤣','😆'];
// for(var a = 0; a< faceValues.length; a++){
//     updatePlaceholder.bind(null,faceValues[a], a*1000);
// }

// function updatePlaceholder (v,d) {
//     setTimeout(function () {
//         setInterval(function () {
//             input.setAttribute('placeholder', v);            
//         }, 1000 * faceValues.length);
//     }, d);
// }
const items = (props)=>(
    <ul className= 'nav-ul'>
        <Item link ='/'><i className ='fal fa-home'></i></Item>
        <Item link ='/'><i className ="fal fa-search"></i></Item>
        <Item link ='/'><i className ="fal fa-bell"></i></Item>
        <li><Logo/></li>
        <li><SearchBar placeholder ='Search memeBank 😂'/></li>
        <Item link ='/'><User/></Item>
    </ul>
)


export default items;