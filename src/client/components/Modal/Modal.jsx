import React from 'react';
import Aux from '../../HOC/Aux/Aux.jsx';
import Backdrop from '../../HOC/Backdrop/Backdrop.jsx';
import classes from './Modal.css';

const Modal = (props) => (
  <Aux>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0',
      }}
      className={classes.Modal}
    >
      {props.children}
    </div>
  </Aux>
);

export default Modal;
