import React, {Component, Fragment} from 'react';
import ModalTrigger from './ModalTrigger/ModalTrigger';
import ModalContent from './ModalContent/ModalContent';

class Modal extends Component{
    render(){
        return(
            <Fragment>
                <ModalTrigger/>
                <ModalContent/>
            </Fragment>
        )
    }
}

export default Modal;