import React, { Component } from 'react';
import User from '../../components/User/User';
import './NewPost.css';
import Aux from '../../hoc/Aux/Aux';

class NewPost extends Component{  
    render(){
        return(
            <Aux>
                <div onClick={this.props.onOpen} className = 'newpost-container'>
                        <div className='user-image'>
                            <User/>
                        </div>
                        <textarea placeholder={this.props.placeholder}></textarea>
                        <div className = 'attatch-button-holder'>
                            <i className = 'fal fa-images'></i>
                        </div>
                </div>
            </Aux>
        )
    }
}

export default NewPost;