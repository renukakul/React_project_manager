import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({children},ref){
    const dialog =useRef();
    useImperativeHandle(ref,() => {
        return {
            open(){
                dialog.current.showModal();
            }
        };

    });

    return (
        createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form method='dialog' className="mt-4 text-right">
                <button className="px-6 py-2 rounded-md bg-gray-300 hover:text-white">Close</button>
            </form>
        </dialog>, 
        document.getElementById('modal-root')
        )
    );
});

export default Modal;

