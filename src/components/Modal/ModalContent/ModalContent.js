import React from 'react';
import ReactDOM from  'react-dom';
import './ModalContent.css';

const ModalContent = (props)=>{
    return ReactDOM.createPortal(
        <aside className = 'modal-cover' 
            tabIndex = '-1'
            onKeyDown={props.escClose}
            onClick = {props.onClickAway}
        >
            <div className = 'modal' ref = {props.modalRef}>
                <button className = 'modal-close' onClick={props.onClose}>
                    <i className = 'fal fa-times'></i>
                </button>
                <div className ='modal-body'>
                    CONTENT HERE
                </div>
            </div>
        </aside>,
        document.body
    );
}
export default ModalContent;