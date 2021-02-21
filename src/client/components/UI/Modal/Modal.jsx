import React from 'react';
import Wrapper from '../../../HOC/Wrapper/Wrapper.jsx';
import Backdrop from '../Backdrop/Backdrop.jsx';
import classes from './Modal.css';

const Modal = (props) => (
  <Wrapper>
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
  </Wrapper>
);

export default Modal;
