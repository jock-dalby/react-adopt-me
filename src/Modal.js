import React, { useEffect, useRef } from "react";
import { createPortal } from 'react-dom';


const Modal = ({ children }) => {
  const elRef = useRef(null);
  if(!elRef.current) {
    const div = document.createElement('div');
    elRef.current = div;
  }
  
  // the hook equivalent of componentWillUnmount
  useEffect(() => {
    const modalRoot = document.getElementById('modal');
    modalRoot.appendChild(elRef.current);

    // Will remove this ref when modalRoot is closed
    return () => modalRoot.removeChild(elRef.current)
  }, [])

  return createPortal(<div>{ children }</div>, elRef.current)
}

export default Modal;