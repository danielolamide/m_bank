import React from 'react';
import './ModalTrigger.css';

const ModalTrigger = (props)=> <button className='post-button' onClick ={props.onOpen}><i className = 'fal fa-pen-alt'></i></button>

export default ModalTrigger;