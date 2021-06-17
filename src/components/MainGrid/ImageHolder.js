import React, {useCallback} from 'react';
import { useState } from "react";
import Modal from "../Modal/Modal";
import './style.scss'


const ImageHolder = ({url,id}) => {
    const [modalActive, setModalActive] = useState(false);
    const bigImageHandler = useCallback(()=>{
        setModalActive(true)
    },[])
    return (
        <>
            <div className="imgHolder" onClick={bigImageHandler }>
               <img src={url} alt = "image"/>
            </div>
            <Modal active={modalActive} setActive={setModalActive}  >
                <div className="imgHolder" >
                    <img src={url} alt = "image"/>
                </div>
            </Modal>
        </>
    );
};

export default ImageHolder ;