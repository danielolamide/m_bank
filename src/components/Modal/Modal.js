import React, {Component, Fragment} from 'react';
import ModalTrigger from './ModalTrigger/ModalTrigger';
import ModalContent from './ModalContent/ModalContent';

class Modal extends Component{

    state = {
        isOpen : false
    }
    onOpen= ()=>{
        this.setState({isOpen : true});
        document.querySelector('html').style.overflow = 'hidden';
    };
    onClose = ()=>{
        this.setState({isOpen : false});
        document.querySelector('html').style.overflow = 'visible';
    };
    onKeyDownHandler = (event)=>{
       return event.keyCode ===27 && this.onClose();
    }
    onClickAway = (e)=>{
        if(this.modalNode && this.modalNode.contains(e.target)) return;
        this.onClose();
    }
    render(){
        const {isOpen} = this.state;
        return(
            <Fragment>
                <ModalTrigger
                    onOpen = {this.onOpen}
                />
                {isOpen &&
                    <ModalContent onClose = {this.onClose}
                     escClose={this.onKeyDownHandler}
                     modalRef = {n => this.modalNode = n}
                     onClickAway = {this.onClickAway}
                    />
                }
            </Fragment>
        )
    }
}

export default Modal;