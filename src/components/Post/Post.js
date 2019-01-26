import React from 'react';
import User from '../User/User';
import './Post.css';
import PostActions from '../PostActions/PostActions';

const post = (props)=>(
    <article className= 'post'>
        <div className= 'post-holder'>
            <div className='userImage'>
                <User/>
            </div>
            <div className = 'post-body'>
                <div className = 'post-header'>
                    <span>{props.uName}</span>
                    <span>{props.uHandle}</span>
                    <span>.</span>
                    <span>{props.pTime}</span>
                </div>
                <div className = 'post-content'>
                    <span>Short meme description</span>
                    <img src={props.postContent} alt='Testing'/>
                </div>
                <div className='post-action'>
                    <PostActions/>
                </div>
            </div>
        </div>
    </article>

);
export default post;