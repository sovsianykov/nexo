import React, { useCallback } from "react";
import './modal.scss';










const Modal = ({active, setActive, children}) => {

    const handleClick = useCallback(()=>{setActive(false)},[setActive])


    return (
        <div className={active ? 'modal active ' : 'modal' } onClick={handleClick}>
            <div className={active ? 'modal__content active ' : 'modal__content' } onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;