import React from 'react';
import './Item.css';


const item = (props)=>(
    <li className= 'nav-items'>
        <a href={props.link}>{props.children}</a>
    </li>
);
export default item;