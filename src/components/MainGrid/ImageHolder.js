import React, {useCallback} from 'react';
import { useState } from "react";
import Modal from "../Modal/Modal";
import './style.scss'
import {useSelector} from "react-redux";


const ImageHolder = ({url,id}) => {
    const [modalActive, setModalActive] = useState(false);
    const bigImageHandler = useCallback(()=>{
        setModalActive(true)
    },[])
    const fullSizeStore = useSelector(state => state.imageReducer.fullSize)
    const srcFull = fullSizeStore.filter(item => item.id === id )[0].url

    return (
        <>
            <div className="imgHolder" onClick={bigImageHandler }>
               <img src={url} alt = "pic"/>
            </div>
            <div className="comment">
                <input type="text" defaultValue='add comment'/>
            </div>
            <Modal active={modalActive} setActive={setModalActive}  >
                <div className="imgHolder" >
                    <img src={srcFull} alt = "image"/>
                </div>
            </Modal>
        </>
    );
};

export default ImageHolder ;
