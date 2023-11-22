import {  useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

  function Modal({ open, children}) {
  const dialog = useRef();

  useEffect (() => {
    if(open)
    {
      dialog.current.showModal();
    }
    else
    {
      dialog.current.close();
    }
  }, [open]);  //we have added open as a dependency here which make sure this function will run again and the value of open prop changed and if it is again true then if will not run

 

  return createPortal(
    // <dialog className="modal" ref={dialog} open={open}> // if we write then that back drop feature wont work. For that we need to use useEffect
    <dialog className="modal" ref={dialog}> 
    {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
