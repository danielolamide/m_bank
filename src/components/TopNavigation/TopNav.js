import React from 'react';
import SignedInItems from '../Layout/NavigationItems/SignedInItems';
import SignedOutItems from '../Layout/NavigationItems/SignedOutItems';
import './TopNav.css';

const topNav = (props)=>(
    <nav className='navigation'>
        {/* <SignedInItems/> */}
        <SignedOutItems/>
        {/* <User/> */}
    </nav>
)

export default topNav;