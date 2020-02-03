import React from 'react';
import './MainHeader.css'

const MainHeader = (props) => {
    return(
        <div className="header-main d-flex align-items-center justify-content-center mb-5" style={{ backgroundColor: props.backgroundHeaderColor}}>
            <h1>{props.textHeader}</h1>
        </div>
    );
}

export default MainHeader;