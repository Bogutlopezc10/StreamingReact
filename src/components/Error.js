import React from 'react'
import './Error.css'

const Error = (props) => {
    return (
        <div className="error-container container">
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-lg-6 error-col">
                    <div className="row">
                         <div className="col-lg-12 d-flex align-items-center justify-content-center">
                            <i className="fas fa-exclamation-triangle"></i>
                         </div>
                         <div className="col-lg-12 mt-4 d-flex align-items-center justify-content-center">
                            <h1>¡ALGO SALIÓ MAL!</h1>
                         </div>
                         <div className="col-lg-12 mt-4 d-flex align-items-center justify-content-center">
                            <h4><span>Oops,</span> la página que solicitó no se pudo encontrar :(</h4>
                         </div>
                         <div className="col-lg-12 mt-2 d-flex align-items-center justify-content-center">
                            <div className="row">
                                <div className="col-lg-12 mt-2 d-flex align-items-center justify-content-center">
                                    <p><span>Error: </span>{props.error.statusText}</p>
                                </div>
                                <div className="col-lg-12 d-flex align-items-center justify-content-center">
                                    <p><span>Status Code: </span>{props.error.code}</p>
                                </div>
                                <div className="col-lg-12 mt-2 d-flex align-items-center justify-content-center">
                                    <span>Descripción</span>
                                </div>
                                <div className="col-lg-12 d-flex align-items-center justify-content-center">
                                    <p>{props.error.data}</p>
                                </div>
                            </div>
                         </div>
                         <div className="col-lg-12 mt-4 home-icon d-flex align-items-center justify-content-center">
                            <i className="fas fa-home"></i>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error;