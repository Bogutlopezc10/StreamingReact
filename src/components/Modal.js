import React from 'react'
import ReactDom from 'react-dom'
import './Modal.css'

const Modal = props => {

    return ReactDom.createPortal(
        <div onClick ={props.onDismiss} 
            className="ui dimmer modals visible active d-flex justify-content-center align-items-center">
            <div onClick = {e => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header" style={{ backgroundColor: props.backgroundHeaderColor }}>{props.title}</div>
                <div className="content">
                    {props.description}
                </div>
                <div className="actions">
                   {props.actions}
                </div>
            </div>
        </div>, 
        document.querySelector("#modal")
    );
};

export default Modal;