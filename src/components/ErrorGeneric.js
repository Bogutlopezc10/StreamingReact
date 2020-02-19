import React from 'react'
import './Success.css'

const ErrorGeneric = ({ message }) => {

    return(
        <div className="container mb-4">
            <div className="row">
                <div className="col-lg-12">
                    <div className="alert alert-warning alert-dismissible" role="alert">
                        <h4 className="alert-heading mb-2">Uppssss!</h4>
                        <p>{message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ErrorGeneric;