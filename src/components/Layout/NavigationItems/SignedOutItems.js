import React from 'react';
import Item from './NavigationItem/Item';
import SearchBar from '../../SearchBar/SearchBar';
import {Link} from 'react-router-dom';
import './SignedOutItems.css';


const SignedOutItems =(props)=>{
    return(
        <ul className= 'nav-ul'>
            <Item link ='/'><i className ='fal fa-home'></i></Item>
            <li><SearchBar placeholder = 'Search memeBank 😂'/></li>
            <li><Link to ='/'>
                    <span>Have an account?</span>
                    <span>Log In</span>
                    <span><i className="fas fa-caret-down"></i></span>
                </Link>
            </li>
        </ul>
    )
}

export default SignedOutItems;
 