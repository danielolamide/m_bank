import React from 'react';
import './PostAction.css';


const postActions = (props)=>(
    <div className='post-action-container'>
        <div className='comment'>
            <a href='/'>
                <i className='fas fa-comment'></i>
            </a>
            <span>1</span>
        </div>
        <div className='like'>
            <a href='/'>
                <i className='fas fa-fire'></i> 
            </a>
            <span>3</span>
        </div>
        <div className='comment'>
            <a href='/'>
                <i className='fas fa-share'></i>
            </a>
        </div>
    </div>

)

export default postActions;