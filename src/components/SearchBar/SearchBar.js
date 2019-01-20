import React from 'react';
import './SearchBar.css';


const searchBar = (props)=>(
    <form className= 'searchBar'>
        <input placeholder={props.placeholder}/>
        <i className ='fal fa-search'></i>
    </form>
)

export default searchBar;