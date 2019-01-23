import React from 'react';
import './SearchBar.css';
import RotatingInput from './RotatingInput';

const searchBar = (props)=>(
    <form className= 'searchBar'>
        {/* <input placeholder={props.placeholder}/> */}
        <RotatingInput/>
        <i className ='fal fa-search'></i>
    </form>
)

export default searchBar;