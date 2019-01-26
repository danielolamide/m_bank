import React, { Component } from 'react';
import User from '../../components/User/User';
import './NewPost.css';
import Aux from '../../hoc/Aux/Aux';
import Modal from '../../components/Modal/Modal';
import NewPostCreation from '../NewPostCreation/NewPostCreation';

class NewPost extends Component{    
    state = {
        show : false
    }

    showModal(){
        this.setState({show : true});
    }
    hideModal(){
        this.setState({show : false});
    }

    render(){
        return(
            <Aux>
                <div className = 'newpost-container'>
                        <div className='user-image'>
                            <User/>
                        </div>
                        <a href ='/'><input placeholder='Post a new meme 😁'></input></a>
                        <div className = 'attatch-button-holder'>
                            <a className= 'attatch-button' href='/'><i className = 'fal fa-images'></i></a>
                        </div>
                </div>
                <Modal show = {this.state.show} handleClose={this.hideModal}>
                    <NewPostCreation/>
                </Modal>
            </Aux>
        )
    }
}

export default NewPost;