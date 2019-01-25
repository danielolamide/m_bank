import React, { Component } from 'react';
import User from '../../components/User/User';
import './NewPost.css';


class NewPost extends Component{
    render(){
        return(
            <div className = 'newpost-container'>
                    <div className='user-image'>
                        <User/>
                    </div>
                    <a href ='/'><input placeholder='Post a new meme 😁'></input></a>
                    <div className = 'attatch-button-holder'>
                        <a className= 'attatch-button' href='/'><i className = 'fal fa-images'></i></a>
                    </div>
            </div>
        )
    }
}

export default NewPost;