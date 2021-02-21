import React from 'react';
import Wrapper from '../../../HOC/Wrapper/Wrapper.jsx';
import Backdrop from '../Backdrop/Backdrop.jsx';
import classes from './Modal.css';

const Modal = ({ show, modalClosed, children }) => (
  <Wrapper>
    <Backdrop show={show} clicked={modalClosed} />
    <div
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0',
      }}
      className={classes.Modal}
    >
      {children}
    </div>
  </Wrapper>
);

export default Modal;
