import React from 'react';
import './EmptyData.css';

const EmptyData = ({ message, heightImage, widthImage, marginBottom }) =>{
    return (
        <div className="row empty-data">
            <div className="col-12 d-flex justify-content-center">
                <img src="/caja.png" style={{ height: heightImage, width: widthImage}} alt="caja" />
            </div>
            <div className="col-12 mt-2 d-flex justify-content-center" style={{marginBottom: marginBottom}}>
                <h4>{message}</h4>
            </div>
        </div>
    );
}

export default EmptyData;