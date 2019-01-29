import React, { Component } from 'react';
import User from '../../components/User/User';
import './NewPost.css';
import Aux from '../../hoc/Aux/Aux';
import Modal from '../../components/Modal/Modal';
import NewPostCreation from '../NewPostCreation/NewPostCreation';

class NewPost extends Component{    
    render(){
        return(
            <Aux>
                <div className = 'newpost-container'>
                        <div className='user-image'>
                            <User/>
                        </div>
                        <a href ="/"><input placeholder='Post a new meme 😁'></input></a>
                        <div className = 'attatch-button-holder'>
                            <a className= 'attatch-button' href='/'><i className = 'fal fa-images'></i></a>
                        </div>
                </div>
                <Modal show = {this.props.show} handleClose={this.props.hideModal}>
                    <NewPostCreation/>
                </Modal>
                <div>
                    <button onClick={this.props.showModal} className='post-button'><i className ='fal fa-pen-alt'></i></button>
                </div>
            </Aux>
        )
    }
}

export default NewPost;