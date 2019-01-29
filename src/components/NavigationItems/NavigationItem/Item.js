import React from 'react';
import { NavLink } from 'react-router-dom';
import './Item.css';


const item = (props)=>(
    <li className= 'nav-items'>
        <NavLink to={props.link}>{props.children}</NavLink>
    </li>
);
export default item;