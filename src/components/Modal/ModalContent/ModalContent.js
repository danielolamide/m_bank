import React from 'react';
import ReactDOM from  'react-dom';
import './ModalContent.css';
import NewPost from '../../../containers/NewPost/NewPost';

const ModalContent = (props)=>{
    return ReactDOM.createPortal(
        <aside className = 'modal-cover' 
            tabIndex = '-1'
            onKeyDown={props.escClose}
            onClick = {props.onClickAway}
        >
            <div className = 'modal' ref = {props.modalRef}>
                <div className = 'modal-head'>
                    <button className = 'modal-close' onClick={props.onClose}>
                        <i className = 'fal fa-times'></i>
                     </button>
                    <button className = 'process-post'>
                        Post
                    </button> 
                </div>
                <div className ='modal-body'>
                    <NewPost placeholder = 'Short Meme Description'/>
                </div>
            </div>
        </aside>,
        document.body
    );
}
export default ModalContent;