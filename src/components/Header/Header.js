import React from 'react';
import User from '../User/User';
import './Header.css';


const header = (props)=>(
    <div className='page-head'>
        <User/>
        <div className='pagename'>{props.pagehead}</div>
    </div>
)

export default header;