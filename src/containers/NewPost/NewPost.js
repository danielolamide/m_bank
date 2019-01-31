import React, { Component } from 'react';
import User from '../../components/User/User';
import './NewPost.css';
import Aux from '../../hoc/Aux/Aux';
import Modal from '../../components/Modal/Modal';
import {Link} from 'react-router-dom';
import NewPostCreation from '../NewPostCreation/NewPostCreation';

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
                <Modal show = {this.props.show} handleClose={this.props.hideModal}>
                    <NewPostCreation/>
                </Modal>
            </Aux>
        )
    }
}

export default NewPost;