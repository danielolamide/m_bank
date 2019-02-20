import React from 'react';
import Item from './NavigationItem/Item';
import SearchBar from '../../SearchBar/SearchBar';
import Logo from '../../Logo/Logo';
import './SignedOutItems.css';


const SignedOutItems =(props)=>{
    return(
        <ul className= 'unsigned-nav-ul'>
            <Item link ='/'><i className ='fal fa-home'></i></Item>
            <li><Logo/></li>
            <li><SearchBar  placeholder = 'Search memeBank 😂'/></li>
            <li className = 'cta-Login-Mobile'>
                <button className ='cta-AuthBtn'>Log In</button>
                <button className ='cta-AuthBtn'>Sign Up</button>
            </li>
            <li className = 'cta-Login-Desktop'><button>
                    <span>&nbsp;Have an account?&nbsp;</span>
                    <span>Log In&nbsp;</span>
                    <span><i className="fas fa-caret-down"></i></span>
                </button>
            </li>
        </ul>
    )
}

export default SignedOutItems;
 