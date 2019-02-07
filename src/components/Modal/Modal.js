import React, {Component, Fragment} from 'react';
import ModalContent from './ModalContent/ModalContent';

class Modal extends Component{

    // state = {
    //     isOpen : false
    // }
    // onOpen= ()=>{
    //     this.setState({isOpen : true});
    //     document.querySelector('html').style.overflow = 'hidden';
    // };
    // onClose = ()=>{
    //     this.setState({isOpen : false});
    //     document.querySelector('html').style.overflow = 'visible';
    // };
    // onKeyDownHandler = (event)=>{
    //    return event.keyCode ===27 && this.onClose();
    // }
    onClickAway = (e)=>{
        if(this.modalNode && this.modalNode.contains(e.target)) return;
        this.props.closed();
    }
    render(){
        const {isOpen} = this.props.isOpen;
        return(
            <Fragment>
                {isOpen &&
                    <ModalContent onClose = {this.props.closed}
                     escClose={this.props.keyDownHandler}
                     modalRef = {n => this.modalNode = n}
                     onClickAway = {this.onClickAway}
                    />
                }
            </Fragment>
        )
    }
}

export default Modal;