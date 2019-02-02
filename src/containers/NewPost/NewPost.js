import React, { Component } from 'react';
import User from '../../components/User/User';
import './NewPost.css';
import Aux from '../../hoc/Aux/Aux';
import {Link} from 'react-router-dom';

class NewPost extends Component{  
    render(){
        return(
            <Aux>
                <Link to ='/'>
                    <div className = 'newpost-container'>
                            <div className='user-image'>
                                <User/>
                            </div>
                            <input placeholder='Post a new meme 😁'></input>
                            <div className = 'attatch-button-holder'>
                                <i className = 'fal fa-images'></i>
                            </div>
                    </div>
                </Link>
            </Aux>
        )
    }
}

export default NewPost;