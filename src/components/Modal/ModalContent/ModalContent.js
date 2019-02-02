import React from 'react';
import ReactDOM from  'react-dom';
import './ModalContent.css';

const ModalContent = ()=>{
    return ReactDOM.createPortal(
        <aside className = 'modal-cover'>
            <div className = 'modal'>
                <button className = 'modal-close'>
                    <i className = 'fal fa-times'></i>
                    <span className = 'hide-visually'>Close</span>
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