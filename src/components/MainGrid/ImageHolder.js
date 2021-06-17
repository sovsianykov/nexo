import React from 'react';
import './style.scss'

const ImageHolder = ({url}) => {
    return (
        <>
            <div className="imgHolder">
               <img src={url} alt = "image"/>
            </div>
        </>
    );
};

export default ImageHolder;