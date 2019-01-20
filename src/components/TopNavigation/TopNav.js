import React from 'react';
import Items from '../NavigationItems/Items';
import './TopNav.css';

const topNav = (props)=>(
    <nav className='navigation'>
        <Items/>
        {/* <User/> */}
    </nav>
)

export default topNav;