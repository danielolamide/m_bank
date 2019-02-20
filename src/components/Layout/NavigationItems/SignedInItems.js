import React from 'react';
import Item from './NavigationItem/Item';
import SearchBar from '../../SearchBar/SearchBar';
import User from '../../User/User';
import Logo from '../../Logo/Logo';
import './SignedInItems.css';
import '../../../assets/Fonts/FontAwesome/FA/css/all.min.css';

function settingsDropdown() {
    document.getElementById('settings').classList.toggle('show');
}

const SignedInItems = (props)=>(
    <ul className= 'nav-ul'>
        <Item link ='/home'><i className ='fal fa-home'></i></Item>
        <Item link ='/discover'><i className ="fal fa-search"></i></Item>
        <Item link ='/notifications'><i className ="fal fa-bell"></i></Item>
        <li><Logo/></li>
        <li><SearchBar placeholder ='Search memeBank 😂'/></li>
        <div className='user-btn-holder'>
            <button onClick = {settingsDropdown}  className='user-button'><User/><span>UserName<i className='fas fa-caret-down'></i></span></button>
            <div className = 'shortcut-profile-settings' id='settings'>
                <a href = '/'>Settings</a>
                <a href = '/'>Settings</a>
                <a href = '/'>Settings</a>
            </div>
        </div>
    </ul>
)


export default SignedInItems;